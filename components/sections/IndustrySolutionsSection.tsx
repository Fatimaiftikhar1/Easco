'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface Solution {
  id: string;
  title: string;
  image?: {
    url?: string;
    alt?: string;
  };
  link: string;
}

interface IndustrySolutionsSectionProps {
  solutions?: Solution[];
}

export const IndustrySolutionsSection: React.FC<IndustrySolutionsSectionProps> = ({ solutions = [] }) => {
  const defaultSolutions: Solution[] = [
    {
      id: 'sol-1',
      title: 'Transportation Hubs',
      image: { url: '/images/airport.png', alt: 'Transportation Hubs' },
      link: '#quote',
    },
    {
      id: 'sol-2',
      title: 'Airports',
      image: { url: '/images/airport.png', alt: 'Airports' },
      link: '#quote',
    },
    {
      id: 'sol-3',
      title: 'Corporate Campuses',
      image: { url: '/images/corporate.png', alt: 'Corporate Campuses' },
      link: '#quote',
    },
    {
      id: 'sol-4',
      title: 'Stadiums',
      image: { url: '/images/stadium.png', alt: 'Stadiums' },
      link: '#quote',
    },
    {
      id: 'sol-5',
      title: 'Smart Cities',
      image: { url: '/images/corporate.png', alt: 'Smart Cities' },
      link: '#quote',
    },
    {
      id: 'sol-6',
      title: 'Industrial Facilities',
      image: { url: '/images/factory.png', alt: 'Industrial Facilities' },
      link: '#quote',
    },
  ];

  const activeSolutions = solutions.length > 0 ? solutions : defaultSolutions;

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-accent tracking-[0.2em] uppercase font-heading">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary uppercase mt-2 mb-4">
            Turnstile Solutions for Your Industry
          </h2>
          <p className="text-bodyColor text-lg leading-relaxed">
            EASCO gates are deployed globally in highly sensitive sites and high-traffic public arenas. We customize controllers and finishes to meet unique security challenges.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSolutions.slice(0, 6).map((solution, idx) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <a
                href={solution.link}
                className="block h-72 relative rounded-custom overflow-hidden shadow-custom border border-gray-100 group"
              >
                {/* Background Image */}
                <img
                  src={solution.image?.url || '/images/corporate.png'}
                  alt={solution.image?.alt || solution.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-[0.7] group-hover:brightness-[0.5]"
                />

                {/* Gradient dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-custom" />

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-wide leading-tight group-hover:text-accent transition-custom">
                    {solution.title}
                  </h3>
                  <span className="inline-flex items-center text-xs font-bold text-accent uppercase tracking-wider font-heading mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    View Industry Specs &rarr;
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Solutions Button */}
        <div className="text-center mt-16">
          <a href="#quote">
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
              View All Solutions
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
