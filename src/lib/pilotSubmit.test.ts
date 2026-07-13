import { describe, it, expect, vi } from "vitest";
import { buildPilotDetails, submitPilotRequest, type PilotFormData } from "./pilotSubmit";

const formData: PilotFormData = {
  name: "Jane Chief",
  company: "River Towing Co",
  email: "jane@rivertowing.com",
  phone: "",
  role: "",
  region: "Memphis TN",
  industry: "Marine",
  fleet_size: "12 vessels",
  notes: "",
};

const env = {
  web3formsKey: "wf-key-123",
  hubspotPortalId: "12345",
  hubspotFormId: "abcd-efgh",
};

const jsonResponse = (ok: boolean, body: unknown, status = ok ? 200 : 400) =>
  ({ ok, status, json: async () => body, text: async () => JSON.stringify(body) }) as Response;

describe("buildPilotDetails", () => {
  it("includes every field and substitutes 'Not provided' for blanks", () => {
    const details = buildPilotDetails(formData);
    expect(details).toContain("Full name: Jane Chief");
    expect(details).toContain("Company: River Towing Co");
    expect(details).toContain("Phone: Not provided");
    expect(details).toContain("Role: Not provided");
    expect(details).toContain("Notes: Not provided");
    expect(details).toContain("Fleet / equipment size: 12 vessels");
  });
});

describe("submitPilotRequest", () => {
  it("fails fast with missing-key when the Web3Forms key is absent, without calling fetch", async () => {
    const fetchFn = vi.fn();
    const result = await submitPilotRequest(formData, { ...env, web3formsKey: undefined }, { fetchFn });
    expect(result).toEqual({ ok: false, reason: "missing-key" });
    expect(fetchFn).not.toHaveBeenCalled();
  });

  it("succeeds when both endpoints accept", async () => {
    const fetchFn = vi.fn()
      .mockResolvedValueOnce(jsonResponse(true, { success: true }))
      .mockResolvedValueOnce(jsonResponse(true, {}));
    const result = await submitPilotRequest(formData, env, { fetchFn });
    expect(result).toEqual({ ok: true, hubSpotOk: true });
    expect(fetchFn).toHaveBeenCalledTimes(2);
    const [web3Url] = fetchFn.mock.calls[0];
    const [hsUrl] = fetchFn.mock.calls[1];
    expect(web3Url).toBe("https://api.web3forms.com/submit");
    expect(hsUrl).toBe("https://api.hsforms.com/submissions/v3/integration/submit/12345/abcd-efgh");
  });

  it("still succeeds for the prospect when HubSpot fails, and reports the failure", async () => {
    const logError = vi.fn();
    const fetchFn = vi.fn()
      .mockResolvedValueOnce(jsonResponse(true, { success: true }))
      .mockResolvedValueOnce(jsonResponse(false, { error: "bad portal" }));
    const result = await submitPilotRequest(formData, env, { fetchFn, logError });
    expect(result).toEqual({ ok: true, hubSpotOk: false });
    expect(logError).toHaveBeenCalledWith("HubSpot form submission failed", expect.stringContaining("400"));
  });

  it("returns rejected when Web3Forms responds without success", async () => {
    const fetchFn = vi.fn()
      .mockResolvedValueOnce(jsonResponse(true, { success: false, message: "invalid key" }))
      .mockResolvedValueOnce(jsonResponse(true, {}));
    const result = await submitPilotRequest(formData, env, { fetchFn });
    expect(result).toEqual({ ok: false, reason: "rejected" });
  });

  it("returns network when the Web3Forms request throws", async () => {
    const fetchFn = vi.fn()
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValueOnce(jsonResponse(true, {}));
    const result = await submitPilotRequest(formData, env, { fetchFn });
    expect(result).toEqual({ ok: false, reason: "network" });
  });

  it("attaches the hutk cookie to HubSpot context when provided", async () => {
    const fetchFn = vi.fn()
      .mockResolvedValueOnce(jsonResponse(true, { success: true }))
      .mockResolvedValueOnce(jsonResponse(true, {}));
    await submitPilotRequest(formData, env, { fetchFn, hutk: "cookie-token", pageUri: "https://x.test/", pageName: "X" });
    const hsBody = JSON.parse(fetchFn.mock.calls[1][1].body as string);
    expect(hsBody.context).toEqual({ pageUri: "https://x.test/", pageName: "X", hutk: "cookie-token" });
  });

  it("never puts field values in logError output on the happy path", async () => {
    const logError = vi.fn();
    const fetchFn = vi.fn()
      .mockResolvedValueOnce(jsonResponse(true, { success: true }))
      .mockResolvedValueOnce(jsonResponse(true, {}));
    await submitPilotRequest(formData, env, { fetchFn, logError });
    expect(logError).not.toHaveBeenCalled();
  });
});
