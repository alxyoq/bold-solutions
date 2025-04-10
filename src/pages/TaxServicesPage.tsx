import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import ContactSection from '../components/ContactSection';

export default function TaxServicesPage() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>('personal-tax');

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const content = {
    en: {
      title: "Tax Services",
      subtitle: "Professional Tax Solutions for Individuals & Businesses",
      description: "We offer comprehensive tax preparation and planning services to help you maximize your returns and minimize liabilities.",
      personalTax: {
        title: "Personal Tax Services",
        description: "Our expert tax professionals will help you navigate complex tax laws and find all the deductions you're entitled to.",
        services: [
          "Federal & state income tax returns",
          "Tax planning & strategy",
          "Audit support & representation",
          "Prior year returns & amendments",
          "Tax problem resolution"
        ]
      },
      businessTax: {
        title: "Business Tax Services",
        description: "From small businesses to corporations, we provide comprehensive tax services that keep you compliant while maximizing your bottom line.",
        services: [
          "Business income tax preparation",
          "Quarterly estimated taxes",
          "Payroll tax compliance",
          "Sales tax filings",
          "Business tax planning"
        ]
      },
      foreignTax: {
        title: "Foreign Income & International Tax",
        description: "For individuals with international income or foreign assets, we help navigate the complex reporting requirements.",
        services: [
          "Foreign income reporting",
          "FBAR filing assistance",
          "Foreign tax credit optimization",
          "Expatriate tax services",
          "International business taxation"
        ]
      },
      taxPlanning: {
        title: "Strategic Tax Planning",
        description: "Don't just react to tax season - plan ahead with strategic guidance to minimize your tax burden year-round.",
        services: [
          "Year-round tax planning",
          "Retirement tax strategies",
          "Investment tax planning",
          "Business structure optimization",
          "Estate & inheritance tax planning"
        ]
      },
      cta: "Schedule a Tax Consultation",
      contactHeader: "Ready to get started?",
      contactText: "Contact us today for a free initial consultation about your tax needs."
    },
    es: {
      title: "Servicios de Impuestos",
      subtitle: "Soluciones Fiscales Profesionales para Individuos y Empresas",
      description: "Ofrecemos servicios completos de preparación y planificación de impuestos para ayudarle a maximizar sus devoluciones y minimizar sus responsabilidades.",
      personalTax: {
        title: "Servicios de Impuestos Personales",
        description: "Nuestros profesionales expertos en impuestos le ayudarán a navegar por las complejas leyes fiscales y encontrar todas las deducciones a las que tiene derecho.",
        services: [
          "Declaraciones de impuestos federales y estatales",
          "Planificación y estrategia fiscal",
          "Soporte y representación en auditorías",
          "Declaraciones de años anteriores y enmiendas",
          "Resolución de problemas fiscales"
        ]
      },
      businessTax: {
        title: "Servicios de Impuestos Empresariales",
        description: "Desde pequeñas empresas hasta corporaciones, proporcionamos servicios fiscales integrales que lo mantienen en cumplimiento mientras maximizan su resultado final.",
        services: [
          "Preparación de impuestos sobre la renta empresarial",
          "Impuestos estimados trimestrales",
          "Cumplimiento de impuestos sobre la nómina",
          "Presentaciones de impuestos sobre las ventas",
          "Planificación fiscal empresarial"
        ]
      },
      foreignTax: {
        title: "Ingresos Extranjeros e Impuestos Internacionales",
        description: "Para personas con ingresos internacionales o activos extranjeros, ayudamos a navegar por los complejos requisitos de informes.",
        services: [
          "Informe de ingresos extranjeros",
          "Asistencia para la presentación de FBAR",
          "Optimización de créditos fiscales extranjeros",
          "Servicios fiscales para expatriados",
          "Tributación de negocios internacionales"
        ]
      },
      taxPlanning: {
        title: "Planificación Fiscal Estratégica",
        description: "No solo reaccione a la temporada de impuestos - planifique con anticipación con orientación estratégica para minimizar su carga fiscal durante todo el año.",
        services: [
          "Planificación fiscal durante todo el año",
          "Estrategias fiscales para la jubilación",
          "Planificación fiscal de inversiones",
          "Optimización de la estructura empresarial",
          "Planificación de impuestos de sucesiones y herencias"
        ]
      },
      cta: "Programe una Consulta Fiscal",
      contactHeader: "¿Listo para comenzar?",
      contactText: "Contáctenos hoy para una consulta inicial gratuita sobre sus necesidades fiscales."
    }
  };

  const currentContent = language === 'en' ? content.en : content.es;

  const ServiceCard = ({ id, title, description, services }: { id: string, title: string, description: string, services: string[] }) => {
    const isExpanded = expandedSection === id;

    return (
      <div
        className={`rounded-lg overflow-hidden transition-all duration-300 ${
          theme === 'dark'
            ? (isExpanded ? 'bg-indigo-900' : 'bg-gray-800 hover:bg-gray-700')
            : (isExpanded ? 'bg-indigo-100' : 'bg-white hover:bg-gray-50')
        } border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} shadow-lg transform ${
          isExpanded ? 'scale-105' : 'scale-100'
        }`}
      >
        <div
          className="p-6 cursor-pointer"
          onClick={() => toggleSection(id)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h3>
            <svg
              className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>

        {isExpanded && (
          <div className={`px-6 pb-6 ${isExpanded ? 'animate-fadeIn' : ''}`}>
            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-indigo-800 bg-opacity-50' : 'bg-indigo-50'}`}>
              <h4 className={`font-medium mb-2 ${theme === 'dark' ? 'text-indigo-200' : 'text-indigo-700'}`}>
                {language === 'en' ? 'Services Include:' : 'Los Servicios Incluyen:'}
              </h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`flex-shrink-0 ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'} mr-2`}>✓</span>
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Hero Section with colorful gradient */}
      <div className={`relative py-20 overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Background gradient elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-10 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className={`text-4xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'} sm:text-5xl md:text-6xl`}>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                {currentContent.title}
              </span>
            </h1>
            <p className={`mt-3 max-w-md mx-auto text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
              {currentContent.subtitle}
            </p>
            <p className={`mt-3 max-w-md mx-auto text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} md:max-w-3xl`}>
              {currentContent.description}
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#contact-section"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {currentContent.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ServiceCard
              id="personal-tax"
              title={currentContent.personalTax.title}
              description={currentContent.personalTax.description}
              services={currentContent.personalTax.services}
            />

            <ServiceCard
              id="business-tax"
              title={currentContent.businessTax.title}
              description={currentContent.businessTax.description}
              services={currentContent.businessTax.services}
            />

            <ServiceCard
              id="foreign-tax"
              title={currentContent.foreignTax.title}
              description={currentContent.foreignTax.description}
              services={currentContent.foreignTax.services}
            />

            <ServiceCard
              id="tax-planning"
              title={currentContent.taxPlanning.title}
              description={currentContent.taxPlanning.description}
              services={currentContent.taxPlanning.services}
            />
          </div>
        </div>
      </div>

      {/* Call to action section */}
      <div className={`py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-indigo-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-lg shadow-xl overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-900 to-blue-900' : 'bg-gradient-to-br from-indigo-500 to-blue-600'}`}>
            <div className="px-6 py-12 md:py-16 md:px-12 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {currentContent.contactHeader}
              </h2>
              <p className="mt-4 max-w-lg mx-auto text-lg text-indigo-100">
                {currentContent.contactText}
              </p>
              <div className="mt-8">
                <a
                  href="#contact-section"
                  className={`inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                    theme === 'dark' ? 'text-indigo-800 bg-white hover:bg-gray-100' : 'text-white bg-indigo-700 hover:bg-indigo-800'
                  } md:px-8 md:py-4 md:text-lg transition-all duration-200 shadow-lg`}
                >
                  {currentContent.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </>
  );
}
