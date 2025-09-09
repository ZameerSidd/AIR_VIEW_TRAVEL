import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "✈️",
      title: "Flight Bookings",
      description: "Best deals on domestic and international flights with 24/7 support",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📄",
      title: "Visa Services",
      description: "Complete visa assistance for all countries with expert guidance",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "🏨",
      title: "Hotel Reservations",
      description: "Luxury accommodations worldwide with exclusive discounts",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🏝️",
      title: "Holiday Packages",
      description: "Customized vacation packages for families and couples",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🛡️",
      title: "Travel Insurance",
      description: "Comprehensive coverage for worry-free travel experiences",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: "🌍",
      title: "Global Tours",
      description: "Guided tours to world's most beautiful destinations",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "👥",
      title: "Group Travel",
      description: "Special packages for corporate and group bookings",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: "🎯",
      title: "Trip Planning",
      description: "Complete itinerary planning with local insights",
      color: "from-pink-500 to-purple-500"
    }
  ];

  const features = [
    { icon: "⭐", title: "15+ Years Experience", description: "Trusted by thousands of travelers" },
    { icon: "🏆", title: "Award Winning Service", description: "Recognized excellence in travel industry" },
    { icon: "🕒", title: "24/7 Customer Support", description: "Round-the-clock assistance for our clients" },
    { icon: "💎", title: "Best Price Guarantee", description: "We match any competitor's price" }
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive travel solutions tailored to make your journey seamless and memorable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift hover-glow animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-0.5 mb-4 animate-pulse-slow`}>
                <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{service.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <span>⭐</span> Why Choose Air View Travel?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're committed to providing exceptional travel experiences with personalized service and unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover-lift animate-bounce-in"
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
              >
                <div className="text-4xl mb-4 animate-float">{feature.icon}</div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift hover-glow"
          >
            Get Started Today 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;