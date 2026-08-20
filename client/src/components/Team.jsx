import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Kishore R',
    role: 'Creative Director',
    initials: 'KR',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    color: '--primary',
  },
  {
    name: 'Janagiraman',
    role: 'SEO Specialist',
    initials: 'JR',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      dribbble: 'https://dribbble.com',
    },
    color: '--secondary',
  },
  {
    name: 'Aakash S',
    role: 'Full-Stack Developer',
    initials: 'AS',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    color: '--accent',
  },
  {
    name: 'C S Sri Darshan',
    role: 'Marketing Lead',
    initials: 'SD',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    color: '--primary-light',
  },
];

const iconMap = {
  twitter: '𝕏',
  linkedin: 'in',
  github: '⌨',
  dribbble: '◉',
  instagram: '📷',
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Team = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => prev - 1);

  // Auto-play the slider strictly every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Derive the active index modulo team length to always be positive
  const activeMod = ((index % team.length) + team.length) % team.length;

  const cardVariants = {
    active: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    behind1: {
      x: 0,
      y: 24,
      scale: 0.94,
      opacity: 0.85,
      zIndex: 9,
      rotate: -2,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    behind2: {
      x: 0,
      y: 48,
      scale: 0.88,
      opacity: 0.6,
      zIndex: 8,
      rotate: 2,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    dismissed: {
      x: 250,
      y: -20,
      scale: 0.8,
      opacity: 0,
      zIndex: 11,
      rotate: 12,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="team">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copy & Controls */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-primary font-bold tracking-wider uppercase text-sm block">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-text">
              Meet the <span className="text-gradient">Creators</span>
            </h2>
            <p className="text-secondary-text text-lg leading-relaxed max-w-md">
              A passionate collective of designers, engineers, and strategists
              committed to building exceptional digital experiences. Swipe or click
              to explore our core members.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <button 
                className="w-12 h-12 rounded-full border border-border bg-white text-text flex items-center justify-center shadow-sm hover:border-primary hover:text-primary hover:shadow-soft transition-all duration-300 text-lg font-serif"
                onClick={handlePrev} 
                aria-label="Previous team member"
              >
                &larr;
              </button>
              <button 
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-soft hover:bg-primary/90 transition-all duration-300 text-lg font-serif"
                onClick={handleNext} 
                aria-label="Next team member"
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* Right Side: Stacking Cards Slider Container */}
          <div className="relative w-full flex items-center justify-center py-6 min-h-[380px] sm:min-h-[420px] overflow-hidden">
            <div className="relative w-full max-w-[290px] sm:max-w-[360px] h-[320px] sm:h-[340px] flex items-center justify-center">
              {team.map((member, i) => {
                let pos = i - activeMod;
                if (pos < 0) pos += team.length;

                let variant = 'active';
                if (pos === 1) variant = 'behind1';
                else if (pos === 2) variant = 'behind2';
                else if (pos === 3) variant = 'dismissed';

                const isActive = pos === 0;

                return (
                  <motion.div
                    key={member.name}
                    className="absolute inset-0 w-full bg-white/90 backdrop-blur-xl border border-border/80 shadow-premium rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center cursor-grab active:cursor-grabbing select-none"
                    variants={cardVariants}
                    initial={false}
                    animate={variant}
                    drag={isActive ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        handleNext();
                      } else if (swipe > swipeConfidenceThreshold) {
                        handlePrev();
                      }
                    }}
                    whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
                  >
                    <div className="w-full flex flex-col items-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mb-4 relative shadow-sm">
                        <span className="text-2xl font-bold font-heading text-primary">{member.initials}</span>
                      </div>
                      
                      <div className="mb-5 text-center">
                        <h3 className="text-xl font-bold font-heading text-text mb-1">{member.name}</h3>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{member.role}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        {Object.entries(member.socials).map(([platform, url]) => (
                          <a
                            href={url}
                            key={platform}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={platform}
                            aria-label={`Follow ${member.name} on ${platform}`}
                            className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-sm text-secondary-text hover:text-primary hover:border-primary hover:shadow-soft transition-all duration-300"
                            onPointerDown={(e) => e.stopPropagation()}
                          >
                            {iconMap[platform]}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
