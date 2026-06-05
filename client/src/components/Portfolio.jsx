import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web App', 'E-Commerce', 'Landing Page', 'Mobile'];

  const projects = [
    {
      title: 'Finova Dashboard',
      description: 'A comprehensive fintech dashboard with real-time analytics and reporting.',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'Web App',
      emoji: '📊',
    },
    {
      title: 'ShopEase Store',
      description: 'Modern e-commerce platform with advanced filtering and checkout.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      category: 'E-Commerce',
      emoji: '🛍️',
    },
    {
      title: 'TravelGo App',
      description: 'Travel booking platform with interactive maps and itinerary planning.',
      tags: ['React Native', 'Firebase', 'Maps API'],
      category: 'Mobile',
      emoji: '✈️',
    },
    {
      title: 'GreenLeaf Landing',
      description: 'Conversion-optimized landing page for an eco-friendly products brand.',
      tags: ['HTML/CSS', 'GSAP', 'Figma'],
      category: 'Landing Page',
      emoji: '🌿',
    },
    {
      title: 'MedConnect Portal',
      description: 'Healthcare appointment management system with patient records.',
      tags: ['React', 'Express', 'HIPAA'],
      category: 'Web App',
      emoji: '🏥',
    },
    {
      title: 'CraftBrew Shop',
      description: 'Artisan brewery e-commerce with subscription and rewards system.',
      tags: ['Shopify', 'React', 'Tailwind'],
      category: 'E-Commerce',
      emoji: '🍺',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of our best work — from complex web applications 
            to beautiful landing pages.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <span className="project-placeholder">{project.emoji}</span>
                <div className="project-overlay">
                  <a href="#" title="View Project">🔗</a>
                  <a href="#" title="View Code">📂</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
