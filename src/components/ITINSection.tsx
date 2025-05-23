import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function ITINSection() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const content = {
    en: {
      title: "ITIN Services",
      whatIsItin: {
        title: "🌐 What Is an ITIN and Why Do You Need One?",
        content: "An ITIN, or Individual Taxpayer Identification Number, is a tax processing number issued by the IRS to individuals who are not eligible for a Social Security Number (SSN) but still need to file a U.S. tax return. ITINs are essential for many immigrants—regardless of immigration status—who live, work, or do business in the U.S."
      },
      whoNeeds: {
        title: "🧾 Who Needs an ITIN?",
        content: "You may need an ITIN if:",
        list: [
          "You're an undocumented immigrant working in the U.S. (including cash-based work like cleaning, construction, babysitting, etc.)",
          "You're self-employed or running a small business and want to report income legally",
          "You're claimed as a dependent or spouse on someone else's tax return",
          "You want to build a U.S. financial profile (open a bank account, apply for credit, etc.)",
          "You are applying for an ITIN renewal because it expired or was never used"
        ],
        important: "✅ Important: ITINs are used only for tax purposes. They do not grant legal immigration status or work authorization—but they help you stay compliant with tax laws and build a financial footprint."
      },
      benefits: {
        title: "📋 Benefits of Having an ITIN",
        list: [
          "✅ File Taxes Legally: Even if you work with cash, the IRS requires you to report your income. Filing taxes protects you from penalties and opens up financial opportunities.",
          "✅ Build Financial Records: Establishing a tax history can help you apply for loans, mortgages, or business financing in the future.",
          "✅ Qualify for Certain Tax Credits: If your child is a U.S. citizen with a valid SSN, you may be eligible for tax credits like the Child Tax Credit—even if you file with an ITIN.",
          "✅ Start or Grow a Business: With an ITIN, you can get an Employer Identification Number (EIN), register your business, and open a business bank account.",
          "✅ Get a Driver's License in NJ: New Jersey residents can apply for a driver's license without a SSN or ITIN—just with alternative documents or an affidavit—but having an ITIN may still support other parts of your documentation process."
        ]
      },
      caa: {
        title: "🔐 Why Work With a Certified Acceptance Agent (CAA)?",
        content: "As a Certified Acceptance Agent authorized by the IRS, I can help you apply for or renew your ITIN without sending your original documents to the IRS.",
        list: [
          "✔️ I review and verify your documents (passport, birth certificate, etc.)",
          "✔️ You keep your original documents—no risk of them being lost in the mail",
          "✔️ I handle the paperwork and mail the application for you",
          "✔️ Get peace of mind knowing it's done correctly and legally"
        ]
      },
      example: {
        title: "📆 Real-Life Example:",
        content: "Let's say you worked cleaning houses in 2024 and earned $37,000 in cash. Filing a tax return using a Schedule C and ITIN helps you:",
        list: [
          "Report your income legally",
          "Deduct business expenses (supplies, mileage, tools, etc.)",
          "Establish a record with the IRS for future credit, business, or immigration opportunities"
        ],
        additional: "Even if you pay some self-employment tax, the long-term benefits of staying \"on the books\" often far outweigh the short-term costs."
      },
      children: {
        title: "🧒 Have Children?",
        content: "If your child is a U.S. citizen with a Social Security Number, you may qualify for:",
        list: [
          "The Federal Child Tax Credit (up to $2,000 per child)",
          "New Jersey's Child Tax Credit (up to $1,000 per child aged 5 and under)"
        ],
        additional: "Even if your child has only an ITIN, you may still qualify for the Other Dependent Credit on your federal return, and potentially reduced benefits in NJ, depending on your income and filing status."
      },
      contact: {
        title: "📞 Ready to Apply or Have Questions?",
        content: "I make the process simple, confidential, and stress-free—whether you're applying for the first time or renewing an expired ITIN.",
        list: [
          "📍 Local appointments available",
          "💻 Virtual consultations possible",
          "💼 Bilingual support (English/Spanish)",
          "📇 Business card in every Uber/Lyft I drive!"
        ],
        closing: "Let's get you on the books—and on the path to building your future in the U.S."
      }
    },
    es: {
      title: "Servicios ITIN",
      whatIsItin: {
        title: "🌐 ¿Qué es un ITIN y por qué lo necesita?",
        content: "Un ITIN, o Número de Identificación Personal del Contribuyente, es un número de procesamiento de impuestos emitido por el IRS a personas que no son elegibles para un Número de Seguro Social (SSN) pero que aún necesitan presentar una declaración de impuestos en EE.UU. Los ITIN son esenciales para muchos inmigrantes—independientemente de su estatus migratorio—que viven, trabajan o hacen negocios en los EE.UU."
      },
      whoNeeds: {
        title: "🧾 ¿Quién necesita un ITIN?",
        content: "Puede necesitar un ITIN si:",
        list: [
          "Es un inmigrante indocumentado que trabaja en EE.UU. (incluido trabajo pagado en efectivo como limpieza, construcción, cuidado de niños, etc.)",
          "Es trabajador autónomo o tiene un pequeño negocio y desea reportar ingresos legalmente",
          "Es reclamado como dependiente o cónyuge en la declaración de impuestos de otra persona",
          "Desea construir un perfil financiero en EE.UU. (abrir una cuenta bancaria, solicitar crédito, etc.)",
          "Está solicitando una renovación de ITIN porque expiró o nunca se usó"
        ],
        important: "✅ Importante: Los ITIN se utilizan solo para fines fiscales. No otorgan estatus migratorio legal ni autorización de trabajo, pero le ayudan a cumplir con las leyes fiscales y construir una huella financiera."
      },
      benefits: {
        title: "📋 Beneficios de tener un ITIN",
        list: [
          "✅ Presentar impuestos legalmente: Incluso si trabaja con efectivo, el IRS requiere que reporte sus ingresos. Presentar impuestos lo protege de penalidades y abre oportunidades financieras.",
          "✅ Construir registros financieros: Establecer un historial fiscal puede ayudarle a solicitar préstamos, hipotecas o financiamiento empresarial en el futuro.",
          "✅ Calificar para ciertos créditos fiscales: Si su hijo es ciudadano estadounidense con un SSN válido, puede ser elegible para créditos fiscales como el Crédito Tributario por Hijos, incluso si presenta con un ITIN.",
          "✅ Iniciar o hacer crecer un negocio: Con un ITIN, puede obtener un Número de Identificación de Empleador (EIN), registrar su negocio y abrir una cuenta bancaria empresarial.",
          "✅ Obtener una licencia de conducir en NJ: Los residentes de New Jersey pueden solicitar una licencia de conducir sin SSN o ITIN—solo con documentos alternativos o una declaración jurada—pero tener un ITIN aún puede respaldar otras partes de su proceso de documentación."
        ]
      },
      caa: {
        title: "🔐 ¿Por qué trabajar con un Agente de Aceptación Certificado (CAA)?",
        content: "Como Agente de Aceptación Certificado autorizado por el IRS, puedo ayudarle a solicitar o renovar su ITIN sin enviar sus documentos originales al IRS.",
        list: [
          "✔️ Reviso y verifico sus documentos (pasaporte, certificado de nacimiento, etc.)",
          "✔️ Usted conserva sus documentos originales—sin riesgo de que se pierdan en el correo",
          "✔️ Me encargo del papeleo y envío la solicitud por usted",
          "✔️ Obtenga tranquilidad sabiendo que está hecho correcta y legalmente"
        ]
      },
      example: {
        title: "📆 Ejemplo de la vida real:",
        content: "Supongamos que trabajó limpiando casas en 2024 y ganó $37,000 en efectivo. Presentar una declaración de impuestos usando un Anexo C e ITIN le ayuda a:",
        list: [
          "Reportar sus ingresos legalmente",
          "Deducir gastos de negocio (suministros, millaje, herramientas, etc.)",
          "Establecer un registro con el IRS para oportunidades futuras de crédito, negocio o inmigración"
        ],
        additional: "Incluso si paga algunos impuestos de trabajo por cuenta propia, los beneficios a largo plazo de mantenerse \"en los libros\" a menudo superan con creces los costos a corto plazo."
      },
      children: {
        title: "🧒 ¿Tiene hijos?",
        content: "Si su hijo es ciudadano estadounidense con un Número de Seguro Social, puede calificar para:",
        list: [
          "El Crédito Tributario Federal por Hijos (hasta $2,000 por hijo)",
          "El Crédito Tributario por Hijos de New Jersey (hasta $1,000 por hijo de 5 años o menos)"
        ],
        additional: "Incluso si su hijo solo tiene un ITIN, aún puede calificar para el Crédito por Otros Dependientes en su declaración federal, y potencialmente beneficios reducidos en NJ, dependiendo de sus ingresos y estado civil."
      },
      contact: {
        title: "📞 ¿Listo para aplicar o tiene preguntas?",
        content: "Hago que el proceso sea simple, confidencial y sin estrés, ya sea que esté solicitando por primera vez o renovando un ITIN vencido.",
        list: [
          "📍 Citas locales disponibles",
          "💻 Consultas virtuales posibles",
          "💼 Soporte bilingüe (Inglés/Español)",
          "📇 ¡Tarjeta de presentación en cada Uber/Lyft que conduzco!"
        ],
        closing: "Pongámoslo en regla—y en el camino para construir su futuro en los EE.UU."
      }
    }
  };

  const currentContent = language === 'en' ? content.en : content.es;

  const SectionTitle = ({ id, title, onClick }: { id: string, title: string, onClick: () => void }) => (
    <div
      onClick={onClick}
      className={`flex justify-between items-center p-4 cursor-pointer rounded-md transition-colors duration-200 mb-2 ${
        theme === 'dark'
          ? (expandedSection === id ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700')
          : (expandedSection === id ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200')
      }`}
    >
      <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 transform transition-transform duration-200 ${expandedSection === id ? 'rotate-180' : ''} ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );

  return (
    <div id="itin-services-detail" className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{currentContent.title}</h2>
        </div>

        <div className="space-y-6">
          {/* What is ITIN section */}
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              id="what-is-itin"
              title={currentContent.whatIsItin.title}
              onClick={() => toggleSection('what-is-itin')}
            />
            {expandedSection === 'what-is-itin' && (
              <div className={`p-4 rounded-md mt-2 mb-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className="mb-4">{currentContent.whatIsItin.content}</p>
              </div>
            )}
          </div>

          {/* Who needs ITIN section */}
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              id="who-needs"
              title={currentContent.whoNeeds.title}
              onClick={() => toggleSection('who-needs')}
            />
            {expandedSection === 'who-needs' && (
              <div className={`p-4 rounded-md mt-2 mb-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className="mb-4">{currentContent.whoNeeds.content}</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {currentContent.whoNeeds.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="font-medium">{currentContent.whoNeeds.important}</p>
              </div>
            )}
          </div>

          {/* Benefits section */}
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              id="benefits"
              title={currentContent.benefits.title}
              onClick={() => toggleSection('benefits')}
            />
            {expandedSection === 'benefits' && (
              <div className={`p-4 rounded-md mt-2 mb-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <ul className="space-y-3">
                  {currentContent.benefits.list.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* CAA section */}
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              id="caa"
              title={currentContent.caa.title}
              onClick={() => toggleSection('caa')}
            />
            {expandedSection === 'caa' && (
              <div className={`p-4 rounded-md mt-2 mb-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className="mb-4">{currentContent.caa.content}</p>
                <ul className="space-y-2">
                  {currentContent.caa.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Example section */}
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              id="example"
              title={currentContent.example.title}
              onClick={() => toggleSection('example')}
            />
            {expandedSection === 'example' && (
              <div className={`p-4 rounded-md mt-2 mb-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className="mb-4">{currentContent.example.content}</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {currentContent.example.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{currentContent.example.additional}</p>
              </div>
            )}
          </div>

          {/* Children section */}
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              id="children"
              title={currentContent.children.title}
              onClick={() => toggleSection('children')}
            />
            {expandedSection === 'children' && (
              <div className={`p-4 rounded-md mt-2 mb-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className="mb-4">{currentContent.children.content}</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {currentContent.children.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{currentContent.children.additional}</p>
              </div>
            )}
          </div>

          {/* Contact section */}
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              id="contact"
              title={currentContent.contact.title}
              onClick={() => toggleSection('contact')}
            />
            {expandedSection === 'contact' && (
              <div className={`p-4 rounded-md mt-2 mb-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className="mb-4">{currentContent.contact.content}</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {currentContent.contact.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="font-semibold">{currentContent.contact.closing}</p>
                <div className="mt-6 flex justify-center">
                  <a
                    href="#contact"
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                      theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                  >
                    {language === 'en' ? 'Contact Me Now' : 'Contáctame Ahora'}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
