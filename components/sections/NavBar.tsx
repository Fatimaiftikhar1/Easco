'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Certifications', href: '#why-us' },
    { label: 'Blog', href: '#quote' },
    { label: 'Contact', href: '#quote' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white transition-custom">
      {/* 1. ANNOUNCEMENT BAR */}
      {showAnnouncement && (
        <div className="bg-primary text-white text-[11px] md:text-[13px] font-medium text-center py-2 px-6 relative z-10 flex items-center justify-center">
          <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
            <span>CE &middot; FCC &middot; ISO9001 Certified | Trusted in 40+ Countries</span>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute right-0 text-white/60 hover:text-white transition-custom focus:outline-none"
              aria-label="Close Announcement"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* 2. NAVBAR */}
      <div
        className={`w-full border-b border-[#E8F0FB] transition-custom bg-white ${
          isScrolled ? 'shadow-custom py-3' : 'py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo and Icon */}
          <a href="#" className="flex items-center gap-2 group leading-none">
            <svg
              className="w-6 h-6 text-primary fill-current group-hover:text-accent transition-custom"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <rect x="4" y="6" width="4" height="12" rx="2"></rect>
              <rect x="16" y="6" width="4" height="12" rx="2"></rect>
              <rect x="8" y="10" width="8" height="4"></rect>
            </svg>
            <span className="font-heading font-extrabold text-2xl tracking-wider text-primary group-hover:text-accent transition-custom">
              EASCO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs md:text-sm font-semibold text-bodyColor hover:text-accent transition-custom uppercase tracking-wider font-heading"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Get a Quote Button */}
          <div className="hidden md:block">
            <a href="#quote">
              <Button
                variant="solid"
                size="sm"
                className="bg-primary text-white hover:bg-accent border border-primary hover:border-accent"
              >
                Get a Quote
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E8F0FB] py-4 px-6 absolute top-full left-0 w-full shadow-custom transition-custom animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-bodyColor hover:text-accent transition-custom uppercase tracking-wider font-heading"
              >
                {link.label}
              </a>
            ))}
            <a href="#quote" onClick={() => setIsOpen(false)} className="pt-2 border-t border-[#E8F0FB]">
              <Button variant="solid" size="sm" className="w-full bg-primary text-white hover:bg-accent">
                Get a Quote
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
