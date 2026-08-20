import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Web Development & Digital Services Overview | Built With Purpose"
        description="Explore our range of technical services in Coimbatore: React web development, technical SEO audits, UI/UX design, and business website creation."
        keywords="web services Coimbatore, SEO services Tamil Nadu, UI UX design services, React development company"
        canonicalPath="/services"
      />
      <Navbar />
      <main className="pt-20">
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
