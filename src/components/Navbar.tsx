import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  const handleMobileNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 50);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`${
          theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
        } border-b fixed w-full z-50 theme-transition`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link
              to="/"
              className={`font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-black'} theme-transition`}
            >
              BoldSolutions
            </Link>

            {/* Desktop Nav */}
            <div className="hidden sm:flex items-center space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium ${isActive('/') ? 'underline' : ''} ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}
              >
                {language === 'en' ? 'Home' : 'Inicio'}
              </Link>
              <Link
                to="/tax-services"
                className={`text-sm font-medium ${isActive('/tax-services') ? 'underline' : ''} ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}
              >
                {t('nav.tax')}
              </Link>
              <Link
                to="/itin-services"
                className={`text-sm font-medium ${isActive('/itin-services') ? 'underline' : ''} ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}
              >
                {t('nav.itin')}
              </Link>
              <Link
                to="/web-development"
                className={`text-sm font-medium ${isActive('/web-development') ? 'underline' : ''} ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}
              >
                {t('nav.web')}
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Styled Language Button */}
              <button
                onClick={toggleLanguage}
                className={`px-4 py-2 rounded-md border text-sm font-medium transition ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
                }`}
              >
                {language === 'en' ? 'English' : 'Español'}
              </button>
            </div>

            {/* Mobile Only: Language + Theme Toggle + Menu Button */}
            <div className="flex items-center space-x-3 sm:hidden">
              {/* Language - Mobile */}
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                } hover:underline`}
              >
                {language.toUpperCase()}
              </button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Hamburger */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                aria-label="Toggle menu"
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                    : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'
                } focus:outline-none`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden flex">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black bg-opacity-25 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-out Menu */}
          <div
            className={`w-[85%] max-w-xs bg-white dark:bg-gray-900 shadow-lg h-[calc(100vh-64px)] mt-[64px] p-4 overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={(e) => handleMobileNavigation(e, '/')}
                className={`text-left text-lg font-medium ${
                  isActive('/')
                    ? theme === 'dark'
                      ? 'text-white underline'
                      : 'text-black underline'
                    : theme === 'dark'
                    ? 'text-gray-300'
                    : 'text-gray-700'
                }`}
              >
                {language === 'en' ? 'Home' : 'Inicio'}
              </button>
              <button
                onClick={(e) => handleMobileNavigation(e, '/tax-services')}
                className={`text-left text-lg font-medium ${
                  isActive('/tax-services')
                    ? theme === 'dark'
                      ? 'text-white underline'
                      : 'text-black underline'
                    : theme === 'dark'
                    ? 'text-gray-300'
                    : 'text-gray-700'
                }`}
              >
                {t('nav.tax')}
              </button>
              <button
                onClick={(e) => handleMobileNavigation(e, '/itin-services')}
                className={`text-left text-lg font-medium ${
                  isActive('/itin-services')
                    ? theme === 'dark'
                      ? 'text-white underline'
                      : 'text-black underline'
                    : theme === 'dark'
                    ? 'text-gray-300'
                    : 'text-gray-700'
                }`}
              >
                {t('nav.itin')}
              </button>
              <button
                onClick={(e) => handleMobileNavigation(e, '/web-development')}
                className={`text-left text-lg font-medium ${
                  isActive('/web-development')
                    ? theme === 'dark'
                      ? 'text-white underline'
                      : 'text-black underline'
                    : theme === 'dark'
                    ? 'text-gray-300'
                    : 'text-gray-700'
                }`}
              >
                {t('nav.web')}
              </button>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-2 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {language === 'en' ? 'Theme' : 'Tema'}
                  </span>
                  <ThemeToggle />
                </div>
                <button
                  onClick={toggleLanguage}
                  className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  } hover:underline`}
                >
                  {t('language.toggle')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
