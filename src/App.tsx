import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { ProductDetail } from './components/ProductDetail';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { useEffect, useRef } from 'react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const initialLoad = useRef(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      if (initialLoad.current) {
        window.scrollTo(0, 0);
      }
    }, 50);

    const timer = setTimeout(() => {
      initialLoad.current = false;
      clearInterval(interval);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (initialLoad.current) return;

    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  // Forcefully override title after full page load
  useEffect(() => {
    const setTitle = () => {
      document.title = "SmartBlindsKC - Smart Blinds & Window Shades";
      console.log("Tab title forcibly set after full load");
    };

    // Run after React mounts
    setTitle();

    // Also run after full window load to override any injected template
    window.addEventListener("load", setTitle);

    return () => {
      window.removeEventListener("load", setTitle);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
