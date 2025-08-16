"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Menu,
  X,
  Building2,
  Smartphone,
  Star,
  ArrowRight,
  TrendingUp,
  Mail,
  MapPin,
  Moon,
  Sun,
  Heart,
  Target,
  Rocket,
  Users,
  Zap,
  FileText,
  CreditCard,
  Settings,
  Download,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import apple from "@/Assets/Images/apple.svg";
import lg from "@/Assets/Images/lg.svg";
import mcd from "@/Assets/Images/mcdonald.svg";
import spot from "@/Assets/Images/spotify.svg";
import insta from "@/Assets/Images/instagram.svg";
import Linkedin from "@/Assets/Images/linkedin.svg";

const brands = [
  { name: "Apple", icon: apple },
  { name: "LG", icon: lg },
  { name: "McDonald's", icon: mcd },
  { name: "Spotify", icon: spot },
];

const features = [
  {
    icon: Building2,
    title: "Create Brand Profiles",
    description:
      "Build unlimited brand profiles and showcase your products to millions of users worldwide",
  },
  {
    icon: Smartphone,
    title: "Smart Categories",
    description:
      "Organize products with categories and subcategories - from Electronics to Fashion and beyond",
  },
  {
    icon: Star,
    title: "User Voting System",
    description:
      "Let users vote for their favorite brands and see real-time rankings based on community preferences",
  },
  {
    icon: Heart,
    title: "Follow & Like",
    description:
      "Follow your favorite brands and like products just like social media - stay updated with latest releases",
  },
  {
    icon: Target,
    title: "Targeted Discovery",
    description:
      "Find exactly what you're looking for with our intelligent category-based product discovery",
  },
  {
    icon: Rocket,
    title: "Instagram-Style Feed",
    description:
      "Browse products in a beautiful, familiar feed format that makes discovery fun and engaging",
  },
];

// Updated tools data with comprehensive information
const toolsData = [
  {
    name: "FirmCorner App",
    description:
      "Connect with top brands and discover products by category with our Instagram-style platform",
    icon: Building2,
    url: "https://app.firmcorner.com",
    color: "bg-blue-100",
    iconColor: "text-blue-700",
    buttonColor: "border-blue-600 text-blue-600 hover:bg-blue-50",
    features: [
      "Brand Profiles",
      "Product Discovery",
      "User Voting",
      "Social Features",
    ],
  },
  {
    name: "Firm Mailer",
    description:
      "Send personalized bulk emails to multiple recipients effortlessly with custom templates",
    icon: Mail,
    url: "https://mailer.firmcorner.com/",
    color: "bg-green-100",
    iconColor: "text-green-700",
    buttonColor: "border-green-600 text-green-600 hover:bg-green-50",
    features: [
      "Bulk Email Sending",
      "Custom Templates",
      "Multiple Providers",
      "Easy Setup",
    ],
  },
  {
    name: "Firm Invoice",
    description:
      "Create professional white-labeled invoices with your company branding and multiple templates",
    icon: FileText,
    url: "https://invoice.firmcorner.com",
    color: "bg-purple-100",
    iconColor: "text-purple-700",
    buttonColor: "border-purple-600 text-purple-600 hover:bg-purple-50",
    features: [
      "White-labeled Invoices",
      "Company Branding",
      "Multiple Templates",
      "Professional Design",
    ],
  },
];

const steps = [
  {
    number: 1,
    title: "Register & Create",
    description:
      "Sign up and create unlimited brand profiles for your business",
  },
  {
    number: 2,
    title: "Post Products",
    description:
      "Upload products with categories and subcategories to reach the right audience",
  },
  {
    number: 3,
    title: "Get Discovered",
    description:
      "Users discover your brand through category browsing and voting systems",
  },
  {
    number: 4,
    title: "Build Community",
    description:
      "Gain followers, likes, and climb the rankings to become a top brand",
  },
];

