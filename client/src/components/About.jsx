import { useState, useEffect, useRef } from 'react';

/* ── Animated counter hook ── */
function useCounter(target, duration = 1800, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const num = parseInt(target, 10);
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return count;
}

/* ── Stat counter chip ── */
function StatCounter({ value, label, suffix = '+', trigger }) {
  const num = useCounter(parseInt(value, 10), 1600, trigger);
  return (
    <div className="ab2-stat">
      <span className="ab2-stat-num">
        {num}
        {suffix}
      </span>
      <span className="ab2-stat-label">{label}</span>
    </div>
  );
}

/* ── Left Panel — "The Mind" ── */
function MindPanel({ active, onEnter, onLeave, onClick }) {
  const isExpanded = active === 'mind';
  const isShrunk   = active === 'engine';
  const countRef   = useRef(false);
  const [counted,  setCounted] = useState(false);

  useEffect(() => {
    if (isExpanded && !countRef.current) {
      countRef.current = true;
      setCounted(true);
    }
  }, [isExpanded]);

  return (
    <div
      className={`ab2-panel ab2-panel--mind ${isExpanded ? 'ab2-panel--expanded' : ''} ${isShrunk ? 'ab2-panel--shrunk' : ''}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* ambient blob */}
      <div className="ab2-blob ab2-blob--mind" />

      {/* ── INITIAL content (always visible, fades on expand) ── */}
      <div className={`ab2-initial ${isExpanded ? 'ab2-initial--hidden' : ''}`}>
        <span className="ab2-eyebrow">01</span>
        <h2 className="ab2-panel-heading">The<br />Mind</h2>
        <p className="ab2-panel-sub">The Human Element</p>

        {/* abstract team graphic */}
        <div className="ab2-team-graphic">
          {['KR', 'AS', 'MP', 'RJ', 'TK'].map((init, i) => (
            <div
              key={init}
              className="ab2-avatar"
              style={{ '--i': i, animationDelay: `${i * 0.18}s` }}
            >
              {init}
            </div>
          ))}
        </div>
      </div>

      {/* ── EXPANDED content ── */}
      <div className={`ab2-expanded ${isExpanded ? 'ab2-expanded--visible' : ''}`}>
        <span className="ab2-eyebrow ab2-eyebrow--sm">About Us</span>
        <h3 className="ab2-expand-title">
          Crafting Identities,{' '}
          <span className="gradient-text">Driving Growth</span>
        </h3>

        <p className="ab2-expand-body">
          Founded with a singular mission — to build digital brands that command
          attention and are strategically designed to connect with your target audience.
          From memorable branding to authority content, every design and word serves a purpose.
        </p>
        <p className="ab2-expand-body">
          We partner with ambitious startups and businesses to tell their stories, build
          loyal communities, and turn search intent into measurable business growth.
        </p>

        {/* Stat counters */}
        <div className="ab2-stats-row">
          <StatCounter value="7"  label="Experts"         trigger={counted} />
          <StatCounter value="15" label="Brands Scaled"   trigger={counted} />
          <StatCounter value="30" label="Campaigns Run"   trigger={counted} />
        </div>

        {/* Minimal tag pills */}
        <div className="ab2-pills">
          {['SEO Strategy', 'Social Media', 'Paid Ads', 'Branding & Design', 'Content Marketing'].map((t) => (
            <span key={t} className="ab2-pill">{t}</span>
          ))}
        </div>
      </div>

      {/* hover cue arrow */}
      <div className={`ab2-cue ${isExpanded ? 'ab2-cue--hidden' : ''}`}>
        <span>Explore</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

/* ── Right Panel — "The Engine" ── */
function EnginePanel({ active, onEnter, onLeave, onClick }) {
  const isExpanded = active === 'engine';
  const isShrunk   = active === 'mind';

  const pillars = [
    {
      icon: '⬡',
      title: 'Paid Social Advertising',
      desc: 'Targeted, high-converting ad funnels on Meta & Google Ads that turn clicks into revenue.',
    },
    {
      icon: '◈',
      title: 'Social Media Marketing',
      desc: 'Organic growth, consistent feed aesthetics, and brand authority across all channels.',
    },
    {
      icon: '↻',
      title: 'Conversion-Focused Web Dev',
      desc: 'Fast, SEO-optimized landing pages and applications designed to convert traffic.',
    },
  ];

  return (
    <div
      className={`ab2-panel ab2-panel--engine ${isExpanded ? 'ab2-panel--expanded' : ''} ${isShrunk ? 'ab2-panel--shrunk' : ''}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* ambient blob */}
      <div className="ab2-blob ab2-blob--engine" />

      {/* divider line */}
      <div className="ab2-divider" />

      {/* ── INITIAL content ── */}
      <div className={`ab2-initial ${isExpanded ? 'ab2-initial--hidden' : ''}`}>
        <span className="ab2-eyebrow ab2-eyebrow--right">02</span>
        <h2 className="ab2-panel-heading ab2-panel-heading--right">The<br />Engine</h2>
        <p className="ab2-panel-sub">The Performance Philosophy</p>

        {/* code snippet preview */}
        <div className="ab2-code-preview">
          <div className="ab2-code-chrome">
            <span className="ab2-code-dot" style={{ background: '#ff5f57' }} />
            <span className="ab2-code-dot" style={{ background: '#ffbd2e' }} />
            <span className="ab2-code-dot" style={{ background: '#28c840' }} />
            <span className="ab2-code-filename">scale.js</span>
          </div>
          <pre className="ab2-code-body">{
`const scale = async (brand) => {
  const targetAudience = await analyze(brand);
  const adsCampaigns   = await launchAds(targetAudience);
  return maximizeROI(adsCampaigns); // ✦ always
};`}
          </pre>
        </div>
      </div>

      {/* ── EXPANDED content ── */}
      <div className={`ab2-expanded ${isExpanded ? 'ab2-expanded--visible' : ''}`}>
        <span className="ab2-eyebrow ab2-eyebrow--sm">How We Scale</span>
        <h3 className="ab2-expand-title">
          Scaling With{' '}
          <span className="gradient-text">Purpose</span>
        </h3>

        <div className="ab2-pillars">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="ab2-pillar"
              style={{ transitionDelay: isExpanded ? `${0.15 + i * 0.08}s` : '0s' }}
            >
              <span className="ab2-pillar-icon">{p.icon}</span>
              <div>
                <div className="ab2-pillar-title">{p.title}</div>
                <div className="ab2-pillar-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack pills */}
        <div className="ab2-pills ab2-pills--engine">
          {['Meta Ads', 'Google Ads', 'SEO Tools', 'Next.js', 'Google Analytics', 'Figma', 'Copywriting', 'E-commerce'].map((t) => (
            <span key={t} className="ab2-pill ab2-pill--code">{t}</span>
          ))}
        </div>
      </div>

      {/* hover cue arrow */}
      <div className={`ab2-cue ab2-cue--right ${isExpanded ? 'ab2-cue--hidden' : ''}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Explore</span>
      </div>
    </div>
  );
}

/* ── Main Component ── */
const About = () => {
  const [active, setActive] = useState(null); // 'mind' | 'engine' | null
  const resetTimer = useRef(null);
  const enterTimer = useRef(null);

  const handleEnter = (panel) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    // Require intentional hover (250ms) before expanding to prevent accidental triggering on scroll
    enterTimer.current = setTimeout(() => {
      setActive(panel);
    }, 250);
  };

  const handleLeave = () => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
  };

  const handleCanvasLeave = () => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
    resetTimer.current = setTimeout(() => setActive(null), 120);
  };

  const handleClick = (panel) => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setActive(panel);
  };

  return (
    <section className="ab2-section" id="about">
      {/* Section label above the canvas */}
      <div className="ab2-header">
        <div className="section-label">About Us</div>
      </div>

      {/* Full-width split canvas */}
      <div
        className="ab2-canvas"
        onMouseLeave={handleCanvasLeave}
      >
        <MindPanel
          active={active}
          onEnter={() => handleEnter('mind')}
          onLeave={handleLeave}
          onClick={() => handleClick('mind')}
        />
        <EnginePanel
          active={active}
          onEnter={() => handleEnter('engine')}
          onLeave={handleLeave}
          onClick={() => handleClick('engine')}
        />
      </div>
    </section>
  );
};

export default About;
