import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 Page Not Found | Built With Purpose"
        description="The requested page could not be found. Return to Built With Purpose homepage or explore our web development services in Coimbatore."
        canonicalPath="/404"
      />
      <Navbar />

      <main className="pt-32 pb-24 bg-background min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <span className="text-7xl font-extrabold text-gradient block mb-4 font-heading">404</span>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
            Page Not Found
          </h1>
          <p className="text-secondary-text text-lg mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="bg-gradient-to-r from-primary to-secondary text-white font-button font-semibold px-8 py-3.5 rounded-full shadow-soft hover:shadow-premium transition-all duration-300 inline-flex items-center gap-2"
            >
              <Home size={18} />
              Return Home
            </Link>
            <Link
              to="/web-development"
              className="bg-white border border-border text-text font-button font-semibold px-8 py-3.5 rounded-full hover:border-primary/30 transition-all duration-300 inline-flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Explore Web Services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
