import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ITINPage from './pages/ITINPage';
import TaxServicesPage from './pages/TaxServicesPage';
import WebDevPage from './pages/WebDevPage';
import ThankYouPage from './pages/ThankYouPage'; // ✅ imported new route
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen theme-transition">
            <Navbar />
            <div className="pt-16 md:pt-20">{/* Increased padding for mobile views */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/itin-services" element={<ITINPage />} />
                <Route path="/tax-services" element={<TaxServicesPage />} />
                <Route path="/web-development" element={<WebDevPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} /> {/* ✅ new route added */}
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
