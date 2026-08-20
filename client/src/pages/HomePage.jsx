import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Web Development & SEO Company in Coimbatore | Built With Purpose"
        description="Built With Purpose is a web development and SEO company in Coimbatore offering business websites, React development, UI/UX design and SEO services."
        keywords="Web Development Company in Coimbatore, SEO Company in Coimbatore, Website Development Services Coimbatore, React Development Company Coimbatore, Business Website Development Coimbatore, UI UX Design Coimbatore"
        canonicalPath="/"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Team />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
