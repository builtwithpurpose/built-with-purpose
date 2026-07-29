import { Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'SEO Optimization', href: '#services' },
    { label: 'Social Media Marketing', href: '#services' },
    { label: 'Paid Social Advertising', href: '#services' },
    { label: 'Branding & Design', href: '#services' },
    { label: 'Content Marketing', href: '#services' },
    { label: 'Web Development', href: '#services' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10" id="footer">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-1 font-heading font-bold text-2xl text-text mb-6">
              <span className="text-primary">BUILT</span>
              <div className="flex flex-col text-[10px] leading-tight uppercase font-medium tracking-widest text-secondary-text">
                <span>with</span>
                <span>purpose</span>
              </div>
            </a>
            <p className="text-secondary-text mb-8 max-w-sm">
              We scale brands and accelerate growth through high-ROI digital marketing, stunning creative design, and search engine domination.
            </p>
            <div className="flex gap-4">
              {[
                { icon: '𝕏', url: 'https://twitter.com' },
                { icon: 'in', url: 'https://linkedin.com' },
                { icon: '⌨', url: 'https://github.com' },
                { icon: '▶', url: 'https://youtube.com' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
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
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-secondary-text hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-bold font-heading text-text mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-secondary-text hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="font-bold font-heading text-text mb-6">Newsletter</h4>
            <p className="text-secondary-text mb-4">
              Subscribe to our newsletter for the latest insights and trends.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-text" size={20} />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white border border-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-secondary-text text-sm">
          <p>© {currentYear} Built with Purpose. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
