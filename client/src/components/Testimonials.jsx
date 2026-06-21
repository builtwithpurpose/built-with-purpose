const Testimonials = () => {
  const testimonials = [
    {
      text: "BuiltWithPurpose scaled our customer acquisition efforts. Their targeted paid social campaigns drove a 340% increase in fintech signups while cutting our Cost-Per-Acquisition by 24% within three months.",
      name: 'Sarah Mitchell',
      role: 'CEO, Finova Solutions',
      initials: 'SM',
      stars: 5,
    },
    {
      text: "Our organic traffic has exploded. Thanks to their technical SEO audit and semantic content strategy, we ranked on page 1 for our primary search terms and doubled our e-commerce sales.",
      name: 'James Rodriguez',
      role: 'Founder, ShopEase',
      initials: 'JR',
      stars: 5,
    },
    {
      text: "They completely revitalized our visual brand identity and mapped out a high-converting social media grid. They didn't just design assets — they built a social community that drives revenue.",
      name: 'Priya Sharma',
      role: 'Marketing Head, GreenLeaf',
      initials: 'PS',
      stars: 5,
    },
  ];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the brands 
            we've helped succeed.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="glass-card testimonial-card" key={index}>
              <span className="testimonial-quote">"</span>
              <div className="testimonial-stars">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span className="star" key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
