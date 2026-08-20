import { motion } from 'framer-motion';
import { ArrowRight, Play, Rocket, BarChart3, Clock } from 'lucide-react';

const Hero = () => {
  const avatars = [
    { src: '/avatars/avatar1.svg', alt: 'Client Partner Avatar 1' },
    { src: '/avatars/avatar2.svg', alt: 'Client Partner Avatar 2' },
    { src: '/avatars/avatar3.svg', alt: 'Client Partner Avatar 3' },
    { src: '/avatars/avatar4.svg', alt: 'Client Partner Avatar 4' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-to-br from-white to-blue-50/50" id="home">
      {/* Background Subtle Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-[100px] rotate-45 bg-blue-300/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] rounded-full bg-indigo-300/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start gap-8 z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
              <span className="text-sm font-medium text-text">Web Development &amp; SEO Company in Coimbatore</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight text-text">
              Build Websites That <br className="hidden md:block" />
              <span className="text-gradient">Grow Your Business</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-text max-w-lg leading-relaxed">
              We craft high-performance websites, React applications, and ROI-driven SEO strategies for ambitious brands in Coimbatore and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#portfolio" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-button font-semibold shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:shadow-[0_12px_40px_rgb(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300">
                View Our Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="group flex items-center justify-center gap-2 bg-white text-text border border-border px-8 py-4 rounded-full font-button font-semibold shadow-sm hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300">
                <Play size={18} className="text-primary group-hover:scale-110 transition-transform" />
                Start a Project
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-border/50 w-full mt-2">
              <div className="flex -space-x-4">
                {avatars.map((av, i) => (
                  <img 
                    key={i} 
                    src={av.src} 
                    alt={av.alt} 
                    width="40"
                    height="40"
                    loading="eager"
                    decoding="async"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" 
                  />
                ))}
              </div>
              <div className="text-sm text-secondary-text font-medium">
                <span className="text-text font-bold block">Trusted by 50+</span>
                Growing companies in Coimbatore &amp; Tamil Nadu
              </div>
            </div>
          </motion.div>

          {/* Right Content - Laptop Mockup & Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[500px] lg:h-[600px] w-full z-10 flex items-center justify-center"
          >
            {/* Main Laptop Mockup Image */}
            <div className="relative w-[95%] md:w-[90%] z-20">
              <picture>
                <source srcSet="/laptop-mockup.webp" type="image/webp" />
                <img 
                  src="/laptop-mockup.png" 
                  alt="High Performance Web Development Application Mockup by Built With Purpose" 
                  width="1000"
                  height="625"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                />
              </picture>
            </div>

            {/* Floating Card 1: 50+ Projects */}
            <div className="absolute top-12 -left-4 md:-left-8 w-48 glass-card p-4 z-30 animate-[bounce_6s_infinite_ease-in-out]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Rocket size={24} />
                </div>
                <div>
                  <div className="text-lg font-bold text-text">50+</div>
                  <div className="text-xs text-secondary-text font-medium">Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2: SEO Optimised */}
            <div className="absolute bottom-24 -right-4 md:-right-8 w-52 glass-card p-4 z-30 animate-[bounce_7s_infinite_ease-in-out]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-text">SEO Optimised</div>
                  <div className="text-xs text-secondary-text font-medium">Rank higher naturally</div>
                </div>
              </div>
            </div>

            {/* Floating Card 3: Fast Delivery */}
            <div className="absolute -bottom-2 left-10 md:left-20 w-48 glass-card p-4 z-30 animate-[bounce_5s_infinite_ease-in-out]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-text">Fast Delivery</div>
                  <div className="text-xs text-secondary-text font-medium">Quick turnarounds</div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
