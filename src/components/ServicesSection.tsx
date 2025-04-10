import { useLanguage } from '../contexts/LanguageContext';
import ServiceSection from './ServiceSection';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const taxFeatures = language === 'en'
    ? ['Personal Tax Returns', 'Business Tax Planning', 'Tax Resolution', 'Electronic Filing']
    : ['Declaraciones de Impuestos Personales', 'Planificación Fiscal para Empresas', 'Resolución de Impuestos', 'Presentación Electrónica'];

  const itinFeatures = language === 'en'
    ? ['ITIN Application Assistance', 'Document Preparation', 'IRS Representation', 'Renewal Services']
    : ['Asistencia para Solicitud de ITIN', 'Preparación de Documentos', 'Representación ante el IRS', 'Servicios de Renovación'];

  const webFeatures = language === 'en'
    ? ['Responsive Design', 'E-commerce Solutions', 'SEO Optimization', 'Content Management']
    : ['Diseño Responsivo', 'Soluciones de Comercio Electrónico', 'Optimización SEO', 'Gestión de Contenido'];

  const taxDescription = language === 'en'
    ? "We provide comprehensive tax services for individuals and businesses, helping you navigate complex tax regulations and maximize your returns."
    : "Proporcionamos servicios fiscales integrales para individuos y empresas, ayudándole a navegar por las complejas regulaciones fiscales y maximizar sus devoluciones.";

  const itinDescription = language === 'en'
    ? "Our ITIN application services help non-U.S. citizens obtain an Individual Taxpayer Identification Number to comply with U.S. tax requirements."
    : "Nuestros servicios de solicitud de ITIN ayudan a los ciudadanos no estadounidenses a obtener un Número de Identificación de Contribuyente Individual para cumplir con los requisitos fiscales de EE.UU.";

  const webDescription = language === 'en'
    ? "We create modern, responsive, and user-friendly websites and web applications that help businesses grow their online presence."
    : "Creamos sitios web y aplicaciones web modernas, responsivas y fáciles de usar que ayudan a las empresas a aumentar su presencia en línea.";

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:text-center">
          <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
          </p>
          <p className={`mt-4 max-w-2xl text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} lg:mx-auto`}>
            {language === 'en'
              ? 'Professional solutions for your business and individual needs'
              : 'Soluciones profesionales para sus necesidades empresariales e individuales'}
          </p>
        </div>

        <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-3 sm:gap-x-6 sm:gap-y-12">
          <div id="tax-services">
            <div className="h-full flex flex-col">
              <ServiceSection
                id="tax-service-card"
                title={t('nav.tax')}
                description={taxDescription}
                features={taxFeatures}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                }
              />
              <div className="mt-4 flex justify-center">
                <Link
                  to="/tax-services"
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                    theme === 'dark' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-600 hover:bg-indigo-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200`}
                >
                  {language === 'en' ? 'Learn More About Tax Services' : 'Más Información Sobre Servicios Fiscales'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div id="itin-services">
            <div className="h-full flex flex-col">
              <ServiceSection
                id="itin-service-card"
                title={t('nav.itin')}
                description={itinDescription}
                features={itinFeatures}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                  </svg>
                }
              />
              <div className="mt-4 flex justify-center">
                <Link
                  to="/itin-services"
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                    theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                >
                  {language === 'en' ? 'Learn More About ITIN' : 'Más Información Sobre ITIN'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div id="web-development">
            <div className="h-full flex flex-col">
              <ServiceSection
                id="web-service-card"
                title={t('nav.web')}
                description={webDescription}
                features={webFeatures}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                }
              />
              <div className="mt-4 flex justify-center">
                <Link
                  to="/web-development"
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                    theme === 'dark' ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-cyan-600 hover:bg-cyan-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200`}
                >
                  {language === 'en' ? 'Learn More About Web Development' : 'Más Información Sobre Desarrollo Web'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
