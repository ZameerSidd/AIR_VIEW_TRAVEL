import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import { AnimatedHeader } from './components/AnimatedHeader';
import { AnimatedHero } from './components/AnimatedHero';
import { AnimatedServices } from './components/AnimatedServices';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { FloatingElements } from './components/FloatingElements';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElements />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatedHeader />
        <AnimatedHero />
        <AnimatedServices />
        <VisionMissionSection />
        <AboutSection />
        <ContactSection />
      </div>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;