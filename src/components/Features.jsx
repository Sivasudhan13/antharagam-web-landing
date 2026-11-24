import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, Users, UserRound, Wallet, Coins, Sparkles, ArrowRight } from 'lucide-react';
import { FEATURES } from '../data/features';

const iconMap = {
  Phone,
  Video,
  Users,
  UserRound,
  Wallet,
  Coins,
};

export default function Features({ onOpenDownload }) {
  return (
    <section
      id="features"
      aria-label="Features Section"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative Lavender Glow Background Elements */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight"
          >
            Everything You Need for Better Conversations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-on-surface-variant font-normal leading-relaxed"
          >
            Explore the features that make Antharangam a simple and engaging communication platform.
          </motion.p>
        </div>

        {/* 6 Feature Cards Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.iconName] || Phone;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-7 border border-outline-variant/40 shadow-soft-purple hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top: Icon + Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-surface-container group-hover:bg-primary-fixed text-primary group-hover:text-primary-container flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-surface-container text-secondary group-hover:bg-primary-fixed/80 group-hover:text-primary transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Highlight Strip */}
                <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs font-semibold text-secondary group-hover:text-primary transition-colors">
                  <span>{feature.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <button
            type="button"
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-container px-6 py-3 rounded-full bg-primary-fixed/60 hover:bg-primary-fixed transition-colors"
          >
            <span>Experience all features on your mobile device</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
