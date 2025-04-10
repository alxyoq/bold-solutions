import { ReactNode, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  features?: string[];
  icon: ReactNode;
}

export default function ServiceSection({ id, title, description, features = [], icon }: ServiceSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div
      id={id}
      className={`py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-200 h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full">
        <div className={`lg:text-center transition-all duration-300 transform ${isHovered ? 'scale-105' : 'scale-100'} h-full flex flex-col`}>
          <div className={`flex justify-center mb-4 transition-all duration-300 ${isHovered ? (theme === 'dark' ? 'text-white' : 'text-black') : (theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}`}>
            {icon}
          </div>
          <h2 className={`text-base ${theme === 'dark' ? 'text-white' : 'text-black'} font-semibold tracking-wide uppercase transition-colors duration-200`}>{title}</h2>
          <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} sm:text-4xl transition-colors duration-200`}>
            {title}
          </p>
          <p className={`mt-4 max-w-2xl text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} lg:mx-auto transition-colors duration-200`}>
            {description}
          </p>

          {features.length > 0 && (
            <div className="mt-8">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                {features.map((feature) => (
                  <li key={feature} className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-200`}>
                    <svg className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-100' : 'text-black'} mr-2 transition-colors duration-200`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
