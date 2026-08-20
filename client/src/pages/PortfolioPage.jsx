import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.builtwithpurpose.in/" },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.builtwithpurpose.in/portfolio" }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Our Works & Web Development Portfolio | Built With Purpose"
        description="Discover our portfolio of high-performance web applications, fintech dashboards, e-commerce platforms, and booking solutions built in Coimbatore."
        keywords="web portfolio Coimbatore, web development case studies, React web app portfolio, Built With Purpose projects"
        canonicalPath="/portfolio"
        schema={schema}
      />
      <Navbar />
      <main className="pt-20">
        <Portfolio />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
