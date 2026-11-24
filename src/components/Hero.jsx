import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, ArrowDown, Download, Sparkles, Shield, UserCheck, Mic, MicOff, Volume2 } from 'lucide-react';
import Logo from './Logo';
import logoImg from '../assets/logo/logo.jpeg';
import { APP_INFO } from '../data/navigation';

export default function Hero({ onOpenDownload }) {
  const handleScrollToFeatures = (e) => {
    e.preventDefault();
    const target = document.getElementById('features');
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden flex items-center bg-gradient-to-b from-[#fbf7ff] via-background to-surface-container-low"
    >
      {/* Decorative Lavender & Purple Glow Blobs */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-primary-fixed/60 via-secondary-fixed/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-surface-container/70 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay for tech-modern subtle feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Pill Tag / Brand Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/90 border border-outline-variant/60 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Official Application
              </span>
              <span className="text-outline-variant font-light">|</span>
              <span className="font-tamil font-semibold text-xs text-secondary">
                {APP_INFO.tamilName}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.12]"
            >
              Meaningful Connections.{' '}
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
                One Conversation Away.
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Discover <strong className="font-semibold text-on-surface">Antharangam</strong>, a platform designed for one-to-one audio and video conversations. Connect with people, express yourself, and experience conversations in a simple and engaging environment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                type="button"
                onClick={onOpenDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-primary hover:bg-primary-container text-white shadow-xl shadow-primary/25 hover:shadow-glow-purple hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </button>

              <a
                href="#features"
                onClick={handleScrollToFeatures}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold bg-white/90 hover:bg-surface-container text-on-surface border border-outline-variant/60 shadow-sm hover:shadow-soft-purple hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Features</span>
                <ArrowDown className="w-4 h-4 text-primary" />
              </a>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-on-surface-variant font-medium"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <Phone className="w-3 h-3" />
                </div>
                <span>1:1 Audio Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                  <Video className="w-3 h-3" />
                </div>
                <span>Live Video Calling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <UserCheck className="w-3 h-3" />
                </div>
                <span>Verified Host Program</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Smartphone Mockup & Floating Interactive Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Soft Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-secondary/10 to-transparent rounded-[45px] blur-2xl transform scale-95 pointer-events-none" />

            {/* Main Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-20 w-[310px] sm:w-[340px] md:w-[350px] animate-float-slow"
            >
              {/* Phone Frame */}
              <div className="bg-[#1e1b2e] p-3 rounded-[46px] shadow-2xl ring-1 ring-white/20 border-4 border-[#2b2542]">
                {/* Dynamic Island / Notch */}
                <div className="relative bg-background rounded-[38px] overflow-hidden border border-outline-variant/30 flex flex-col h-[610px] text-on-surface select-none">
                  
                  {/* Status Bar */}
                  <div className="pt-2 px-6 pb-2 flex justify-between items-center text-[11px] font-semibold text-on-surface-variant">
                    <span>9:41</span>
                    <div className="w-20 h-4 bg-on-surface/90 rounded-full mx-auto" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold text-primary">5G</span>
                      <div className="w-4 h-2.5 border border-on-surface-variant rounded-sm p-0.5 flex items-center">
                        <div className="w-full h-full bg-primary rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* App Bar inside phone */}
                  <div className="px-5 py-3 flex items-center justify-between border-b border-outline-variant/20 bg-white/70 backdrop-blur-md">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg overflow-hidden border border-outline-variant/40 shadow-xs flex items-center justify-center bg-white shrink-0">
                        <img src={logoImg} alt="Antharangam" className="w-full h-full object-cover" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-xs font-bold text-on-surface">Antharangam</div>
                        <div className="text-[10px] font-tamil text-secondary">அந்தரங்கம்</div>
                      </div>
                    </div>
                    {/* Coin Badge in app */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-primary text-[11px] font-bold">
                      <span>🪙</span>
                      <span>350</span>
                    </div>
                  </div>

                  {/* App Screen Content: Available Hosts & Calling Preview */}
                  <div className="p-4 space-y-3.5 flex-1 overflow-hidden bg-gradient-to-b from-surface-container-low to-background">
                    
                    {/* Greeting Banner */}
                    <div className="bg-gradient-to-r from-primary to-primary-container text-white p-3.5 rounded-2xl shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] text-primary-fixed uppercase tracking-wider font-semibold">Ready to Talk?</p>
                          <p className="text-xs font-bold mt-0.5">Explore Active Hosts</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Host Card 1 (Active Audio Call Candidate) */}
                    <div className="bg-white p-3 rounded-2xl border border-outline-variant/30 shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-container to-primary-container flex items-center justify-center text-white font-bold text-xs">
                              MK
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 ring-2 ring-white" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-on-surface flex items-center gap-1">
                              Meena K.
                              <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-secondary-fixed text-secondary font-semibold">Verified</span>
                            </div>
                            <div className="text-[10px] text-on-surface-variant">Tamil &bull; English</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-semibold text-primary">20 Coins/min</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-1 border-t border-outline-variant/20">
                        <button className="flex-1 py-1.5 rounded-xl bg-primary-fixed hover:bg-primary-fixed/80 text-primary text-[11px] font-bold flex items-center justify-center gap-1 transition-colors">
                          <Phone className="w-3 h-3" /> Audio Call
                        </button>
                        <button className="flex-1 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-secondary text-[11px] font-bold flex items-center justify-center gap-1 transition-colors">
                          <Video className="w-3 h-3" /> Video Call
                        </button>
                      </div>
                    </div>

                    {/* Host Card 2 */}
                    <div className="bg-white p-3 rounded-2xl border border-outline-variant/30 shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center text-white font-bold text-xs">
                              AR
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 ring-2 ring-white" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-on-surface flex items-center gap-1">
                              Anand R.
                              <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-secondary-fixed text-secondary font-semibold">Host</span>
                            </div>
                            <div className="text-[10px] text-on-surface-variant">Tamil &bull; Friendly Guide</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-semibold text-primary">25 Coins/min</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-1 border-t border-outline-variant/20">
                        <button className="flex-1 py-1.5 rounded-xl bg-primary text-white text-[11px] font-bold flex items-center justify-center gap-1">
                          <Phone className="w-3 h-3" /> Connect Now
                        </button>
                      </div>
                    </div>

                    {/* Mini Waveform in App */}
                    <div className="bg-surface-container/60 p-2.5 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        <span className="text-[10px] font-semibold text-on-surface-variant">Voice Clarity System</span>
                      </div>
                      <div className="flex items-center gap-1 h-3">
                        <span className="w-0.5 bg-primary rounded-full animate-wave-bar" style={{ animationDelay: '0.1s' }} />
                        <span className="w-0.5 bg-primary rounded-full animate-wave-bar" style={{ animationDelay: '0.3s' }} />
                        <span className="w-0.5 bg-primary rounded-full animate-wave-bar" style={{ animationDelay: '0.2s' }} />
                        <span className="w-0.5 bg-primary rounded-full animate-wave-bar" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation Mock inside phone */}
                  <div className="px-6 py-2.5 bg-white border-t border-outline-variant/30 flex justify-around items-center text-[10px] font-semibold text-on-surface-variant">
                    <div className="flex flex-col items-center text-primary">
                      <Phone className="w-4 h-4" />
                      <span>Calls</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Sparkles className="w-4 h-4" />
                      <span>Explore</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Shield className="w-4 h-4" />
                      <span>Safety</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING CARD 1: Audio Call UI Card (Left Floating) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -left-6 sm:-left-10 top-20 z-30 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-card-hover border border-outline-variant/40 max-w-[210px] animate-float-reverse hidden sm:block"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-white text-xs font-bold shadow-md shadow-primary/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-on-surface">1:1 Audio Call</div>
                  <div className="text-[10px] text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Connected • 04:18
                  </div>
                </div>
              </div>

              {/* Animated Waveform */}
              <div className="mt-2.5 pt-2 border-t border-outline-variant/20 flex items-center justify-center gap-1 h-5">
                {[4, 12, 18, 8, 16, 22, 14, 10, 19, 7, 15, 6].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-primary rounded-full transition-all"
                    style={{
                      height: `${h}px`,
                      animation: `soundWave 1.4s ease-in-out ${i * 0.1}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* FLOATING CARD 2: Video Call UI Card (Right Floating) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -right-4 sm:-right-8 bottom-28 z-30 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-card-hover border border-outline-variant/40 max-w-[200px] animate-float-slow hidden sm:block"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Live Video</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface font-semibold">HD</span>
              </div>

              {/* Video Mock Layout */}
              <div className="relative w-full h-20 rounded-xl bg-gradient-to-br from-primary-container/80 via-secondary to-primary flex items-center justify-center text-white overflow-hidden shadow-inner">
                <div className="text-center">
                  <Video className="w-5 h-5 mx-auto mb-1 text-white/90" />
                  <span className="text-[10px] font-medium text-white/90">Face-to-Face Stream</span>
                </div>
                {/* Small PIP preview */}
                <div className="absolute bottom-1.5 right-1.5 w-7 h-9 rounded-md bg-on-surface/80 border border-white/40 flex items-center justify-center text-[8px] text-white">
                  You
                </div>
              </div>
            </motion.div>

            {/* FLOATING CARD 3: Coin Wallet Mini Badge (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute left-2 -bottom-4 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg border border-outline-variant/40 flex items-center gap-2"
            >
              <span className="text-base">🪙</span>
              <span className="text-xs font-bold text-on-surface">Virtual Coin System</span>
              <span className="text-[10px] text-primary font-semibold">Active</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
