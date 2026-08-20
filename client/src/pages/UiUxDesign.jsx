import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Eye, Layout, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UiUxDesign = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.builtwithpurpose.in/" },
        { "@type": "ListItem", "position": 2, "name": "UI/UX & Website Design", "item": "https://www.builtwithpurpose.in/ui-ux-design" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "UI/UX & Website Design Services",
      "name": "Website Design Company in Coimbatore",
      "provider": {
        "@type": "Organization",
        "name": "Built With Purpose",
        "url": "https://www.builtwithpurpose.in"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Coimbatore, Tamil Nadu, India"
      },
      "description": "Leading website design company in Coimbatore delivering custom UI/UX design, brand identity, mobile wireframing, and interactive web mockups."
    }
  ];

  return (
    <>
      <SEO
        title="Website Design Company in Coimbatore | UI/UX & Brand Design"
        description="Looking for a top website design company in Coimbatore? Built With Purpose crafts user-centered UI/UX designs, brand identities, and high-converting website layouts."
        keywords="website design company in Coimbatore, UI UX design Coimbatore, web design agency Tamil Nadu, brand identity design, mobile website design"
        canonicalPath="/ui-ux-design"
        schema={schema}
      />
      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        <section className="container mx-auto px-6 max-w-7xl mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Palette size={18} />
              <span>Website Design Company in Coimbatore</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-text mb-6 leading-tight">
              User-Centric <span className="text-gradient">UI/UX &amp; Website Design</span>
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-8">
              We design stunning, accessible, and intuitive digital interfaces that elevate your brand visual identity and captivate your audience across all devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/#contact" 
                className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Start Design Project
                <ArrowRight size={18} />
              </a>
              <Link 
                to="/web-development" 
                className="bg-white border border-border text-text font-button font-semibold px-8 py-4 rounded-full hover:border-primary/30 transition-all duration-300 inline-flex items-center gap-2"
              >
                View Development Services
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 border-y border-border mb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                Design Solutions Crafted for Conversions
              </h2>
              <p className="text-secondary-text">
                Every layout is tailored for visual impact, accessibility standards, and search engine friendliness.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Custom UI/UX Wireframing</h3>
                <p className="text-secondary-text">
                  Data-driven user flow mapping, responsive wireframes, and interactive prototype testing.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Brand Identity Systems</h3>
                <p className="text-secondary-text">
                  Modern color schemes, typography tokens, custom icon sets, and comprehensive style guides.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">Mobile &amp; A11y Optimized</h3>
                <p className="text-secondary-text">
                  Pixel-perfect responsive design tailored for mobile screens with strict WCAG contrast compliance.
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

export default UiUxDesign;
