import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const { language, setLanguage, t, isChangingLanguage } = useLanguage();
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animatingLanguage, setAnimatingLanguage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Body scroll lock to prevent background scrolling when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Add styles to lock scroll
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.top = `-${scrollY}px`;
      body.style.overflow = 'hidden';
    } else {
      // Get scroll position
      const scrollY = body.style.top;
      // Remove styles
      body.style.position = '';
      body.style.width = '';
      body.style.top = '';
      body.style.overflow = '';
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace('-', '')) || 0);
      }
    }

    return () => {
      // Clean up in case component unmounts while menu is open
      body.style.position = '';
      body.style.width = '';
      body.style.top = '';
      body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.getElementById('main-nav');
      if (navElement && !navElement.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = (e?: React.MouseEvent) => {
    // Make sure to stop propagation if event is provided
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    // Set which language we're animating to
    const newLanguage = language === 'en' ? 'es' : 'en';
    setAnimatingLanguage(newLanguage);

    // Change the language (LanguageContext has built-in delay)
    setLanguage(newLanguage);

    // Clear animation state after animation completes
    setTimeout(() => {
      setAnimatingLanguage('');
    }, 1000);
  };

  // Enhanced mobile menu toggle with explicit event stopping
  const handleMobileMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle mobile navigation with proper event prevention
  const handleMobileNavigation = (e: React.MouseEvent, path: string) => {
    e.stopPropagation();
    e.preventDefault();

    // Close the mobile menu
    setIsMobileMenuOpen(false);

    // Use navigate instead of Link component to ensure predictable behavior
    setTimeout(() => {
      navigate(path);
    }, 10);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav id="main-nav" className={`${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b fixed w-full z-50 theme-transition hardware-accelerated`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className={`font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-black'} theme-transition`}>BoldSolutions</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium theme-transition ${
                  isActive('/')
                    ? `${theme === 'dark' ? 'border-white text-white' : 'border-black text-gray-900'}`
                    : `border-transparent ${theme === 'dark' ? 'text-gray-300 hover:text-gray-100 hover:border-gray-300' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                }`}
              >
                {language === 'en' ? 'Home' : 'Inicio'}
              </Link>
              <Link
                to="/tax-services"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium theme-transition ${
                  isActive('/tax-services')
                    ? `${theme === 'dark' ? 'border-white text-white' : 'border-black text-gray-900'}`
                    : `border-transparent ${theme === 'dark' ? 'text-gray-300 hover:text-gray-100 hover:border-gray-300' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                }`}
              >
                {t('nav.tax')}
              </Link>
              <Link
                to="/itin-services"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium theme-transition ${
                  isActive('/itin-services')
                    ? `${theme === 'dark' ? 'border-white text-white' : 'border-black text-gray-900'}`
                    : `border-transparent ${theme === 'dark' ? 'text-gray-300 hover:text-gray-100 hover:border-gray-300' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                }`}
              >
                {t('nav.itin')}
              </Link>
              <Link
                to="/web-development"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium theme-transition ${
                  isActive('/web-development')
                    ? `${theme === 'dark' ? 'border-white text-white' : 'border-black text-gray-900'}`
                    : `border-transparent ${theme === 'dark' ? 'text-gray-300 hover:text-gray-100 hover:border-gray-300' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                }`}
              >
                {t('nav.web')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <ThemeToggle />
            <div className="relative">
              <button
                onClick={toggleLanguage}
                disabled={isChangingLanguage}
                className={`px-4 py-2 text-sm rounded-md flex items-center justify-center space-x-2
                  ${isChangingLanguage ? 'opacity-75 cursor-wait' : ''}
                  ${theme === 'dark'
                    ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  } focus:outline-none transition-all duration-300 ease-in-out`}
                style={{ minWidth: '140px' }}
              >
                {isChangingLanguage ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-current rounded-full border-b-transparent animate-spin mr-2" />
                    <span>{t('language.changing')}</span>
                  </>
                ) : (
                  <span className={animatingLanguage ? 'animate-pulse' : ''}>{t('language.toggle')}</span>
                )}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Explicitly separate mobile menu button from any other functionality */}
            <button
              type="button"
              onClick={handleMobileMenuToggle}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
              className={`inline-flex items-center justify-center p-2 rounded-md ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-inset ${theme === 'dark' ? 'focus:ring-white' : 'focus:ring-black'} theme-transition`}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with improved cross-browser compatibility */}
      <div
        className={`sm:hidden fixed w-full shadow-lg transform transition-all duration-500 ease-in-out mobile-menu-container hardware-accelerated ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100 open'
            : '-translate-y-full opacity-0'
        }`}
        style={{
          top: '64px', // Height of the navbar
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          WebkitOverflowScrolling: 'touch',
          zIndex: 45
        }}
      >
        <div className={`pt-2 pb-3 shadow-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} theme-transition`}>
          {/* Navigation links */}
          <div className="space-y-1">
            {/* Use buttons instead of links for better touch control */}
            <button
              onClick={(e) => handleMobileNavigation(e, "/")}
              className={`block w-full text-left px-4 py-3 text-base font-medium ${
                isActive('/')
                  ? `${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`
                  : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`
              } transition-all duration-200`}
            >
              {language === 'en' ? 'Home' : 'Inicio'}
            </button>
            <button
              onClick={(e) => handleMobileNavigation(e, "/tax-services")}
              className={`block w-full text-left px-4 py-3 text-base font-medium ${
                isActive('/tax-services')
                  ? `${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`
                  : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`
              } transition-all duration-200`}
            >
              {t('nav.tax')}
            </button>
            <button
              onClick={(e) => handleMobileNavigation(e, "/itin-services")}
              className={`block w-full text-left px-4 py-3 text-base font-medium ${
                isActive('/itin-services')
                  ? `${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`
                  : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`
              } transition-all duration-200`}
            >
              {t('nav.itin')}
            </button>
            <button
              onClick={(e) => handleMobileNavigation(e, "/web-development")}
              className={`block w-full text-left px-4 py-3 text-base font-medium ${
                isActive('/web-development')
                  ? `${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`
                  : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`
              } transition-all duration-200`}
            >
              {t('nav.web')}
            </button>
          </div>

          {/* Enhanced settings section in mobile menu with clear separation */}
          <div className={`mt-4 pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} theme-transition`}>
            <div className={`px-4 py-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              {language === 'en' ? 'Settings' : 'Configuración'}
            </div>

            {/* Theme toggle with label */}
            <div className="px-4 py-2 flex items-center justify-between">
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {language === 'en' ? 'Theme:' : 'Tema:'}
              </span>
              <ThemeToggle />
            </div>

            {/* Enhanced language toggle section with loading state and animations */}
            <div className="px-4 py-3">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('language.current')}
                </span>
                {isChangingLanguage && (
                  <span className="inline-flex items-center">
                    <span className="inline-block w-3 h-3 border-2 border-current rounded-full border-b-transparent animate-spin mr-1" />
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {t('language.changing')}
                    </span>
                  </span>
                )}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={(e) => language !== 'en' && toggleLanguage(e)}
                  disabled={isChangingLanguage}
                  className={`
                    relative px-3 py-2 rounded-md flex-1 font-medium transition-all duration-300
                    ${isChangingLanguage ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
                    ${language === 'en'
                      ? `${theme === 'dark'
                          ? 'bg-blue-700 text-white'
                          : 'bg-blue-100 text-blue-900 border-2 border-blue-500'}`
                      : `${theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200'}`
                    }
                    ${animatingLanguage === 'en' ? 'animate-language-pulse' : ''}
                  `}
                >
                  {language === 'en' && (
                    <span className="absolute inline-flex h-2 w-2 top-1 right-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  )}
                  <span className={animatingLanguage === 'en' ? 'animate-language-switch' : ''}>
                    English
                  </span>
                </button>
                <button
                  onClick={(e) => language !== 'es' && toggleLanguage(e)}
                  disabled={isChangingLanguage}
                  className={`
                    relative px-3 py-2 rounded-md flex-1 font-medium transition-all duration-300
                    ${isChangingLanguage ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
                    ${language === 'es'
                      ? `${theme === 'dark'
                          ? 'bg-blue-700 text-white'
                          : 'bg-blue-100 text-blue-900 border-2 border-blue-500'}`
                      : `${theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200'}`
                    }
                    ${animatingLanguage === 'es' ? 'animate-language-pulse' : ''}
                  `}
                >
                  {language === 'es' && (
                    <span className="absolute inline-flex h-2 w-2 top-1 right-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  )}
                  <span className={animatingLanguage === 'es' ? 'animate-language-switch' : ''}>
                    Español
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced semi-transparent backdrop with blur effect */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 sm:hidden z-40 backdrop-blur-sm hardware-accelerated"
          style={{
            top: '64px',
            transition: 'opacity 300ms ease-in-out'
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
