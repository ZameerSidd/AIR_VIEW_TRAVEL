import { motion } from "motion/react";
import { Plane, Globe, MapPin, Star } from "lucide-react";

export function FloatingElements() {
  return (
    <>
      {/* Floating Planes */}
      <motion.div
        className="absolute top-20 left-10 text-white/20 z-5"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Plane className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-white/15 z-5"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Plane className="w-12 h-12" />
      </motion.div>

      {/* Floating Globes */}
      <motion.div
        className="absolute bottom-40 left-20 text-white/10 z-5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Globe className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute top-60 left-1/2 text-white/15 z-5"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Globe className="w-10 h-10" />
      </motion.div>

      {/* Floating Stars - Reduced count */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400/30 z-5"
          style={{
            top: `${20 + i * 20}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <Star className="w-4 h-4" />
        </motion.div>
      ))}

      {/* Floating Map Pins */}
      <motion.div
        className="absolute bottom-60 right-40 text-red-400/20 z-5"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MapPin className="w-8 h-8" />
      </motion.div>

      {/* Animated Dots - Reduced count and simplified */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full z-5"
          style={{
            top: `${10 + i * 10}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
}