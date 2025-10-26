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
  Download,
  FileSpreadsheet,
  Filter,
  Edit3,
  Upload,
  Grid3x3,
  Sparkles,
  Check,
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
    shortDesc: "Connect & Discover",
    description:
      "Connect with top brands and discover products by category with our Instagram-style platform",
    icon: Building2,
    url: "https://app.firmcorner.com",
    gradient: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-700 dark:text-blue-300",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    accentIcon: Users,
    features: [
      "Brand Profiles",
      "Product Discovery",
      "User Voting",
      "Social Features",
    ],
  },
  {
    name: "Firm Mailer",
    shortDesc: "Email Marketing",
    description:
      "Send personalized bulk emails to multiple recipients effortlessly with custom templates",
    icon: Mail,
    url: "https://mailer.firmcorner.com/",
    gradient: "from-green-500 to-emerald-700",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-700 dark:text-green-300",
    buttonColor: "bg-green-600 hover:bg-green-700",
    accentIcon: Zap,
    features: [
      "Bulk Email Sending",
      "Custom Templates",
      "Multiple Providers",
      "Easy Setup",
    ],
  },
  {
    name: "Firm Invoice",
    shortDesc: "Professional Invoicing",
    description:
      "Create professional white-labeled invoices with your company branding and multiple templates",
    icon: FileText,
    url: "https://invoice.firmcorner.com",
    gradient: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-700 dark:text-purple-300",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    accentIcon: TrendingUp,
    features: [
      "White-labeled Invoices",
      "Company Branding",
      "Multiple Templates",
      "Professional Design",
    ],
  },
  {
    name: "Firm Viewer",
    shortDesc: "Data Management",
    description:
      "Powerful CSV/Excel file manager with editing, filtering, and export capabilities for seamless data handling",
    icon: FileSpreadsheet,
    url: "https://viewer.firmcorner.com",
    gradient: "from-emerald-500 to-green-700",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    iconBg: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-700 dark:text-emerald-300",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    accentIcon: Sparkles,
    isNew: true,
    features: [
      "CSV/Excel Support",
      "Data Editing",
      "Advanced Filtering",
      "Instant Export",
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
  const [hoveredTool, setHoveredTool] = useState<any>(null);
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
            <a href="#newlaunch" className="underline hover:text-purple-100">
              Firm Viewer
            </a>{" "}
            is here! Powerful Edit CSVs and Excel files in seconds.
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
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto hover:scale-105"
                  onClick={() =>
                    window.open("https://app.firmcorner.com", "_blank")
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Explore Firm Corner App
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
                <motion.button
                  className="bg-white text-purple-700 hover:bg-gray-100 px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto border border-purple-700 hover:scale-105"
                  onClick={() =>
                    document
                      .getElementById("our-tools")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
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
                    transition={{ duration: 0.2 }}
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
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 h-full bg-white dark:bg-gray-800">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
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
                  transition={{ duration: 0.2 }}
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

          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4" />
                  Recently Launched
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Introducing{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    Firm Viewer
                  </span>
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Manage and edit your CSV/Excel files with powerful filtering
                  and data visualization.
                  <br />
                  The newest addition to our growing ecosystem of business
                  tools.
                </p>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Product card */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                          <FileSpreadsheet className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            Firm Viewer
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Professional Data Manager
                          </p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    </div>

                    {/* Mock spreadsheet preview */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 mb-6 border border-gray-200 dark:border-gray-600">
                      {/* Toolbar */}
                      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-300 dark:border-gray-600">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                          <Grid3x3 className="h-3 w-3 text-white" />
                        </div>
                        <div className="flex-1 bg-white dark:bg-gray-700 rounded px-2 py-1">
                          <div className="w-24 h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-5 h-5 bg-blue-400 rounded"></div>
                          <div className="w-5 h-5 bg-green-400 rounded"></div>
                          <div className="w-5 h-5 bg-orange-400 rounded"></div>
                        </div>
                      </div>

                      {/* Table header with Excel green accent */}
                      <div className="grid grid-cols-4 gap-2 mb-2">
                        <div className="w-full h-3 bg-green-500 rounded"></div>
                        <div className="w-full h-3 bg-green-500 rounded"></div>
                        <div className="w-full h-3 bg-green-500 rounded"></div>
                        <div className="w-full h-3 bg-green-500 rounded"></div>
                      </div>

                      {/* Table rows */}
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map((row) => (
                          <div key={row} className="grid grid-cols-4 gap-2">
                            <div className="w-full h-2.5 bg-white dark:bg-gray-700 rounded shadow-sm"></div>
                            <div className="w-full h-2.5 bg-white dark:bg-gray-700 rounded shadow-sm"></div>
                            <div className="w-full h-2.5 bg-white dark:bg-gray-700 rounded shadow-sm"></div>
                            <div className="w-full h-2.5 bg-white dark:bg-gray-700 rounded shadow-sm"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3.5 rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
                      onClick={() =>
                        window.open("https://viewer.firmcorner.com", "_blank")
                      }
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FileSpreadsheet className="h-4 w-4" />
                      Try Firm Viewer Now
                    </motion.button>
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="h-7 w-7 text-white" />
                  </motion.div>
                </motion.div>

                {/* Right side - Features */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Feature 1 */}
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                      <Upload className="h-5 w-5 text-purple-700 dark:text-purple-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                        Easy File Upload
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Upload CSV and Excel files instantly with drag-and-drop
                        support. Compatible with XLSX, XLS, and CSV formats.
                      </p>
                    </div>
                  </motion.div>

                  {/* Feature 2 */}
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                      <Edit3 className="h-5 w-5 text-green-700 dark:text-green-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                        Full Data Editing
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Edit cells directly in your browser. Update, modify, and
                        delete rows with an intuitive spreadsheet interface.
                      </p>
                    </div>
                  </motion.div>

                  {/* Feature 3 */}
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Filter className="h-5 w-5 text-blue-700 dark:text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                        Advanced Filtering
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Apply powerful filters to find exactly what you need.
                        Sort, search, and filter by any column efficiently.
                      </p>
                    </div>
                  </motion.div>

                  {/* Feature 4 */}
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                      <Download className="h-5 w-5 text-orange-700 dark:text-orange-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">
                        Instant Export
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Download your edited data instantly as CSV or Excel. All
                        your changes are preserved perfectly.
                      </p>
                    </div>
                  </motion.div>

                  {/* Launch Special Card */}
                  <motion.div
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-400">
                        Launch Special
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                      Free to Use
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Celebrate our launch with completely free access to all
                      Firm Viewer features. No hidden costs, no subscriptions
                      required.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Tools Section */}
        <section
          id="our-tools"
          className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-4 w-4" />
                Complete Business Suite
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Our <span className="text-purple-700">Powerful Tools</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
                Complete business solutions designed to help you grow, connect,
                and succeed
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {toolsData.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={staggerItem}
                  onHoverStart={() => setHoveredTool(index)}
                  onHoverEnd={() => setHoveredTool(null)}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`relative h-full rounded-2xl ${
                      tool.bgColor
                    } border-2 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
                      hoveredTool === index
                        ? "shadow-2xl border-transparent"
                        : "shadow-lg"
                    }`}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 transition-opacity duration-300`}
                      animate={{ opacity: hoveredTool === index ? 0.05 : 0 }}
                    />

                    {/* New badge */}
                    {tool.isNew && (
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        NEW
                      </motion.div>
                    )}

                    <div className="relative p-6 flex flex-col h-full">
                      {/* Icon with gradient background */}
                      <motion.div
                        className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <tool.icon className="h-8 w-8 text-white" />

                        {/* Accent icon */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-7 h-7 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md"
                          animate={{
                            scale: hoveredTool === index ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: hoveredTool === index ? Infinity : 0,
                          }}
                        >
                          <tool.accentIcon
                            className={`h-4 w-4 ${tool.iconColor}`}
                          />
                        </motion.div>
                      </motion.div>

                      {/* Tool name and short description */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                          {tool.name}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {tool.shortDesc}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                        {tool.description}
                      </p>

                      {/* Features list */}
                      <div className="mb-5">
                        <ul className="space-y-2">
                          {tool.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: featureIndex * 0.1 }}
                            >
                              <Star className="h-3.5 w-3.5 text-yellow-500 mr-2 flex-shrink-0 fill-yellow-500" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        className={`w-full ${tool.buttonColor} text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}
                        onClick={() => window.open(tool.url, "_blank")}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Launch {tool.name.split(" ")[1]}
                        <motion.div
                          animate={{ x: hoveredTool === index ? 3 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                All tools are{" "}
                <span className="font-bold text-purple-600 dark:text-purple-400">
                  completely free
                </span>{" "}
                to use during our launch period
              </p>
              <motion.div
                className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="h-4 w-4 text-yellow-500" />
                No credit card required • No hidden fees
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
        >
          {/* Decorative background circles */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Simple Process
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                How It{" "}
                <span className="text-purple-700 dark:text-purple-500">
                  Works
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Get started with our ecosystem in just 4 simple steps
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Connecting lines for desktop */}
              <div
                className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300 dark:bg-gray-600"
                style={{ width: "calc(100% - 8rem)", left: "4rem" }}
              ></div>

              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative"
                  variants={staggerItem}
                >
                  <motion.div
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Number circle */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-16 h-16 bg-purple-700 dark:bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg relative z-10">
                        {step.number}
                      </div>

                      {/* Checkmark overlay on hover */}
                      <motion.div
                        className="absolute inset-0 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto opacity-0 hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Check className="h-8 w-8" />
                      </motion.div>

                      {/* Decorative ring */}
                      <div className="absolute inset-0 w-16 h-16 mx-auto">
                        <div className="w-full h-full rounded-full border-2 border-purple-300 dark:border-purple-700 animate-ping opacity-20"></div>
                      </div>
                    </motion.div>

                    {/* Arrow indicator for next step */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-8 z-20">
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-6 w-6 text-purple-400 dark:text-purple-600" />
                        </motion.div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-purple-700 dark:bg-purple-600 rounded-b-2xl"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Ready to get started?{" "}
                <span className="font-bold text-purple-700 dark:text-purple-500">
                  Choose your first tool above!
                </span>
              </p>
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
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
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
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
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
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
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
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
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
                className="bg-white text-purple-700 hover:bg-gray-100 px-12 py-4 text-xl font-semibold rounded-lg inline-flex items-center transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open("https://app.firmcorner.com", "_blank")
                }
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
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
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image src={insta || "/placeholder.svg"} alt="instagram" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/firm-corner/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
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
