
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import MSDS from "./pages/MSDS";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FuelCalculator from "./pages/FuelCalculator";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Proof from "./pages/Proof";
import Industries from "./pages/Industries";

const queryClient = new QueryClient();

interface CookieYesConsent {
  analytics: boolean;
  advertisement: boolean;
  functional: boolean;
  necessary: boolean;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    chatbase?: any; // third-party embed — typed loosely intentionally
    dataLayer: Array<Record<string, unknown>>;
  }
}

// ─── Chatbase loader — only called after functional consent is granted ─────────

let chatbaseLoaded = false;

const loadChatbase = () => {
  if (chatbaseLoaded || typeof window === "undefined") return;
  chatbaseLoaded = true;

  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    const fn: any = (...args: any[]) => {
      if (!fn.q) fn.q = [];
      fn.q.push(args);
    };
    fn.q = [];
    window.chatbase = new Proxy(fn, {
      get(target: any, prop: string) {
        if (prop === "q") return target.q;
        return (...args: any[]) => target(prop, ...args);
      },
    });
  }

  const script = document.createElement("script");
  script.src = "https://www.chatbase.co/embed.min.js";
  script.id = "eFn7jjr51Tyygqsk2wuPn";
  script.setAttribute("domain", "www.chatbase.co");
  document.body.appendChild(script);
};

// ─── App ──────────────────────────────────────────────────────────────────────

const App = () => {
  useEffect(() => {
    // CookieYes restores saved consent state on page load via its own GCM
    // integration. This listener handles explicit consent changes by the user.
    const handleConsentUpdate = (event: CustomEvent<{ consent: CookieYesConsent }>) => {
      if (typeof window.gtag === "function") {
        const consentState = {
          analytics_storage:       event.detail.consent.analytics     ? "granted" : "denied",
          ad_storage:              event.detail.consent.advertisement ? "granted" : "denied",
          ad_user_data:            event.detail.consent.advertisement ? "granted" : "denied",
          ad_personalization:      event.detail.consent.advertisement ? "granted" : "denied",
          functionality_storage:   event.detail.consent.functional    ? "granted" : "denied",
          personalization_storage: event.detail.consent.functional    ? "granted" : "denied",
          security_storage:        "granted",
        };
        window.gtag("consent", "update", consentState);
        if (import.meta.env.DEV) {
          console.log("Consent update pushed to GTM:", consentState);
        }
      }

      if (event.detail.consent.functional) {
        loadChatbase();
      }
    };

    window.addEventListener("cookieyes_consent_update", handleConsentUpdate as EventListener);
    return () => {
      window.removeEventListener("cookieyes_consent_update", handleConsentUpdate as EventListener);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>OILTAC - Clean Combustion Across Industries</title>
      </Helmet>

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/msds" element={<MSDS />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/fuel-calculator" element={<FuelCalculator />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/proof" element={<Proof />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
