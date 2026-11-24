import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CallingShowcase from './components/CallingShowcase';
import PrivacySafety from './components/PrivacySafety';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';

export default function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleOpenDownload = () => {
    setIsDownloadModalOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenDownload={handleOpenDownload} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero / App Launch Section */}
        <Hero onOpenDownload={handleOpenDownload} />

        {/* 2. About Antharangam Section */}
        <About />

        {/* 3. Main Features Section */}
        <Features onOpenDownload={handleOpenDownload} />

        {/* 4. How It Works Section */}
        <HowItWorks />

        {/* 5. Calling Experience Showcase */}
        <CallingShowcase />

        {/* 6. Privacy & Safety Section */}
        <PrivacySafety />

        {/* 7. Call To Action / Download Section */}
        <DownloadCTA onOpenDownload={handleOpenDownload} />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Interactive Download Dialog / Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={handleCloseDownload}
      />
    </div>
  );
}
