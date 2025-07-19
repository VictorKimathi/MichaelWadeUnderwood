import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold tracking-tight">
              Michael Wade Underwood
            </Link>
            <p className="text-gray-500 mt-2 text-sm">
              Culinary Storyteller & Content Writer
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
            <Link to="/about" className="text-sm text-gray-500 hover:text-gray-700">
              About
            </Link>
            <Link to="/portfolio" className="text-sm text-gray-500 hover:text-gray-700">
              Portfolio
            </Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-700">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Michael Wade Underwood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;