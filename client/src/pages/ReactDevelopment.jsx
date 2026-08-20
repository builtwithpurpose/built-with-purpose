import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cpu, Server, Zap, ArrowRight, HelpCircle, Layers, Layout, ShieldCheck, CheckCircle2, RefreshCw, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReactDevelopment = () => {
  return (
    <>
      <SEO
        title="React Development Company in Coimbatore | Built With Purpose"
        description="React development company in Coimbatore building scalable React web applications, custom interfaces & fast business websites. Discuss your project today!"
        keywords="React Development Company in Coimbatore, React Development Services in Coimbatore, React Developers in Coimbatore, React Web Development Company, React Website Development, React Application Development, Custom React Development Services"
        canonicalPath="/react-development"
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          {/* Breadcrumb Visual Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-secondary-text mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text font-medium" aria-current="page">React Development</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Code size={18} />
              <span>React Development Company in Coimbatore</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              React Development Company <br className="hidden sm:block" />
              <span className="text-gradient">in Coimbatore</span>
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              Built With Purpose is a specialized React development company in Coimbatore. We engineer high-performance React web applications, custom single-page interfaces, and scalable full-stack MERN digital platforms for growing businesses in Tamil Nadu and worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Discuss Your React Project
                <ArrowRight size={18} />
              </a>
              <Link 
                to="/web-development" 
                className="bg-white border border-border text-text font-button font-semibold px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Web Development Services
              </Link>
            </div>
          </div>
        </section>

        {/* Custom React Development Services */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Custom React Development Services
              </h2>
              <p className="text-secondary-text text-lg">
                We harness modern React 19, Vite bundling, and component-driven architecture to deliver lightning-fast web solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">React Website Development</h3>
                  <p className="text-secondary-text mb-6">
                    Building fast-loading, component-based corporate websites engineered for optimal search engine indexation and user conversion.
                  </p>
                </div>
                <Link to="/web-development" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore web development
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">React Web Applications</h3>
                  <p className="text-secondary-text mb-6">
                    Full-stack MERN (MongoDB, Express, React, Node) applications tailored for custom workflows, client dashboards, and business tools.
                  </p>
                </div>
                <Link to="/business-website-development" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore business website development
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                    <RefreshCw size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Single Page Applications (SPAs)</h3>
                  <p className="text-secondary-text mb-6">
                    Seamless client-side routing, instant state updates, and dynamic UI transitions powered by React Router and modern hooks.
                  </p>
                </div>
                <Link to="/ui-ux-design" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore UI/UX design services
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                    <Layout size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Responsive React Interfaces</h3>
                  <p className="text-secondary-text mb-6">
                    Mobile-first visual design systems crafted with Tailwind CSS for consistent performance across mobile, tablet, and desktop.
                  </p>
                </div>
                <Link to="/ui-ux-design" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore responsive interfaces
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-6">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">API &amp; Backend Integration</h3>
                <p className="text-secondary-text">
                  Connecting React frontends to REST APIs, third-party microservices, database layers, and automated form processing.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">React Performance Optimization</h3>
                  <p className="text-secondary-text mb-6">
                    Eliminating forced reflows, minimizing bundle size via Vite tree-shaking, and optimizing Core Web Vitals performance.
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

        {/* Why Choose Us */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
              Why Choose Our React Development Services?
            </h2>
            <p className="text-secondary-text text-lg">
              We combine enterprise React engineering standards with responsive design principles to build future-proof web products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Compass size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Scalable Architecture</h3>
              <p className="text-sm text-secondary-text">
                Clean, reusable component structures designed to adapt as your business expands its digital capabilities.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <Zap size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">High Performance</h3>
              <p className="text-sm text-secondary-text">
                Sub-second initial paint times, low memory footprints, and optimized interaction-to-next-paint (INP) scores.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Responsive Development</h3>
              <p className="text-sm text-secondary-text">
                Mobile-first responsive layouts that render smoothly across all device sizes and screen resolutions.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">SEO-Friendly React</h3>
              <p className="text-sm text-secondary-text">
                Pre-rendered meta tags, clean semantic HTML5 markup, and JSON-LD schema integration for effortless Google indexing.
              </p>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Our React Development Process
              </h2>
              <p className="text-secondary-text text-lg">
                A structured 6-stage engineering process ensuring code quality, security, and project delivery on schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Discovery & Requirements', desc: 'Analyzing user workflows, architecture choices, and project specifications.' },
                { step: '02', title: 'UI/UX Planning', desc: 'Designing component wireframes, design tokens, and user journey maps.' },
                { step: '03', title: 'React Development', desc: 'Engineering modular React 19 components, custom hooks, and state logic.' },
                { step: '04', title: 'API Integration', desc: 'Connecting frontend components with RESTful APIs, database layers, and form actions.' },
                { step: '05', title: 'Testing & Optimization', desc: 'Auditing code quality, cross-browser rendering, Core Web Vitals, and security.' },
                { step: '06', title: 'Deployment & Support', desc: 'Deploying to cloud hosting environments with ongoing technical support and maintenance.' }
              ].map((p, i) => (
                <div key={i} className="bg-background p-8 rounded-2xl border border-border relative">
                  <span className="text-3xl font-extrabold text-primary/20 mb-3 block font-heading">{p.step}</span>
                  <h3 className="text-lg font-bold font-heading mb-2">{p.title}</h3>
                  <p className="text-sm text-secondary-text">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Localized Content Section */}
        <section className="container mx-auto px-6 max-w-4xl mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-6">
            React Development for Businesses in Coimbatore
          </h2>
          <p className="text-secondary-text text-lg leading-relaxed mb-6">
            Coimbatore's vibrant commercial landscape in Tamil Nadu requires modern web applications that load instantly and operate reliably. React's modular ecosystem provides local startups and established enterprises with the technical flexibility needed to build state-of-the-art web platforms.
          </p>
          <p className="text-secondary-text text-lg leading-relaxed">
            At Built With Purpose, our React developers in Coimbatore combine modern frontend engineering practices with search-friendly site architectures to build custom digital products that scale seamlessly.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 border-t border-border mb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">React FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-2xl border border-border shadow-soft">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  Why choose React for business web development in Coimbatore?
                </h3>
                <p className="text-secondary-text">
                  React offers modular component architecture, fast virtual DOM rendering, and seamless scaling, making it ideal for high-speed business web applications.
                </p>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-border shadow-soft">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  Can React websites be optimized for SEO?
                </h3>
                <p className="text-secondary-text">
                  Yes. Built With Purpose builds React websites with semantic HTML structure, pre-rendered metadata, dynamic JSON-LD schema, and fast Vite bundling to ensure clean Google indexation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-12 md:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Build Your React Application With Us
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with Built With Purpose to engineer a custom React application or web platform built for high speed, reliability, and business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/#contact" 
                className="bg-white text-slate-900 font-button font-bold px-8 py-4 rounded-full shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300"
              >
                Discuss Your React Project
              </a>
              <Link 
                to="/portfolio" 
                className="bg-white/10 text-white border border-white/30 font-button font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View Our React Development Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ReactDevelopment;
