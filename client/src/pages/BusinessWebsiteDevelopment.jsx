import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, TrendingUp, Users, ArrowRight, HelpCircle, Layout, Code2, Search, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BusinessWebsiteDevelopment = () => {
  return (
    <>
      <SEO
        title="Business Website Development in Coimbatore | Built With Purpose"
        description="Business website development in Coimbatore for startups & small businesses. We build fast, responsive, SEO-friendly websites. Request a consultation!"
        keywords="Business Website Development in Coimbatore, Business Website Development Company Coimbatore, Business Website Development Services Coimbatore, Small Business Website Development Coimbatore, Startup Website Development Coimbatore, Professional Business Website Development, Custom Business Website Development"
        canonicalPath="/business-website-development"
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          {/* Breadcrumb Visual Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-secondary-text mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text font-medium" aria-current="page">Business Website Development</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Rocket size={18} />
              <span>Business Website Development in Coimbatore</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              Business Website Development <br className="hidden sm:block" />
              <span className="text-gradient">in Coimbatore</span>
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              Built With Purpose provides custom business website development in Coimbatore for startups, small businesses, and growing enterprises. We engineer fast, responsive, and search-optimized business websites designed to build brand authority and convert visitors into loyal customers across Tamil Nadu and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Request a Website Consultation
                <ArrowRight size={18} />
              </a>
              <Link 
                to="/seo-services" 
                className="bg-white border border-border text-text font-button font-semibold px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore SEO Services
              </Link>
            </div>
          </div>
        </section>

        {/* Professional Websites Built for Business Growth */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Professional Websites Built for Business Growth
              </h2>
              <p className="text-secondary-text text-lg">
                Custom website development solutions tailored for small businesses, local service providers, and innovative startups.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Small Business Websites</h3>
                  <p className="text-secondary-text mb-6">
                    Professional, custom-designed websites engineered to showcase your local services, build customer trust, and generate direct inquiries.
                  </p>
                </div>
                <Link to="/web-development" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore web development services
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Startup Website Development</h3>
                  <p className="text-secondary-text mb-6">
                    Scalable, modern React web platforms designed for fast product launches, investor pitches, and rapid user acquisition.
                  </p>
                </div>
                <Link to="/react-development" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore React development
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Service Business Websites</h3>
                <p className="text-secondary-text">
                  Tailored web layouts for consultancies, B2B companies, and regional service providers seeking clear digital representation.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                    <Layout size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Responsive Mobile-Friendly Design</h3>
                  <p className="text-secondary-text mb-6">
                    Flawless viewing and touch interaction across smartphones, tablets, laptops, and wide desktop screens.
                  </p>
                </div>
                <Link to="/ui-ux-design" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore UI/UX design services
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-6">
                    <Search size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">SEO-Friendly Business Websites</h3>
                  <p className="text-secondary-text mb-6">
                    Integrated semantic HTML markup, structured JSON-LD schema, fast load times, and canonical URLs built from day one.
                  </p>
                </div>
                <Link to="/seo-services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore SEO services in Coimbatore
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Lead-Generating Landing Pages</h3>
                <p className="text-secondary-text">
                  Conversion-focused section structures, strategically placed contact forms, and click-to-action buttons to convert traffic into leads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
              Why Choose Built With Purpose?
            </h2>
            <p className="text-secondary-text text-lg">
              We build clean, high-speed websites tailored specifically to support business growth and digital visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Layout size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Mobile-First Design</h3>
              <p className="text-sm text-secondary-text">
                Ensuring an effortless mobile experience for modern users navigating on smartphones.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <Rocket size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Fast Performance</h3>
              <p className="text-sm text-secondary-text">
                Sub-second page speeds engineered to satisfy Google's Core Web Vitals standards.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Search size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Technical SEO</h3>
              <p className="text-sm text-secondary-text">
                Built-in structured data schema, clean metadata, and search-engine friendly hierarchy.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Conversion-Focused UX</h3>
              <p className="text-sm text-secondary-text">
                Intuitive layout design and clear call-to-action pathways for maximum conversion efficiency.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Scalable Architecture</h3>
              <p className="text-sm text-secondary-text">
                Modular React codebases that scale smoothly as your business enterprise grows.
              </p>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Our Business Website Development Process
              </h2>
              <p className="text-secondary-text text-lg">
                A streamlined 6-stage development workflow built for quality execution and on-time deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Business & Requirement Discovery', desc: 'Understanding your business goals, target customer persona, and key features.' },
                { step: '02', title: 'Sitemap & Content Planning', desc: 'Structuring logical page navigation, content layout, and conversion CTAs.' },
                { step: '03', title: 'UI/UX Design', desc: 'Creating responsive wireframes and high-fidelity interface prototypes.' },
                { step: '04', title: 'Website Development', desc: 'Building high-speed components using React, Vite, and modern CSS.' },
                { step: '05', title: 'SEO & Performance Optimization', desc: 'Verifying Lighthouse metrics, schema tags, canonical URLs, and meta tags.' },
                { step: '06', title: 'Testing & Launch', desc: 'Cross-browser testing, mobile verification, and seamless production launch.' }
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

        {/* Local Content Section */}
        <section className="container mx-auto px-6 max-w-4xl mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-6">
            Business Website Development for Coimbatore Businesses
          </h2>
          <p className="text-secondary-text text-lg leading-relaxed mb-6">
            Coimbatore is one of Tamil Nadu's leading commercial hubs. For small businesses and startups in Coimbatore, having a fast, professional, and mobile-optimized website is essential for establishing local credibility and capturing high-intent search queries.
          </p>
          <p className="text-secondary-text text-lg leading-relaxed">
            Built With Purpose delivers affordable, high-performance website development for businesses across Coimbatore, Tamil Nadu, and India, combining modern technology with clear search-focused strategy.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 border-t border-border mb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">Business Website FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-2xl border border-border shadow-soft">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  Why is professional business website development important for startups in Coimbatore?
                </h3>
                <p className="text-secondary-text">
                  A professionally engineered business website builds instant brand credibility, ranks for local commercial search terms, and converts online visitors into qualified sales leads.
                </p>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-border shadow-soft">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  How long does business website development take?
                </h3>
                <p className="text-secondary-text">
                  Standard business websites and startup landing pages typically take 3 to 5 weeks from initial requirements discovery to production deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-12 md:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Ready to Build Your Business Website?
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with Built With Purpose to build a custom, high-speed business website designed for market authority and growth in Coimbatore.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/#contact" 
                className="bg-white text-slate-900 font-button font-bold px-8 py-4 rounded-full shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300"
              >
                Request a Website Consultation
              </a>
              <Link 
                to="/portfolio" 
                className="bg-white/10 text-white border border-white/30 font-button font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BusinessWebsiteDevelopment;
