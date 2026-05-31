'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Lightweight dynamic CountUp component on viewport scroll
const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({
  end,
  duration = 1500,
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

interface StatsSectionProps {
  data?: {
    installationsWorldwide?: number;
    countriesServed?: number;
    patentsHeld?: number;
    yearsExperience?: number;
  };
}

export const StatsSection: React.FC<StatsSectionProps> = ({ data }) => {
  const statsList = [
    {
      value: data?.installationsWorldwide || 500,
      suffix: '+',
      label: 'Clients Worldwide',
    },
    {
      value: data?.countriesServed || 40,
      suffix: '+',
      label: 'Countries Served',
    },
    {
      value: data?.patentsHeld || 200,
      suffix: '+',
      label: 'Patents Held',
    },
    {
      value: data?.yearsExperience || 20,
      suffix: ' Yrs',
      label: 'Industry Experience',
    },
  ];

  return (
    <section className="py-20 bg-[#0c0c16] text-white border-y border-white/5 relative overflow-hidden">
      {/* Subtle glowing lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4 border-r border-white/5 last:border-0 md:border-r"
            >
              <div className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight uppercase mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-heading font-semibold text-xs md:text-sm text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
