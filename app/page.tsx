"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedLanding from "./animated-landing";
import BusinessLoader from "../components/loader";
import Navbar from "@/components/navbar"; // Import the Navbar component

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState("light");
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      // Optional minimum load time
    }, 3000);

    return () => clearTimeout(minLoadTime);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "dark bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Global Navbar - Always visible */}
      {!isLoading && (
        <Navbar
          theme={theme}
          setTheme={setTheme}
          scrollY={scrollY}
          showAnnouncement={showAnnouncement}
          setShowAnnouncement={setShowAnnouncement}
        />
      )}

      <AnimatePresence mode="wait">
        {isLoading ? (
          <BusinessLoader
            key="loader"
            onLoadingComplete={handleLoadingComplete}
          />
        ) : (
          <AnimatedLanding key="main" />
        )}
      </AnimatePresence>
    </div>
  );
}
