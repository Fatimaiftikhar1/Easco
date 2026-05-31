'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Award, Settings } from 'lucide-react';

export const WhyEascoSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: 'Single-Category Focus',
      description: 'We do not dilute our expertise. We design, iterate, and manufacture turnstiles and access control gates exclusively, ensuring unmatched product depth.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: '10-Million-Cycle Testing',
      description: 'Our proprietary brushless motor drivetrains are stress-tested to 10 million mean cycles before failure (MCBF), establishing industry-leading lifecycle longevity.',
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: 'Global Certifications',
      description: 'Fully certified and tested by accredited international laboratories. Our products carry CE, FCC, RoHS, and SGS marks for immediate global deployment.',
    },
    {
      icon: <Settings className="w-6 h-6 text-accent" />,
      title: 'OEM/ODM Program',
      description: 'Direct manufacturer benefits. We support custom hardware dimensions, tailored cabinet finishes, and bespoke reader integrations for international system integrators.',
    },
  ];

  const certifications = ['CE Certified', 'FCC Compliant', 'RoHS Green', 'SGS Inspected', 'ISO 9001'];

  return (
    <section id="why-us" className="py-24 bg-customGray border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Manufacturing Image with ISO Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="w-full h-[450px] relative overflow-hidden rounded-custom shadow-custom">
              <img
                src="/images/factory.png"
                alt="EASCO Manufacturing Plant"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-custom" />

              {/* ISO Badge overlay */}
              <div className="absolute bottom-6 left-6 bg-gradient-to-r from-primary to-black text-white px-5 py-3 rounded-custom shadow-custom border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Award size={20} className="stroke-[2.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Quality Assurance</span>
                  <span className="font-heading font-extrabold text-sm uppercase text-white mt-1 leading-none">ISO9001 Certified</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Headers */}
            <div className="mb-10">
              <span className="text-sm font-bold text-accent tracking-[0.2em] uppercase font-heading">
                Why EASCO
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary uppercase mt-2 mb-4 leading-tight">
                Not a Reseller.<br />A Manufacturer.
              </h2>
              <p className="text-bodyColor text-base leading-relaxed">
                As a direct access gate manufacturer, we control every single phase of production, from raw steel sheet cutting, stamping, and polishing to controller board firmware flashing and quality control testing.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-custom border border-gray-100 shadow-custom flex gap-4 transition-custom hover:shadow-hover">
                  <div className="flex-shrink-0 w-12 h-12 rounded-custom bg-accent/5 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-primary uppercase mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-bodyColor text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certification Stamps Row */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.25em] text-center mb-6 font-heading">
            Accredited Global Certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="px-4 py-2 border border-gray-200 rounded text-xs font-bold uppercase tracking-widest text-primary bg-white shadow-custom font-heading hover:border-accent hover:text-accent transition-custom"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEascoSection;
