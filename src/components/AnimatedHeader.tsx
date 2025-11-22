import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, Info, Phone, Briefcase } from "lucide-react";
import { useState } from "react";

export function AnimatedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name Section */}
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={scrollToTop}
            >
              <img
                src={"images/logo.png"}
                alt="Air View Travel Logo"
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
              <div>
                <h1 className="font-bold text-lg md:text-xl leading-tight text-gray-900">
                  AIR VIEW TRAVEL
                </h1>
                <p className="text-xs md:text-sm text-gray-600">
                  AND TOURISM - L.L.C
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

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
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white border-l border-gray-200 z-50 md:hidden shadow-2xl"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={"images/logo.png"}
                      alt="Air View Travel Logo"
                      className="h-12 w-12 object-contain"
                    />
                    <div className="text-gray-900">
                      <h2 className="font-bold text-sm">AIR VIEW TRAVEL</h2>
                      <p className="text-xs text-gray-600">AND TOURISM - L.L.C</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-gray-900 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-6">
                <nav className="space-y-4">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        className="flex items-center gap-4 w-full text-left p-4 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 transition-all duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {item.id === 'home' && 'Back to top'}
                            {item.id === 'services' && 'Explore our offerings'}
                            {item.id === 'about' && 'Learn more about us'}
                            {item.id === 'contact' && 'Get in touch'}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>

                {/* Contact Info in Mobile Menu */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-gray-900 font-medium mb-4">Quick Contact</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div>📞 +971 2 442 0602</div>
                    <div>📧 reach@airviewtravel.ae</div>
                    <div>📍 Abu Dhabi, UAE</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}