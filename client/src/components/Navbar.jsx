import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);
    setServicesDropdown(false);
    
    if (location.pathname !== '/') {
      navigate(`/${targetId}`);
      setTimeout(() => {
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#team', label: 'Team' },
  ];

  const serviceSubpages = [
    { path: '/web-development', label: 'Web Development' },
    { path: '/seo-services', label: 'SEO Services' },
    { path: '/ui-ux-design', label: 'UI/UX Design' },
    { path: '/react-development', label: 'React & MERN Development' },
    { path: '/business-website-development', label: 'Business Website Development' },
  ];

  return (
    <nav 
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-1 font-heading font-bold text-2xl text-text"
          aria-label="Built With Purpose Home Page"
        >
          <span className="text-primary">BUILT</span>
          <div className="flex flex-col text-[10px] leading-tight uppercase font-medium tracking-widest text-secondary-text">
            <span>with</span>
            <span>purpose</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-secondary-text hover:text-primary font-medium transition-colors text-sm"
            >
              Home
            </a>
          </li>
          
          {/* Services Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <a 
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="flex items-center gap-1 text-secondary-text hover:text-primary font-medium transition-colors text-sm py-2"
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
            </a>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {servicesDropdown && (
                <motion.ul 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-border p-3 flex flex-col gap-1 z-50"
                >
                  {serviceSubpages.map((sub) => (
                    <li key={sub.path}>
                      <Link 
                        to={sub.path} 
                        onClick={() => setServicesDropdown(false)}
                        className="block px-3 py-2 text-sm text-text hover:text-primary hover:bg-background rounded-lg font-medium transition-colors"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-secondary-text hover:text-primary font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-6 py-2.5 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 inline-block"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text p-2 rounded-lg hover:bg-black/5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-border md:hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              <li>
                <Link 
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium text-text hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>

              <li className="font-semibold text-xs uppercase tracking-wider text-secondary-text pt-2 border-t border-border">
                Services
              </li>

              {serviceSubpages.map((sub) => (
                <li key={sub.path} className="pl-3">
                  <Link 
                    to={sub.path} 
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-text hover:text-primary transition-colors"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}

              <li className="pt-2 border-t border-border">
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="block text-lg font-medium text-text hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="block text-lg font-medium text-text hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>

              <li className="pt-4 mt-2 border-t border-border">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-6 py-3 rounded-xl shadow-soft block"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
