import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden bg-[#0B0F19] text-white p-12 md:p-20 text-center shadow-2xl border border-white/10"
        >
          {/* Animated Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[100%] rounded-full bg-primary/30 blur-[100px] mix-blend-screen" />
            <div className="absolute -bottom-[50%] -right-[10%] w-[70%] h-[100%] rounded-full bg-secondary/30 blur-[100px] mix-blend-screen" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="mb-8 p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20"
            >
              <Sparkles size={32} className="text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
              Ready to Scale Your Brand?
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's partner to dominate search results, captivate social audiences, and accelerate your revenue. Get in touch for a free digital marketing and brand audit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a 
                href="#contact" 
                className="group flex items-center justify-center gap-2 bg-white text-text px-8 py-4 rounded-full font-button font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Free Marketing Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-button font-semibold backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
