import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Eye, Layout, Sparkles, ArrowRight, HelpCircle, Compass, Layers, CheckCircle2, ShieldCheck, Code2, Users } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UiUxDesign = () => {
  return (
    <>
      <SEO
        title="UI/UX Design Services in Coimbatore | Built With Purpose"
        description="UI/UX design services in Coimbatore crafting user-centered web interfaces, wireframes & responsive app designs. Let's design your digital project today!"
        keywords="UI/UX Design Services in Coimbatore, UI UX Design Company in Coimbatore, UI UX Design Services Coimbatore, Website UI UX Design Coimbatore, User Experience Design Coimbatore, User Interface Design Coimbatore, Website Design Services Coimbatore"
        canonicalPath="/ui-ux-design"
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          {/* Breadcrumb Visual Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-secondary-text mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text font-medium" aria-current="page">UI/UX Design</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Palette size={18} />
              <span>UI/UX Design Services in Coimbatore</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              UI/UX Design Services <br className="hidden sm:block" />
              <span className="text-gradient">in Coimbatore</span>
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              Built With Purpose delivers user-centered UI/UX design services in Coimbatore. We craft intuitive web interfaces, mobile application wireframes, and design systems engineered to captivate your audience and drive business conversions across Tamil Nadu and global markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Discuss Your Design Project
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

        {/* User-Centered UI/UX Design for Modern Businesses */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                User-Centered UI/UX Design for Modern Businesses
              </h2>
              <p className="text-secondary-text text-lg">
                As a specialized UI/UX design company in Coimbatore, we combine visual aesthetic excellence with functional user experience principles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Layout size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Website UI/UX Design</h3>
                  <p className="text-secondary-text mb-6">
                    Custom web interface design crafted for high visual engagement, clear visual hierarchy, and search engine compatibility.
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
                    <Layers size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Web &amp; Mobile App UI/UX Design</h3>
                  <p className="text-secondary-text mb-6">
                    Designing responsive application dashboards, portal layouts, and touch-friendly mobile interfaces.
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
                    <Eye size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Responsive Interface Design</h3>
                  <p className="text-secondary-text mb-6">
                    Ensuring pixel-perfect responsive layouts that adapt smoothly across smartphones, tablets, laptops, and wide monitors.
                  </p>
                </div>
                <Link to="/business-website-development" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore business website development
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">User Research &amp; User Flows</h3>
                <p className="text-secondary-text">
                  Mapping user journeys, customer personas, and navigation logic to remove user friction and improve interaction flows.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-6">
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Wireframing &amp; Prototyping</h3>
                <p className="text-secondary-text">
                  Building low-fidelity structural wireframes and high-fidelity interactive prototypes for rapid design feedback and testing.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Design Systems &amp; Style Guides</h3>
                  <p className="text-secondary-text mb-6">
                    Creating reusable component libraries, design tokens, color palettes, and brand style guides for digital consistency.
                  </p>
                </div>
                <Link to="/seo-services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                  Explore SEO services
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
              Why Choose Built With Purpose for UI/UX Design?
            </h2>
            <p className="text-secondary-text text-lg">
              We bridge the gap between creative visual design and technical web implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">User-Centered Design</h3>
              <p className="text-sm text-secondary-text">
                Fulfilling user expectations through clear navigation paths and logical interface structures.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                <Layout size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Responsive Interfaces</h3>
              <p className="text-sm text-secondary-text">
                Ensuring a seamless visual experience across all screen sizes and mobile viewports.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Conversion-Focused UX</h3>
              <p className="text-sm text-secondary-text">
                Designing strategic call-to-action sections that guide users toward conversion goals.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <Eye size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Accessible Design</h3>
              <p className="text-sm text-secondary-text">
                Prioritizing high contrast ratios, readable typography, and accessible visual hierarchy.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-border shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
                <Code2 size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Developer-Friendly</h3>
              <p className="text-sm text-secondary-text">
                Clean component specs and design tokens ready for React and Tailwind CSS implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Our UI/UX Design Process
              </h2>
              <p className="text-secondary-text text-lg">
                A structured 6-stage design methodology ensuring visual excellence and seamless development handoff.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Discovery & User Research', desc: 'Understanding your market goals, target user audience, and competitor design benchmarks.' },
                { step: '02', title: 'Information Architecture', desc: 'Structuring sitemaps, page layouts, and logical user flow journeys.' },
                { step: '03', title: 'Wireframing', desc: 'Creating structural wireframes to map user interaction logic before visual styling.' },
                { step: '04', title: 'UI Design', desc: 'Applying brand visual design, curated color palettes, typography, and visual assets.' },
                { step: '05', title: 'Prototype & Testing', desc: 'Building interactive prototypes to test visual transitions and user experience flows.' },
                { step: '06', title: 'Developer Handoff', desc: 'Providing design tokens, asset packages, and component specifications for development.' }
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
            UI/UX Design for Businesses in Coimbatore
          </h2>
          <p className="text-secondary-text text-lg leading-relaxed mb-6">
            As businesses in Coimbatore expand their digital footprint across Tamil Nadu and global markets, outstanding UI/UX design has become a core competitive advantage. A clean, intuitive user interface builds instant brand trust and communicates professionalism.
          </p>
          <p className="text-secondary-text text-lg leading-relaxed">
            At Built With Purpose, our UI/UX designers in Coimbatore craft custom digital experiences that combine visual beauty with search engine friendliness and high conversion performance.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 border-t border-border mb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">UI/UX FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background rounded-2xl border border-border shadow-soft">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  Why is user-centered UI/UX design critical for business websites?
                </h3>
                <p className="text-secondary-text">
                  Intuitive UI/UX design reduces bounce rates, improves brand credibility, and guides visitors toward conversion actions seamlessly across all screen sizes.
                </p>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-border shadow-soft">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle size={20} className="text-primary" />
                  What deliverables are included in your UI/UX design services in Coimbatore?
                </h3>
                <p className="text-secondary-text">
                  We provide complete user research, wireframes, high-fidelity visual mockups, design tokens, interactive prototypes, and clean developer handoff assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-12 md:p-16 text-center border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Let's Design Your Next Digital Experience
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with Built With Purpose to craft user-centered UI/UX designs and modern website interfaces designed to engage users and scale your business in Coimbatore.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/#contact" 
                className="bg-white text-slate-900 font-button font-bold px-8 py-4 rounded-full shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300"
              >
                Discuss Your Design Project
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

export default UiUxDesign;
