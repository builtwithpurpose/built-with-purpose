import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const products = [
  {
    id: 'finova',
    category: 'Fintech · Analytics',
    title: 'Finova Dashboard',
    description:
      'A comprehensive real-time analytics platform built for modern fintech teams. Monitor portfolio performance, track live market signals, and generate intelligent reports — all from a single, cohesive interface.',
    tags: ['React', 'Node.js', 'MongoDB'],
    accentVar: '--primary',
    accentRgbVar: '--primary-rgb',
    mockup: 'fintech',
  },
  {
    id: 'shopease',
    category: 'E-Commerce · Retail',
    title: 'ShopEase Store',
    description:
      'A next-generation storefront experience with advanced faceted search, seamless checkout flows, and native Stripe integration. Designed to convert browsers into loyal customers at every touchpoint.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    accentVar: '--secondary',
    accentRgbVar: '--secondary-rgb',
    mockup: 'ecommerce',
  },
  {
    id: 'travelgo',
    category: 'Travel · Mobile',
    title: 'TravelGo App',
    description:
      'An immersive travel companion that blends interactive maps with AI-powered itinerary planning. Book flights, hotels, and experiences in one smooth, native-feeling mobile interface.',
    tags: ['React Native', 'Firebase', 'Maps API'],
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
        <span className="chrome-title">Finova · Dashboard</span>
      </div>

      {/* Top stat row */}
      <div className="mockup-stats-row">
        {[
          { label: 'Total Revenue', value: '$2.4M', delta: '+12.5%', up: true },
          { label: 'Active Users', value: '18,320', delta: '+8.2%', up: true },
          { label: 'Churn Rate', value: '1.4%', delta: '-0.3%', up: false },
        ].map((s) => (
          <div key={s.label} className="mockup-stat-pill">
            <span className="msp-label">{s.label}</span>
            <span className="msp-value">{s.value}</span>
            <span className={`msp-delta ${s.up ? 'up' : 'down'}`}>{s.delta}</span>
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
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => (
            <span key={m} className="chart-label">{m}</span>
          ))}
        </div>
      </div>

      {/* Activity feed */}
      <div className="mockup-feed">
        {[
          { icon: '↑', text: 'Deposit from Stripe · $4,200', time: '2m ago' },
          { icon: '↓', text: 'AWS Infrastructure · $890', time: '14m ago' },
          { icon: '↑', text: 'Enterprise plan renewal · $12k', time: '1h ago' },
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
  const products2 = [
    { name: 'Leather Tote', price: '$149', status: 'In Stock', stars: 5 },
    { name: 'Canvas Sneakers', price: '$89', status: 'Low Stock', stars: 4 },
    { name: 'Merino Sweater', price: '$199', status: 'In Stock', stars: 5 },
  ];
  return (
    <div className="mockup-shell">
      <div className="mockup-chrome">
        <span className="chrome-dot chrome-dot--red" />
        <span className="chrome-dot chrome-dot--yellow" />
        <span className="chrome-dot chrome-dot--green" />
        <span className="chrome-title">ShopEase · Storefront</span>
      </div>

      {/* Search bar */}
      <div className="mockup-search-bar">
        <span className="search-icon">⌕</span>
        <span className="search-placeholder">Search products, categories…</span>
        <span className="search-badge">⌘K</span>
      </div>

      {/* Filter chips */}
      <div className="mockup-filter-chips">
        {['All', 'Bags', 'Footwear', 'Apparel', 'Sale'].map((f, i) => (
          <span key={f} className={`filter-chip ${i === 0 ? 'filter-chip--active' : ''}`}>{f}</span>
        ))}
      </div>

      {/* Product table */}
      <div className="mockup-product-list">
        {products2.map((p, i) => (
          <div key={i} className="product-row">
            <div className="product-thumb" style={{ background: `rgba(var(--secondary-rgb), ${0.1 + i * 0.05})` }} />
            <div className="product-meta">
              <span className="product-name">{p.name}</span>
              <span className="product-stars">{'★'.repeat(p.stars)}</span>
            </div>
            <span className="product-price">{p.price}</span>
            <span className={`product-status ${p.status === 'In Stock' ? 'status--in' : 'status--low'}`}>{p.status}</span>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="mockup-cta-row">
        <div className="cta-mini-btn">Add to Cart</div>
        <div className="cta-mini-btn cta-mini-btn--outline">Wishlist</div>
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
        <span className="chrome-title">TravelGo · Plan Trip</span>
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
        <div className="map-pin map-pin--1">📍 NYC</div>
        <div className="map-pin map-pin--2">📍 London</div>
        <div className="map-pin map-pin--3">📍 Tokyo</div>
      </div>

      {/* Itinerary */}
      <div className="mockup-itinerary">
        {[
          { day: 'Day 1', city: 'New York → London', flight: 'AA 102 · 7h 20m', status: 'Confirmed' },
          { day: 'Day 4', city: 'London → Tokyo', flight: 'JL 044 · 12h 05m', status: 'Confirmed' },
          { day: 'Day 9', city: 'Tokyo → NYC', flight: 'NH 010 · 14h 00m', status: 'Pending' },
        ].map((leg, i) => (
          <div key={i} className="itinerary-row">
            <div className="itinerary-day">{leg.day}</div>
            <div className="itinerary-detail">
              <span className="itinerary-city">{leg.city}</span>
              <span className="itinerary-flight">{leg.flight}</span>
            </div>
            <span className={`itinerary-status ${leg.status === 'Confirmed' ? 'status--confirmed' : 'status--pending'}`}>{leg.status}</span>
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
          <a href="#" className="fp-btn fp-btn--primary">View Case Study →</a>
          <a href="#" className="fp-btn fp-btn--ghost">Source Code</a>
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
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="section-subtitle">
            A showcase of our finest craft — from complex fintech dashboards to
            immersive mobile experiences.
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
