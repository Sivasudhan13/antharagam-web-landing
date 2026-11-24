import React from 'react';
import { X, Sparkles, Clock, Check, ExternalLink, ShieldCheck, Mail } from 'lucide-react';
import Logo from './Logo';
import { APP_INFO } from '../data/navigation';

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fadeIn"
    >
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40 z-10 overflow-hidden text-on-surface">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-primary-container to-secondary" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with App Logo */}
        <div className="text-center pt-2 pb-4">
          <div className="inline-block mb-3">
            <Logo size="md" />
          </div>

          <h3 id="download-modal-title" className="text-2xl font-extrabold text-on-surface">
            Get Antharangam
          </h3>
          <p className="text-xs font-tamil text-secondary mt-0.5">
            அந்தரங்கம் &bull; One-to-One Audio &amp; Video Calling
          </p>
        </div>

        {/* Application Status Banner */}
        <div className="bg-primary-fixed/60 border border-outline-variant/40 rounded-2xl p-4 mb-5 text-left">
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4" />
            <span>Google Play Store • Coming Soon</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            The official Antharangam Android application is finalizing its release rollout. The Google Play Store listing link will be made active directly here upon public launch.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="space-y-2 mb-6 text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary shrink-0" />
            <span>High quality one-to-one voice calls and live video streaming.</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary shrink-0" />
            <span>Verified Host community with transparent coin calling rates.</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary shrink-0" />
            <span>Built-in privacy controls: block, report, and account deletion.</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          {APP_INFO.playStoreUrl ? (
            <a
              href={APP_INFO.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-md shadow-primary/25 transition-all"
            >
              <span>Download from Google Play</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 px-6 rounded-2xl bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-md shadow-primary/25 transition-all"
            >
              Got It, Keep Me Posted
            </button>
          )}

          {/* Support Email Link */}
          <div className="text-center text-xs text-on-surface-variant pt-1">
            Need assistance or early access inquiries?{' '}
            <a
              href={`mailto:${APP_INFO.supportEmail}`}
              className="font-bold text-primary hover:underline"
            >
              {APP_INFO.supportEmail}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
