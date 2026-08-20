import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, CheckCircle, Zap, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WebDevelopment = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.builtwithpurpose.in/" },
        { "@type": "ListItem", "position": 2, "name": "Web Development Services", "item": "https://www.builtwithpurpose.in/web-development" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Development Services",
      "name": "Web Development Company in Coimbatore",
      "provider": {
        "@type": "Organization",
        "name": "Built With Purpose",
        "url": "https://www.builtwithpurpose.in"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Coimbatore, Tamil Nadu, India"
      },
      "description": "Professional web development company in Coimbatore building high-speed React web applications, custom websites, and e-commerce solutions."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose Built With Purpose for web development in Coimbatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build fast, secure, and mobile-friendly websites using modern frameworks like React and Vite. Every site is optimized for Google search rankings and high conversion performance."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a custom website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard business websites typically take 3 to 5 weeks from initial wireframing to production deployment, while custom React web applications require 4 to 8 weeks depending on features."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Web Development Company in Coimbatore | Built With Purpose"
        description="Looking for a top web development company in Coimbatore? Built With Purpose builds high-performance, fast-loading React websites and web applications tailored for growth."
        keywords="web development company in Coimbatore, website development company in Coimbatore, React web application development, custom website development Tamil Nadu"
        canonicalPath="/web-development"
        schema={schema}
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Code size={18} />
              <span>Web Development Company in Coimbatore</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              High-Performance <span className="text-gradient">Web Development</span> Services
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              We design and engineer fast, responsive, and SEO-optimized websites built with React, Vite, and modern tech stacks. Designed to capture search intent and turn visitors into loyal customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Request Web Proposal
                <ArrowRight size={18} />
              </a>
              <Link 
                to="/seo-services" 
                className="bg-white border border-border text-text font-button font-semibold px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore SEO Integration
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Why Ambitious Brands Choose Our Web Engineering
              </h2>
              <p className="text-secondary-text">
                We focus on technical speed, mobile responsiveness, and clean code that Google loves.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Lightning-Fast Speed</h3>
                <p className="text-secondary-text">
                  Sub-second page load times that satisfy Google's Core Web Vitals and drastically reduce bounce rates.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Built-in Technical SEO</h3>
                <p className="text-secondary-text">
                  Semantic HTML5 architecture, structured schema markup, clean canonical tags, and mobile readiness from day one.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Scalable React Stack</h3>
                <p className="text-secondary-text">
                  Modular, maintainable codebases that scale smoothly as your Coimbatore business expands across global markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text text-center mb-16">
            Our Web Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Audit', desc: 'Understanding your market goals, target keywords, and user experience requirements.' },
              { step: '02', title: 'UI/UX Design', desc: 'Crafting responsive wireframes and high-fidelity prototypes tailored to your brand identity.' },
              { step: '03', title: 'Frontend & API', desc: 'Building with React, Vite, and Tailwind CSS for peak speed and security.' },
              { step: '04', title: 'SEO & Launch', desc: 'Rigorous performance auditing, schema validation, canonical testing, and deployment.' }
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-border relative">
                <span className="text-4xl font-extrabold text-primary/20 mb-4 block font-heading">{p.step}</span>
                <h3 className="text-lg font-bold font-heading mb-2">{p.title}</h3>
                <p className="text-sm text-secondary-text">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 border-t border-border">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">Web Development FAQ</span>
              <h2 className="text-3xl font-bold font-heading text-text">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  Why choose Built With Purpose for web development in Coimbatore?
                </h3>
                <p className="text-secondary-text">
                  We build fast, secure, and mobile-friendly websites using modern frameworks like React and Vite. Every site is optimized for Google search rankings and high conversion performance.
                </p>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  How long does it take to develop a custom website?
                </h3>
                <p className="text-secondary-text">
                  Standard business websites typically take 3 to 5 weeks from initial wireframing to production deployment, while custom React web applications require 4 to 8 weeks depending on features.
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

export default WebDevelopment;
