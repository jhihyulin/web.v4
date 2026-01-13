import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import "@/i18n";
import App from "@/App";
import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="web-v4-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
