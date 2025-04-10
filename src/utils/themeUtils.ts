export function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";
  document.documentElement.classList.add(theme);
}

export function applyTheme(theme: "dark" | "light") {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  localStorage.setItem("theme", theme);
}
