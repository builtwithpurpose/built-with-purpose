const Hero = () => {
  return (
    <section className="hero section" id="home">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="hero-grid"></div>

      <div className="container">
        <div className="hero-content">


          <h1 className="hero-title">
            Grow your Business<br />
            <span className="gradient-text">With Purpose</span>
          </h1>

          <p className="hero-description">
            We're not just another web agency. We craft high-performance,
            beautifully designed digital experiences that drive real results
            for ambitious brands and startups.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              View Our Work ↗
            </a>
            <a href="#contact" className="btn btn-outline">
              Start a Project
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
