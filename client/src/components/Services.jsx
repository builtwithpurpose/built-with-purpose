import { motion } from 'framer-motion';
import { Search, Share2, Megaphone, Palette, FileText, Code, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search size={28} />,
      title: 'Search Engine Optimization',
      description: 'Dominate search results, acquire high-intent organic traffic, and scale your leads without recurring ad spend.',
      color: 'from-blue-500 to-primary',
    },
    {
      icon: <Share2 size={28} />,
      title: 'Social Media Marketing',
      description: 'Build a thriving community, establish brand authority, and maintain stunning feed aesthetics across platforms.',
      color: 'from-purple-500 to-secondary',
    },
    {
      icon: <Megaphone size={28} />,
      title: 'Paid Social Advertising',
      description: 'Scale your revenue fast with high-performance, conversion-optimized campaigns on Meta Ads, Google Ads, and TikTok.',
      color: 'from-emerald-400 to-accent',
    },
    {
      icon: <Palette size={28} />,
      title: 'Branding & Design',
      description: 'Establish a memorable identity. We craft premium logos, visual brand books, marketing collaterals, and ad creatives.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: <FileText size={28} />,
      title: 'Content Marketing',
      description: 'Engage and nurture your prospects with authority copywriting, blog strategy, email marketing funnels, and lead magnets.',
      color: 'from-rose-400 to-red-500',
    },
    {
      icon: <Code size={28} />,
      title: 'Web & App Development',
      description: 'High-performance, search-optimized web applications and landing pages designed specifically to load fast and drive conversions.',
      color: 'from-indigo-400 to-blue-600',
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
            From strategic brand planning to high-ROI campaigns, we offer comprehensive growth and digital marketing solutions tailored to your business goals.
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
              className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Gradient Top Border Effect */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white shadow-md`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold font-heading text-text mb-3">
                {service.title}
              </h3>
              
              <p className="text-secondary-text mb-6 line-clamp-3">
                {service.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-text font-semibold hover:text-primary transition-colors">
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
