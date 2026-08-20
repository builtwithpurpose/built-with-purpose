import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, TrendingUp, Users, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BusinessWebsiteDevelopment = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.builtwithpurpose.in/" },
        { "@type": "ListItem", "position": 2, "name": "Business Website Development", "item": "https://www.builtwithpurpose.in/business-website-development" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Small Business & Startup Website Development",
      "name": "Website Development for Startups & Small Businesses",
      "provider": {
        "@type": "Organization",
        "name": "Built With Purpose",
        "url": "https://www.builtwithpurpose.in"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Coimbatore, Tamil Nadu, India"
      },
      "description": "Tailored website development solutions for small businesses and startups in Coimbatore. Fast turnaround, transparent pricing, and high conversion potential."
    }
  ];

  return (
    <>
      <SEO
        title="Website Development for Startups & Small Businesses | Coimbatore"
        description="Affordable, fast, and conversion-focused web development for small businesses and startups in Coimbatore. Build brand authority and capture local customers."
        keywords="web development for small businesses, website development for startups, business website development Coimbatore, startup website agency Tamil Nadu"
        canonicalPath="/business-website-development"
        schema={schema}
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Rocket size={18} />
              <span>Built for Startups &amp; Small Businesses</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              Website Development for <span className="text-gradient">Startups &amp; Businesses</span>
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              Establish instant online credibility, rank for commercial search terms, and turn traffic into paying clients with custom-engineered business websites.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Launch Your Business Site
                <ArrowRight size={18} />
              </a>
              <Link 
                to="/seo-services" 
                className="bg-white border border-border text-text font-button font-semibold px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-300 inline-flex items-center gap-2"
              >
                SEO Growth Plans
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Tailored Features for Growing Businesses
              </h2>
              <p className="text-secondary-text">
                Designed to deliver maximum Return on Investment with zero technical fluff.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">High Lead Conversion</h3>
                <p className="text-secondary-text">
                  Strategically placed Call-To-Action buttons, direct email contact forms, and click-to-call integration.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Local Search Domination</h3>
                <p className="text-secondary-text">
                  Optimized for Coimbatore local service keywords and Google Business map integrations.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Ongoing Partner Support</h3>
                <p className="text-secondary-text">
                  Dedicated maintenance, security updates, and performance monitoring so you can focus on growing your business.
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

export default BusinessWebsiteDevelopment;
