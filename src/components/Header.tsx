import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer animate-fade-in-left hover-lift"
            onClick={scrollToTop}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <div className="text-white">
              <h1 className="font-bold text-lg leading-tight">AIR VIEW TRAVEL</h1>
              <p className="text-xs text-gray-300">AND TOURISM - L.L.C</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 animate-fade-in-right">
            {[
              { id: 'home', label: 'Home', action: scrollToTop },
              { id: 'about', label: 'About Us', action: () => scrollToSection('about') },
              { id: 'contact', label: 'Contact Us', action: () => scrollToSection('contact') }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={item.action}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium hover-lift"
                style={{animationDelay: `${0.7 + index * 0.1}s`}}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg bg-white/20 backdrop-blur-sm hover-lift animate-fade-in-right"
          >
            <svg className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen 
          ? 'max-h-96 opacity-100 animate-slide-in-right' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
          <div className="p-6 space-y-4">
            {[
              { id: 'home', label: 'Home', action: scrollToTop, icon: '🏠' },
              { id: 'about', label: 'About Us', action: () => scrollToSection('about'), icon: 'ℹ️' },
              { id: 'contact', label: 'Contact Us', action: () => scrollToSection('contact'), icon: '📞' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="flex items-center gap-4 w-full text-left p-4 rounded-xl text-white hover:text-blue-400 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {item.id === 'home' && 'Back to top'}
                    {item.id === 'about' && 'Learn more about us'}
                    {item.id === 'contact' && 'Get in touch'}
                  </div>
                </div>
              </button>
            ))}
            
            {/* Quick Contact in Mobile Menu */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-white font-medium mb-4">Quick Contact</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div>📞 +971 2 442 0602</div>
                <div>📧 reach@airviewtravel.ae</div>
                <div>📍 Abu Dhabi, UAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;