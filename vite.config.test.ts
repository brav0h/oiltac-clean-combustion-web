import { describe, it, expect, beforeEach, afterEach } from "vitest";
import configFactory from "./vite.config";

// defineConfig() returns the factory unchanged for function configs, so we can
// exercise the production env guard directly with (command, mode) pairs.
type ConfigFn = (ctx: { command: "build" | "serve"; mode: string }) => unknown;
const config = configFactory as unknown as ConfigFn;

const REQUIRED = ["VITE_WEB3FORMS_KEY", "VITE_HUBSPOT_PORTAL_ID", "VITE_HUBSPOT_FORM_ID"] as const;
const saved: Record<string, string | undefined> = {};

beforeEach(() => {
  for (const k of REQUIRED) {
    saved[k] = process.env[k];
    delete process.env[k];
  }
});

afterEach(() => {
  for (const k of REQUIRED) {
    if (saved[k] === undefined) delete process.env[k];
    else process.env[k] = saved[k];
  }
});

describe("production env guard (vite.config.ts)", () => {
  it("blocks a production build when the form env vars are missing", () => {
    expect(() => config({ command: "build", mode: "production" }))
      .toThrow(/Production build blocked/);
  });

  it("blocks a production build when vars hold .env.example placeholders", () => {
    process.env.VITE_WEB3FORMS_KEY = "your_web3forms_access_key_here";
    process.env.VITE_HUBSPOT_PORTAL_ID = "your_hubspot_portal_id_here";
    process.env.VITE_HUBSPOT_FORM_ID = "your_hubspot_form_id_here";
    expect(() => config({ command: "build", mode: "production" }))
      .toThrow(/Production build blocked/);
  });

  it("allows a production build when all vars are set to real values", () => {
    process.env.VITE_WEB3FORMS_KEY = "wf-live-key";
    process.env.VITE_HUBSPOT_PORTAL_ID = "12345678";
    process.env.VITE_HUBSPOT_FORM_ID = "0aa1b2c3-d4e5-f607-8899-aabbccddeeff";
    const result = config({ command: "build", mode: "production" });
    expect(result).toMatchObject({ server: { port: 8080 } });
  });

  it("does not block `vite preview` (command serve resolves with mode production)", () => {
    expect(() => config({ command: "serve", mode: "production" })).not.toThrow();
  });

  it("does not block development builds or the dev server", () => {
    expect(() => config({ command: "build", mode: "development" })).not.toThrow();
    expect(() => config({ command: "serve", mode: "development" })).not.toThrow();
  });
});
