import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${isDark ? 'bg-gray-900' : 'bg-white'} overflow-hidden theme-transition`}>
      <div className="max-w-7xl mx-auto">
        <div className={`relative z-10 pb-8 ${isDark ? 'bg-gray-900' : 'bg-white'} sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 theme-transition`}>
          <svg
            className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 ${isDark ? 'text-gray-900' : 'text-white'} transform translate-x-1/2 theme-transition pointer-events-none`}
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-6 mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-24">
            <div className="sm:text-center lg:text-left">
              <h1
                className={`text-3xl tracking-tight font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} sm:text-4xl md:text-5xl lg:text-6xl break-words theme-transition transition-all duration-1000 ease-in-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {t('hero.welcome')}
              </h1>
              <p
                className={`mt-3 text-base ${isDark ? 'text-gray-300' : 'text-gray-500'} sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 theme-transition transition-all duration-1000 delay-300 ease-in-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {t('hero.subtitle')}
              </p>
              <div
                className={`mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start transition-all duration-1000 delay-500 ease-in-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="rounded-md shadow w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    {t('cta.getStarted')}
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto">
                  <a
                    href="#tax-services"
                    className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                      isDark
                        ? 'text-white bg-gray-800 hover:bg-gray-700'
                        : 'text-black bg-gray-100 hover:bg-gray-200'
                    } hover:shadow transform hover:scale-105 transition-all duration-200 ease-in-out md:py-4 md:text-lg md:px-10 theme-transition`}
                  >
                    {language === 'en' ? 'Learn More' : 'Más Información'}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className={`lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ${isDark ? 'bg-gray-800' : 'bg-gray-100'} theme-transition`}>
        <div className="h-48 w-full sm:h-56 md:h-72 lg:w-full lg:h-full flex items-center justify-center relative overflow-hidden">
          <div
            className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${isDark ? 'from-gray-900/30' : 'from-black/10'} to-transparent transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 ${isDark ? 'text-gray-300' : 'text-black'} transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            } theme-transition pointer-events-none`}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
