const Services = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3.5H7.5C6.1 3.5 5 4.6 5 6v4.5c0 .8-.5 1.5-1.2 1.8.7.3 1.2 1 1.2 1.8V18c0 1.4 1.1 2.5 2.5 2.5H8" />
          <path d="M16 3.5h.5c1.4 0 2.5 1.1 2.5 2.5v4.5c0 .8.5 1.5 1.2 1.8-.7.3-1.2 1-1.2 1.8V18c0 1.4-1.1 2.5-2.5 2.5H16" />
          <path d="M10.5 9.5L8.5 12l2 2.5" />
          <path d="M13.5 9.5l2 2.5-2 2.5" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Full-stack web applications built with modern frameworks like React, Next.js, and Node.js. Fast, secure, and scalable.',
      themeRgb: '230, 199, 156', // Champagne Gold
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <path d="M10 5h4" />
          <path d="M11 19h2" />
          <path d="M10 14.5l2-6.5 2 6.5" />
          <path d="M10.8 12.5h2.4" />
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications using React Native. Native performance with a single codebase for iOS and Android.',
      themeRgb: '193, 127, 106', // Warm Terracotta / Rust
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="15" rx="2" />
          <path d="M3 8h18" />
          <circle cx="5.5" cy="6" r="0.5" fill="currentColor" />
          <circle cx="7.5" cy="6" r="0.5" fill="currentColor" />
          <circle cx="9.5" cy="6" r="0.5" fill="currentColor" />
          <path d="M9 8v11" />
          <path d="M9 13.5h12" />
          <path d="M14 14l6 1.8-2.2 1.6 2.8 4.2-1.4 0.9-2.8-4.2-2.4 2.1z" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'User-centered design that balances aesthetics with functionality. From wireframes to high-fidelity prototypes.',
      themeRgb: '153, 169, 143', // Sage Green
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h3l2.5 9h9l2-6H8.2" />
          <circle cx="10.5" cy="17.5" r="1.5" />
          <circle cx="15.5" cy="17.5" r="1.5" />
        </svg>
      ),
      title: 'E-Commerce',
      description: 'Custom online stores with seamless checkout, inventory management, and payment integration that drive sales.',
      themeRgb: '230, 199, 156', // Champagne Gold
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="14" width="2" height="5" rx="0.5" />
          <rect x="9" y="11" width="2" height="8" rx="0.5" />
          <rect x="13" y="8" width="2" height="11" rx="0.5" />
          <rect x="17" y="5" width="2" height="14" rx="0.5" />
          <path d="M3 16l4.5-5 4.5 1.5 7.5-8.5" />
          <path d="M15.5 4h4v4" />
        </svg>
      ),
      title: 'SEO & Marketing',
      description: 'Data-driven SEO strategies and digital marketing campaigns that boost visibility and drive organic growth.',
      themeRgb: '193, 127, 106', // Warm Terracotta / Rust
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18a4 4 0 0 1 0-8h.5a6 6 0 0 1 11.5 0h.5a4 4 0 0 1 0 8z" />
          <circle cx="12.25" cy="14" r="2" />
          <path d="M12.25 10.5v1.5M12.25 16v1.5M8.75 14h1.5M14.25 14h1.5M9.75 11.5l1.06 1.06M13.69 15.44l1.06 1.06M9.75 16.5l1.06-1.06M13.69 12.56l1.06-1.06" />
        </svg>
      ),
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure setup, CI/CD pipelines, and deployment automation for reliable, scalable applications.',
      themeRgb: '153, 169, 143', // Sage Green
    },
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="section-subtitle">
            From concept to launch, we offer end-to-end digital solutions 
            tailored to your unique business needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="glass-card service-card" 
              key={index}
              style={{ '--theme-rgb': service.themeRgb }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
