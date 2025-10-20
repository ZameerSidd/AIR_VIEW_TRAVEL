import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, Info, Phone, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

export function AnimatedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, action: scrollToTop },
    { id: 'services', label: 'Our Services', icon: Briefcase, action: () => scrollToSection('services') },
    { id: 'about', label: 'About Us', icon: Info, action: () => scrollToSection('about') },
    { id: 'contact', label: 'Contact Us', icon: Phone, action: () => scrollToSection('contact') }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-md' 
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name Section */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 cursor-pointer"
              onClick={scrollToTop}
            >
              <motion.img
                src={"images/header_logo.jpg"}
                alt="Air View Travel Logo"
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <motion.h1
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    color: isScrolled ? "#111827" : "#ffffff"
                  }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-bold text-lg md:text-xl leading-tight"
                  style={{
                    color: isScrolled ? "#111827" : "#ffffff",
                    textShadow: isScrolled ? "none" : "0 2px 8px rgba(0,0,0,0.5)"
                  }}
                >
                  AIR VIEW TRAVEL
                </motion.h1>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    color: isScrolled ? "#4b5563" : "#f3f4f6"
                  }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xs md:text-sm"
                  style={{
                    color: isScrolled ? "#4b5563" : "#f3f4f6",
                    textShadow: isScrolled ? "none" : "0 2px 4px rgba(0,0,0,0.4)"
                  }}
                >
                  AND TOURISM - L.L.C
                </motion.p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden md:flex items-center gap-8"
            >
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      color: isScrolled ? "#111827" : "#ffffff"
                    }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={item.action}
                    className={`flex items-center gap-2 transition-colors duration-500 font-medium ${
                      isScrolled 
                        ? 'text-gray-900 hover:text-blue-600 [text-shadow:none]' 
                        : 'text-white hover:text-blue-300 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]'
                    }`}
                    style={{
                      color: isScrolled ? "#111827" : "#ffffff"
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg backdrop-blur-sm transition-all duration-500 ${
                isScrolled 
                  ? 'text-gray-900 bg-gray-100/80' 
                  : 'text-white bg-white/20'
              }`}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Animated Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className={`h-0.5 transition-all duration-500 ${
            isScrolled
              ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
              : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
          }`}
          style={{ transformOrigin: "center" }}
        />
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.3 
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-slate-900/95 backdrop-blur-lg border-l border-white/20 z-50 md:hidden"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={"images/header_logo.jpg"}
                      alt="Air View Travel Logo"
                      className="h-12 w-12 object-contain"
                    />
                    <div className="text-white">
                      <h2 className="font-bold text-sm">AIR VIEW TRAVEL</h2>
                      <p className="text-xs text-gray-300">AND TOURISM - L.L.C</p>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/60 hover:text-white p-1"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-6">
                <nav className="space-y-4">
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        whileHover={{ 
                          scale: 1.02, 
                          x: 10,
                          backgroundColor: "rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={item.action}
                        className="flex items-center gap-4 w-full text-left p-4 rounded-xl text-white hover:text-blue-400 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:border-blue-400/30 transition-all duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-gray-400 mt-1">
                            {item.id === 'home' && 'Back to top'}
                            {item.id === 'services' && 'Explore our offerings'}
                            {item.id === 'about' && 'Learn more about us'}
                            {item.id === 'contact' && 'Get in touch'}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Contact Info in Mobile Menu */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <h3 className="text-white font-medium mb-4">Quick Contact</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div>📞 +971 2 442 0602</div>
                    <div>📧 reach@airviewtravel.ae</div>
                    <div>📍 Abu Dhabi, UAE</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
