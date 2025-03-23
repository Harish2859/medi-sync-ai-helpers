
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronLeft } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Back button for non-home pages */}
          {!isHomePage && (
            <Link 
              to="/" 
              className="flex items-center mr-2 text-medisync-700 hover:text-medisync-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="ml-1 text-sm">Back</span>
            </Link>
          )}
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-xl font-semibold tracking-tight text-medisync-700">
                MediSync<span className="text-mint-500">AI</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-medisync-600 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-medisync-600 transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className="text-medisync-600 font-medium hover:text-medisync-700 transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="btn-primary"
            >
              Sign Up
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-medisync-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/about" 
              className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className="block py-2 px-3 text-medisync-600 font-medium hover:bg-gray-50 rounded-md"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="block py-2 px-3 text-white bg-medisync-600 hover:bg-medisync-700 rounded-md font-medium"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
