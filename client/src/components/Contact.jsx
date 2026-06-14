import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free tier: 200 emails/month)
// 2. Create an Email Service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
//    Map template variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Go to Account → API Keys → copy your Public Key
// Replace the placeholder strings below with your actual credentials:
const EMAILJS_SERVICE_ID = 'service_xsdjkfd';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_l3cww95';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'VkA1103v4-IFLy0wx';   // e.g. 'abcDEFghiJKL012'
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);
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
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus({
        type: 'success',
        message: "🎉 Message sent successfully! We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly.',
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
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form" ref={formRef}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
