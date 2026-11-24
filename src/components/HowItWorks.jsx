import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Compass, PhoneCall, Sparkles, CheckCircle } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/steps';

const stepIconMap = {
  UserPlus,
  Compass,
  PhoneCall,
  Sparkles,
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How Antharangam Works"
      className="py-24 md:py-32 bg-surface-container-low/90 relative overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed/70 border border-outline-variant/40 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Simple Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight"
          >
            Get Started in Simple Steps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-on-surface-variant font-normal leading-relaxed"
          >
            Start exploring Antharangam through a simple and convenient experience.
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary-fixed via-primary to-primary-container z-0 rounded-full opacity-60" />

          {/* Grid of 4 steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const Icon = stepIconMap[step.iconName] || Sparkles;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle Indicator */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-white shadow-soft-purple border-4 border-surface-container-high group-hover:border-primary flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-white shadow-md shadow-primary/30">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    {/* Badge number */}
                    <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-on-surface text-white text-xs font-extrabold flex items-center justify-center shadow-md">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Card Content */}
                  <div className="w-full bg-white p-6 rounded-3xl border border-outline-variant/30 shadow-soft-purple group-hover:shadow-card-hover group-hover:border-primary/40 transition-all duration-300 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold tracking-wider text-secondary uppercase block mb-1">
                        {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-on-surface mb-2.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-center gap-1.5 text-xs text-primary font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{step.details}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
