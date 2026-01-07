import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ViralMatch from "@/pages/viral-match";
import NotFound from "@/pages/not-found";
import PrivacyPolicyViralMatch from "@/pages/privacy-policy-ViralMatch";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsAndConditions from "@/pages/terms-and-conditions";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
 
 
      <Route path="/" component={Home} />

      {/* Viral Match game page */}
      <Route path="/viral-match" component={ViralMatch} />

      {/* Privacy Policy for Viral Match */}
      <Route path="/privacy-policy-ViralMatch" component={PrivacyPolicyViralMatch} />

      {/* Privacy Policy */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />

      {/* Terms and Conditions */}
      <Route path="/terms-and-conditions" component={TermsAndConditions} />

      {/* 404 Page (must be last) */}
      <Route component={NotFound} />

    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
