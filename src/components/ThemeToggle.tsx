import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  // Direct DOM manipulation as a fallback for theme toggling
  const toggleDOMTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply the new theme
    root.classList.remove('dark', 'light');
    root.classList.add(newTheme);

    // Save the theme to localStorage
    localStorage.setItem('theme', newTheme);

    console.log(`Toggled theme directly from ${currentTheme} to ${newTheme}`);
  };

  return (
    <button
      type="button"
      onClick={() => {
        try {
          // Try to use context method first
          console.log('ThemeToggle clicked, current theme:', theme);
          toggleTheme();

          // As a fallback, directly toggle the DOM theme after a short delay
          setTimeout(() => {
            const root = document.documentElement;
            const hasThemeClass = root.classList.contains('dark') || root.classList.contains('light');
            if (!hasThemeClass) {
              console.log('Fallback: directly toggling theme');
              toggleDOMTheme();
            }
          }, 100);
        } catch (error) {
          console.error('Error in theme toggle:', error);
          // If the context method fails, fall back to direct DOM manipulation
          toggleDOMTheme();
        }
      }}
      className="flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 theme-transition"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-yellow-300 theme-transition"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700 theme-transition"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      )}
    </button>
  );
}
