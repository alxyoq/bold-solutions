import { useTheme } from '../contexts/ThemeContext';

export default function ThankYouPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } transition-colors duration-200`}
    >
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Thank you!
        </h1>
        <p className="text-lg sm:text-xl">
          Your message has been successfully sent. We'll be in touch soon!
        </p>
        <a
          href="/"
          className={`inline-block mt-4 px-6 py-3 rounded-md font-medium text-white ${
            theme === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-500'
          } transition-colors duration-200`}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
