import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us | Built With Purpose Web Development Coimbatore"
        description="Built With Purpose is a digital agency based in Coimbatore, Tamil Nadu. We specialize in custom React web development, technical SEO, and UI/UX design."
        keywords="about Built With Purpose, web agency Coimbatore, React developers Tamil Nadu, SEO agency Coimbatore"
        canonicalPath="/about"
      />
      <Navbar />
      <main className="pt-20">
        <About />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
