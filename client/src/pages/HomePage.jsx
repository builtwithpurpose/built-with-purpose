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
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.builtwithpurpose.in/#website",
      "url": "https://www.builtwithpurpose.in/",
      "name": "Built With Purpose",
      "description": "Web Development, SEO & UI/UX Company in Coimbatore",
      "publisher": {
        "@id": "https://www.builtwithpurpose.in/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://www.builtwithpurpose.in/#organization",
      "name": "Built With Purpose",
      "url": "https://www.builtwithpurpose.in",
      "logo": "https://www.builtwithpurpose.in/logo.png",
      "image": "https://www.builtwithpurpose.in/og-image.png",
      "description": "Built With Purpose is a technical SEO and web development company based in Coimbatore, Tamil Nadu. We build modern websites, React web apps, UI/UX designs, and digital growth solutions.",
      "email": "builtwithpurposein@gmail.com",
      "telephone": "+91 9842262888",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Singanallur",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641005",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Coimbatore"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Tamil Nadu"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "sameAs": [
        "https://twitter.com",
        "https://linkedin.com",
        "https://github.com",
        "https://instagram.com"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide comprehensive digital marketing services including SEO, Social Media Marketing, Paid Advertising, Branding & Graphic Design, Content Marketing, and custom Web & App Development."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines vary depending on complexity. A standard website redesign might take 4-6 weeks, while a comprehensive branding and digital marketing campaign is usually an ongoing partnership."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with startups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We love working with startups. We help new businesses establish their brand identity, build their digital presence, and scale their customer acquisition rapidly."
          }
        },
        {
          "@type": "Question",
          "name": "What is your pricing structure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer custom quotes based on your specific needs and goals. We believe in transparent pricing and will provide a detailed breakdown during our initial discovery call."
          }
        },
        {
          "@type": "Question",
          "name": "Will I have a dedicated project manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Every client is assigned a dedicated project manager who will be your main point of contact, ensuring clear communication and timely delivery throughout the project."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Built With Purpose | Web Development, SEO & UI/UX Company in Coimbatore"
        description="Built With Purpose is a premier web development and SEO company in Coimbatore, Tamil Nadu. We build modern React applications, MERN stack solutions, UI/UX designs, and search-optimized digital platforms."
        keywords="web development company in Coimbatore, website development company in Coimbatore, website design company in Coimbatore, SEO services in Coimbatore, web development for small businesses, website development for startups, React development services"
        canonicalPath="/"
        schema={schema}
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
