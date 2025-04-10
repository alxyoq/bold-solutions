import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isChangingLanguage: boolean;
}

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.tax': 'Tax Services',
    'nav.itin': 'ITIN Services',
    'nav.web': 'Web Development',
    'hero.welcome': 'Welcome to Bold Solutions',
    'hero.subtitle': 'We bridge the gap between small businesses and technology to help you stay ahead of the curve.',
    'cta.getStarted': 'Get Started',
    'language.toggle': '🌐 English | Español',
    'language.changing': 'Changing language...',
    'language.current': 'Current language:',
  },
  es: {
    'nav.tax': 'Servicios de Impuestos',
    'nav.itin': 'Servicios ITIN',
    'nav.web': 'Desarrollo Web',
    'hero.welcome': 'Bienvenido a Bold Solutions',
    'hero.subtitle': 'Reducimos la brecha entre las pequeñas empresas y la tecnología para que siempre vayas un paso adelante.',
    'cta.getStarted': 'Comenzar',
    'language.toggle': '🌐 Español | English',
    'language.changing': 'Cambiando idioma...',
    'language.current': 'Idioma actual:',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const [lastChangeTimestamp, setLastChangeTimestamp] = useState<number>(0);

  // Enhanced language changing function with loading state and debouncing
  const setLanguage = (newLanguage: Language) => {
    if (newLanguage === language) return;

    // Debounce language changes to prevent accidental rapid changes
    const now = Date.now();
    if (now - lastChangeTimestamp < 1000) {
      console.log('Language change throttled');
      return;
    }

    setLastChangeTimestamp(now);

    // Set loading state
    setIsChangingLanguage(true);

    // Add a small delay for visual feedback
    setTimeout(() => {
      setLanguageState(newLanguage);
      // Store preference in localStorage for persistence
      try {
        localStorage.setItem('preferredLanguage', newLanguage);
      } catch (e) {
        console.error('Failed to save language preference:', e);
      }

      // Reset loading state after another small delay
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 300);
    }, 400);
  };

  // Load saved language preference on initial render
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
        setLanguageState(savedLanguage);
      }
    } catch (e) {
      console.error('Failed to load language preference:', e);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isChangingLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
