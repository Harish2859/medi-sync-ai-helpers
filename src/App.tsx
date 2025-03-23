
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Diagnose from "./pages/Diagnose";
import DiagnosticTest from "./pages/DiagnosticTest";
import DiagnosticResult from "./pages/DiagnosticResult";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Records from "./pages/Records";
import Appointments from "./pages/Appointments";
import Medications from "./pages/Medications";
import HealthActivity from "./pages/HealthActivity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/diagnose" element={<Diagnose />} />
            <Route path="/diagnose/:condition" element={<DiagnosticTest />} />
            <Route path="/diagnose/:condition/result" element={<DiagnosticResult />} />
            <Route path="/records" element={<Records />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/medications" element={<Medications />} />
            <Route path="/activity" element={<HealthActivity />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
