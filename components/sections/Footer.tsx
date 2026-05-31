'use client';

import React from 'react';
import { Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
import Button from '../ui/Button';

export const Footer: React.FC = () => {
  const products = [
    { name: 'Optical Speed Gates', href: '#products' },
    { name: 'Flap Barriers', href: '#products' },
    { name: 'Tripod Turnstiles', href: '#products' },
    { name: 'Full Height Turnstiles', href: '#products' },
    { name: 'Swing Gates', href: '#products' },
    { name: 'Sliding Gates', href: '#products' },
  ];

  const solutions = [
    { name: 'Transportation Hubs', href: '#solutions' },
    { name: 'Airports & Custom Lanes', href: '#solutions' },
    { name: 'Corporate Head offices', href: '#solutions' },
    { name: 'Sports Stadiums', href: '#solutions' },
    { name: 'Smart City Access', href: '#solutions' },
    { name: 'Industrial Plants', href: '#solutions' },
  ];

  const resources = [
    { name: 'Technical Blog', href: '#' },
    { name: 'CAD & BOQ Downloads', href: '#' },
    { name: 'Certifications Log', href: '#why-us' },
    { name: 'FAQ & Support', href: '#' },
    { name: 'Why Choose Us', href: '#why-us' },
  ];

  const company = [
    { name: 'About EASCO', href: '#process' },
    { name: 'Careers in Engineering', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Manufacture', href: '#' },
  ];

  const socials = [
    { icon: <Linkedin size={16} />, href: '#' },
    { icon: <Twitter size={16} />, href: '#' },
    { icon: <Youtube size={16} />, href: '#' },
    { icon: <Facebook size={16} />, href: '#' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to EASCO global newsletters.');
  };

  return (
    <footer className="bg-primary text-gray-300 pt-20 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-3 space-y-4">
            <a href="#" className="flex items-center gap-2 group leading-none">
              <svg
                className="w-6 h-6 text-white fill-current group-hover:text-accent transition-custom"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <rect x="4" y="6" width="4" height="12" rx="2"></rect>
                <rect x="16" y="6" width="4" height="12" rx="2"></rect>
                <rect x="8" y="10" width="8" height="4"></rect>
              </svg>
              <span className="font-heading font-extrabold text-2xl tracking-wider text-white group-hover:text-accent transition-custom">
                EASCO
              </span>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed pt-2">
              Direct manufacturer of high-performance turnstiles and security lanes. ISO9001 certified quality control, shipping worldwide from our direct facilities.
            </p>
          </div>

          {/* Column 2: Products */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-gray-400 hover:text-white transition-custom">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-gray-400 hover:text-white transition-custom">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resources.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-gray-400 hover:text-white transition-custom">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest pt-2">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.slice(0, 2).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-gray-400 hover:text-white transition-custom">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Stay Updated Form */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-widest">
              Stay Updated
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to receive engineering design drafts, product launch updates, and event invitations.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 pt-2">
              <input
                type="email"
                placeholder="Business Email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-custom px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-custom"
              />
              <Button type="submit" variant="accent" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} EASCO Nations Company. All rights reserved. Manufactured to ISO9001 specs.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent transition-custom shadow-custom"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
