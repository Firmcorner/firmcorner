"use client";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
  scrollY: number;
  showAnnouncement?: boolean;
  setShowAnnouncement?: (show: boolean) => void;
}

export default function Navbar({
  theme,
  setTheme,
  scrollY,
  showAnnouncement = true,
  setShowAnnouncement,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    "Features",
    "Brands",
    "Our Tools",
    "How It Works",
    "Contact",
  ];

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white shadow-md dark:bg-gray-900 shadow-md"
            : "bg-white/95 dark:bg-gray-900/95"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between w-full">
            <div className="text-2xl font-bold text-purple-700 flex-shrink-0">
              <a href="/">FirmCorner</a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-700 hover:text-purple-700 transition-colors font-medium dark:text-gray-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#newlaunch"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navItems.length, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                🚀 New Launch
              </motion.a>
              <motion.button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex-shrink-0">
              <button
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t shadow-lg dark:bg-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-lg text-gray-700 hover:text-purple-700 transition-colors dark:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item}
                </motion.a>
              ))}

              {/* New Launch Button for Mobile */}
              <motion.a
                href="#newlaunch"
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold py-3 px-4 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * navItems.length }}
              >
                🚀 New Launch
              </motion.a>

              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Announcement Banner */}
      {showAnnouncement && setShowAnnouncement && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full bg-purple-600 text-white text-center py-3 z-40 flex items-center justify-center gap-4"
          style={{ marginTop: scrollY > 50 ? "64px" : "72px" }}
        >
          <p className="text-sm md:text-base font-medium">
            ✨ New Product Launch:{" "}
            <a href="#firmai" className="underline hover:text-purple-100">
              Firm AI
            </a>{" "}
            is here! Your AI-powered business consultant.
          </p>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="p-1 rounded-full hover:bg-purple-700 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </>
  );
}
