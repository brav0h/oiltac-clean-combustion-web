// Pilot-request submission: Web3Forms (email delivery) + HubSpot (CRM), fired
// in parallel. Web3Forms is the source of truth for success — HubSpot failure
// is logged but never blocks the prospect. Extracted from Index.tsx so the
// conversion path is unit-testable.

export interface PilotFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  region: string;
  industry: string;
  fleet_size: string;
  notes: string;
}

export interface PilotSubmitEnv {
  web3formsKey?: string;
  hubspotPortalId?: string;
  hubspotFormId?: string;
}

export interface PilotSubmitOptions {
  fetchFn?: typeof fetch;
  hutk?: string;
  pageUri?: string;
  pageName?: string;
  // Called for non-blocking diagnostics (HubSpot failures). Field NAMES only —
  // never payload values; build:dev artifacts keep DEV logging alive.
  logError?: (message: string, detail?: unknown) => void;
}

export type PilotSubmitResult =
  | { ok: true; hubSpotOk: boolean }
  | { ok: false; reason: "missing-key" | "rejected" | "network" };

export const buildPilotDetails = (formData: PilotFormData): string =>
  [
    `Pilot request details`,
    `Full name: ${formData.name}`,
    `Company: ${formData.company}`,
    `Work email: ${formData.email}`,
    `Phone: ${formData.phone || "Not provided"}`,
    `Role: ${formData.role || "Not provided"}`,
    `Region: ${formData.region}`,
    `Industry: ${formData.industry}`,
    `Fleet / equipment size: ${formData.fleet_size || "Not provided"}`,
    `Notes: ${formData.notes || "Not provided"}`,
  ].join("\n");

export async function submitPilotRequest(
  formData: PilotFormData,
  env: PilotSubmitEnv,
  opts: PilotSubmitOptions = {},
): Promise<PilotSubmitResult> {
  const { fetchFn = fetch, hutk, pageUri = "", pageName = "", logError = () => {} } = opts;

  if (!env.web3formsKey) {
    logError("Web3Forms: access key is not set in this build.");
    return { ok: false, reason: "missing-key" };
  }

  const pilotDetails = buildPilotDetails(formData);

  const web3FormsRequest = fetchFn("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: env.web3formsKey,
      subject: "New Pilot Request — OILTAC",
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      role: formData.role,
      region: formData.region,
      industry: formData.industry,
      fleet_size: formData.fleet_size,
      notes: formData.notes,
      message: pilotDetails,
    }),
  });

  const hsUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${env.hubspotPortalId}/${env.hubspotFormId}`;
  const hsContext: Record<string, string> = { pageUri, pageName };
  if (hutk) hsContext.hutk = hutk;

  const hsPayload = {
    fields: [
      { objectTypeId: "0-1", name: "full_name", value: formData.name },
      { objectTypeId: "0-1", name: "company", value: formData.company },
      { objectTypeId: "0-1", name: "email", value: formData.email },
      { objectTypeId: "0-1", name: "phone", value: formData.phone },
      { objectTypeId: "0-1", name: "jobtitle", value: formData.role },
      { objectTypeId: "0-1", name: "country", value: formData.region },
      { objectTypeId: "0-1", name: "industry2", value: formData.industry },
      { objectTypeId: "0-1", name: "fleet___equipment_size", value: formData.fleet_size },
      { objectTypeId: "0-1", name: "message", value: formData.notes || pilotDetails },
    ],
    context: hsContext,
  };

  const hubSpotRequest = fetchFn(hsUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hsPayload),
  });

  try {
    const [web3FormsResult, hubSpotResult] = await Promise.allSettled([web3FormsRequest, hubSpotRequest]);

    if (web3FormsResult.status === "rejected") {
      logError("Web3Forms network error", web3FormsResult.reason);
      return { ok: false, reason: "network" };
    }

    const web3FormsData = await web3FormsResult.value.json();

    const hubSpotOk = hubSpotResult.status === "fulfilled" && hubSpotResult.value.ok;
    if (!hubSpotOk) {
      logError(
        "HubSpot form submission failed",
        hubSpotResult.status === "rejected" ? hubSpotResult.reason : `status ${hubSpotResult.value.status}`,
      );
    }

    if (web3FormsResult.value.ok && web3FormsData.success) {
      return { ok: true, hubSpotOk };
    }

    logError("Web3Forms error response", web3FormsData);
    return { ok: false, reason: "rejected" };
  } catch (err) {
    logError("Pilot submit error", err);
    return { ok: false, reason: "network" };
  }
}
