import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Smartphone, Check, Clock } from 'lucide-react';
import { APP_INFO } from '../data/navigation';
import Logo from './Logo';
import logoImg from '../assets/logo/logo.jpeg';

export default function DownloadCTA({ onOpenDownload }) {
  return (
    <section
      id="download"
      aria-label="Download Antharangam"
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Gradient Card */}
        <div className="relative rounded-[40px] bg-gradient-to-br from-[#7c3aed] via-[#630ed4] to-[#4c0aab] p-8 sm:p-12 md:p-16 text-white overflow-hidden shadow-2xl shadow-primary/30 border border-white/20">
          
          {/* Subtle Decorative Background Rings */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Headlines & Download CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-secondary-fixed" />
                <span>Mobile Application</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Start Your Antharangam Experience Today
              </h2>

              <p className="text-base sm:text-lg text-white/90 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover one-to-one conversations and explore the features of Antharangam. Connect through audio and video on your mobile phone.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-white/90 pt-1">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <Check className="w-3.5 h-3.5 text-secondary-fixed" />
                  <span>1:1 Audio &amp; Video</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <Check className="w-3.5 h-3.5 text-secondary-fixed" />
                  <span>Verified Hosts</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <Check className="w-3.5 h-3.5 text-secondary-fixed" />
                  <span>Coin Wallet System</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={onOpenDownload}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-white text-primary hover:bg-surface-container-low shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  {/* Google Play Store SVG Icon */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3.6 2.4C3.2 2.8 3 3.4 3 4.2V19.8C3 20.6 3.2 21.2 3.6 21.6L3.7 21.7L13.8 12.1V11.9L3.7 2.3L3.6 2.4Z"
                      fill="#00E676"
                    />
                    <path
                      d="M17.2 15.3L13.8 12.1V11.9L17.2 8.7L17.3 8.8L21.3 11.1C22.4 11.7 22.4 12.7 21.3 13.3L17.3 15.6L17.2 15.3Z"
                      fill="#FFD54F"
                    />
                    <path
                      d="M17.3 15.3L13.8 12L3.6 21.7C4 22.1 4.7 22.1 5.5 21.7L17.3 15.3Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M17.3 8.7L5.5 2.3C4.7 1.9 4 1.9 3.6 2.3L13.8 12L17.3 8.7Z"
                      fill="#00B0FF"
                    />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
                      GET IT ON
                    </div>
                    <div className="text-sm font-extrabold text-on-surface">
                      Google Play
                    </div>
                  </div>
                </button>

                {/* Coming Soon status pill */}
                <div className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                  <Clock className="w-4 h-4 text-secondary-fixed" />
                  <span>Google Play Release • Coming Soon</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
                
                {/* Phone Card Mock */}
                <div className="bg-[#1e1b2e] p-3 rounded-[40px] shadow-2xl ring-1 ring-white/30 border-2 border-[#372d54] rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-background rounded-[32px] p-5 text-on-surface text-center space-y-4">
                    
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-outline-variant/40 mx-auto flex items-center justify-center bg-white shadow-lg shadow-primary/25">
                      <img src={logoImg} alt="Antharangam" className="w-full h-full object-cover" />
                    </div>

                    <div>
                      <h4 className="text-base font-extrabold text-on-surface">Antharangam</h4>
                      <p className="text-xs font-tamil text-secondary">அந்தரங்கம்</p>
                    </div>

                    <div className="p-3 rounded-xl bg-surface-container text-xs text-on-surface-variant space-y-1">
                      <p className="font-bold text-on-surface">1:1 Audio &amp; Video Calling</p>
                      <p className="text-[11px]">Simple • Safe • Connected</p>
                    </div>

                    <div className="py-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                        Mobile App
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
