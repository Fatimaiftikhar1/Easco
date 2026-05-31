'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export const SmartQuoteBanner: React.FC = () => {
  return (
    <section id="quote" className="py-24 bg-[#0a0a14] text-white border-b border-white/5 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Label and badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4 mb-8"
        >
          <span className="text-xs font-bold text-accent tracking-[0.3em] uppercase font-heading bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Smart Quote Request
          </span>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex flex-wrap items-center justify-center gap-3">
            <span>CE, FCC, ROHS Certified</span>
            <span className="text-accent">•</span>
            <span>Trusted in 40+ Countries</span>
          </p>
        </motion.div>

        {/* Large EASCO Logo */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-black text-6xl md:text-8xl tracking-wider text-white opacity-95 leading-none mb-6 uppercase"
        >
          EASCO
        </motion.h2>

        {/* Subtext and description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12 space-y-4"
        >
          <p className="text-gray-300 text-lg md:text-xl font-heading font-medium uppercase tracking-wide">
            Get a custom BOQ, product demo, or slide pricing from our engineering team. No obligation.
          </p>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
            Our specialized engineers will compile your access gate specifications, wiring schematic layouts, and shipping estimates within 24 business hours.
          </p>
        </motion.div>

        {/* Navigation Quick Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12 border-y border-white/5 py-6 max-w-4xl mx-auto"
        >
          {['Solutions', 'Products', 'Certifications', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase() === 'contact' ? 'quote' : link.toLowerCase() === 'about' ? 'process' : link.toLowerCase() === 'certifications' ? 'why-us' : link.toLowerCase()}`}
              className="text-xs md:text-sm font-bold uppercase tracking-widest font-heading text-gray-400 hover:text-white transition-custom"
            >
              {link}
            </a>
          ))}
        </motion.div>

        {/* Get a Quote Big CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="accent"
            size="lg"
            className="px-10 py-5 text-sm font-black tracking-[0.15em] bg-accent text-white hover:bg-blue-700 shadow-custom shadow-accent/20 hover:shadow-hover"
            onClick={() => {
              alert('Quote request initialized. In production, this launches an interactive drawing and BOQ form.');
            }}
          >
            Get a Quote Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartQuoteBanner;
