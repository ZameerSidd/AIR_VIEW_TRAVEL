import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handlePhoneCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in your travel services.";
    window.open(`https://wa.me/971521110934?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleMapLocation = () => {
    window.open('https://maps.google.com/?q=24.4719271,54.3395282', '_blank');
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone Numbers",
      details: ["+971 2 442 0602", "+971 52 111 0934"],
      color: "from-green-500 to-emerald-500",
      action: "phone"
    },
    {
      icon: "📧",
      title: "Email Addresses",
      details: ["reach@airviewtravel.ae", "info@airviewtravel.ae"],
      color: "from-blue-500 to-cyan-500",
      action: "email"
    },
    {
      icon: "📍",
      title: "Office Location",
      details: ["Shop No.7 Behind Shining Tower", "Near Al Khalidiya Mall, Abu Dhabi, UAE"],
      color: "from-purple-500 to-pink-500",
      action: "map"
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: ["Sunday - Thursday: 9:00 AM - 6:00 PM", "Friday - Saturday: 10:00 AM - 4:00 PM"],
      color: "from-orange-500 to-red-500",
      action: "none"
    }
  ];

  const quickServices = [
    {
      icon: "⚡",
      title: "Emergency Support",
      description: "24/7 travel assistance",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant messaging support",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "📋",
      title: "Quick Quote",
      description: "Get instant price estimates",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next adventure? Contact us today for personalized travel solutions and expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span>📞</span> Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift animate-fade-in-up ${
                    info.action !== "none" ? "cursor-pointer" : ""
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => {
                    if (info.action === "map") {
                      handleMapLocation();
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} p-0.5 flex-shrink-0`}>
                      <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                        <span className="text-xl">{info.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className={`text-gray-300 text-sm transition-colors ${
                              (info.action === "phone" || info.action === "email") ? "cursor-pointer hover:text-blue-400" : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (info.action === "phone") {
                                handlePhoneCall(detail);
                              } else if (info.action === "email") {
                                handleEmail(detail);
                              }
                            }}
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Services */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>⚡</span> Quick Services
              </h4>
              <div className="space-y-4">
                {quickServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover-lift animate-fade-in-up"
                    style={{animationDelay: `${0.4 + index * 0.1}s`}}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} p-0.5`}>
                        <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                          <span className="text-lg">{service.icon}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{service.title}</div>
                        <div className="text-gray-400 text-xs">{service.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>💬</span> Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your travel plans..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover-lift hover-glow"
                >
                  Send Message 📧
                </button>

                {/* Alternative Contact Methods */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => handlePhoneCall("+971521110934")}
                    className="flex items-center justify-center gap-2 bg-green-600/20 border border-green-500/30 text-green-400 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-green-600/30 hover-lift"
                  >
                    <span>📞</span>
                    <span className="text-xs">Call</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-green-500/30 hover-lift"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.786z"/>
                    </svg>
                    <span className="text-xs">Chat with us</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEmail("reach@airviewtravel.ae")}
                    className="flex items-center justify-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-blue-600/30 hover-lift"
                  >
                    <span>📧</span>
                    <span className="text-xs">Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map/Location Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="max-w-2xl mx-auto">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Visit Our Office</h3>
              <p className="text-gray-300 mb-6">
                Come and meet our experienced team at our convenient location in Abu Dhabi. We're always ready to help you plan your perfect trip.
              </p>
              <button
                onClick={handleMapLocation}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift hover-glow"
              >
                📍 Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;