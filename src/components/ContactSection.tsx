import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        message: '',
        service: 'tax',
      });
    }, 3000);
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

  const { language } = useLanguage();
  const text = contactText[language as keyof typeof contactText];

  return (
    <section id="contact" className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} sm:text-4xl transition-colors duration-200`}>{text.title}</h2>
          <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} max-w-2xl mx-auto transition-colors duration-200`}>
            {text.subtitle}
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          {isSubmitted ? (
            <div className={`rounded-md ${theme === 'dark' ? 'bg-green-900' : 'bg-green-50'} p-4 text-center transition-colors duration-200`}>
              <div className="flex justify-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-green-300' : 'text-green-800'} transition-colors duration-200`}>{text.thankYou}</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-200`}>
                  {text.nameLabel}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder={text.namePlaceholder}
                    className={`py-3 px-4 block w-full shadow-sm ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500'
                        : 'border-gray-300 focus:ring-black focus:border-black text-gray-900'
                    } rounded-md transition-colors duration-200`}
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-200`}>
                  {text.emailLabel}
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder={text.emailPlaceholder}
                    className={`py-3 px-4 block w-full shadow-sm ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500'
                        : 'border-gray-300 focus:ring-black focus:border-black text-gray-900'
                    } rounded-md transition-colors duration-200`}
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-200`}>
                  {text.serviceLabel}
                </label>
                <div className="mt-1">
                  <select
                    id="service"
                    name="service"
                    className={`py-3 px-4 block w-full shadow-sm ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-gray-500 focus:border-gray-500'
                        : 'border-gray-300 focus:ring-black focus:border-black text-gray-900'
                    } rounded-md transition-colors duration-200`}
                    value={formState.service}
                    onChange={handleChange}
                  >
                    <option value="tax">{text.taxOption}</option>
                    <option value="itin">{text.itinOption}</option>
                    <option value="web">{text.webOption}</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-200`}>
                  {text.messageLabel}
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={text.messagePlaceholder}
                    className={`py-3 px-4 block w-full shadow-sm ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500'
                        : 'border-gray-300 focus:ring-black focus:border-black text-gray-900'
                    } rounded-md transition-colors duration-200`}
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white ${
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-black hover:bg-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    theme === 'dark' ? 'focus:ring-gray-500' : 'focus:ring-black'
                  } transition-colors duration-200`}
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
