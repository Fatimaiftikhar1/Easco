'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

// Slate Rich Text Serializer Helper
const serializeRichText = (nodes: any[]): React.ReactNode => {
  if (!nodes || !Array.isArray(nodes)) return null;
  return nodes.map((node, i) => {
    if (!node) return null;

    if (node.text !== undefined) {
      let text: React.ReactNode = node.text;
      if (node.bold) text = <strong key={i} className="font-extrabold text-primary">{text}</strong>;
      if (node.italic) text = <em key={i}>{text}</em>;
      if (node.underline) text = <u key={i}>{text}</u>;
      return <span key={i}>{text}</span>;
    }

    const children = serializeRichText(node.children);
    switch (node.type) {
      case 'h1':
        return <h1 key={i} className="text-4xl md:text-6xl font-heading font-extrabold text-primary tracking-tight uppercase leading-tight">{children}</h1>;
      case 'h2':
        return <h2 key={i} className="text-2xl md:text-3xl font-heading font-semibold text-primary tracking-wide uppercase">{children}</h2>;
      case 'paragraph':
      default:
        return <p key={i} className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">{children}</p>;
    }
  });
};

interface HeroSectionProps {
  data?: {
    heroHeadline?: any[];
    heroSubtext?: string;
    heroCTAPrimary?: string;
    heroCTASecondary?: string;
    heroBackgroundImage?: {
      url?: string;
      alt?: string;
    };
    trustedByLogos?: Array<{
      logo?: {
        url?: string;
        alt?: string;
      };
      id?: string;
    }>;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  // Use a bright daylight lobby image matching the screenshot
  const bgImage = data?.heroBackgroundImage?.url || '/images/hero.png';
  const headline = data?.heroHeadline;
  const subtext = data?.heroSubtext || 'High-performance turnstile systems engineered for high traffic security, reliability, and seamless architectural integration.';
  const ctaPrimary = data?.heroCTAPrimary || 'Request a Quote';
  const ctaSecondary = data?.heroCTASecondary || 'Explore Products';

  const defaultTrustedLogos = [
    { url: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=200&h=80&q=80', alt: 'Partner 1' },
    { url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&h=80&q=80', alt: 'Partner 2' },
    { url: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=200&h=80&q=80', alt: 'Partner 3' },
    { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=80&q=80', alt: 'Partner 4' },
    { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&h=80&q=80', alt: 'Partner 5' },
  ];

  const trustedLogos = data?.trustedByLogos?.map(item => ({
    url: item.logo?.url,
    alt: item.logo?.alt || 'Trusted Partner'
  })).filter(x => x.url) || defaultTrustedLogos;

  const trustBadges = [
    '25+ Offices Worldwide',
    'ISO Certified',
    'Trusted by 40+ Countries',
  ];

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-36 pb-12 bg-white overflow-hidden">
      
      {/* Lobby background image aligned to the right side of the screen */}
      <div 
        className="absolute right-0 top-0 w-full md:w-[55%] h-full bg-cover bg-center bg-no-repeat transition-all duration-700 z-0 hidden md:block"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />

      {/* Gradient overlay to smoothly transition the lobby image into the white left text container */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white via-[45%] md:via-[40%] to-transparent pointer-events-none" />
      
      {/* Visual background helper for mobile (since lobby is hidden or underneath) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15 md:hidden"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content Area (Navy/Dark Text, clean white backdrop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-7 flex flex-col space-y-6"
          >
            {/* Small Label */}
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-accent uppercase font-heading">
              EASCO NATIONS COMPANY
            </span>

            {/* Headline */}
            <div className="space-y-2">
              {headline ? (
                serializeRichText(headline)
              ) : (
                <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary tracking-tight uppercase leading-[1.1]">
                  Engineered for<br />
                  <span className="text-accent">Every Entry.</span>
                </h1>
              )}
            </div>

            {/* Subtext */}
            <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              {subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#quote">
                <Button variant="solid" size="lg" className="bg-primary text-white hover:bg-accent shadow-custom hover:shadow-hover">
                  {ctaPrimary}
                </Button>
              </a>
              <a href="#products">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  {ctaSecondary}
                </Button>
              </a>
            </div>

            {/* Checkmark trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-gray-100">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center text-sm text-primary font-bold font-heading uppercase tracking-wide">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mr-2 text-accent">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Strip Marquee */}
      <div className="bottom-strip w-full overflow-hidden z-20 mt-12">
        <div className="strip-container">
          <div className="strip-label">
            Trusted By:
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {/* Original set */}
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={`orig-${idx}`} className="client-logo">
                  PARTNER 0{idx + 1}
                </div>
              ))}
              {/* Duplicated set for seamless loop */}
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={`dup-${idx}`} className="client-logo">
                  PARTNER 0{idx + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
