import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us | Built With Purpose Web Development Coimbatore"
        description="Ready to elevate your digital presence? Contact Built With Purpose in Coimbatore, Tamil Nadu for web development, technical SEO audits, and UI/UX design."
        keywords="contact Built With Purpose, web developer Coimbatore contact, SEO company contact Tamil Nadu"
        canonicalPath="/contact"
      />
      <Navbar />
      <main className="pt-20">
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
