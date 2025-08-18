"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedLanding from "./animated-landing";
import BusinessLoader from "../components/loader";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Add minimum loading time to ensure users see the splash
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      // This ensures loader shows for at least 3 seconds
    }, 3000);

    return () => clearTimeout(minLoadTime);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
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
    </>
  );
}
