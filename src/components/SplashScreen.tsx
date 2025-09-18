import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Plane, Globe, Sparkles } from "lucide-react";

const SplashScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowWelcome(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Planes */}
        <motion.div
          animate={{ 
            x: [0, 100, 200, 300, 400],
            y: [50, 30, 70, 40, 60],
            rotate: [0, 5, -5, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-0"
        >
          <Plane className="w-8 h-8 text-gray-400/40" />
        </motion.div>
        
        <motion.div
          animate={{ 
            x: [400, 300, 200, 100, 0],
            y: [200, 180, 220, 190, 210],
            rotate: [180, 185, 175, 190, 180]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-0"
        >
          <Plane className="w-6 h-6 text-gray-300/30" />
        </motion.div>

        {/* Floating Globes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-20"
        >
          <Globe className="w-12 h-12 text-blue-300/30" />
        </motion.div>

        {/* Twinkling Stars */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              top: `${15 + i * 10}%`,
              left: `${10 + i * 10}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-500/50" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        
        {/* Logo with Animated Entrance */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden relative bg-white p-2 shadow-lg border border-gray-200"
          >
            <motion.img
              src={"images/logo.png"}
              alt="Air View Travel Logo"
              className="w-full h-full object-contain rounded-full"
              whileHover={{ scale: 1.1 }}
            />
            
            {/* Glow Effect */}
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-md"
            />
          </motion.div>
          
          {/* Company Name with Staggered Animation */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="inline-block"
            >
              AIR VIEW
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              TRAVEL
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="text-lg text-gray-600"
          >
            AND TOURISM - L.L.C
          </motion.p>
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          className="w-80 max-w-sm mx-auto"
        >
          {/* Progress Bar */}
          <div className="relative mb-6">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
              >
                {/* Shimmer Effect */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </motion.div>
            </div>
            
            {/* Progress Percentage */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            >
              <span className="text-gray-800 font-semibold text-sm">
                {loadingProgress}%
              </span>
            </motion.div>
          </div>

          {/* Loading Messages */}
          <AnimatePresence mode="wait">
            {!showWelcome ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <motion.p
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-gray-700 text-sm mb-2"
                >
                  {loadingProgress < 30 && "Initializing your travel experience..."}
                  {loadingProgress >= 30 && loadingProgress < 60 && "Loading premium services..."}
                  {loadingProgress >= 60 && loadingProgress < 90 && "Preparing your journey..."}
                  {loadingProgress >= 90 && "Almost ready!"}
                </motion.p>
                
                {/* Loading Dots */}
                <div className="flex justify-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className="w-2 h-2 bg-blue-500 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: 2 }}
                  className="text-2xl mb-2"
                >
                  ✈️
                </motion.div>
                <p className="text-gray-900 font-semibold text-lg">
                  Welcome Aboard!
                </p>
                <p className="text-gray-600 text-sm">
                  Your journey begins now...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Decorative Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-32 h-32 border border-gray-300/20 rounded-full"
      />
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-40 h-40 border border-gray-300/10 rounded-full"
      />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-300/10 rounded-full"
      />
    </motion.div>
  );
};

export default SplashScreen;
