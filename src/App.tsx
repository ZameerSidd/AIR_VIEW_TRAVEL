import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { SplashScreen } from "./components/SplashScreen";
import { AnimatedHeader } from "./components/AnimatedHeader";
import { AnimatedHero } from "./components/AnimatedHero";
import { AnimatedServices } from "./components/AnimatedServices";
import { VisionMissionSection } from "./components/VisionMissionSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FloatingElements } from "./components/FloatingElements";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Auto-hide splash screen after 6 seconds as fallback
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Animated Background Elements */}
          <FloatingElements />
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_300px,#8b5cf6,transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_20%_800px,#06b6d4,transparent)]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <AnimatedHeader />
            <AnimatedHero />
            <AnimatedServices />
            <VisionMissionSection />
            <AboutSection />
            <ContactSection />
          </div>

          {/* Floating WhatsApp Button */}
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}