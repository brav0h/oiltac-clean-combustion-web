import { Helmet } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MSDS from "./pages/MSDS";
import NotFound from "./pages/NotFound";
// We have removed the ErrorBoundary import

const queryClient = new QueryClient();

const App = () => (
  // We have removed the <ErrorBoundary> wrapper for now
  <>
    <Helmet>
      <title>OILTAC - Clean Combustion Across Industries</title>
      <script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="4374aa58-93f7-4e6a-8be7-928cdb524a9c"
        data-blockingmode="auto"
        type="text/javascript"
      ></script>
    </Helmet>

    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/msds" element={<MSDS />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;