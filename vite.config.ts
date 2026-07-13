import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // The pilot form is the site's only conversion path. A production build
  // without these keys ships a form that fails for every prospect, so fail
  // the build instead of shipping it. Gated on command === "build" so
  // `vite preview` (which also resolves mode "production") doesn't throw.
  // Keep this list in sync with the import.meta.env reads in
  // src/pages/Index.tsx (PilotCTA handleSubmit).
  if (command === "build" && mode === "production") {
    const env = loadEnv(mode, process.cwd(), "");
    const required = ["VITE_WEB3FORMS_KEY", "VITE_HUBSPOT_PORTAL_ID", "VITE_HUBSPOT_FORM_ID"];
    const missing = required.filter(k => !env[k] || /^your_|_here$/i.test(env[k]));
    if (missing.length > 0) {
      throw new Error(
        `Production build blocked — missing or placeholder env vars: ${missing.join(", ")}. ` +
        `The pilot request form cannot submit without them.`
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
