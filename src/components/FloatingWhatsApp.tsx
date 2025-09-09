import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

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

const FloatingWhatsApp = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappNumber = "+971521110934";
  const defaultMessage = "Hello! I'm interested in your travel services. Could you please provide more information?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: 2.5,
          type: "spring",
          stiffness: 300
        }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
      >
        
        {/* Expanded Chat Preview */}
        <AnimatePresence>
          {isExpanded && (
            <>
              {/* Mobile Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExpanded(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              />
              
              {/* Chat Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 25 
                }}
                className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-200 relative z-50"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-green-600" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-sm">Air View Travel</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                      Online now
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleExpanded}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
                
                {/* Messages */}
                <div className="space-y-3 mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700 relative"
                  >
                    <div className="flex items-start gap-2">
                      <span>👋</span>
                      <div>
                        <p>Hi there! Welcome to Air View Travel!</p>
                        <p className="mt-1 text-xs text-gray-500">How can we help you today?</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700"
                  >
                    <p>✈️ Flight Bookings</p>
                    <p>🛂 Visa Services</p>
                    <p>🏨 Hotel Reservations</p>
                    <p>🎯 Complete Travel Packages</p>
                  </motion.div>
                </div>
                
                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <WhatsAppIcon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Start Chat</span>
                </motion.button>
                
                {/* Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-2 mt-3 text-xs text-gray-500"
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                      />
                    ))}
                  </div>
                  Air View Travel is typing...
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main WhatsApp Button */}
        <motion.button
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
          className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 group"
        >
          
          {/* Pulsing Ring */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
          
          {/* Icon with Animation */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-8 h-8" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <WhatsAppIcon className="w-8 h-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Notification Dot */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
          >
            <span className="text-[10px] font-bold">1</span>
          </motion.div>
          
          {/* Hover Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.2 }}
            className="absolute inset-0 bg-green-400 rounded-full blur-xl transition-all duration-300"
          />
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-20 bottom-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none"
            >
              Need help? Chat with us!
              <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-6 border-l-gray-800 border-t-6 border-t-transparent border-b-6 border-b-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default FloatingWhatsApp;