"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden relative"
      onClick={onToggle}
      aria-label="Toggle mobile menu"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="h-6 w-6" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="h-6 w-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: string[];
}

export function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-lg hover:text-purple-400 transition-colors py-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={onClose}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Example usage component
export default function MobileMenuExample() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ["Features", "Brands", "How It Works", "Contact"];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900">
      <header className="bg-black/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">FirmCorner</div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <MobileMenuToggle
            isOpen={mobileMenuOpen}
            onToggle={toggleMobileMenu}
          />
        </nav>

        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          menuItems={menuItems}
        />
      </header>

      <main className="pt-20 p-8">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Mobile Menu Demo</h1>
          <p className="text-gray-300">
            Try the mobile menu toggle on smaller screens or resize your browser
            window.
          </p>
        </div>
      </main>
    </div>
  );
}
