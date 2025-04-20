
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get the base URL from import.meta.env or fallback to /
const baseUrl = import.meta.env.BASE_URL || '/';

// Handle GitHub Pages redirect
const RedirectHandler = () => {
  useEffect(() => {
    // Check if we have a route parameter in the URL
    const query = window.location.search.substring(1);
    const path = query.split('&').find(param => param.startsWith('p='));
    
    if (path) {
      // Extract the path and navigate to it
      const redirectPath = path.split('=')[1];
      window.history.replaceState(null, '', baseUrl + redirectPath);
    }
  }, []);

  return null;
};

const App = () => (
  <ThemeProvider defaultTheme="system" enableSystem attribute="class">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RedirectHandler />
        <BrowserRouter basename={baseUrl}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
