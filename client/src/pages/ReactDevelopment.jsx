import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cpu, Server, Zap, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReactDevelopment = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.builtwithpurpose.in/" },
        { "@type": "ListItem", "position": 2, "name": "React & MERN Stack Development", "item": "https://www.builtwithpurpose.in/react-development" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "React & MERN Development Services",
      "name": "React Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Built With Purpose",
        "url": "https://www.builtwithpurpose.in"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Coimbatore, Tamil Nadu, India"
      },
      "description": "Specialized React development services and MERN stack engineering for fast, single-page and multi-page web applications."
    }
  ];

  return (
    <>
      <SEO
        title="React Development Services & MERN Stack Solutions | Built With Purpose"
        description="Expert React development services and MERN stack web applications in Coimbatore. High-performance frontend engineering, API integration, and Vite bundling."
        keywords="React development services, MERN stack development company, React JS agency Coimbatore, single page app development, Vite React engineering"
        canonicalPath="/react-development"
        schema={schema}
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Code size={18} />
              <span>React &amp; MERN Stack Experts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              Modern <span className="text-gradient">React &amp; MERN Development</span>
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              Build scalable, lightning-fast frontend interfaces and robust backend APIs with React 19, Vite, Express, and Node.js. Tailored for enterprise speed and security.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Hire React Developers
                <ArrowRight size={18} />
              </a>
              <Link 
                to="/web-development" 
                className="bg-white border border-border text-text font-button font-semibold px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-300 inline-flex items-center gap-2"
              >
                All Web Services
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Enterprise React Engineering Capabilities
              </h2>
              <p className="text-secondary-text">
                Leveraging state-of-the-art tooling to deliver instant page loads and seamless component rendering.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Vite &amp; Code Splitting</h3>
                <p className="text-secondary-text">
                  Optimized Rollup bundling with dynamic chunk splitting for sub-200ms INP and fast paint.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">React 19 &amp; Framer Motion</h3>
                <p className="text-secondary-text">
                  Fluid, GPU-accelerated micro-interactions and progressive component state management.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">REST &amp; Node APIs</h3>
                <p className="text-secondary-text">
                  Secure backend connections, database integrations, and automated EmailJS contact forms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ReactDevelopment;
