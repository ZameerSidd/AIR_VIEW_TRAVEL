import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Air View Travel</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences since 2008
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>🎯</span> Our Story
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded in Abu Dhabi, Air View Travel and Tourism L.L.C has been at the forefront of the travel industry for over 15 years. We started with a simple vision: to make travel accessible, enjoyable, and hassle-free for everyone.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Located at Shop No.7 Behind Shining Tower Near Al Khalidiya Mall, we have grown from a small local agency to a trusted name in international travel, serving thousands of satisfied customers across the globe.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { number: "15+", label: "Years", icon: "🏆" },
                  { number: "50+", label: "Countries", icon: "🌍" },
                  { number: "1000+", label: "Happy Clients", icon: "😊" },
                  { number: "24/7", label: "Support", icon: "📞" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-xl animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in-right">
            <div className="space-y-6">
              {/* Vision */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover-lift">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>👁️</span> Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading travel agency in the UAE, recognized for our innovative solutions, exceptional customer service, and commitment to making travel dreams come true for every client.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-r from-green-600/10 to-teal-600/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover-lift" style={{animationDelay: '0.2s'}}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🎯</span> Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide comprehensive, reliable, and personalized travel services that exceed expectations while ensuring complete customer satisfaction and peace of mind throughout their journey.
                </p>
              </div>

              {/* Values */}
              <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover-lift" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>💎</span> Our Values
                </h3>
                <div className="space-y-3">
                  {[
                    "🤝 Customer-first approach in everything we do",
                    "🛡️ Integrity and transparency in all dealings",
                    "⚡ Innovation in travel solutions and services",
                    "🌟 Excellence in service delivery and support"
                  ].map((value, index) => (
                    <p key={index} className="text-gray-300 text-sm">{value}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 What We Offer
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive travel solutions designed to make your journey seamless from start to finish
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { icon: "✈️", label: "Flights" },
              { icon: "📄", label: "Visas" },
              { icon: "🏨", label: "Hotels" },
              { icon: "🏝️", label: "Packages" },
              { icon: "🛡️", label: "Insurance" },
              { icon: "📋", label: "Attestation" },
              { icon: "🌍", label: "Tours" },
              { icon: "🎯", label: "Planning" }
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover-lift animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-2xl mb-2 animate-float">{service.icon}</div>
                <div className="text-xs text-gray-300 font-medium">{service.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our experienced team today and let us help you create memories that will last a lifetime.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift hover-glow"
          >
            Contact Us Now 📞
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;