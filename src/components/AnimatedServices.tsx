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
  Clock,
  Home,
  ClockIcon
} from "lucide-react";
import {
  FlightImage,
  GlobalVisaImage,
  UAEVisaImage,
  HotelImage,
  HolidayImage,
  InsuranceImage,
  AttestationImage,
  CityToursImage,
  TripPlanningImage,
  VisaExtensionImage,
  UmrahImage
} from "./images";

export function AnimatedServices() {
  const services = [
    {
      icon: Plane,
      title: "Flight Tickets",
      subtitle: "Best Deals Worldwide",
      description: "Air View, a Dubai-based online travel agency, offers seamless flight bookings and tailored travel services. Enjoy a user-friendly platform, personalized packages, competitive fares, reward points on every booking, and reliable customer support via phone, email, or live chat—making Air View a smart choice for every traveler.",
      color: "from-blue-500 to-cyan-500",
      image: FlightImage
    },
    {
      icon: Globe,
      title: "Global Visa Assistance",
      subtitle: "Worldwide Visa Support",
      description: "Air View offers reliable worldwide visa support, handling complete visa processing for all major international destinations. From documentation guidance to application submission, our team ensures a smooth, stress-free experience. Whether for tourism, business, or family visits, Air View simplifies every step so you can focus on your journey.",
      color: "from-green-500 to-emerald-500",
      image: GlobalVisaImage
    },
    {
      icon: FileText,
      title: "UAE Tourist Visa",
      subtitle: "UAE Entry Made Easy",
      description: "Air View provides fast, reliable UAE tourist visa services, making entry to the UAE simple and stress-free. We handle the entire process—document checks, application filing, and timely updates—ensuring quick approval and a smooth experience. Whether visiting for leisure, family, or business, Air View makes UAE entry easy and hassle-free.",
      color: "from-emerald-500 to-teal-500",
      image: UAEVisaImage
    },
    {
      icon: Building,
      title: "Hotel Booking",
      subtitle: "Luxury to Budget",
      description: "Air View offers worldwide hotel bookings, from luxury stays to budget-friendly options. Choose from premium resorts, boutique hotels, and affordable accommodations tailored to your travel needs. With seamless reservations, trusted partners, and great deals, Air View ensures a comfortable stay wherever your journey takes you.",
      color: "from-purple-500 to-pink-500",
      image: HotelImage
    },
    {
      icon: Palmtree,
      title: "Holiday Packages",
      subtitle: "Complete Travel Solutions",
      description: "Air View delivers customized holiday packages designed for unforgettable experiences. From romantic getaways to family adventures, we tailor itineraries to your interests and budget. Enjoy seamless planning, curated destinations, top accommodations, and guided activities—all crafted to give you a smooth, memorable vacation from start to finish.",
      color: "from-orange-500 to-red-500",
      image: HolidayImage
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      subtitle: "Comprehensive Coverage",
      description: "Air View offers comprehensive travel insurance to protect you throughout your journey. From medical emergencies to trip cancellations, lost baggage, and unexpected delays, our coverage ensures peace of mind wherever you go. Travel confidently knowing Air View provides reliable protection and support for a safe, worry-free experience.",
      color: "from-indigo-500 to-blue-500",
      image: InsuranceImage
    },
    {
      icon: Award,
      title: "Attestation Services",
      subtitle: "Document Verification",
      description: "Air View provides professional attestation and document verification services for personal, educational, and commercial papers. We handle every step—authentication, verification, and embassy approvals—ensuring accuracy and timely processing. With Air View, your documents are certified smoothly and securely for use in the UAE and abroad.",
      color: "from-yellow-500 to-orange-500",
      image: AttestationImage
    },
    {
      icon: Users,
      title: "City Tours",
      subtitle: "Guided Experiences",
      description: "Air View offers exciting city tours led by expert local guides, helping you explore top attractions and hidden gems with ease. Enjoy curated itineraries, comfortable transport, and engaging storytelling that brings each destination to life. Whether you prefer cultural highlights or scenic adventures, Air View delivers memorable guided experiences.",
      color: "from-teal-500 to-green-500",
      image: CityToursImage
    },
    {
      icon: Briefcase,
      title: "Trip Organization",
      subtitle: "Business & Leisure",
      description: "Air View provides complete trip organization for both business and leisure travelers. From flights and hotels to transport, activities, and itinerary planning, we manage every detail for a smooth, stress-free journey. Whether it’s a corporate trip or a personal getaway, Air View ensures a well-planned, perfectly coordinated travel experience.",
      color: "from-pink-500 to-purple-500",
      image: TripPlanningImage
    },
   {
      icon: ClockIcon, // or ClockIcon, CalendarIcon
      title: "Visa Extension",
      subtitle: "Extend Your Stay with Ease",
      description: "Air View offers smooth, hassle-free visa extension services to help you stay longer without stress. Our team manages the entire renewal process—from document checks to application submission—ensuring timely updates and quick processing. Whether for tourism, family visits, or business, Air View makes extending your stay simple and convenient.",
      color: "from-pink-500 to-purple-500",
      image: VisaExtensionImage
    },
    {
      icon: Home,
      title: "Umrah Packages",
      subtitle: "Sacred Journey",
      description: "Air View offers complete Umrah packages designed to make your sacred journey smooth and spiritually fulfilling. From visa processing and comfortable accommodations to guided rituals and reliable transport, we handle every detail with care. Travel with peace of mind as Air View provides expert support throughout your blessed pilgrimage.",
      color: "from-amber-500 to-orange-500",
      image: UmrahImage
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
        ease: [0.42, 0, 0.58, 1] as const, // Corrected to a cubic bezier array
      }
    }
  };

// Scroll helper: smooth-scroll to #contact, fallback to page bottom
const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
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
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const ImageComponent = service.image;
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
                <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-200 group-hover:border-transparent transition-all duration-300 shadow-lg">
                  
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <ImageComponent />
                    </motion.div>
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-0.5`}>
                        <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-gray-900" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p className="text-sm font-medium text-gray-600 mb-3">
                      {service.subtitle}
                    </motion.p>
                    
                    <motion.p className="text-sm text-gray-700 leading-relaxed">
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
            <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Globe className="w-5 h-5 inline mr-2" />
              Get Custom Quote
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}