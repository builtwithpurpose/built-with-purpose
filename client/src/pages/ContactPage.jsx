import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const ContactPage = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.builtwithpurpose.in/" },
        { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.builtwithpurpose.in/contact" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Built With Purpose",
      "url": "https://www.builtwithpurpose.in/contact",
      "description": "Get in touch with Built With Purpose for web development, SEO, and UI/UX projects in Coimbatore, Tamil Nadu."
    }
  ];

  return (
    <>
      <SEO
        title="Contact Us | Built With Purpose Web Development Coimbatore"
        description="Ready to elevate your digital presence? Contact Built With Purpose in Coimbatore, Tamil Nadu for web development, technical SEO audits, and UI/UX design."
        keywords="contact Built With Purpose, web developer Coimbatore contact, SEO company contact Tamil Nadu"
        canonicalPath="/contact"
        schema={schema}
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
