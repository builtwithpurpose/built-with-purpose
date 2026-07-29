import { motion } from 'framer-motion';
import { Zap, Search, MonitorSmartphone, TrendingUp, HeartHandshake, Cpu } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Fast Delivery',
      description: 'We respect your time. Our agile methodology ensures rapid deployment without compromising on quality.'
    },
    {
      icon: <Search size={24} />,
      title: 'SEO Optimised',
      description: 'Built with search engines in mind, ensuring your brand ranks higher and attracts organic traffic from day one.'
    },
    {
      icon: <MonitorSmartphone size={24} />,
      title: 'Responsive Design',
      description: 'Flawless experiences across all devices. Your website will look stunning on desktops, tablets, and mobiles.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Scalable Solutions',
      description: 'Architecture that grows with you. We build robust systems that can handle increased traffic and complexity.'
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Lifetime Support',
      description: 'We are your long-term partners. Enjoy continuous support, updates, and maintenance long after launch.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Modern Technology',
      description: 'Utilizing the latest tech stack like React, Next.js, and Node.js to deliver high-performance applications.'
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-6">
            Built for <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-secondary-text text-lg">
            We combine premium design aesthetics with cutting-edge technology to deliver digital experiences that stand out and perform.
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
