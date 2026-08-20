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
        title="Web Development Company in Coimbatore | Built With Purpose"
        description="Web development company in Coimbatore crafting high-performance React websites, UI/UX designs & business SEO solutions. Get your free audit today!"
        keywords="web development company in Coimbatore, web development services in Coimbatore, website development company in Coimbatore, website development services in Coimbatore, SEO company in Coimbatore, React development company in Coimbatore, business website development in Coimbatore"
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
