const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Full-stack web applications built with modern frameworks like React, Next.js, and Node.js. Fast, secure, and scalable.',
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications using React Native. Native performance with a single codebase for iOS and Android.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design that balances aesthetics with functionality. From wireframes to high-fidelity prototypes.',
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Custom online stores with seamless checkout, inventory management, and payment integration that drive sales.',
    },
    {
      icon: '🔍',
      title: 'SEO & Marketing',
      description: 'Data-driven SEO strategies and digital marketing campaigns that boost visibility and drive organic growth.',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure setup, CI/CD pipelines, and deployment automation for reliable, scalable applications.',
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
            <div className="glass-card service-card" key={index}>
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
