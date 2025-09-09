import { motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const whatsappNumber = "+971521110934";
  const defaultMessage = "Hello! I'm interested in your travel services. Could you please provide more information?";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }} // Appears after splash screen
        className="fixed bottom-6 right-6 z-40"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pulsing Ring Animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-green-500 rounded-full"
        />
        
        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsApp}
          className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.div>
          
          {/* Notification Dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.button>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : 10,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
          className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
        >
          <div className="text-sm font-medium">Chat with us on WhatsApp!</div>
          <div className="text-xs text-gray-600">Quick response guaranteed</div>
          
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
            <div className="w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent" />
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile-friendly chat bubble */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 5 }}
        className="fixed bottom-24 right-6 z-30 max-w-xs"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: showTooltip ? 1 : 0, opacity: showTooltip ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-4 relative"
        >
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="font-medium text-gray-800 text-sm">Air View Travel</div>
              <div className="text-gray-600 text-xs mt-1">
                Hi there! 👋 Need help with your travel plans? Chat with us now!
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="mt-3 bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-2 rounded-full transition-colors"
              >
                Start Chat
              </motion.button>
            </div>
          </div>
          
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 right-8 transform translate-y-2">
            <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}