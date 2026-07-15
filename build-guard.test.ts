import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import configFactory from "./vite.config";

// defineConfig() returns the factory unchanged for function configs, so we can
// exercise the production env check directly with (command, mode) pairs.
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
  vi.restoreAllMocks();
  for (const k of REQUIRED) {
    if (saved[k] === undefined) delete process.env[k];
    else process.env[k] = saved[k];
  }
});

describe("production env check (vite.config.ts)", () => {
  it("NEVER fails the build when env vars are missing — only warns", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    expect(() => config({ command: "build", mode: "production" })).not.toThrow();
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("VITE_HUBSPOT_PORTAL_ID"));
  });

  it("warns on .env.example placeholder values but still returns a config", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    process.env.VITE_WEB3FORMS_KEY = "your_web3forms_access_key_here";
    process.env.VITE_HUBSPOT_PORTAL_ID = "your_hubspot_portal_id_here";
    process.env.VITE_HUBSPOT_FORM_ID = "your_hubspot_form_id_here";
    const result = config({ command: "build", mode: "production" });
    expect(result).toMatchObject({ server: { port: 8080 } });
    expect(warn).toHaveBeenCalled();
  });

  it("does not warn when all vars are set to real values", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    process.env.VITE_WEB3FORMS_KEY = "wf-live-key";
    process.env.VITE_HUBSPOT_PORTAL_ID = "12345678";
    process.env.VITE_HUBSPOT_FORM_ID = "0aa1b2c3-d4e5-f607-8899-aabbccddeeff";
    const result = config({ command: "build", mode: "production" });
    expect(result).toMatchObject({ server: { port: 8080 } });
    expect(warn).not.toHaveBeenCalled();
  });

  it("does not warn for `vite preview` (serve + production) even with vars missing", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    expect(() => config({ command: "serve", mode: "production" })).not.toThrow();
    expect(warn).not.toHaveBeenCalled();
  });

  it("does not warn for development builds or the dev server", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    config({ command: "build", mode: "development" });
    config({ command: "serve", mode: "development" });
    expect(warn).not.toHaveBeenCalled();
  });
});
