import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Mail, Phone } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_xsdjkfd';
const EMAILJS_TEMPLATE_ID = 'template_l3cww95';
const EMAILJS_PUBLIC_KEY = 'VkA1103v4-IFLy0wx';

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
    { icon: <MapPin size={20} />, title: 'Location', detail: 'Singanallur, CBE-005' },
    { icon: <Mail size={20} />, title: 'Email', detail: 'builtwithpurposein@gmail.com' },
    { icon: <Phone size={20} />, title: 'Phone', detail: '+91 98422 62888' },
  ];

  const socialLinks = [
    { icon: '𝕏', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'in', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: '⌨', url: 'https://github.com', label: 'GitHub' },
    { icon: '▶', url: 'https://youtube.com', label: 'YouTube' },
    { icon: '📷', url: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <section className="py-24 bg-white relative" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-6">
            Let's Scale Your <span className="text-gradient">Brand</span>
          </h2>
          <p className="text-secondary-text text-lg">
            Ready to dominate search results and scale your ROI? 
            Send us a message to request your free digital marketing and brand audit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-text mb-4">Let's Connect</h3>
            <p className="text-secondary-text mb-8">
              Whether you have a question, a project idea, or just want to say hello — our inbox is always open. We typically respond within 24 hours.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-primary shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-1">{item.title}</h4>
                    <p className="text-secondary-text">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-bold text-text mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-secondary-text hover:text-primary hover:border-primary hover:shadow-soft transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-soft">
            <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-semibold text-text text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white border border-border rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-semibold text-text text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-white border border-border rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-semibold text-text text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-border rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold text-text text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-border rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text resize-none"
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-button font-bold py-4 rounded-xl shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
