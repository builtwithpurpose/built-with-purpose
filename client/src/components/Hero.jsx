import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden" id="home">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px] mix-blend-multiply" />
        <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-8 z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-border/50 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-sm font-medium text-text">Award-Winning Web Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight text-text">
              Grow your Business <br className="hidden md:block" />
              <span className="text-gradient">With Purpose</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-text max-w-lg leading-relaxed">
              We craft high-performance, beautifully designed digital experiences that drive real results for ambitious brands and startups.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#portfolio" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-button font-semibold shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
                View Our Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-white text-text border border-border px-8 py-4 rounded-full font-button font-semibold shadow-sm hover:border-primary hover:bg-primary/5 transition-all duration-300">
                <Play size={18} />
                Start a Project
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-border/50 w-full">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                ))}
              </div>
              <div className="text-sm text-secondary-text font-medium">
                <span className="text-text font-bold block">Trusted by 20+</span>
                Growing companies
              </div>
            </div>
          </motion.div>

          {/* Right Content - Mockups */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full z-10"
          >
            {/* Main Laptop Mockup */}
            <motion.div 
              animate={floatAnimation}
              className="absolute top-10 right-0 w-[90%] md:w-[80%] rounded-2xl bg-white p-2 shadow-2xl border border-white/40 backdrop-blur-xl z-20"
            >
              <div className="rounded-xl overflow-hidden bg-background aspect-[16/10] relative">
                {/* Mockup Top Bar */}
                <div className="w-full h-6 bg-border/30 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                {/* Mockup Body Content */}
                <div className="p-4 flex flex-col gap-4">
                  <div className="w-full h-8 bg-border/20 rounded-md"></div>
                  <div className="flex gap-4">
                    <div className="w-1/3 h-24 bg-primary/10 rounded-lg"></div>
                    <div className="w-2/3 h-24 bg-border/20 rounded-lg"></div>
                  </div>
                  <div className="w-full h-32 bg-border/10 rounded-lg"></div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [10, -10, 10], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute bottom-20 -left-10 w-64 glass-card p-4 z-30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-text">98% Satisfaction</div>
                  <div className="text-xs text-secondary-text">Client success rate</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [-15, 15, -15], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute -top-4 right-10 w-48 glass-card p-4 z-10"
            >
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-primary">2.5x</div>
                <div className="text-xs font-medium text-secondary-text">Average Revenue Growth</div>
                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden mt-1">
                  <div className="w-[85%] h-full bg-gradient-to-r from-primary to-secondary"></div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
