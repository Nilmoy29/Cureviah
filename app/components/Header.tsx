'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Cureviah</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/destinations" className="text-gray-700 hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link href="/treatments" className="text-gray-700 hover:text-primary transition-colors">
            Treatments
          </Link>
          <Link href="/doctor-finder" className="text-gray-700 hover:text-primary transition-colors">
            Find a Doctor
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hidden md:inline-block btn-secondary py-1.5 px-3">
            Sign In
          </Link>
          <Link href="/register" className="hidden md:inline-block btn-primary py-1.5 px-3">
            Get Started
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container-custom py-4 space-y-2">
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary hover:bg-gray-50 px-4 rounded">
              About Us
            </Link>
            <Link href="/destinations" className="block py-2 text-gray-700 hover:text-primary hover:bg-gray-50 px-4 rounded">
              Destinations
            </Link>
            <Link href="/treatments" className="block py-2 text-gray-700 hover:text-primary hover:bg-gray-50 px-4 rounded">
              Treatments
            </Link>
            <Link href="/doctor-finder" className="block py-2 text-gray-700 hover:text-primary hover:bg-gray-50 px-4 rounded">
              Find a Doctor
            </Link>
            <Link href="/faq" className="block py-2 text-gray-700 hover:text-primary hover:bg-gray-50 px-4 rounded">
              FAQ
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary hover:bg-gray-50 px-4 rounded">
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/login" className="block btn-secondary py-2 text-center">
                Sign In
              </Link>
              <Link href="/register" className="block btn-primary py-2 text-center">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 