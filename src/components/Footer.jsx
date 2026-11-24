import React from 'react';
import { Mail, Shield, ExternalLink, Heart } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, APP_INFO } from '../data/navigation';
import { LEGAL_LINKS } from '../data/legalLinks';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
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
    <footer className="bg-surface-container-high/60 border-t border-outline-variant/40 pt-16 pb-12 text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-outline-variant/30">
          
          {/* Left Column: Brand Info & Description */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
              <Logo size="lg" />
            </a>
            
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed pt-2">
              Antharangam (அந்தரங்கம்) is a one-to-one audio and video calling platform built for genuine, focused conversations between users and verified hosts in a simple mobile environment.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Official App Website &bull; Tamil Nadu &amp; Global</span>
            </div>
          </div>

          {/* Center Column: Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-on-surface-variant hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Policies Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-primary">
              Policies &amp; Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {LEGAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-medium"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Support Contact */}
            <div className="pt-3">
              <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                Support &amp; Inquiries
              </div>
              <a
                href={`mailto:${APP_INFO.supportEmail}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{APP_INFO.supportEmail}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p>
            &copy; 2026 {APP_INFO.name}. All Rights Reserved.
          </p>

          <p className="text-center sm:text-right text-[11px] text-outline">
            Static landing website representing the Antharangam mobile application.
          </p>
        </div>

      </div>
    </footer>
  );
}
