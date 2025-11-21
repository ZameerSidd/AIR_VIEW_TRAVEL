import { motion } from "motion/react";
import { 
  Users, 
  Calendar, 
  Trophy, 
  Globe, 
  Shield, 
  Star,
  CheckCircle,
  TrendingUp,
  Award,
  Handshake
} from "lucide-react";

export function AboutSection() {
  const achievements = [
    {
      icon: Users,
      number: "5000+",
      label: "Happy Travelers",
      description: "Satisfied customers across the globe"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Destinations",
      description: "Countries and cities we serve"
    },
    {
      icon: Calendar,
      number: "15+",
      label: "Years Experience",
      description: "Decades of travel expertise"
    },
    {
      icon: Trophy,
      number: "98%",
      label: "Success Rate",
      description: "Visa approval and booking success"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Licensed & Certified",
      description: "Fully licensed travel agency in UAE with proper certifications",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your travel needs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Expert Travel Consultants",
      description: "Experienced team with deep knowledge of global destinations",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Handshake,
      title: "Personalized Service",
      description: "Tailored travel solutions to match your preferences and budget",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Best deals and transparent pricing with no hidden costs",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: CheckCircle,
      title: "Hassle-Free Process",
      description: "Streamlined booking and documentation process",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Air View Travel
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Established as a premier travel agency in Abu Dhabi, Air View Travel and Tourism L.L.C 
            has been the trusted partner for thousands of travelers seeking exceptional experiences. 
            Our commitment to excellence and customer satisfaction sets us apart in the travel industry.
          </motion.p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Story Content */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold text-gray-900 mb-6"
                >
                  Our Journey
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4 text-gray-600"
                >
                  <p>
                    Founded with a vision to make travel accessible and enjoyable for everyone, 
                    Air View Travel has grown from a small local agency to a comprehensive travel 
                    solutions provider serving clients across the UAE and beyond.
                  </p>
                  <p>
                    Located strategically behind Shining Tower near Al Khalidiya Mall in Abu Dhabi, 
                    we've built our reputation on trust, reliability, and personalized service. 
                    Our team of experienced travel consultants brings decades of combined expertise 
                    in visa processing, flight bookings, and travel planning.
                  </p>
                  <p>
                    What started as a passion for helping people explore the world has evolved into 
                    a full-service travel agency that handles everything from complex visa applications 
                    to luxury vacation packages, ensuring every client's journey is seamless and memorable.
                  </p>
                </motion.div>
              </div>

              {/* Achievements Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-6"
              >
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 text-center shadow-lg"
                    >
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5"
                      >
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <IconComponent className="w-6 h-6 text-gray-900" />
                        </div>
                      </motion.div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-semibold text-gray-600 mb-2">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {achievement.description}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Air View Travel?
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg"
                >
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-4"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${reason.color} p-0.5`}>
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <IconComponent className="w-7 h-7 text-gray-900" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Hover Effect Border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-4 h-0.5 bg-gradient-to-r ${reason.color} rounded-full origin-left`}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-3xl p-12 border border-gray-200 shadow-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let our experienced team help you create unforgettable travel memories. 
                Contact us today for personalized travel solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Globe className="w-5 h-5 inline mr-2" />
                  Plan Your Trip Now
                </button> */}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}