const trustedBrands = [
  "Microsoft",
  "Apple",
  "H&M",
  "LG",
  "Samsung",
  "Nike",
  "Adidas",
  "Sony",
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInLeft = {
  hidden: { opacity: 0, transform: "translateX(-60px)" },
  visible: { opacity: 1, transform: "translateX(0)" },
};

const slideInRight = {
  hidden: { opacity: 0, transform: "translateX(60px)" },
  visible: { opacity: 1, transform: "translateX(0)" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return { ref, isInView };
}

export default function AnimatedLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState("light");
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  // Refs for scroll animations
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation();
  const { ref: brandsRef, isInView: brandsInView } = useScrollAnimation();
  const { ref: toolsRef, isInView: toolsInView } = useScrollAnimation();
  const { ref: stepsRef, isInView: stepsInView } = useScrollAnimation();
  const { ref: contactRef, isInView: contactInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${
        theme === "dark"
          ? "dark bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
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
      {showAnnouncement && (
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
            <a href="#our-tools" className="underline hover:text-purple-100">
              Firm Invoice
            </a>{" "}
            is here! Create professional invoices with your branding.
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

      <main className={showAnnouncement ? "pt-20" : ""}>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={heroRef}
              className="space-y-8"
              variants={slideInLeft}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-2xl font-bold leading-snug text-gray-900 dark:text-white md:text-4xl"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                FirmCorner <span className="text-purple-700">Ecosystem</span>
                <br />
                Connect, Create & Grow.
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed dark:text-gray-400"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Your all-in-one business toolkit. Connect with brands, send bulk
                emails, create professional invoices, and build your community -
                all under one powerful ecosystem.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg transition-colors inline-flex items-center justify-center w-full sm:w-auto"
                  onClick={() =>
                    window.open("https://app.firmcorner.com", "_blank")
                  }
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Explore Firm Corner App
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
                <motion.button
                  className="bg-white text-purple-700 hover:bg-gray-100 px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg transition-colors inline-flex items-center justify-center w-full sm:w-auto border border-purple-700"
                  onClick={() =>
                    document
                      .getElementById("our-tools")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  View All Tools
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </motion.div>
              <motion.div
                className="flex items-center space-x-6 pt-4"
                variants={staggerContainer}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                transition={{ delay: 0.8 }}
              >
                {[
                  {
                    icon: TrendingUp,
                    text: "Growing Fast",
                    color: "text-green-600",
                  },
                  { icon: Users, text: "10K+ Users", color: "text-blue-600" },
                  {
                    icon: Zap,
                    text: "3 Tools & Counting",
                    color: "text-yellow-600",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center space-x-2"
                    variants={staggerItem}
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              variants={slideInRight}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                transition={{ delay: 0.5 }}
              >
                {brands.map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                        <Image
                          src={brand.icon || "/placeholder.svg"}
                          alt={brand.name}
                          width={80}
                          height={50}
                          className="object-contain"
                        />
                        <div className="font-semibold text-gray-700 dark:text-gray-300">
                          {brand.name}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              ref={featuresRef}
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Why Choose <span className="text-purple-700">FirmCorner?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
                Everything you need to build, grow, and showcase your brand in
                one powerful ecosystem
              </p>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 h-full bg-white dark:bg-gray-800">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mb-6"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <feature.icon className="h-8 w-8 text-purple-700" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Brands Showcase */}
        <section id="brands" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              ref={brandsRef}
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              animate={brandsInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Trusted by{" "}
                <span className="text-purple-700">Leading Brands</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Join thousands of brands already growing with FirmCorner
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate={brandsInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              {trustedBrands.map((brand, index) => (
                <motion.div
                  key={brand}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
                    <CardContent className="p-6 text-center">
                      <div className="font-bold text-lg text-gray-700 dark:text-gray-300">
                        {brand}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Recently Launched Section */}
        <section
          id="newlaunch"
          className="py-20 bg-white-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Rocket className="h-4 w-4" />
                Recently Launched
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Introducing{" "}
                <span className="text-purple-700">Firm Invoice</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
                Create stunning, professional invoices with your custom branding
                in minutes. The newest addition to our growing ecosystem of
                business tools.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Product showcase */}
              <motion.div
                className="relative"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-purple-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          Firm Invoice
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Professional Invoice Generator
                        </p>
                      </div>
                    </div>
                    <motion.div
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      NEW
                    </motion.div>
                  </div>

                  {/* Mock invoice preview */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="w-16 h-4 bg-purple-200 rounded mb-2"></div>
                        <div className="w-24 h-3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="text-right">
                        <div className="w-20 h-4 bg-gray-300 rounded mb-1 ml-auto"></div>
                        <div className="w-16 h-3 bg-gray-200 rounded ml-auto"></div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <div className="w-32 h-3 bg-gray-200 rounded"></div>
                          <div className="w-16 h-3 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex justify-between">
                          <div className="w-28 h-3 bg-gray-200 rounded"></div>
                          <div className="w-16 h-3 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 mt-4 pt-2 flex justify-between">
                        <div className="w-20 h-4 bg-purple-200 rounded"></div>
                        <div className="w-20 h-4 bg-purple-300 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
                    onClick={() =>
                      window.open("https://invoice.firmcorner.com", "_blank")
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileText className="h-4 w-4" />
                    Try Firm Invoice Now
                  </motion.button>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Star className="h-6 w-6 text-white" />
                </motion.div>
              </motion.div>

              {/* Right side - Features and benefits */}
              <motion.div
                className="space-y-8"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Building2 className="h-4 w-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                        Custom Branding
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Add your company logo, colors, and branding to create
                        professional white-labeled invoices that reflect your
                        business identity.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Settings className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                        Multiple Templates
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Choose from a variety of professionally designed
                        templates that suit different business types and
                        industries.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Download className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                        Instant Download
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Generate and download your invoices instantly as PDF
                        files, ready to send to your clients immediately.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <CreditCard className="h-4 w-4 text-orange-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                        Easy Setup
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        No complex setup required. Simply fill in your details,
                        add line items, and generate professional invoices in
                        minutes.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                      Launch Special
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                    Free to Use
                  </h4>
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    Celebrate our launch with completely free access to all Firm
                    Invoice features. No hidden costs, no subscriptions
                    required.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Tools Section */}
        <section id="our-tools" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              ref={toolsRef}
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              animate={toolsInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Our <span className="text-purple-700">Powerful Tools</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
                Complete business solutions designed to help you grow, connect,
                and succeed
              </p>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={toolsInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              {toolsData.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 h-full bg-white dark:bg-gray-800">
                    <CardContent className="p-8 flex flex-col h-full">
                      <motion.div
                        className={`w-16 h-16 rounded-lg ${tool.color} flex items-center justify-center mb-6`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <tool.icon className={`h-8 w-8 ${tool.iconColor}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 dark:text-gray-400">
                        {tool.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 dark:text-white">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {tool.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                            >
                              <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto">
                        <motion.button
                          className={`w-full border-2 ${tool.buttonColor} px-6 py-3 rounded-lg transition-colors font-medium`}
                          onClick={() => window.open(tool.url, "_blank")}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Launch {tool.name}
                        </motion.button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="py-20 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <motion.div
              ref={stepsRef}
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              animate={stepsInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                How It <span className="text-purple-700">Works</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Get started with our ecosystem in just 4 simple steps
              </p>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={stepsInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="text-center"
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              ref={contactRef}
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Get in <span className="text-purple-700">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Have questions? We'd love to hear from you
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                variants={slideInLeft}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                  <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-purple-700" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1 dark:text-white">
                            Email Us
                          </h3>
                          <a
                            href="mailto:info@firmcorner.com"
                            className="text-purple-700 hover:text-purple-800 transition-colors"
                          >
                            info@firmcorner.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                  <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-purple-700" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1 dark:text-white">
                            Location
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Building brands worldwide
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
              {/* Social Media */}
              <motion.div
                className="space-y-8"
                variants={slideInRight}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white">
                    Follow Us
                  </h3>
                  <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                      <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                              <Image
                                src={Linkedin || "/placeholder.svg"}
                                alt="Linkedin"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                LinkedIn
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Professional updates & insights
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                              asChild
                            >
                              <a
                                href="https://www.linkedin.com/company/firm-corner/about"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Follow
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                      <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
                              <Image
                                src={insta || "/placeholder.svg"}
                                alt="instagram"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                Instagram
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Behind the scenes & brand stories
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-pink-600 text-pink-600 hover:bg-pink-50 bg-transparent"
                              asChild
                            >
                              <a
                                href="https://www.instagram.com/firmcorner?igsh=MTgxZmpwanQybjdvZQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Follow
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-purple-700">
          <motion.div
            ref={ctaRef}
            className="container mx-auto px-4 text-center"
            variants={fadeInUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Join thousands of brands already growing their audience and
              building communities on FirmCorner
            </motion.p>
            <motion.div variants={fadeInUp} transition={{ delay: 0.6 }}>
              <motion.button
                className="bg-white text-purple-700 hover:bg-gray-100 px-12 py-4 text-xl font-semibold rounded-lg inline-flex items-center"
                onClick={() =>
                  window.open("https://app.firmcorner.com", "_blank")
                }
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-6 w-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-8" // Changed to 4 columns for Products
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <div className="text-2xl font-bold text-purple-700 mb-4">
                FirmCorner
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Connecting brands with their perfect audience through innovative
                discovery and community building.
              </p>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h4 className="font-semibold text-gray-900 mb-4 dark:text-white">
                Products
              </h4>
              <div className="space-y-2">
                <a
                  href="https://app.firmcorner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-700 transition-colors block dark:text-gray-400"
                >
                  FirmCorner App
                </a>
                <a
                  href="https://mailer.firmcorner.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-700 transition-colors block dark:text-gray-400"
                >
                  Firm Mailer
                </a>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h4 className="font-semibold text-gray-900 mb-4 dark:text-white">
                Contacts
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:info@firmcorner.com"
                  className="text-gray-600 hover:text-purple-700 transition-colors block dark:text-gray-400"
                >
                  info@firmcorner.com
                </a>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h4 className="font-semibold text-gray-900 mb-4 dark:text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.instagram.com/firmcorner?igsh=MTgxZmpwanQybjdvZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors dark:bg-gray-700"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={insta || "/placeholder.svg"} alt="instagram" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/firm-corner/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors dark:bg-gray-700"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={Linkedin || "/placeholder.svg"} alt="Linkedin" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="border-t pt-8 text-center dark:border-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 FirmCorner. All rights reserved. | Connecting brands with
              their perfect audience.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
