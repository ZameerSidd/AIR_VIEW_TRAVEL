import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Background Animated Circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-white/10 animate-rotate-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full border border-white/5 animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
        
        {/* Main Title */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.2s'}}>Your</span>{' '}
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Travel
            </span>{' '}
            <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.6s'}}>Dreams</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              Come True
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '1s'}}>
          Experience the world with our comprehensive travel services. From visa assistance to luxury accommodations, we make your journey unforgettable.
        </p>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          {[
            { number: "50+", label: "Countries", icon: "🌍" },
            { number: "1000+", label: "Happy Clients", icon: "✨" },
            { number: "24/7", label: "Support", icon: "✈️" },
            { number: "15+", label: "Years Experience", icon: "🏆" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover-lift animate-bounce-in"
              style={{animationDelay: `${1.4 + index * 0.1}s`}}
            >
              <div className="text-center animate-float">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{animationDelay: '1.8s'}}>
          <button
            onClick={() => scrollToSection('services')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift hover-glow"
          >
            <span className="flex items-center gap-2">
              ✨ Explore Services
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover-lift"
          >
            <span className="flex items-center gap-2">
              ✈️ Contact Us
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up" style={{animationDelay: '2s'}}>
          <div 
            className="flex flex-col items-center text-white/60 cursor-pointer animate-bounce-in hover-lift"
            onClick={() => scrollToSection('services')}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;