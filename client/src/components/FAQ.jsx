import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does Built With Purpose offer in Coimbatore?',
      answer: 'We provide custom web development, business website development, React web applications, UI/UX design, and technical SEO services in Coimbatore for startups and growing enterprises.'
    },
    {
      question: 'Do you provide web development services in Coimbatore?',
      answer: 'Yes. Built With Purpose is based in Coimbatore, Tamil Nadu, engineering fast, responsive, and search-optimized websites for local businesses and global brands alike.'
    },
    {
      question: 'Do you provide SEO services in Coimbatore?',
      answer: 'Yes! We deliver technical SEO audits, on-page keyword optimization, local search strategy, and Schema.org structured data to help your business rank higher on Google.'
    },
    {
      question: 'How long does a typical web development project take?',
      answer: 'Standard business websites take 3 to 5 weeks from discovery to launch, while complex React web applications take 4 to 8 weeks depending on requirements.'
    },
    {
      question: 'How can I start a website development or SEO project with Built With Purpose?',
      answer: 'You can reach out through our contact form or call us directly. We will analyze your project requirements and provide a detailed strategy, estimate, and timeline.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-secondary-text text-lg">
            Everything you need to know about our services and how we work.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold font-heading text-text text-lg pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${activeIndex === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-secondary-text">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
