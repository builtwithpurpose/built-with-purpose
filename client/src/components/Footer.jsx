import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About Us', href: '/#about' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact Us', href: '/#contact' },
  ];

  const serviceSubpages = [
    { label: 'Web Development', path: '/web-development' },
    { label: 'SEO Services', path: '/seo-services' },
    { label: 'UI/UX Design', path: '/ui-ux-design' },
    { label: 'React & MERN Development', path: '/react-development' },
    { label: 'Business Website Development', path: '/business-website-development' },
  ];

  const socialLinks = [
    { icon: '𝕏', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'in', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: '⌨', url: 'https://github.com', label: 'GitHub' },
    { icon: '▶', url: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10" id="footer">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-1 font-heading font-bold text-2xl text-text mb-6">
              <span className="text-primary">BUILT</span>
              <div className="flex flex-col text-[10px] leading-tight uppercase font-medium tracking-widest text-secondary-text">
                <span>with</span>
                <span>purpose</span>
              </div>
            </Link>
            <p className="text-secondary-text mb-8 max-w-sm">
              Built With Purpose is a technical SEO and web development company based in Coimbatore, Tamil Nadu. We build modern digital products that rank high and drive revenue.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-secondary-text hover:text-primary hover:border-primary hover:shadow-soft transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold font-heading text-text mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-secondary-text hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Subpages */}
          <div className="lg:col-span-3">
            <h4 className="font-bold font-heading text-text mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceSubpages.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-secondary-text hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="font-bold font-heading text-text mb-6">Newsletter</h4>
            <p className="text-secondary-text mb-4 text-sm">
              Subscribe to get latest web development, UI/UX, and SEO insights from Coimbatore experts.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-text" size={20} aria-hidden="true" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                aria-label="Email address for newsletter subscription"
                className="w-full bg-white border border-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text text-sm"
              />
              <button 
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-secondary-text text-sm">
          <p>© {currentYear} Built with Purpose. Web Development &amp; SEO Company in Coimbatore.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
