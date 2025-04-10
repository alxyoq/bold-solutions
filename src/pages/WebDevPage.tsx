import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import ContactSection from '../components/ContactSection';

export default function WebDevPage() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Web Development",
      subtitle: "Modern Web Solutions for Your Business",
      description: "We create beautiful, functional websites and web applications that help businesses grow their online presence and connect with customers.",
      sections: [
        {
          id: "website-design",
          title: "Website Design & Development",
          description: "Beautiful, responsive websites that look great on any device",
          features: [
            "Custom design tailored to your brand",
            "Mobile-responsive layouts",
            "SEO optimization",
            "Fast loading speeds",
            "User-friendly navigation"
          ],
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          id: "ecommerce",
          title: "E-commerce Solutions",
          description: "Sell your products online with powerful e-commerce platforms",
          features: [
            "Secure online payments",
            "Inventory management",
            "Product catalog design",
            "Shopping cart functionality",
            "Order processing systems"
          ],
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          id: "webapps",
          title: "Custom Web Applications",
          description: "Tailor-made web applications to streamline your business processes",
          features: [
            "Custom business solutions",
            "Integration with existing systems",
            "User authentication & permissions",
            "Data management",
            "Cloud-based solutions"
          ],
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )
        },
        {
          id: "maintenance",
          title: "Website Maintenance & Support",
          description: "Keep your website secure, updated, and running smoothly",
          features: [
            "Regular security updates",
            "Content updates",
            "Performance optimization",
            "SEO maintenance",
            "Technical support"
          ],
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        }
      ],
      process: {
        title: "Our Development Process",
        steps: [
          {
            number: 1,
            title: "Discovery",
            description: "We learn about your business, goals, and requirements"
          },
          {
            number: 2,
            title: "Planning",
            description: "We create a detailed plan and design mockups"
          },
          {
            number: 3,
            title: "Development",
            description: "Our team builds your website or application"
          },
          {
            number: 4,
            title: "Testing",
            description: "We rigorously test functionality and performance"
          },
          {
            number: 5,
            title: "Launch",
            description: "Your project goes live with our full support"
          },
          {
            number: 6,
            title: "Maintenance",
            description: "Ongoing updates and improvements as needed"
          }
        ]
      },
      cta: "Start Your Web Project",
      contactHeader: "Ready for a Better Web Presence?",
      contactText: "Contact us today for a free consultation about your web development needs."
    },
    es: {
      title: "Desarrollo Web",
      subtitle: "Soluciones Web Modernas para su Negocio",
      description: "Creamos sitios web y aplicaciones web hermosos y funcionales que ayudan a las empresas a aumentar su presencia en línea y conectarse con los clientes.",
      sections: [
        {
          id: "website-design",
          title: "Diseño y Desarrollo de Sitios Web",
          description: "Sitios web hermosos y receptivos que se ven excelentes en cualquier dispositivo",
          features: [
            "Diseño personalizado adaptado a su marca",
            "Diseños adaptables para móviles",
            "Optimización SEO",
            "Velocidades de carga rápidas",
            "Navegación fácil de usar"
          ],
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          id: "ecommerce",
          title: "Soluciones de Comercio Electrónico",
          description: "Venda sus productos en línea con potentes plataformas de comercio electrónico",
          features: [
            "Pagos en línea seguros",
            "Gestión de inventario",
            "Diseño de catálogo de productos",
            "Funcionalidad de carrito de compras",
            "Sistemas de procesamiento de pedidos"
          ],
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          id: "webapps",
          title: "Aplicaciones Web Personalizadas",
          description: "Aplicaciones web hechas a medida para optimizar sus procesos de negocio",
          features: [
            "Soluciones empresariales personalizadas",
            "Integración con sistemas existentes",
            "Autenticación de usuarios y permisos",
            "Gestión de datos",
            "Soluciones basadas en la nube"
          ],
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )
        },
        {
          id: "maintenance",
          title: "Mantenimiento y Soporte de Sitios Web",
          description: "Mantenga su sitio web seguro, actualizado y funcionando sin problemas",
          features: [
            "Actualizaciones de seguridad regulares",
            "Actualizaciones de contenido",
            "Optimización de rendimiento",
            "Mantenimiento SEO",
            "Soporte técnico"
          ],
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        }
      ],
      process: {
        title: "Nuestro Proceso de Desarrollo",
        steps: [
          {
            number: 1,
            title: "Descubrimiento",
            description: "Aprendemos sobre su negocio, objetivos y requisitos"
          },
          {
            number: 2,
            title: "Planificación",
            description: "Creamos un plan detallado y maquetas de diseño"
          },
          {
            number: 3,
            title: "Desarrollo",
            description: "Nuestro equipo construye su sitio web o aplicación"
          },
          {
            number: 4,
            title: "Pruebas",
            description: "Probamos rigurosamente la funcionalidad y el rendimiento"
          },
          {
            number: 5,
            title: "Lanzamiento",
            description: "Su proyecto se lanza con nuestro soporte completo"
          },
          {
            number: 6,
            title: "Mantenimiento",
            description: "Actualizaciones y mejoras continuas según sea necesario"
          }
        ]
      },
      cta: "Inicie Su Proyecto Web",
      contactHeader: "¿Listo para una Mejor Presencia Web?",
      contactText: "Contáctenos hoy para una consulta gratuita sobre sus necesidades de desarrollo web."
    }
  };

  const currentContent = language === 'en' ? content.en : content.es;
  const [activeTab, setActiveTab] = useState(currentContent.sections[0].id);

  return (
    <>
      {/* Hero Section with animated gradient background */}
      <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} py-20`}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-10 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                {currentContent.title}
              </span>
            </h1>
            <p className={`mt-3 max-w-md mx-auto text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
              {currentContent.subtitle}
            </p>
            <p className={`mt-3 max-w-md mx-auto text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} md:max-w-3xl`}>
              {currentContent.description}
            </p>
            <div className="mt-10">
              <a
                href="#contact-section"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {currentContent.cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Tabs Section */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Tab Navigation */}
            <div className="lg:col-span-4">
              <div className="sticky top-20">
                <nav className="flex flex-col space-y-1">
                  {currentContent.sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveTab(section.id)}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                        activeTab === section.id
                          ? theme === 'dark'
                            ? 'bg-cyan-800 text-white'
                            : 'bg-cyan-100 text-cyan-800'
                          : theme === 'dark'
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      } transition-colors duration-200`}
                    >
                      <span className="mr-3">{section.icon}</span>
                      <span>{section.title}</span>
                      {activeTab === section.id && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-8 lg:mt-0 lg:col-span-8">
              {currentContent.sections.map(section => (
                <div
                  key={section.id}
                  className={`${activeTab === section.id ? 'block' : 'hidden'} transition-opacity duration-500 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } rounded-lg shadow-xl p-6 overflow-hidden`}
                >
                  <div className={`p-1 rounded-lg inline-block ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} mb-4`}>
                    <div className={`p-2 rounded-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                      {section.icon}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mt-2`}>
                    {section.title}
                  </h3>
                  <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {section.description}
                  </p>

                  <div className={`mt-6 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <h4 className={`font-medium mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                      {language === 'en' ? 'Features:' : 'Características:'}
                    </h4>
                    <ul className="space-y-2">
                      {section.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`flex-shrink-0 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} mr-2`}>✓</span>
                          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
              {currentContent.process.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentContent.process.steps.map((step) => (
              <div
                key={step.number}
                className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${theme === 'dark' ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800'} mb-4`}>
                  <span className="text-lg font-bold">{step.number}</span>
                </div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {step.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to action section */}
      <div className={`py-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-cyan-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-lg shadow-xl overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-cyan-900 to-blue-900' : 'bg-gradient-to-br from-cyan-500 to-blue-600'}`}>
            <div className="px-6 py-12 md:py-16 md:px-12 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {currentContent.contactHeader}
              </h2>
              <p className="mt-4 max-w-lg mx-auto text-lg text-cyan-100">
                {currentContent.contactText}
              </p>
              <div className="mt-8">
                <a
                  href="#contact-section"
                  className={`inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                    theme === 'dark' ? 'text-cyan-800 bg-white hover:bg-gray-100' : 'text-white bg-cyan-700 hover:bg-cyan-800'
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
