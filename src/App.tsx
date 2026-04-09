
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
import CookieBanner from "./components/CookieBanner";
// The ErrorBoundary import has been removed.

const queryClient = new QueryClient();

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    chatbase?: (...args: any[]) => void;
  }
}

const App = () => {
  return (
    // The <ErrorBoundary> wrapper has been removed. We start with a fragment (<>).
    <>
      <Helmet>
        {/* GTM, Chatbase */}
        <title>OILTAC - Clean Combustion Across Industries</title>
        <script type="text/javascript">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MKH32BVW');`}</script>
        <script type="text/javascript">{`(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="eFn7jjr51Tyygqsk2wuPn";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`}</script>
      </Helmet>

      {/* GTM noscript tag */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKH32BVW" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      
      {/* The rest of your application structure */}
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
      <CookieBanner />
    </>
  );
};

export default App;
