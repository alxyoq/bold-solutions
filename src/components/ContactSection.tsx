import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function ContactSection() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    service: 'tax',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const contactText = {
    en: {
      title: 'Contact Us',
      subtitle: 'Reach out to us for any inquiries or to get started with our services.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      serviceLabel: 'Service of Interest',
      taxOption: 'Tax Services',
      itinOption: 'ITIN Services',
      webOption: 'Web Development',
      submitButton: 'Send Message',
      thankYou: 'Thank you! We will get back to you soon.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'How can we help you?',
    },
    es: {
      title: 'Contáctenos',
      subtitle: 'Comuníquese con nosotros para cualquier consulta o para comenzar con nuestros servicios.',
      nameLabel: 'Nombre',
      emailLabel: 'Correo Electrónico',
      messageLabel: 'Mensaje',
      serviceLabel: 'Servicio de Interés',
      taxOption: 'Servicios de Impuestos',
      itinOption: 'Servicios ITIN',
      webOption: 'Desarrollo Web',
      submitButton: 'Enviar Mensaje',
      thankYou: '¡Gracias! Nos pondremos en contacto pronto.',
      namePlaceholder: 'Su nombre',
      emailPlaceholder: 'Su correo electrónico',
      messagePlaceholder: '¿Cómo podemos ayudarle?',
    }
  };

  const text = contactText[language as keyof typeof contactText];

  return (
    <section id="contact" className={`py-24 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-200`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {text.title}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          {isSubmitted ? (
            <div className={`rounded-md ${theme === 'dark' ? 'bg-green-900' : 'bg-green-50'} p-4 text-center`}>
              <div className="flex justify-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-green-300' : 'text-green-800'}`}>
                    {text.thankYou}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you"
              className="grid grid-cols-1 gap-y-6"
              onSubmit={() => setIsSubmitted(true)}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label htmlFor="name" className="sr-only">{text.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder={text.namePlaceholder}
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">{text.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder={text.emailPlaceholder}
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="sr-only">{text.serviceLabel}</label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <option value="tax">{text.taxOption}</option>
                  <option value="itin">{text.itinOption}</option>
                  <option value="web">{text.webOption}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">{text.messageLabel}</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  placeholder={text.messagePlaceholder}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  {text.submitButton}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
