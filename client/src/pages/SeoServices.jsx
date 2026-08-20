import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Target, CheckSquare, ArrowRight, HelpCircle, Code2, BarChart2, ShieldCheck, FileText, Cpu, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SeoServices = () => {
  return (
    <>
      <SEO
        title="SEO Services in Coimbatore | Built With Purpose"
        description="Data-driven SEO services in Coimbatore. We deliver technical SEO audits, on-page optimization & local search strategies to boost organic traffic. Get a free audit!"
        keywords="SEO Services in Coimbatore, SEO Company in Coimbatore, SEO Services Company in Coimbatore, Local SEO Services Coimbatore, Technical SEO Services Coimbatore, On-Page SEO Services Coimbatore, Google SEO Services Coimbatore, SEO Agency in Coimbatore"
        canonicalPath="/seo-services"
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          {/* Breadcrumb Visual Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-secondary-text mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text font-medium" aria-current="page">SEO Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Search size={18} />
              <span>SEO Services in Coimbatore</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              SEO Services <br className="hidden sm:block" />
              <span className="text-gradient">in Coimbatore</span>
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              Built With Purpose provides data-driven SEO services in Coimbatore, helping businesses enhance organic search visibility, capture high-intent Google searches, and generate sustainable traffic. We focus on technical SEO, semantic on-page optimization, and local search performance across Tamil Nadu and beyond.
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
                Explore Web Development Services
              </Link>
            </div>
          </div>
        </section>

        {/* Results-Driven SEO Services */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Results-Driven SEO Services for Your Business
              </h2>
              <p className="text-secondary-text text-lg">
                As a specialized SEO company in Coimbatore, we deliver white-hat, search engine optimization strategies that align with Google's search algorithms and user intent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">On-Page SEO Optimization</h3>
                  <p className="text-secondary-text mb-6">
                    Optimizing title tags, meta descriptions, semantic H1-H3 heading hierarchies, image alt text, and internal link structures for high search relevance.
                  </p>
                </div>
                <Link to="/ui-ux-design" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore UI/UX design
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Technical SEO &amp; Speed Audit</h3>
                  <p className="text-secondary-text mb-6">
                    In-depth audits of site speed, Core Web Vitals (LCP, INP, CLS), crawlability, sitemaps, canonical tags, and JavaScript rendering bottlenecks.
                  </p>
                </div>
                <Link to="/react-development" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore React development
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Local SEO in Coimbatore</h3>
                  <p className="text-secondary-text mb-6">
                    Targeted local search engine optimization, Google Business Profile alignment, and regional keyword placement to connect with local buyers.
                  </p>
                </div>
                <Link to="/business-website-development" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore business website development
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Keyword Research &amp; Intent</h3>
                <p className="text-secondary-text">
                  Mapping commercial and informational search intent to ensure your website attracts qualified leads actively seeking your solutions.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-6">
                  <CheckSquare size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Structured Data &amp; Schema.org</h3>
                <p className="text-secondary-text">
                  Implementing validated JSON-LD schema graphs for LocalBusiness, WebPage, Services, Breadcrumbs, and FAQs to support Google Rich Results.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                  <BarChart2 size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Performance &amp; Indexing Monitoring</h3>
                <p className="text-secondary-text">
                  Continuous tracking of organic impressions, click-through rates (CTR), search positions, and indexation via Google Search Console.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
              Why Choose Built With Purpose for SEO?
            </h2>
            <p className="text-secondary-text text-lg">
              We bring engineering precision to technical SEO, creating clean, search-friendly websites built for long-term organic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Code2 size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Technical SEO Expertise</h3>
              <p className="text-sm text-secondary-text">
                Hands-on experience optimizing modern React platforms, resolving hydration delays, and maximizing crawl efficiency.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <BarChart2 size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Data-Driven Strategy</h3>
              <p className="text-sm text-secondary-text">
                Focusing on real search intent, user engagement metrics, and sustainable organic traffic rather than artificial shortcuts.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Cpu size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Search-Friendly Architecture</h3>
              <p className="text-sm text-secondary-text">
                Websites built from the ground up with clean HTML5 markup, zero render-blocking CSS, and instant mobile responsiveness.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Transparent Reporting</h3>
              <p className="text-sm text-secondary-text">
                Clear insights into Google Search Console indexing, impression trends, and performance optimizations.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Our SEO Process
              </h2>
              <p className="text-secondary-text text-lg">
                A structured, 6-phase approach to improving search relevance, site health, and organic search visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'SEO Audit', desc: 'Analyzing existing search performance, indexation status, technical errors, and speed bottlenecks.' },
                { step: '02', title: 'Keyword Research', desc: 'Identifying commercial and local search queries relevant to your business target audience.' },
                { step: '03', title: 'On-Page Optimization', desc: 'Refactoring title tags, meta descriptions, heading structures, and semantic page content.' },
                { step: '04', title: 'Technical SEO', desc: 'Resolving canonical URL conflicts, schema markup errors, robots.txt issues, and mobile responsiveness.' },
                { step: '05', title: 'Content Strategy', desc: 'Structuring contextual internal links and valuable content topics that fulfill user search intent.' },
                { step: '06', title: 'Performance Monitoring', desc: 'Tracking Google Search Console metrics, search positions, and continuous performance refinement.' }
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

        {/* Local SEO in Coimbatore */}
        <section className="container mx-auto px-6 max-w-4xl mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-6">
            Tailored SEO Solutions for Businesses in Coimbatore
          </h2>
          <p className="text-secondary-text text-lg leading-relaxed mb-6">
            Coimbatore is a thriving industrial and commercial hub in Tamil Nadu, India. Standing out in local search results requires a strategy focused on technical site speed, semantic keyword relevance, and clear location signals.
          </p>
          <p className="text-secondary-text text-lg leading-relaxed">
            Whether you operate a local business in Coimbatore or serve customers across India, our SEO services ensure your web presence is optimized for search engines and real users alike.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 border-t border-border mb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">SEO Services FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-2xl border border-border shadow-soft">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  How quickly can SEO results be seen for a Coimbatore business?
                </h3>
                <p className="text-secondary-text">
                  Technical SEO fixes and on-page optimizations usually show indexing improvements within 2 to 4 weeks, with measurable organic traffic growth within 3 to 6 months.
                </p>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-border shadow-soft">
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

        {/* Call to Action Section */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-12 md:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Ready to Grow Your Organic Traffic?
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with Built With Purpose to audit your website, improve Google search rankings, and attract targeted organic leads in Coimbatore and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/#contact" 
                className="bg-white text-slate-900 font-button font-bold px-8 py-4 rounded-full shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300"
              >
                Get an SEO Consultation
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

export default SeoServices;
