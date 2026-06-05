const Testimonials = () => {
  const testimonials = [
    {
      text: "Built with Purpose transformed our online presence completely. Their team delivered a stunning website that exceeded our expectations and doubled our conversion rate within three months.",
      name: 'Sarah Mitchell',
      role: 'CEO, Finova Solutions',
      initials: 'SM',
      stars: 5,
    },
    {
      text: "Working with this team was an absolute pleasure. They understood our vision from day one and translated it into a beautiful, functional e-commerce platform that our customers love.",
      name: 'James Rodriguez',
      role: 'Founder, ShopEase',
      initials: 'JR',
      stars: 5,
    },
    {
      text: "The attention to detail and technical expertise is outstanding. They didn't just build us a website — they built us a growth engine. Highly recommend for any serious business.",
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
