import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import LanguagesSection from './components/LanguagesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ExperienceSection />
      <LanguagesSection />
      <ContactSection />
    </div>
  );
}

export default App;