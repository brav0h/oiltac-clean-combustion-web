import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Advisory check on the pilot-form env vars. This WARNS but never fails the
  // build — a missing var degrades the form (HubSpot capture) but must not
  // block a production deploy. Keep this list in sync with the
  // import.meta.env reads in src/pages/Index.tsx (PilotCTA handleSubmit).
  if (command === "build" && mode === "production") {
    const env = loadEnv(mode, process.cwd(), "");
    const required = ["VITE_WEB3FORMS_KEY", "VITE_HUBSPOT_PORTAL_ID", "VITE_HUBSPOT_FORM_ID"];
    const missing = required.filter(k => !env[k] || /^your_|_here$/i.test(env[k]));
    if (missing.length > 0) {
      console.warn(
        `\n⚠  OILTAC build warning: missing or placeholder env vars: ${missing.join(", ")}.\n` +
        `   The pilot form will still deploy, but affected integrations won't capture until these are set.\n`
      );
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
