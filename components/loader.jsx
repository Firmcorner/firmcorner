import React, { useState, useEffect } from "react";
import { Building2, Mail, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BusinessLoader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center max-w-sm mx-auto px-6">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-16 h-16 bg-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">FirmCorner</h1>

          <p className="text-gray-600 text-sm">Your Corner of Web</p>
        </motion.div>

        {/* Simple loading indicator */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="flex justify-center space-x-1 mb-4">
            {[Building2, Mail, FileText].map((Icon, index) => (
              <motion.div
                key={index}
                className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.3,
                }}
              >
                <Icon className="w-4 h-4 text-gray-500" />
              </motion.div>
            ))}
          </div>

          <p className="text-gray-500 text-sm font-medium">Loading...</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-full max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <div className="bg-gray-200 rounded-full h-1 overflow-hidden">
            <motion.div
              className="bg-purple-700 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BusinessLoader;
