import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "BuiltWithPurpose scaled our customer acquisition efforts. Their targeted paid social campaigns drove a 340% increase in fintech signups while cutting our Cost-Per-Acquisition by 24% within three months.",
      name: 'Sarah Mitchell',
      role: 'CEO, Finova Solutions',
      image: '/avatars/avatar1.svg',
      stars: 5,
    },
    {
      text: "Our organic traffic has exploded. Thanks to their technical SEO audit and semantic content strategy, we ranked on page 1 for our primary search terms in Coimbatore and doubled our e-commerce sales.",
      name: 'James Rodriguez',
      role: 'Founder, ShopEase',
      image: '/avatars/avatar2.svg',
      stars: 5,
    },
    {
      text: "They completely revitalized our visual brand identity and mapped out a high-converting website design. They didn't just design assets — they built a social community that drives revenue.",
      name: 'Priya Sharma',
      role: 'Marketing Head, GreenLeaf',
      image: '/avatars/avatar3.svg',
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="testimonials">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-secondary-text text-lg">
            Don't just take our word for it — hear from the brands we've helped succeed in Coimbatore and Tamil Nadu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-soft border border-border hover:shadow-premium hover:-translate-y-2 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 w-16 h-16 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              
              <div className="flex gap-1 mb-6 text-yellow-400" aria-label={`Rated ${testimonial.stars} out of 5 stars`}>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-secondary-text text-lg italic mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-border/50 pt-6 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={`Photo of ${testimonial.name}`} 
                  width="48"
                  height="48"
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h3 className="font-bold font-heading text-text text-base">{testimonial.name}</h3>
                  <p className="text-sm text-secondary-text font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
