import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS } from '../data/navigation';

export default function Navbar({ onOpenDownload }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['hero', 'about', 'features', 'how-it-works', 'safety'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-soft-purple py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-surface-container-low/70 px-4 py-1.5 rounded-full border border-outline-variant/40 shadow-sm backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white shadow-sm shadow-primary/25'
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Download Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-primary hover:bg-primary-container text-white shadow-md shadow-primary/25 hover:shadow-glow-purple hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download App</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl text-on-surface hover:bg-surface-container text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown / Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-on-surface/20 backdrop-blur-sm animate-fadeIn">
          <div className="fixed top-[70px] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-outline-variant/50 flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-outline-variant/30">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-base font-bold bg-primary hover:bg-primary-container text-white shadow-lg shadow-primary/30"
              >
                <Download className="w-5 h-5" />
                <span>Download App</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
