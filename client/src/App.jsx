import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import WebDevelopment from './pages/WebDevelopment';
import SeoServices from './pages/SeoServices';
import UiUxDesign from './pages/UiUxDesign';
import ReactDevelopment from './pages/ReactDevelopment';
import BusinessWebsiteDevelopment from './pages/BusinessWebsiteDevelopment';
import NotFound from './pages/NotFound';
import Grainient from './components/Grainient';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        
        {/* Dynamic Animated Background */}
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            opacity: 0.14
          }}
          aria-hidden="true"
        >
          <Grainient
            color1="#FF9FFC"
            color2="#5227FF"
            color3="#B497CF"
            timeSpeed={0.10}
            colorBalance={0.0}
            warpStrength={1.0}
            warpFrequency={4.0}
            warpSpeed={0.8}
            warpAmplitude={40.0}
            blendAngle={45.0}
            blendSoftness={0.08}
            rotationAmount={200.0}
            noiseScale={1.5}
            grainAmount={0.04}
            grainScale={1.5}
            grainAnimated={true}
            contrast={1.2}
            gamma={1.0}
            saturation={1.0}
            centerX={0.0}
            centerY={0.0}
            zoom={1.0}
          />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/seo-services" element={<SeoServices />} />
          <Route path="/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/react-development" element={<ReactDevelopment />} />
          <Route path="/business-website-development" element={<BusinessWebsiteDevelopment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
