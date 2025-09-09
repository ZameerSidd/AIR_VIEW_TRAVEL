import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Star,
  Globe,
  CheckCircle,
  Zap,
  Shield,
  Award,
  Users,
  Calendar,
  Headphones
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.786z"/>
  </svg>
);

export function ContactSection() {
  const whatsappNumber = "+971521110934"; // WhatsApp number
  const defaultMessage = "Hello! I'm interested in your travel services. Could you please provide more information?";
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const handlePhoneCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, '_self');
  };

  const handleMapLocation = () => {
    const coordinates = "24.4719271,54.3395282";
    const url = `https://www.google.com/maps?q=${coordinates}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 2 442 0602", "+971 52 111 0934", "+971 52 111 0932"],
      color: "from-green-400 to-emerald-400",
      action: "phone"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["reach@airviewtravel.ae", "airviewtt@gmail.com"],
      color: "from-blue-400 to-cyan-400",
      action: "email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Shop No.7 Behind Shining Tower", "Near Al Khalidiya Mall", "Abu Dhabi - U.A.E"],
      color: "from-purple-400 to-pink-400",
      action: "map"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat: 9:00 AM - 6:00 PM", "Sun: 10:00 AM - 4:00 PM"],
      color: "from-orange-400 to-red-400",
      action: "none"
    }
  ];

  const features = [
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: Award,
      title: "Expert Travel Consultants",
      description: "15+ years experience"
    },
    {
      icon: Zap,
      title: "Quick Response Time",
      description: "Within 2 hours"
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Licensed travel agency"
    }
  ];

  const quickServices = [
    {
      icon: Calendar,
      title: "Instant Booking",
      description: "Flight tickets in minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Group Packages",
      description: "Special rates for groups",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Visa Express",
      description: "Fast visa processing",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full border border-white/5"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-white/5"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to embark on your next adventure? Contact our travel experts for personalized service
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                      info.action !== "none" ? "cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      if (info.action === "map") {
                        handleMapLocation();
                      }
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} p-0.5 flex-shrink-0`}>
                        <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <motion.p
                              key={idx}
                              whileHover={info.action === "phone" || info.action === "email" ? { scale: 1.05, color: "#60a5fa" } : {}}
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
                            </motion.p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>



            {/* Quick Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Quick Services
              </h3>
              {quickServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} p-0.5`}>
                        <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{service.title}</div>
                        <div className="text-gray-400 text-xs">{service.description}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5"
                  >
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
                    <p className="text-gray-400 text-sm">Quick response guaranteed</p>
                  </div>
                </div>
                
                {/* Response Time Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  We typically respond within 2 hours
                </motion.div>
              </motion.div>

              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    placeholder="+971 XX XXX XXXX"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your travel plans..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <Send className="w-5 h-5 mr-2 relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </Button>
                  </motion.div>
                  
                  {/* Alternative Contact Methods */}
                  <div className="grid grid-cols-3 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePhoneCall("+971521110934")}
                      className="flex items-center justify-center gap-2 bg-green-600/20 border border-green-500/30 text-green-400 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-green-600/30"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleWhatsApp}
                      className="flex items-center justify-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-green-500/30"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Chat with us
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleEmail("reach@airviewtravel.ae")}
                      className="flex items-center justify-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-blue-600/30"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </motion.button>
                  </div>
                </motion.div>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section with Map/Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Visit Our Office</h3>
              <p className="text-lg text-gray-300 mb-2">
                Shop No.7 Behind Shining Tower, Near Al Khalidiya Mall
              </p>
              <p className="text-lg text-blue-400 font-semibold">Abu Dhabi - United Arab Emirates</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6"
              >
                <Button
                  variant="outline"
                  onClick={handleMapLocation}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}