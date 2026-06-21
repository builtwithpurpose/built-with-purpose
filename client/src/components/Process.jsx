import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Lightbulb, Code2, Rocket } from './Icons';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery & Audit',
    description:
      'We analyze your current traffic, organic search rankings, competitor marketing campaigns, and target audiences to map out a clear growth strategy.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Brand & Funnel Design',
    description:
      'Our creative team designs high-converting visual assets, builds out ad creative frameworks, and writes persuasive copywriting blueprints.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Launch & Execution',
    description:
      'We launch highly targeted paid social campaigns, deploy SEO-optimized content, and set up conversion tracking architectures.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Optimize & Scale',
    description:
      'We monitor campaign performance in real-time, shifting budgets to winning creatives and scaling organic content to maximize ROI.',
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stepsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our Proven Process</h2>
          <p className="section-subtitle">
            A streamlined, transparent framework that takes your brand from audit to scale —
            on time, within budget, and with maximum ROI.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                className="process-step"
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
              >
                <div className="process-number">{step.number}</div>
                <div className="process-connector"></div>
                <div className="process-card">
                  <Icon size={32} />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
