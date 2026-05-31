'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Settings, CheckCircle2 } from 'lucide-react';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: <MessageSquare className="w-8 h-8 text-accent" />,
      title: 'Technical Consultation',
      description: 'Our engineering team reviews your architectural layout, entry lane width, expected passenger throughput, and site integration requirements.',
    },
    {
      step: '02',
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: 'Custom Quotation',
      description: 'We generate an itemized bill of quantities (BOQ) with custom pricing, drawings, access control compatibility logs, and factory delivery timelines.',
    },
    {
      step: '03',
      icon: <Settings className="w-8 h-8 text-accent" />,
      title: 'Manufacturing & QC',
      description: 'Your gates are fabricated from SUS304/SUS316 steel, standard electronic components are integrated, and we conduct rigid multi-hour stress tests.',
    },
    {
      step: '04',
      icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
      title: 'Installation & Handover',
      description: 'We provide comprehensive electrical manuals, structural anchorage specs, remote alignment assistance, and handover to your local integrators.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-customGray border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-accent tracking-[0.2em] uppercase font-heading">
            The Process
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary uppercase mt-2 mb-4">
            Simple. Fast. Professional.
          </h2>
          <p className="text-bodyColor text-lg leading-relaxed">
            From technical consultation to global transit dispatch, we provide structural blueprints and rapid manufacturing turnarounds.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <Card className="h-full bg-white p-8 flex flex-col justify-between items-start rounded-custom border border-gray-100 shadow-custom relative transition-custom hover:shadow-hover">
                <div className="space-y-6">
                  {/* Step Badge and Icon Row */}
                  <div className="w-full flex items-center justify-between">
                    <Badge variant="accent">
                      STEP {step.step}
                    </Badge>
                    <div className="w-14 h-14 rounded-custom bg-accent/5 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-heading font-extrabold text-lg text-primary uppercase">
                      {step.title}
                    </h3>
                    <p className="text-bodyColor text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Decorative background step number */}
                <div className="absolute bottom-4 right-6 text-gray-100 font-heading font-black text-6xl select-none pointer-events-none opacity-40">
                  {step.step}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
