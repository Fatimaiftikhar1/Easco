'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface Testimonial {
  id: string;
  clientName: string;
  clientCompany: string;
  clientPhoto?: {
    url?: string;
    alt?: string;
  };
  rating: number;
  reviewText: string;
  featured?: boolean;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials = [] }) => {
  const defaultTestimonials: Testimonial[] = [
    {
      id: 'test-1',
      clientName: 'Marc Lehmann',
      clientCompany: 'Metro Link Transportation Authority',
      clientPhoto: { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', alt: 'Marc Lehmann' },
      rating: 5,
      reviewText: 'We deployed EASCO full height turnstiles across 12 subway stations. They have successfully handled an average of 450,000 daily passages over the past 3 years with zero motor failures. The structural SUS304 steel is completely rust-free.',
    },
    {
      id: 'test-2',
      clientName: 'Sarah Jenkins',
      clientCompany: 'AeroGate International Airport',
      clientPhoto: { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', alt: 'Sarah Jenkins' },
      rating: 5,
      reviewText: 'Their optical speed gates integrated seamlessly with our custom biometric facial recognition readers. The anti-tailgating sensors are exceptionally precise, dropping unauthorized access attempts instantly without interrupting flow.',
    },
    {
      id: 'test-3',
      clientName: 'Rajesh Patel',
      clientCompany: 'Apex Corporate HQ Towers',
      clientPhoto: { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', alt: 'Rajesh Patel' },
      rating: 5,
      reviewText: 'EASCO OEM custom finishing was a lifesaver. Our architectural lobby requested specialized gold titanium plating and custom curved cabinet dimensions. EASCO manufactured exactly to specs and shipped on schedule.',
    },
  ];

  const activeTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-accent tracking-[0.2em] uppercase font-heading">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary uppercase mt-2 mb-4">
            Trusted Where Failure Isn't Option.
          </h2>
          <p className="text-bodyColor text-lg leading-relaxed">
            Read what security engineers, airport operations directors, and corporate facilities managers say about EASCO gate durability.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTestimonials.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full bg-white p-8 flex flex-col justify-between rounded-custom border border-gray-100 shadow-custom transition-custom hover:shadow-hover">
                <div className="space-y-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        size={16}
                        className={`stroke-2 ${
                          starIdx < item.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-bodyColor text-sm leading-relaxed italic">
                    "{item.reviewText}"
                  </blockquote>
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 bg-gray-50 flex-shrink-0">
                    <img
                      src={item.clientPhoto?.url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'}
                      alt={item.clientPhoto?.alt || item.clientName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <cite className="font-heading font-extrabold text-sm text-primary uppercase not-italic leading-none">
                      {item.clientName}
                    </cite>
                    <span className="text-gray-400 text-xs mt-1 leading-tight">
                      {item.clientCompany}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Center Case Studies Button */}
        <div className="text-center mt-16">
          <a href="#quote">
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
              View All Case Studies
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
