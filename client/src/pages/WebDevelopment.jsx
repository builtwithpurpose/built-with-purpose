import React from 'react';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, Zap, ShieldCheck, ArrowRight, HelpCircle, Layout, Layers, Search, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WebDevelopment = () => {
  return (
    <>
      <SEO
        title="Web Development Services in Coimbatore | Built With Purpose"
        description="Custom web development services in Coimbatore. We build responsive React websites, business web apps & SEO-friendly platforms designed for growth. Contact us!"
        keywords="Web Development Services in Coimbatore, Web Development Company in Coimbatore, Website Development Services in Coimbatore, Custom Website Development Coimbatore, React Web Development Coimbatore, Business Website Development Coimbatore"
        canonicalPath="/web-development"
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          {/* Breadcrumb Visual Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-secondary-text mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text font-medium" aria-current="page">Web Development</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Code size={18} />
              <span>Web Development Services in Coimbatore</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              Web Development Services <br className="hidden sm:block" />
              <span className="text-gradient">in Coimbatore</span>
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              Built With Purpose delivers custom web development services in Coimbatore, engineering fast, responsive, and search-optimized digital experiences. We build high-converting websites and modern React web applications for businesses in Tamil Nadu and worldwide.
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
                to="/react-development" 
                className="bg-white border border-border text-text font-button font-semibold px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore React Engineering
              </Link>
            </div>
          </div>
        </section>

        {/* Custom Web Development Services Section */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Custom Web Development Solutions We Deliver
              </h2>
              <p className="text-secondary-text text-lg">
                As a leading web development company in Coimbatore, we build customized web solutions focused on high performance, clean architecture, and conversion growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3">React &amp; Single-Page Applications</h3>
                  <p className="text-secondary-text mb-6 leading-relaxed">
                    We build lightning-fast interactive web applications using React, Vite, and modern JavaScript. Perfect for businesses needing dynamic dashboards, portal interfaces, and high-speed web apps.
                  </p>
                </div>
                <Link to="/react-development" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore React development services
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3">Business &amp; Startup Websites</h3>
                  <p className="text-secondary-text mb-6 leading-relaxed">
                    Custom website development in Coimbatore designed specifically for growing companies and startups. We focus on clear messaging, high user engagement, and strong lead generation capabilities.
                  </p>
                </div>
                <Link to="/business-website-development" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore business website development
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                    <Layout size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3">UI/UX &amp; Responsive Web Design</h3>
                  <p className="text-secondary-text mb-6 leading-relaxed">
                    Mobile-first web design tailored for flawless rendering across desktop, tablet, and smartphone screens. We ensure your website looks stunning while guiding visitors toward key conversion actions.
                  </p>
                </div>
                <Link to="/ui-ux-design" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore UI/UX website design
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                    <Search size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3">SEO-Friendly Web Architecture</h3>
                  <p className="text-secondary-text mb-6 leading-relaxed">
                    Every website we build is architected for search visibility. From semantic HTML structure and lightweight CSS to dynamic JSON-LD structured data and fast server response times.
                  </p>
                </div>
                <Link to="/seo-services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore SEO services in Coimbatore
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
              Why Choose Built With Purpose for Web Development
            </h2>
            <p className="text-secondary-text text-lg">
              We combine technical engineering excellence with local market insights in Coimbatore to build websites that rank higher and convert better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Sub-Second Page Speed</h3>
              <p className="text-secondary-text">
                Sub-second page load times satisfying Google's Core Web Vitals, driving lower bounce rates and higher search engine rankings.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Technical SEO Integration</h3>
              <p className="text-secondary-text">
                Clean HTML5 semantics, custom Schema.org structured data, meta tag optimization, and canonical URL structure included by default.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Scalable React Engineering</h3>
              <p className="text-secondary-text">
                Modular React codebases that scale effortlessly as your business expands across Coimbatore, Tamil Nadu, and international markets.
              </p>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Our Web Development Process
              </h2>
              <p className="text-secondary-text text-lg">
                A proven 4-step web development methodology designed to deliver exceptional digital platforms on schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery & Strategy', desc: 'Understanding your business goals, target keywords in Coimbatore, and technical site requirements.' },
                { step: '02', title: 'UI/UX Prototyping', desc: 'Crafting high-fidelity responsive wireframes tailored to elevate your brand visual identity.' },
                { step: '03', title: 'React Development', desc: 'Engineering clean, modular web application code using React, Vite, and Tailwind CSS.' },
                { step: '04', title: 'SEO Audit & Launch', desc: 'Validating Lighthouse performance, structured data, canonical tags, and production deployment.' }
              ].map((p, i) => (
                <div key={i} className="bg-background p-8 rounded-2xl border border-border relative">
                  <span className="text-4xl font-extrabold text-primary/20 mb-4 block font-heading">{p.step}</span>
                  <h3 className="text-lg font-bold font-heading mb-2">{p.title}</h3>
                  <p className="text-sm text-secondary-text">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 max-w-3xl mb-20">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">Web Development FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <HelpCircle size={20} className="text-primary" />
                Why choose Built With Purpose for web development in Coimbatore?
              </h3>
              <p className="text-secondary-text">
                We build fast, secure, and mobile-friendly websites using modern frameworks like React and Vite. Every site is optimized for Google search rankings and high conversion performance.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <HelpCircle size={20} className="text-primary" />
                How long does it take to develop a custom website?
              </h3>
              <p className="text-secondary-text">
                Standard business websites typically take 3 to 5 weeks from initial wireframing to production deployment, while custom React web applications require 4 to 8 weeks depending on features.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-12 md:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Start Your Web Development Project
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Ready to elevate your online presence with professional website development services in Coimbatore? Partner with Built With Purpose to engineer a custom, high-speed website built for business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/#contact" 
                className="bg-white text-slate-900 font-button font-bold px-8 py-4 rounded-full shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300"
              >
                Contact Our Web Team
              </a>
              <Link 
                to="/portfolio" 
                className="bg-white/10 text-white border border-white/30 font-button font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View Our Web Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WebDevelopment;
