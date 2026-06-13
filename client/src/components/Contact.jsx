import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to connect to the server. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: '📍', title: 'Location', detail: 'Singanallur,CBE-005' },
    { icon: '📧', title: 'Email', detail: 'builtwithpurposein@gmail.com' },
    { icon: '📞', title: 'Phone', detail: '+91 98422 62888' },
  ];

  const socialLinks = [
    { icon: '𝕏', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'in', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: '⌨', url: 'https://github.com', label: 'GitHub' },
    { icon: '▶', url: 'https://youtube.com', label: 'YouTube' },
    { icon: '📷', url: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? We'd love to hear about it.
            Send us a message and let's start the conversation.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Whether you have a question, a project idea, or just want to say
              hello — our inbox is always open. We typically respond within
              24 hours.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div className="contact-item" key={index}>
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 style={{ marginBottom: '16px' }}>Follow Us</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    href={social.url}
                    className="social-link"
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
