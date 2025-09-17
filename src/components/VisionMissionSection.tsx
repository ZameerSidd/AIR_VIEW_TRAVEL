import { motion } from "motion/react";
import { Eye, Target, Award, Compass, Heart, Zap } from "lucide-react";

export function VisionMissionSection() {
  const visionPoints = [
    {
      icon: Compass,
      title: "Global Reach",
      description: "To be the leading travel partner connecting UAE with the world"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Creating unforgettable experiences through personalized service"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging technology to simplify and enhance travel planning"
    }
  ];

  const missionPoints = [
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering premium travel services with uncompromising quality"
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Providing trustworthy and efficient travel solutions"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Maintaining honest pricing and clear communication"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-64 h-64 rounded-full border border-gray-200/50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full border border-gray-200/50"
      />

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
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vision
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mission
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Driven by passion for travel and commitment to excellence, we shape the future of travel experiences
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            {/* Vision Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5"
                >
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Eye className="w-6 h-6 text-gray-900" />
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                To be the most trusted and innovative travel company in the UAE, 
                empowering dreams and connecting cultures through exceptional travel experiences.
              </motion.p>
            </motion.div>

            {/* Vision Points */}
            <div className="space-y-6">
              {visionPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="group bg-white/90 backdrop-blur-lg rounded-xl p-6 border border-gray-200 hover:border-blue-400/50 transition-all duration-300 shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5 flex-shrink-0">
                        <div className="w-full h-full bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <IconComponent className="w-5 h-5 text-gray-900" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {point.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            {/* Mission Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-0.5"
                >
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 text-gray-900" />
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                To deliver personalized, hassle-free travel solutions while maintaining 
                the highest standards of service, integrity, and customer satisfaction.
              </motion.p>
            </motion.div>

            {/* Mission Points */}
            <div className="space-y-6">
              {missionPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: -10, transition: { duration: 0.2 } }}
                    className="group bg-white/90 backdrop-blur-lg rounded-xl p-6 border border-gray-200 hover:border-purple-400/50 transition-all duration-300 shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 flex-shrink-0">
                        <div className="w-full h-full bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <IconComponent className="w-5 h-5 text-gray-900" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {point.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto shadow-lg">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-medium text-gray-900 italic mb-4"
            >
              "Every journey begins with a single step, and we're here to make sure 
              every step of your travel experience is extraordinary."
            </motion.blockquote>
            <motion.cite
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-gray-600 not-italic"
            >
              — Air View Travel Team
            </motion.cite>
          </div>
        </motion.div>

      </div>
    </section>
  );
}