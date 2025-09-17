import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ChevronDown, Sparkles, Globe, Plane } from "lucide-react";

export function AnimatedHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >

        </motion.div>
        
        {/* Background Animated Circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-gray-200/50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full border border-gray-100/50"
        />
        
        {/* Main Title with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
          >
            <motion.span
              initial={{ display: "inline-block", y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-block"
            >
              Your
            </motion.span>{" "}
            <motion.span
              initial={{ display: "inline-block", y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Travel
            </motion.span>{" "}
            <motion.span
              initial={{ display: "inline-block", y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="inline-block"
            >
              Dreams
            </motion.span>
            <br />
            <motion.span
              initial={{ display: "inline-block", y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="inline-block bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent"
            >
              Come True
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Experience the world with our comprehensive travel services. From visa assistance to luxury accommodations, we make your journey unforgettable.
        </motion.p>

        {/* Animated Stats */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto"
        >
          {[
            { number: "50+", label: "Countries", icon: Globe },
            { number: "1000+", label: "Happy Clients", icon: Sparkles },
            { number: "24/7", label: "Support", icon: Plane },
            { number: "15+", label: "Years Experience", icon: Sparkles },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-lg"
              >
                <motion.div
                  animate={floatingAnimation}
                  className="text-center"
                >
                  <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="bg-white/80 border-gray-300 text-gray-900 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg"
            >
              <Plane className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center text-gray-500 cursor-pointer"
            onClick={() => scrollToSection('services')}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}