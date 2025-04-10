import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { getInitialTheme } from "./utils/themeUtils";

// Apply initial theme before rendering to prevent flash
getInitialTheme();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(<App />);
