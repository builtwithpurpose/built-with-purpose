import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from './Icons';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta" ref={sectionRef}>
      <div className="cta-shape cta-shape-1"></div>
      <div className="cta-shape cta-shape-2"></div>
      <div className="cta-shape cta-shape-3"></div>

      <div className="container">
        <div className="cta-content" ref={contentRef}>
          <Sparkles size={48} className="cta-icon" />
          <h2 className="cta-title">Ready to Scale Your Brand?</h2>
          <p className="cta-subtitle">
            Let&apos;s partner to dominate search results, captivate social audiences, and
            accelerate your revenue. Get in touch for a free digital marketing and brand audit.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-cta-primary">
              Get Free Marketing Audit <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-cta-secondary">
              Schedule a Call <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
