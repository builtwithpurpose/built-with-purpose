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
      y: 40,
      scale: 0.95,
      opacity: 0.8,
      zIndex: 9,
      rotate: -3,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    behind2: {
      x: 0,
      y: 80,
      scale: 0.9,
      opacity: 0.5,
      zIndex: 8,
      rotate: 3,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    dismissed: {
      x: 300,
      y: -50,
      scale: 0.8,
      opacity: 0,
      zIndex: 11,
      rotate: 15,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
  };

  return (
    <section className="team section" id="team">
      <div className="container team-container">
        {/* Left Side: Copy & Controls */}
        <div className="team-content">
          <div className="section-label">Our Team</div>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Creators</span>
          </h2>
          <p className="section-subtitle team-subtitle">
            A passionate collective of designers, engineers, and strategists
            committed to building exceptional digital experiences. Swipe or click
            to explore our core members.
          </p>

          <div className="team-controls">
            <button className="team-nav-btn" onClick={handlePrev} aria-label="Previous" style={{ fontSize: '1.2rem', fontFamily: 'serif' }}>
              &larr;
            </button>
            <button className="team-nav-btn" onClick={handleNext} aria-label="Next" style={{ fontSize: '1.2rem', fontFamily: 'serif' }}>
              &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Stacking Cards Slider */}
        <div className="team-slider">
          <div className="team-stack-wrapper">
            {team.map((member, i) => {
              // Calculate relative position based on absolute index
              let pos = i - activeMod;
              if (pos < 0) pos += team.length;

              // Map position to variant name
              let variant = 'active';
              if (pos === 1) variant = 'behind1';
              else if (pos === 2) variant = 'behind2';
              else if (pos === 3) variant = 'dismissed';

              const isActive = pos === 0;

              return (
                <motion.div
                  key={member.name}
                  className="glass-card team-card-stack"
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
                  style={{ '--card-accent': `var(${member.color})` }}
                >
                  <div className="team-card-inner">
                    <div className="team-avatar-lg">
                      <span className="avatar-text">{member.initials}</span>
                      <div className="avatar-glow" />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">{member.name}</h3>
                      <p className="team-role-pill">{member.role}</p>
                    </div>
                    <div className="team-social">
                      {Object.entries(member.socials).map(([platform, url]) => (
                        <a
                          href={url}
                          key={platform}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={platform}
                          aria-label={`Follow ${member.name} on ${platform}`}
                          className="social-icon"
                          // Prevent drag from intercepting clicks
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
    </section>
  );
};

export default Team;
