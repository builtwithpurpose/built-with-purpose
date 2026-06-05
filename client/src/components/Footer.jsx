import logo from '../assets/logo.png';

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
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'SEO & Marketing', href: '#services' },
  ];

  const socialLinks = [
    { icon: '𝕏', url: 'https://twitter.com' },
    { icon: 'in', url: 'https://linkedin.com' },
    { icon: '⌨', url: 'https://github.com' },
    { icon: '▶', url: 'https://youtube.com' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Built with Purpose Logo" className="logo-icon" />
              Built with Purpose
            </div>
            <p>
              We craft high-performance, beautifully designed digital
              experiences that drive real results for ambitious brands.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  href={social.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@builtwithpurpose.com">hello@builtwithpurpose.com</a></li>
              <li><a href="tel:+15551234567">+91 98422 62***</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Singanallur, CBE-005 </a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Built with Purpose. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
