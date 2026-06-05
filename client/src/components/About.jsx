const About = () => {
  const stats = [
    { icon: '🚀', number: '50+', label: 'Projects Completed' },
    { icon: '😊', number: '40+', label: 'Happy Clients' },
    { icon: '🏆', number: '15+', label: 'Awards Won' },
    { icon: '👥', number: '10+', label: 'Team Members' },
  ];

  const features = [
    { icon: '✓', text: 'Custom Solutions' },
    { icon: '✓', text: 'Agile Development' },
    { icon: '✓', text: '24/7 Support' },
    { icon: '✓', text: 'SEO Optimized' },
    { icon: '✓', text: 'Scalable Architecture' },
    { icon: '✓', text: 'Clean Code' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-label">About Us</div>
            <h2 className="section-title">
              Turning Ideas Into <span className="gradient-text">Digital Reality</span>
            </h2>
            <p className="about-text">
              Founded with a clear mission — to build websites that aren't just 
              visually stunning but strategically crafted to achieve real business 
              objectives. Every pixel we place and every line of code we write 
              serves a purpose.
            </p>
            <p className="about-text">
              We partner with startups, agencies, and growing businesses to create 
              digital experiences that captivate users and convert visitors into 
              loyal customers.
            </p>

            <div className="about-features">
              {features.map((feature, index) => (
                <div className="about-feature" key={index}>
                  <span className="feature-icon">{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
            </div>
          </div>

          <div className="about-image-side">
            <div className="about-visual">
              <div className="about-card-stack">
                {stats.map((stat, index) => (
                  <div className="about-stat-card" key={index}>
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-info">
                      <h3>{stat.number}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
