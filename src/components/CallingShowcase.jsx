import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, Mic, MicOff, Volume2, PhoneOff, Camera, VideoOff, Sparkles, User, ShieldCheck } from 'lucide-react';

export default function CallingShowcase() {
  const [activeMode, setActiveMode] = useState('audio'); // 'audio' | 'video'
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  return (
    <section
      id="showcase"
      aria-label="Calling Experience Showcase"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed/70 border border-outline-variant/40 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Visual Preview</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight"
          >
            Experience Conversations Differently
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-on-surface-variant font-normal leading-relaxed"
          >
            Explore representative mockups of the dedicated audio and video calling interfaces designed for seamless one-to-one interaction.
          </motion.p>

          {/* Mode Switcher Pill */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-surface-container-high rounded-full border border-outline-variant/50 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveMode('audio')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeMode === 'audio'
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Audio Call Experience</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('video')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeMode === 'video'
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Video Call Experience</span>
            </button>
          </div>
        </div>

        {/* Showcase Displays */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Context & Feature Highlights for the Selected Mode */}
          <div className="lg:col-span-5 space-y-6">
            {activeMode === 'audio' ? (
              <motion.div
                key="audio-info"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-secondary text-xs font-bold">
                  <Phone className="w-3.5 h-3.5" />
                  <span>One-to-One Audio Mode</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
                  Clear Voice Calling with Real-Time Feedback
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  The audio calling interface offers an uncluttered screen focused entirely on the conversation. With live waveform animation, responsive volume controls, and call duration monitoring, users enjoy high clarity without visual overwhelm.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-outline-variant/30 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-on-surface">Live Waveform Feedback</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">Visual representation of real-time voice rhythm during call.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-outline-variant/30 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-on-surface">Simple In-Call Controls</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">One-tap microphone mute, speaker toggle, and clean disconnect.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video-info"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary text-xs font-bold">
                  <Video className="w-3.5 h-3.5" />
                  <span>Live Video Calling Mode</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
                  Face-to-Face Connection with Fluid Video Layout
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Engage naturally with clean full-screen video layout and a compact picture-in-picture preview. Switch cameras, toggle video feeds, and manage call status smoothly on any mobile connection.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-outline-variant/30 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-on-surface">Camera Orientation Switch</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">Seamless transition between front and rear cameras.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-outline-variant/30 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-on-surface">Picture-in-Picture Preview</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">Monitor your own video stream with a non-intrusive PIP window.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Representative Smartphone UI Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[370px]">
              
              {/* Phone Exterior Frame */}
              <div className="bg-[#1e1b2e] p-3.5 rounded-[46px] shadow-2xl ring-1 ring-white/20 border-4 border-[#2c2642]">
                
                {/* Phone Screen */}
                <div className="bg-background rounded-[38px] overflow-hidden border border-outline-variant/30 h-[590px] flex flex-col justify-between relative select-none">
                  
                  {/* Status Bar */}
                  <div className="pt-2 px-6 pb-1 flex justify-between items-center text-[11px] font-semibold text-on-surface-variant z-20">
                    <span>9:41</span>
                    <div className="w-20 h-4 bg-on-surface/90 rounded-full mx-auto" />
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-primary">HD</span>
                      <div className="w-3.5 h-2 border border-on-surface-variant rounded-2xs" />
                    </div>
                  </div>

                  {activeMode === 'audio' ? (
                    /* AUDIO CALL SCREEN MOCKUP */
                    <div className="flex-1 flex flex-col justify-between p-6 text-center animate-fadeIn">
                      
                      {/* Host Header Info */}
                      <div className="pt-4 space-y-1">
                        <span className="text-[11px] font-bold tracking-wider text-secondary uppercase bg-secondary-fixed/70 px-3 py-1 rounded-full">
                          Connected (03:42)
                        </span>
                        <h4 className="text-xl font-bold text-on-surface pt-2">Priya S.</h4>
                        <p className="text-xs text-on-surface-variant">Verified Host &bull; Tamil</p>
                      </div>

                      {/* Profile Avatar with Glowing Ring */}
                      <div className="py-6 flex flex-col items-center justify-center">
                        <div className="relative">
                          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-primary to-primary-container p-1 shadow-glow-purple">
                            <div className="w-full h-full rounded-full bg-surface-container flex items-center justify-center text-primary text-2xl font-bold">
                              PS
                            </div>
                          </div>
                          {/* Live pulse indicator */}
                          <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-40 pointer-events-none" />
                        </div>

                        {/* Animated Waveform */}
                        <div className="mt-8 flex items-center justify-center gap-1.5 h-10 w-full px-6">
                          {[6, 14, 22, 32, 18, 28, 38, 20, 30, 24, 16, 26, 34, 18, 10].map((h, i) => (
                            <span
                              key={i}
                              className="w-1.5 bg-primary rounded-full transition-all"
                              style={{
                                height: `${h}px`,
                                animation: `soundWave 1.2s ease-in-out ${i * 0.08}s infinite alternate`,
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-on-surface-variant mt-2 font-medium">
                          Real-time audio waveform
                        </span>
                      </div>

                      {/* In-Call Audio Controls */}
                      <div className="pb-4 space-y-4">
                        <div className="flex items-center justify-center gap-5">
                          {/* Mute Mic Button */}
                          <button
                            type="button"
                            onClick={() => setIsMuted(!isMuted)}
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                              isMuted
                                ? 'bg-error text-white'
                                : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                            }`}
                            title="Mute Microphone"
                          >
                            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                          </button>

                          {/* Speaker Button */}
                          <button
                            type="button"
                            className="w-12 h-12 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high flex items-center justify-center shadow-sm"
                            title="Speaker"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>

                          {/* End Call Button */}
                          <button
                            type="button"
                            className="w-14 h-14 rounded-full bg-error text-white flex items-center justify-center shadow-lg shadow-error/30 hover:scale-105 active:scale-95 transition-all"
                            title="End Call"
                          >
                            <PhoneOff className="w-6 h-6" />
                          </button>
                        </div>

                        <p className="text-[10px] text-outline">
                          Tap buttons to test interactive control states
                        </p>
                      </div>

                    </div>
                  ) : (
                    /* VIDEO CALL SCREEN MOCKUP */
                    <div className="flex-1 flex flex-col justify-between relative overflow-hidden animate-fadeIn">
                      
                      {/* Simulated Remote Video Background */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#2e1c4e] via-[#4c2d82] to-[#1a1236] flex flex-col items-center justify-center text-white">
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-3">
                          <User className="w-12 h-12 text-white/80" />
                        </div>
                        <p className="text-sm font-bold">Kavitha M.</p>
                        <p className="text-xs text-white/70">Live Video Connected</p>
                      </div>

                      {/* Header Overlay */}
                      <div className="relative z-10 p-4 flex justify-between items-center text-white">
                        <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs font-mono font-bold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          08:15
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-semibold text-primary-fixed">
                          HD 720p
                        </div>
                      </div>

                      {/* PIP Local Preview (Picture-in-Picture) */}
                      <div className="absolute top-16 right-4 z-20 w-24 h-32 rounded-2xl bg-black/60 backdrop-blur-md border border-white/30 overflow-hidden shadow-lg flex items-center justify-center text-white">
                        <div className="text-center p-2">
                          <div className="w-8 h-8 rounded-full bg-white/20 mx-auto mb-1 flex items-center justify-center text-[10px] font-bold">
                            You
                          </div>
                          <span className="text-[9px] text-white/70">Local Feed</span>
                        </div>
                      </div>

                      {/* Video Controls Bar */}
                      <div className="relative z-10 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="flex items-center justify-center gap-4">
                          {/* Toggle Mic */}
                          <button
                            type="button"
                            onClick={() => setIsMuted(!isMuted)}
                            className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${
                              isMuted ? 'bg-error text-white' : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                          >
                            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                          </button>

                          {/* Toggle Video */}
                          <button
                            type="button"
                            onClick={() => setIsVideoMuted(!isVideoMuted)}
                            className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${
                              isVideoMuted ? 'bg-error text-white' : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                          >
                            {isVideoMuted ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                          </button>

                          {/* Switch Camera */}
                          <button
                            type="button"
                            className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md"
                          >
                            <Camera className="w-5 h-5" />
                          </button>

                          {/* End Video Call */}
                          <button
                            type="button"
                            className="w-13 h-13 rounded-full bg-error text-white flex items-center justify-center shadow-lg shadow-error/40 hover:scale-105 active:scale-95 transition-all p-3"
                          >
                            <PhoneOff className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>

              {/* Disclaimer Caption under Mockup */}
              <p className="mt-3 text-center text-xs text-outline font-medium">
                * Illustrative website mockups only. Not actual screenshots.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
