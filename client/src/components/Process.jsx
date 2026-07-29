import { motion } from 'framer-motion';
import { Search, PenTool, Layout, Code2, CheckSquare, Rocket, LifeBuoy } from 'lucide-react';

const Process = () => {
  const steps = [
    { id: 1, title: 'Discovery', icon: <Search size={24} />, description: 'We start by understanding your goals, target audience, and business requirements.' },
    { id: 2, title: 'Planning', icon: <PenTool size={24} />, description: 'Creating a strategic roadmap, site architecture, and wireframes for your project.' },
    { id: 3, title: 'Design', icon: <Layout size={24} />, description: 'Crafting beautiful, user-centric interfaces with premium aesthetics and smooth interactions.' },
    { id: 4, title: 'Development', icon: <Code2 size={24} />, description: 'Building robust, scalable solutions using cutting-edge modern technologies.' },
    { id: 5, title: 'Testing', icon: <CheckSquare size={24} />, description: 'Rigorous quality assurance to ensure flawless performance across all devices.' },
    { id: 6, title: 'Launch', icon: <Rocket size={24} />, description: 'Deploying your project to production and making it available to the world.' },
    { id: 7, title: 'Support', icon: <LifeBuoy size={24} />, description: 'Ongoing maintenance, updates, and optimization to ensure long-term success.' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="process">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-secondary-text text-lg">
            A proven, transparent framework that takes your project from concept to launch with precision and excellence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full -translate-x-1/2 hidden md:block"
          />
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full -translate-x-1/2 md:hidden"
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`relative flex items-center md:justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Desktop Empty Space */}
                <div className="hidden md:block w-5/12"></div>

                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-background flex items-center justify-center text-primary shadow-soft z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-24 md:pl-0">
                  <div className={`bg-background p-6 rounded-2xl border border-border shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-primary font-bold text-sm mb-2 block">Phase 0{step.id}</span>
                    <h3 className="text-xl font-bold font-heading text-text mb-2">{step.title}</h3>
                    <p className="text-secondary-text">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
