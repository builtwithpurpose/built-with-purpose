import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We provide comprehensive digital marketing services including SEO, Social Media Marketing, Paid Advertising, Branding & Graphic Design, Content Marketing, and custom Web & App Development.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. A standard website redesign might take 4-6 weeks, while a comprehensive branding and digital marketing campaign is usually an ongoing partnership.'
    },
    {
      question: 'Do you work with startups?',
      answer: 'Yes! We love working with startups. We help new businesses establish their brand identity, build their digital presence, and scale their customer acquisition rapidly.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer custom quotes based on your specific needs and goals. We believe in transparent pricing and will provide a detailed breakdown during our initial discovery call.'
    },
    {
      question: 'Will I have a dedicated project manager?',
      answer: 'Absolutely. Every client is assigned a dedicated project manager who will be your main point of contact, ensuring clear communication and timely delivery throughout the project.'
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
