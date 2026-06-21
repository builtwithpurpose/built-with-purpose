import React, { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */
const products = [
  {
    id: 'finova',
    category: 'SEO & Paid Search',
    title: 'Finova Ads Scaling',
    description:
      'A high-performance paid ads scaling strategy built for modern fintech teams. Optimize marketing funnels, monitor cost-per-acquisition in real-time, track conversion signals, and scale budget ROAS from a single campaign dashboard.',
    tags: ['Meta Ads', 'Google Ads', 'Paid Funnels'],
    accentVar: '--primary',
    accentRgbVar: '--primary-rgb',
    mockup: 'fintech',
  },
  {
    id: 'shopease',
    category: 'E-Commerce · Organic Growth',
    title: 'ShopEase SEO Campaign',
    description:
      'A next-generation search engine optimization campaign resulting in massive organic visibility. Developed with technical SEO audits, keyword research, semantic copywriting, and backlink networks to drive organic sales.',
    tags: ['SEO Audit', 'Content Strategy', 'Backlinks'],
    accentVar: '--secondary',
    accentRgbVar: '--secondary-rgb',
    mockup: 'ecommerce',
  },
  {
    id: 'travelgo',
    category: 'Branding & Social media',
    title: 'TravelGo Brand Identity',
    description:
      'A premium visual identity reboot and Instagram aesthetic map. Combined with targeted social media content, audience demographics research, and high-impact social ads to launch TravelGo as a leading lifestyle brand.',
    tags: ['Brand Logo Design', 'Aesthetic Mapping', 'Social Ads'],
    accentVar: '--accent',
    accentRgbVar: '--accent-rgb',
    mockup: 'travel',
  },
];

/* ─────────────────────────────────────────────
   Dashboard Mockup Components
   ───────────────────────────────────────────── */

function FinovaMockup() {
  return (
    <div className="mockup-shell">
      {/* Window chrome */}
      <div className="mockup-chrome">
        <span className="chrome-dot chrome-dot--red" />
        <span className="chrome-dot chrome-dot--yellow" />
        <span className="chrome-dot chrome-dot--green" />
        <span className="chrome-title">Finova · Ads Dashboard</span>
      </div>

      {/* Top stat row */}
      <div className="mockup-stats-row">
        {[
          { label: 'Ad Spend', value: '$45K', delta: '+12.5%', up: true },
          { label: 'CPA (Average)', value: '$18.50', delta: '-24.3%', up: false },
          { label: 'Campaign ROAS', value: '4.2x', delta: '+8.2%', up: true },
        ].map((s) => (
          <div key={s.label} className="mockup-stat-pill">
            <span className="msp-label">{s.label}</span>
            <span className="msp-value">{s.value}</span>
            <span className={`msp-delta ${!s.up && s.label.includes('CPA') ? 'up' : s.up ? 'up' : 'down'}`}>{s.delta}</span>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="mockup-chart-area">
        <svg viewBox="0 0 340 90" className="mockup-linechart" preserveAspectRatio="none">
          <defs>
            <linearGradient id="fintechGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,70 C30,55 60,30 90,40 S150,20 180,28 S240,10 270,18 S310,8 340,5"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0,70 C30,55 60,30 90,40 S150,20 180,28 S240,10 270,18 S310,8 340,5 L340,90 L0,90 Z"
            fill="url(#fintechGrad)"
          />
        </svg>
        <div className="chart-labels">
          {['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'].map((m) => (
            <span key={m} className="chart-label">{m}</span>
          ))}
        </div>
      </div>

      {/* Activity feed */}
      <div className="mockup-feed">
        {[
          { icon: '↑', text: 'Conversion from Meta Ads · $18.50', time: '2m ago' },
          { icon: '↓', text: 'Ad spend daily cap optimized', time: '14m ago' },
          { icon: '↑', text: 'Google Search click leads to booking', time: '1h ago' },
        ].map((item, i) => (
          <div key={i} className="feed-row">
            <span className={`feed-icon ${item.icon === '↑' ? 'feed-icon--up' : 'feed-icon--down'}`}>{item.icon}</span>
            <span className="feed-text">{item.text}</span>
            <span className="feed-time">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcommerceMockup() {
  const keywords = [
    { name: 'Leather Tote Bags', pos: 'Pos #2', status: '+4 spots', green: true },
    { name: 'Canvas Sneakers', pos: 'Pos #5', status: '+8 spots', green: true },
    { name: 'Merino Wool Sweater', pos: 'Pos #1', status: 'Stable', green: true },
  ];
  return (
    <div className="mockup-shell">
      <div className="mockup-chrome">
        <span className="chrome-dot chrome-dot--red" />
        <span className="chrome-dot chrome-dot--yellow" />
        <span className="chrome-dot chrome-dot--green" />
        <span className="chrome-title">ShopEase · Keyword Ranks</span>
      </div>

      {/* Search bar */}
      <div className="mockup-search-bar">
        <span className="search-icon">⌕</span>
        <span className="search-placeholder">Search tracked keywords...</span>
        <span className="search-badge">⌘K</span>
      </div>

      {/* Filter chips */}
      <div className="mockup-filter-chips">
        {['All', 'Primary Keywords', 'Competitors', 'Rankings'].map((f, i) => (
          <span key={f} className={`filter-chip ${i === 0 ? 'filter-chip--active' : ''}`}>{f}</span>
        ))}
      </div>

      {/* Product table */}
      <div className="mockup-product-list">
        {keywords.map((k, i) => (
          <div key={i} className="product-row">
            <div className="product-thumb" style={{ background: `rgba(var(--secondary-rgb), ${0.1 + i * 0.05})` }} />
            <div className="product-meta">
              <span className="product-name">{k.name}</span>
              <span className="product-stars">{'★'.repeat(5)}</span>
            </div>
            <span className="product-price" style={{ color: 'var(--secondary)' }}>{k.pos}</span>
            <span className={`product-status status--in`}>{k.status}</span>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="mockup-cta-row">
        <div className="cta-mini-btn">Keyword Planner</div>
        <div className="cta-mini-btn cta-mini-btn--outline">SEO Audit Report</div>
      </div>
    </div>
  );
}

function TravelMockup() {
  return (
    <div className="mockup-shell">
      <div className="mockup-chrome">
        <span className="chrome-dot chrome-dot--red" />
        <span className="chrome-dot chrome-dot--yellow" />
        <span className="chrome-dot chrome-dot--green" />
        <span className="chrome-title">TravelGo · Audience Reach</span>
      </div>

      {/* Map placeholder */}
      <div className="mockup-map">
        <div className="map-grid" />
        {/* Route dots */}
        <svg viewBox="0 0 280 120" className="map-svg">
          <defs>
            <filter id="mapGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path
            d="M40,90 Q100,30 160,60 T260,20"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="6,4"
            filter="url(#mapGlow)"
          />
          <circle cx="40" cy="90" r="5" fill="var(--accent)" opacity="0.9" />
          <circle cx="160" cy="60" r="4" fill="var(--primary)" opacity="0.8" />
          <circle cx="260" cy="20" r="5" fill="var(--secondary)" opacity="0.9" />
        </svg>
        <div className="map-pin map-pin--1">📍 US Reach: 1.2M</div>
        <div className="map-pin map-pin--2">📍 UK Reach: 450K</div>
        <div className="map-pin map-pin--3">📍 JP Reach: 800K</div>
      </div>

      {/* Itinerary */}
      <div className="mockup-itinerary">
        {[
          { day: 'Phase 1', city: 'Brand Identity Design', flight: 'Logo, Color Palette, Brand Book', status: 'Completed' },
          { day: 'Phase 2', city: 'Social Grid & Content', flight: 'Aesthetics, Creative Templates', status: 'Completed' },
          { day: 'Phase 3', city: 'Growth Ads Launch', flight: 'Meta & TikTok Conversion Campaigns', status: 'Active' },
        ].map((leg, i) => (
          <div key={i} className="itinerary-row">
            <div className="itinerary-day">{leg.day}</div>
            <div className="itinerary-detail">
              <span className="itinerary-city">{leg.city}</span>
              <span className="itinerary-flight">{leg.flight}</span>
            </div>
            <span className={`itinerary-status ${leg.status === 'Completed' ? 'status--confirmed' : 'status--pending'}`}>{leg.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockupMap = {
  fintech: FinovaMockup,
  ecommerce: EcommerceMockup,
  travel: TravelMockup,
};

/* ─────────────────────────────────────────────
   Product Row
   ───────────────────────────────────────────── */
function ProductRow({ product, index }) {
  const rowRef = useRef(null);
  const isReversed = index % 2 !== 0;
  const MockupComponent = mockupMap[product.mockup];

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fp-row--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`fp-row ${isReversed ? 'fp-row--reversed' : ''}`}
      id={`product-${product.id}`}
      style={{ '--accent-rgb': `var(${product.accentRgbVar})`, '--accent-color': `var(${product.accentVar})` }}
    >
      {/* Subtle background glow blob */}
      <div className={`fp-glow-blob ${isReversed ? 'fp-glow-blob--right' : 'fp-glow-blob--left'}`} />

      {/* Visual Column */}
      <div className="fp-visual-col">
        <div className="fp-mockup-wrapper">
          <div className="fp-mockup-glow" />
          <MockupComponent />
        </div>
      </div>

      {/* Content Column */}
      <div className="fp-content-col">
        <span className="fp-overline">{product.category}</span>
        <h2 className="fp-product-title">{product.title}</h2>
        <p className="fp-product-desc">{product.description}</p>
        <div className="fp-tags">
          {product.tags.map((tag) => (
            <span key={tag} className="fp-tag">{tag}</span>
          ))}
        </div>
        <div className="fp-actions">
          <a href="#contact" className="fp-btn fp-btn--primary">View Case Study →</a>
          <a href="#contact" className="fp-btn fp-btn--ghost">Get Free Brand Audit</a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Section
   ───────────────────────────────────────────── */
const Portfolio = () => {
  return (
    <section className="featured-products section" id="portfolio">
      {/* Top border line */}
      <div className="fp-top-rule" />

      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            A showcase of our finest growth campaigns — from dominating search results to
            scaling paid acquisition funnels and brand identities.
          </p>
        </div>
      </div>

      {/* Product rows — full width context, inner container handled per row */}
      <div className="fp-rows-wrapper">
        {products.map((product, i) => (
          <div key={product.id} className="container">
            <ProductRow product={product} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
