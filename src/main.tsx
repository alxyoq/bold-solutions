import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Apply initial theme before rendering to prevent flash of wrong theme
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const theme = savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light';
  document.documentElement.classList.add(theme);
};

initializeTheme();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(<App />);
