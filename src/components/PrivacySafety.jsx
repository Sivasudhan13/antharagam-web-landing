import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Ban, FileText, UserX, Shield, ArrowUpRight } from 'lucide-react';
import { SAFETY_CARDS } from '../data/safety';

const safetyIconMap = {
  ShieldCheck,
  Ban,
  FileText,
  UserX,
};

export default function PrivacySafety() {
  return (
    <section
      id="safety"
      aria-label="Privacy and Safety"
      className="py-24 md:py-32 bg-surface-container-low/90 relative overflow-hidden"
    >
      {/* Decorative Lavender Blobs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed/70 border border-outline-variant/40 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Safety &amp; Transparency</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight"
          >
            Your Privacy and Safety Matter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-on-surface-variant font-normal leading-relaxed"
          >
            Antharangam includes features and processes designed to support a safer user experience.
          </motion.p>
        </div>

        {/* 4 Safety Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SAFETY_CARDS.map((card, idx) => {
            const Icon = safetyIconMap[card.iconName] || ShieldCheck;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-7 border border-outline-variant/40 shadow-soft-purple hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary-fixed/60 text-secondary">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs text-secondary font-medium">
                  <span>{card.notice}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Policy Links Quick Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-white rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-on-surface">Explore Official Guidelines &amp; Policies</div>
              <div className="text-xs text-on-surface-variant">Review Community Guidelines, Terms, and Privacy documentation anytime.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://sites.google.com/view/anatharangam-privacy-policies/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary text-xs font-bold transition-colors"
            >
              <span>Privacy Policy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://sites.google.com/view/antharangam-community-guidelin/home?authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary text-xs font-bold transition-colors"
            >
              <span>Community Guidelines</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
