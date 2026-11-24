import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Video, Users, UserRound, Coins, ShieldCheck, CheckCircle2, Sparkles, Smartphone } from 'lucide-react';
import { APP_INFO } from '../data/navigation';

export default function About() {
  const [activeTab, setActiveTab] = useState('caller');

  const pillars = [
    {
      title: 'One-to-One Communication',
      desc: 'Focused private conversations between two participants without group distractions.',
      icon: MessageSquare,
      color: 'bg-primary-fixed text-primary',
    },
    {
      title: 'Audio and Video Calling',
      desc: 'Seamless voice and video modes tailored to user comfort and device connection.',
      icon: Phone,
      color: 'bg-secondary-fixed text-secondary',
    },
    {
      title: 'Caller & Host Experiences',
      desc: 'Dedicated interfaces for both curious callers seeking conversations and verified Hosts.',
      icon: Users,
      color: 'bg-surface-container-high text-primary',
    },
    {
      title: 'Simple User Interface',
      desc: 'Clean, lavender-inspired mobile design with intuitive navigation and zero clutter.',
      icon: Smartphone,
      color: 'bg-primary-fixed text-primary-container',
    },
    {
      title: 'Coin-Based Calling System',
      desc: 'Transparent virtual coin balance structure for eligible calling activities.',
      icon: Coins,
      color: 'bg-secondary-fixed text-secondary',
    },
    {
      title: 'Privacy & Safety Features',
      desc: 'Active verification, blocking, reporting, and direct account management options.',
      icon: ShieldCheck,
      color: 'bg-surface-container-high text-primary',
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Antharangam"
      className="py-24 md:py-32 bg-surface-container-low/80 relative overflow-hidden"
    >
      {/* Decorative gradient glow circles */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-secondary-fixed/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed/70 border border-outline-variant/50 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover The Platform</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight"
          >
            What is Antharangam?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-on-surface-variant font-normal leading-relaxed"
          >
            {APP_INFO.aboutDescription}
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: App Purpose & 6 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-on-surface">
                A Purpose-Built Mobile Experience for Conversations
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-base">
                Antharangam (அந்தரங்கம்) brings a focused approach to virtual voice and face-to-face communication. Whether you want to talk about your day, exchange perspectives, or engage in meaningful conversations with verified creators, the platform creates a convenient and respectful environment.
              </p>
            </div>

            {/* 6 Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-4 rounded-2xl bg-white border border-outline-variant/40 shadow-sm hover:shadow-soft-purple hover:border-primary/40 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl ${pillar.color} shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">{pillar.title}</h4>
                        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Interactive App Interface Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Panel */}
            <div className="relative mx-auto max-w-[380px] p-4 bg-gradient-to-b from-white/90 via-surface-container/60 to-surface-container-high/40 rounded-[36px] border border-outline-variant/50 shadow-elevated">
              
              {/* Tab Selector: Caller vs Host Mode */}
              <div className="flex items-center p-1 bg-surface-container rounded-2xl mb-4 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveTab('caller')}
                  className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'caller'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Caller View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('host')}
                  className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'host'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <UserRound className="w-3.5 h-3.5" />
                  <span>Host View</span>
                </button>
              </div>

              {/* View 1: Caller Experience Mock */}
              {activeTab === 'caller' ? (
                <div className="space-y-3 animate-fadeIn">
                  <div className="bg-white p-3.5 rounded-2xl border border-outline-variant/30 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-on-surface">Available Hosts Online</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live Now
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-full bg-primary-fixed text-primary font-bold text-xs flex items-center justify-center">
                            SK
                          </div>
                          <div>
                            <div className="text-xs font-bold">Shreya K.</div>
                            <div className="text-[10px] text-on-surface-variant">Tamil &bull; Voice Ready</div>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold text-primary">Call</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-full bg-secondary-fixed text-secondary font-bold text-xs flex items-center justify-center">
                            RP
                          </div>
                          <div>
                            <div className="text-xs font-bold">Ramesh P.</div>
                            <div className="text-[10px] text-on-surface-variant">Tamil &bull; Video Ready</div>
                          </div>
                        </div>
                        <span className="text-[11px] font-bold text-secondary">Connect</span>
                      </div>
                    </div>
                  </div>

                  {/* Coin Wallet Preview */}
                  <div className="bg-gradient-to-r from-primary-fixed to-secondary-fixed p-3.5 rounded-2xl border border-outline-variant/30 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-secondary">Virtual Balance</div>
                      <div className="text-sm font-extrabold text-primary flex items-center gap-1 mt-0.5">
                        <span>🪙 450 Coins</span>
                      </div>
                    </div>
                    <div className="text-[11px] font-bold px-3 py-1 bg-white rounded-lg text-primary shadow-xs">
                      Ready to Use
                    </div>
                  </div>
                </div>
              ) : (
                /* View 2: Host Experience Mock */
                <div className="space-y-3 animate-fadeIn">
                  <div className="bg-white p-3.5 rounded-2xl border border-outline-variant/30 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">
                          ME
                        </div>
                        <div>
                          <div className="text-xs font-bold text-on-surface">Host Dashboard</div>
                          <div className="text-[10px] text-green-600 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Verified Host
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-bold">
                        Online
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                      <div className="p-2.5 rounded-xl bg-surface-container-low">
                        <div className="text-[10px] text-on-surface-variant">Total Calls</div>
                        <div className="text-sm font-bold text-on-surface mt-0.5">48 Calls</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface-container-low">
                        <div className="text-[10px] text-on-surface-variant">Earned Units</div>
                        <div className="text-sm font-bold text-primary mt-0.5">1,280 Pts</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl border border-outline-variant/30 text-xs text-on-surface-variant space-y-1">
                    <div className="font-bold text-on-surface text-[11px] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      Host Earning &amp; Withdrawal Guidelines
                    </div>
                    <p className="text-[10px] leading-relaxed">
                      Eligible verified Hosts can access platform withdrawal channels subject to the Host terms and conditions.
                    </p>
                  </div>
                </div>
              )}

              {/* Caption Note */}
              <div className="mt-3 text-center">
                <span className="text-[10px] text-on-surface-variant">
                  Illustrative UI representation of the Antharangam mobile app
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
