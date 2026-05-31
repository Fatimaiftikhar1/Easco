'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface Product {
  id: string;
  name: string;
  slug: string;
  image?: {
    url?: string;
    alt?: string;
  };
  shortDescription: string;
  category: 'optical-speed-gate' | 'flap-barrier' | 'tripod-turnstile' | 'full-height' | 'swing-gate' | 'sliding-gate';
  featured?: boolean;
}

interface ProductsSectionProps {
  products?: Product[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ products = [] }) => {
  const [activeTab, setActiveTab] = useState<Product['category']>('optical-speed-gate');

  const tabs: { label: string; value: Product['category'] }[] = [
    { label: 'Optical Speed Gate', value: 'optical-speed-gate' },
    { label: 'Flap Barrier', value: 'flap-barrier' },
    { label: 'Tripod Turnstile', value: 'tripod-turnstile' },
    { label: 'Full Height', value: 'full-height' },
    { label: 'Swing Gate', value: 'swing-gate' },
    { label: 'Sliding Gate', value: 'sliding-gate' },
  ];

  // High-fidelity fallback products
  const defaultProducts: Product[] = [
    // Optical Speed Gates
    {
      id: 'prod-1',
      name: 'EASCO SG-100 Premium Speed Gate',
      slug: 'sg-100-premium-speed-gate',
      image: { url: '/images/product.png', alt: 'Optical Speed Gate' },
      shortDescription: 'High-performance glass barrier optical speed gate with bi-directional brushless motor, integrated access control, and 0.2-second rapid opening.',
      category: 'optical-speed-gate',
      featured: true,
    },
    {
      id: 'prod-1b',
      name: 'EASCO SG-200 Slimline Access',
      slug: 'sg-200-slimline-access',
      image: { url: '/images/product.png', alt: 'Slim Speed Gate' },
      shortDescription: 'Ultra-narrow cabinet speed gate, designed for corporate offices and premium lobbies with minimal footprint and maximum aesthetic appeal.',
      category: 'optical-speed-gate',
      featured: true,
    },
    // Flap Barriers
    {
      id: 'prod-2',
      name: 'EASCO FB-300 Heavy Duty Flap Barrier',
      slug: 'fb-300-heavy-duty-flap',
      image: { url: '/images/product.png', alt: 'Flap Barrier' },
      shortDescription: 'Heavy-duty wing flap barrier featuring red/green rubber flaps, triple infra-red sensors, and anti-tailgating mechanisms for mass transit systems.',
      category: 'flap-barrier',
      featured: true,
    },
    // Tripod Turnstiles
    {
      id: 'prod-3',
      name: 'EASCO TT-400 Rotary Tripod Turnstile',
      slug: 'tt-400-rotary-tripod',
      image: { url: '/images/product.png', alt: 'Tripod Turnstile' },
      shortDescription: 'Robust semi-automatic mechanical tripod turnstile with drop-arm emergency bypass, durable stainless steel housing, and anti-climb design.',
      category: 'tripod-turnstile',
      featured: true,
    },
    // Full Height Turnstiles
    {
      id: 'prod-4',
      name: 'EASCO FH-500 Secure Full Height Turnstile',
      slug: 'fh-500-secure-full-height',
      image: { url: '/images/product.png', alt: 'Full Height Turnstile' },
      shortDescription: 'Maximum security 4-section double rotor full height turnstile, built in structural hot-dip galvanized steel for perimeter defense.',
      category: 'full-height',
      featured: true,
    },
    // Swing Gates
    {
      id: 'prod-5',
      name: 'EASCO SW-600 Cylindrical Swing Gate',
      slug: 'sw-600-cylindrical-swing',
      image: { url: '/images/product.png', alt: 'Swing Gate' },
      shortDescription: 'Wide lane mechanical or motorized cylindrical swing barrier, designed specifically for wheelchair, VIP passage, and large parcel transit.',
      category: 'swing-gate',
      featured: true,
    },
    // Sliding Gates
    {
      id: 'prod-6',
      name: 'EASCO SL-700 High-Speed Sliding Gate',
      slug: 'sl-700-high-speed-sliding',
      image: { url: '/images/product.png', alt: 'Sliding Gate' },
      shortDescription: 'High-speed retractable sliding gate with full-height acrylic panels, offering complete containment and sophisticated access security control.',
      category: 'sliding-gate',
      featured: true,
    },
  ];

  const allProducts = products.length > 0 ? products : defaultProducts;
  const filteredProducts = allProducts.filter((product) => product.category === activeTab);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-accent tracking-[0.2em] uppercase font-heading">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary uppercase mt-2 mb-4">
            Every Gate. One Manufacturer.
          </h2>
          <p className="text-bodyColor text-lg leading-relaxed">
            From optical speed gates to full height rotary turnstiles, we design, test, and manufacture all of our entry security solutions under one roof.
          </p>
        </div>

        {/* Dynamic Filters - Horizontal Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 max-w-5xl mx-auto pb-4 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2.5 rounded-custom text-xs md:text-sm font-bold uppercase tracking-wider font-heading transition-custom border ${
                activeTab === tab.value
                  ? 'bg-accent text-white border-accent shadow-custom'
                  : 'bg-transparent text-bodyColor border-gray-200 hover:border-accent hover:text-accent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[450px]">
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 3).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  layout
                >
                  <Card className="h-full flex flex-col justify-between p-0 overflow-hidden border border-gray-100 rounded-custom group">
                    <div>
                      {/* Product Image */}
                      <div className="h-56 relative w-full overflow-hidden bg-gray-100">
                        <img
                          src={product.image?.url || '/images/product.png'}
                          alt={product.image?.alt || product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded font-heading">
                          {tabs.find(t => t.value === product.category)?.label}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-heading font-extrabold text-xl text-primary uppercase group-hover:text-accent transition-custom mb-3 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-bodyColor text-sm leading-relaxed line-clamp-3">
                          {product.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* View Specs Link */}
                    <div className="px-6 pb-6 pt-2">
                      <a
                        href="#quote"
                        className="inline-flex items-center text-xs font-bold text-accent uppercase tracking-wider font-heading hover:text-primary transition-custom"
                      >
                        View Specs &rarr;
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex items-center justify-center h-48 border border-dashed border-gray-200 rounded-custom">
                <p className="text-gray-400 font-semibold font-heading uppercase">
                  No products found in this category.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-16">
          <a href="#quote">
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
              View All Products
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
