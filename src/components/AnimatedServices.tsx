import { motion } from "motion/react";
import { 
  Plane, 
  FileText, 
  Building, 
  Palmtree, 
  Shield, 
  Globe, 
  Users, 
  Award,
  MapPin,
  Briefcase,
  CreditCard,
  Clock
} from "lucide-react";

export function AnimatedServices() {
  const services = [
    {
      icon: Plane,
      title: "Flight Tickets",
      subtitle: "Best Deals Worldwide",
      description: "Book domestic and international flights at competitive prices",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      subtitle: "Global & UAE Tourist Visa",
      description: "Complete visa processing and documentation support",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Building,
      title: "Hotel Booking",
      subtitle: "Luxury to Budget",
      description: "Premium accommodations and hotel reservations worldwide",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palmtree,
      title: "Holiday Packages",
      subtitle: "Complete Travel Solutions",
      description: "Customized vacation packages for memorable experiences",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      subtitle: "Comprehensive Coverage",
      description: "Protect your journey with comprehensive travel insurance",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Award,
      title: "Attestation Services",
      subtitle: "Document Verification",
      description: "Professional document attestation and verification services",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "City Tours",
      subtitle: "Guided Experiences",
      description: "Discover destinations with expert local guides",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Briefcase,
      title: "Trip Organization",
      subtitle: "Business & Leisure",
      description: "Complete trip planning and organization services",
      color: "from-pink-500 to-purple-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
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
            Our Premium{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive travel solutions tailored to make your journey seamless and memorable
          </motion.p>
          
          {/* Animated Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: `linear-gradient(135deg, var(--color-from), var(--color-to))`,
                       '--color-from': service.color.split(' ')[1],
                       '--color-to': service.color.split(' ')[3]
                     } as any}
                >
                  <div className="w-full h-full bg-slate-900 rounded-2xl" />
                </div>

                {/* Main Card */}
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover:border-transparent transition-all duration-300">
                  
                  {/* Icon with Subtle Animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-4"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-0.5`}>
                      <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Gentle Glow Effect */}
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} opacity-20 blur-sm`}
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p className="text-sm font-medium text-gray-400 mb-3">
                    {service.subtitle}
                  </motion.p>
                  
                  <motion.p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </motion.p>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-4 right-4 text-blue-400"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 10h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Globe className="w-5 h-5 inline mr-2" />
              Get Custom Quote
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}