import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Palette, Code, Layers, Rocket, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: 'Web Development Services',
      link: '/web-development',
      linkText: 'Explore Web Development Services',
      description: 'High-performance React websites, Vite web applications, and custom platforms built to rank high on Google and drive user conversions in Coimbatore and beyond.',
      color: 'from-indigo-400 to-blue-600',
    },
    {
      icon: <Search size={28} />,
      title: 'SEO Services in Coimbatore',
      link: '/seo-services',
      linkText: 'Explore SEO Services in Coimbatore',
      description: 'Technical SEO audits, keyword optimization, local search visibility, and high-intent organic growth strategies for Coimbatore businesses.',
      color: 'from-blue-500 to-primary',
    },
    {
      icon: <Palette size={28} />,
      title: 'UI/UX & Website Design',
      link: '/ui-ux-design',
      linkText: 'Explore UI/UX Design Services',
      description: 'User-centered interface design, brand identity systems, mobile responsiveness, and high-converting landing page visual layouts.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: <Layers size={28} />,
      title: 'React & MERN Stack Development',
      link: '/react-development',
      linkText: 'Explore React Development Services',
      description: 'Scalable full-stack MERN (MongoDB, Express, React, Node) applications designed for rapid execution and seamless security.',
      color: 'from-purple-500 to-secondary',
    },
    {
      icon: <Rocket size={28} />,
      title: 'Small Business & Startup Websites',
      link: '/business-website-development',
      linkText: 'Explore Business Website Development',
      description: 'Affordable, fast-loading, and conversion-focused web solutions crafted specifically for startups and growing enterprises.',
      color: 'from-emerald-400 to-accent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-background relative" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-6">
            Services That <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-secondary-text text-lg">
            From strategic website design to technical SEO in Coimbatore, we deliver digital solutions tailored to elevate your business.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border border-border flex flex-col"
            >
              {/* Gradient Top Border Effect */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white shadow-md`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold font-heading text-text mb-3">
                {service.title}
              </h3>
              
              <p className="text-secondary-text mb-6 line-clamp-3 flex-grow">
                {service.description}
              </p>
              
              <Link 
                to={service.link} 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors mt-auto"
                aria-label={service.linkText}
              >
                {service.linkText}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
