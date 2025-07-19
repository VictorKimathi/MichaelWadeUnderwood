import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import Button from './Button';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Experience',
    path: '/experience'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Skills',
    path: '/skills'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white/90 py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Michael Wade Underwood
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-gray-600 ${location.pathname === link.path ? 'text-black' : 'text-gray-500'}`}>
              {link.name}
            </Link>)}
          <a href="/michael_underwood_resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4">
            <Button>Download Resume</Button>
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && <nav className="md:hidden bg-white px-6 py-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-base font-medium transition-colors hover:text-gray-600 ${location.pathname === link.path ? 'text-black' : 'text-gray-500'}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>)}
            <a href="/michael_underwood_resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button fullWidth>Download Resume</Button>
            </a>
          </div>
        </nav>}
    </header>;
};
export default Header;