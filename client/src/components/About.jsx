import { motion } from 'framer-motion';
import { Zap, Search, MonitorSmartphone, TrendingUp, HeartHandshake, Cpu } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Fast Delivery',
      description: 'We respect your time. Our agile engineering process ensures rapid deployment without compromising code quality.'
    },
    {
      icon: <Search size={24} />,
      title: 'SEO Optimised',
      description: 'Built with search engines in mind, ensuring your business ranks higher and attracts organic traffic from day one.'
    },
    {
      icon: <MonitorSmartphone size={24} />,
      title: 'Responsive Design',
      description: 'Flawless experiences across all devices. Your website will look stunning on desktops, tablets, and mobile screens.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Scalable Solutions',
      description: 'Architecture that grows with you. We build robust React applications that handle increasing user traffic seamlessly.'
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Long-term Support',
      description: 'We are your long-term digital partners, offering ongoing security updates, technical monitoring, and maintenance.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Modern Technology',
      description: 'Utilizing state-of-the-art tech stacks like React, Vite, and Node.js to deliver enterprise-grade performance.'
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-6">
            Why Choose <span className="text-gradient">Built With Purpose?</span>
          </h2>
          <p className="text-secondary-text text-lg">
            We combine premium design aesthetics with cutting-edge React technology to deliver high-ranking digital experiences. As a dedicated web development and SEO company in Coimbatore, Tamil Nadu, we engineer websites for local businesses and global brands alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-text mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-text">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
