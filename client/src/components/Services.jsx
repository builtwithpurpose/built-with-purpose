const Services = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 7v8M8 12h6" />
        </svg>
      ),
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate search results, acquire high-intent organic traffic, and scale your leads without recurring ad spend.',
      themeRgb: '230, 199, 156', // Champagne Gold
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Social Media Marketing',
      description: 'Build a thriving community, establish brand authority, and maintain stunning feed aesthetics across platforms.',
      themeRgb: '193, 127, 106', // Warm Terracotta / Rust
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
      title: 'Paid Social Advertising',
      description: 'Scale your revenue fast with high-performance, conversion-optimized campaigns on Meta Ads, Google Ads, and TikTok.',
      themeRgb: '153, 169, 143', // Sage Green
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12c0 1.94.78 3.8 2.2 5.2.5.5.5 1.3 0 1.8a1.3 1.3 0 0 1-1.8 0c-1.5-1.5-2.4-3.5-2.4-6 0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10c-1.5 0-3-.5-4-1.5-.5-.5-1.3-.5-1.8 0a1.3 1.3 0 0 1 0 1.8c1 1 2.5 1.7 4 1.7Z" />
          <circle cx="7.5" cy="10.5" r="1.5" />
          <circle cx="11.5" cy="7.5" r="1.5" />
          <circle cx="16.5" cy="9.5" r="1.5" />
        </svg>
      ),
      title: 'Branding & Graphic Design',
      description: 'Establish a memorable identity. We craft premium logos, visual brand books, marketing collaterals, and ad creatives.',
      themeRgb: '230, 199, 156', // Champagne Gold
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 7h8M8 11h5" />
        </svg>
      ),
      title: 'Content Marketing',
      description: 'Engage and nurture your prospects with authority copywriting, blog strategy, email marketing funnels, and lead magnets.',
      themeRgb: '193, 127, 106', // Warm Terracotta / Rust
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
      title: 'Web & App Development',
      description: 'High-performance, search-optimized web applications and landing pages designed specifically to load fast and drive conversions.',
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
            From strategic brand planning to high-ROI campaigns, we offer comprehensive 
            growth and digital marketing solutions tailored to your business goals.
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
