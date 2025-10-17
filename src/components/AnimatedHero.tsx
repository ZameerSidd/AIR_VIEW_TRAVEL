import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselImages } from "../assets/img";

export function AnimatedHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const carouselSlides = [
    {
      image: carouselImages.travelInsurance,
      title: "Travel Insurance",
      description: "Comprehensive coverage for your peace of mind during every journey"
    },
    {
      image: carouselImages.corporateTravel,
      title: "Corporate Travel",
      description: "Professional business travel solutions tailored to your company needs"
    },
    {
      image: carouselImages.holidayPackages,
      title: "Holiday Packages",
      description: "Curated vacation experiences to destinations around the world"
    },
    {
      image: carouselImages.hotelBooking,
      title: "Hotel Booking",
      description: "Luxury accommodations and best rates for your perfect stay"
    },
    {
      image: carouselImages.flightBooking,
      title: "Flight Booking",
      description: "Seamless air ticket booking with the best fares and routes worldwide"
    },
    {
      image: carouselImages.globalVisa,
      title: "Global Visa Assistance",
      description: "Expert visa processing services for destinations around the world"
    },
    {
      image: carouselImages.uaeVisa,
      title: "UAE Tourist Visa",
      description: "Fast and hassle-free UAE tourist visa services"
    },
    {
      image: carouselImages.documentAttestation,
      title: "Document Attestation",
      description: "Professional document attestation and legalization services"
    },
    {
      image: carouselImages.cityTours,
      title: "City Tours",
      description: "Explore breathtaking destinations with our curated city tour packages"
    },
    {
      image: carouselImages.tripPlanning,
      title: "Trip Planning",
      description: "Customized travel itineraries tailored to your preferences"
    },
    {
      image: carouselImages.visaExtension,
      title: "Visa Extension",
      description: "Efficient visa extension and renewal services"
    },
    {
      image: carouselImages.umrahPackages,
      title: "Umrah Packages",
      description: "Comprehensive Umrah packages for a blessed spiritual journey"
    }
  ];

  // Function to start the auto-advance timer
  const startTimer = () => {
    // Clear any existing timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Start new timer
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 6000); // Change every 6 seconds
  };

  useEffect(() => {
    startTimer();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [carouselSlides.length]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselSlides.length - 1 : prevIndex - 1
    );
    // Reset timer to zero
    startTimer();
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % carouselSlides.length
    );
    // Reset timer to zero
    startTimer();
  };
  
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
    // Reset timer to zero
    startTimer();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image Carousel Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={currentImageIndex}>
          <motion.div
            key={currentImageIndex}
            custom={currentImageIndex}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ 
              duration: 1.2,
              ease: [0.42, 0, 0.58, 1]
            }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${carouselSlides[currentImageIndex].image})` }}
            />
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Background Circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-white/20 z-5"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full border border-white/20 z-5"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl z-5"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl z-5"
      />

      {/* Content - Title and Description */}
      <div className="relative z-10 text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {carouselSlides[currentImageIndex].title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl text-white/90 drop-shadow-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {carouselSlides[currentImageIndex].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Left */}
      <motion.button
        type="button"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.1, x: -5, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 md:p-4 rounded-full border-2 border-white/40 transition-all duration-300 shadow-2xl cursor-pointer hover:shadow-3xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
      </motion.button>

      {/* Navigation Buttons - Right */}
      <motion.button
        type="button"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.1, x: 5, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 md:p-4 rounded-full border-2 border-white/40 transition-all duration-300 shadow-2xl cursor-pointer hover:shadow-3xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
      </motion.button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {carouselSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`transition-all duration-300 rounded-full ${
              index === currentImageIndex 
                ? 'w-12 h-3 bg-white shadow-lg' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}: ${carouselSlides[index].title}`}
          />
        ))}
      </div>
    </section>
  );
}
