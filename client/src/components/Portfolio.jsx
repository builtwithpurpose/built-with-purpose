import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 'finova',
      title: 'Finova Dashboard',
      description: 'A high-performance fintech dashboard with real-time data visualization and secure payment processing capabilities.',
      image: '/portfolio/finova.svg',
      alt: 'Finova Fintech Dashboard Web Application Design',
      tags: ['React', 'Node.js', 'Tailwind CSS'],
    },
    {
      id: 'shopease',
      title: 'ShopEase E-Commerce',
      description: 'A modern e-commerce platform featuring seamless checkout, inventory management, and personalized recommendations.',
      image: '/portfolio/shopease.svg',
      alt: 'ShopEase E-Commerce Website Development Platform',
      tags: ['Next.js', 'Stripe', 'Framer Motion'],
    },
    {
      id: 'travelgo',
      title: 'TravelGo App',
      description: 'An elegant travel booking application with interactive maps, itinerary planning, and social sharing features.',
      image: '/portfolio/travelgo.svg',
      alt: 'TravelGo Booking Web Application UI UX Design',
      tags: ['React Native', 'GraphQL', 'AWS'],
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-secondary-text text-lg">
            A showcase of our finest web development, SEO, and UI/UX engineering projects delivered for clients in Coimbatore and across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group glass-card overflow-hidden flex flex-col p-0 border border-white/40"
            >
              {/* Large Image with Hover Zoom */}
              <div className="relative h-60 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  width="800"
                  height="500"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow bg-white/50">
                <h3 className="text-2xl font-bold font-heading text-text mb-3">{project.title}</h3>
                
                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/80 border border-border/50 text-xs font-semibold text-secondary-text rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-secondary-text mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Visit Website Button */}
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-white border border-border text-text font-button font-semibold rounded-xl hover:bg-background hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  Start Similar Project
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
