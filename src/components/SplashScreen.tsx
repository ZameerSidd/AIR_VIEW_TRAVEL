import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Plane, MapPin, Clock } from "lucide-react";
import exampleLogo from 'figma:asset/36d4afc0a5f2929cd1c0f8dc03fae457132cc1e6.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const steps = [0, 1, 2, 3];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < steps.length) {
        setCurrentStep(steps[currentIndex]);
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800); // Small delay before completing
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  const loadingTexts = [
    "Welcome to Air View Travel",
    "Connecting You to the World",
    "Your Journey Begins Here",
    "Ready to Explore"
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400/20 to-pink-400/20 blur-xl"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-lg"
        />
      </div>

      {/* Floating Travel Icons */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            y: [-100, -120, -100],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/3"
        >
          <Plane className="w-8 h-8 text-blue-400/60" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [-5, 5, -5]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 left-1/4"
        >
          <MapPin className="w-6 h-6 text-purple-400/60" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear",
            delay: 2
          }}
          className="absolute top-1/3 left-1/6"
        >
          <Clock className="w-7 h-7 text-cyan-400/60" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <div className="relative mx-auto w-24 h-24 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1"
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src={exampleLogo}
                  alt="Air View Travel Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              AIR VIEW TRAVEL
            </h1>
            <p className="text-lg text-gray-300">
              AND TOURISM - L.L.C
            </p>
          </motion.div>
        </motion.div>

        {/* Loading Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <motion.h2
            key={currentStep}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold"
          >
            {loadingTexts[currentStep]}
          </motion.h2>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative"
        >
          {/* Animated Progress Bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full mx-auto mb-4 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / loadingTexts.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            />
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <p className="text-gray-400 text-sm">
            Your trusted travel partner since 2008
          </p>
        </motion.div>
      </div>

      {/* Particle Effect - Simplified */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-50, 600],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}