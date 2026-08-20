import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Target, CheckSquare, ArrowRight, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SeoServices = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.builtwithpurpose.in/" },
        { "@type": "ListItem", "position": 2, "name": "SEO Services", "item": "https://www.builtwithpurpose.in/seo-services" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Search Engine Optimization",
      "name": "SEO Services in Coimbatore",
      "provider": {
        "@type": "Organization",
        "name": "Built With Purpose",
        "url": "https://www.builtwithpurpose.in"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Coimbatore, Tamil Nadu, India"
      },
      "description": "Professional SEO company in Coimbatore specializing in technical SEO, local SEO, keyword optimization, and Core Web Vitals performance."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can SEO results be seen for a Coimbatore business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technical SEO fixes and on-page optimizations usually show indexing improvements within 2 to 4 weeks, with measurable organic traffic growth within 3 to 6 months."
          }
        },
        {
          "@type": "Question",
          "name": "What SEO services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide complete technical SEO audits, local Google Business optimization in Coimbatore, semantic keyword mapping, JSON-LD structured data implementation, and Core Web Vitals speed optimization."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="SEO Services in Coimbatore | Technical & Local SEO Company"
        description="Dominate search results with data-driven SEO services in Coimbatore. Built With Purpose offers technical SEO, keyword research, local search ranking, and Core Web Vitals optimization."
        keywords="SEO services in Coimbatore, SEO company Coimbatore, technical SEO audit, local SEO Coimbatore, Google ranking services Tamil Nadu"
        canonicalPath="/seo-services"
        schema={schema}
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Search size={18} />
              <span>SEO Services Company in Coimbatore</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              Data-Driven <span className="text-gradient">SEO Services</span> That Drive Revenue
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              Rank higher on Google, capture targeted search intent, and double your organic leads without recurring ad spend. Customized for businesses in Coimbatore and Tamil Nadu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Free SEO Audit
                <ArrowRight size={18} />
              </a>
              <Link 
                to="/web-development" 
                className="bg-white border border-border text-text font-button font-semibold px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Web Development
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Solutions */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Comprehensive SEO Solutions
              </h2>
              <p className="text-secondary-text">
                White-hat, sustainable search engine optimization that satisfies Google's helpful content algorithms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Technical SEO Audits</h3>
                <p className="text-secondary-text">
                  Deep inspection of crawlability, sitemaps, robots.txt, canonical tags, JS rendering, and site speed.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Local SEO Coimbatore</h3>
                <p className="text-secondary-text">
                  Dominating local Google search queries, local map pack listings, and geo-targeted commercial intent.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <CheckSquare size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Structured Data Schema</h3>
                <p className="text-secondary-text">
                  Valid JSON-LD schema integration for Organization, LocalBusiness, Services, Breadcrumbs, and FAQs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 border-t border-border">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">SEO Services FAQ</span>
              <h2 className="text-3xl font-bold font-heading text-text">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  How quickly can SEO results be seen for a Coimbatore business?
                </h3>
                <p className="text-secondary-text">
                  Technical SEO fixes and on-page optimizations usually show indexing improvements within 2 to 4 weeks, with measurable organic traffic growth within 3 to 6 months.
                </p>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  What SEO services do you offer?
                </h3>
                <p className="text-secondary-text">
                  We provide complete technical SEO audits, local Google Business optimization in Coimbatore, semantic keyword mapping, JSON-LD structured data implementation, and Core Web Vitals speed optimization.
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

export default SeoServices;
