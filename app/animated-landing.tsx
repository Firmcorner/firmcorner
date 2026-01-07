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
  Bot,
  Brain,
  Wand2,
  Cpu,
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
import FirmAISection from "@/components/firmai";

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
    name: "Firm Mailer",
    shortDesc: "AI-Powered Email Marketing",
    description:
      "Send personalized bulk emails with AI-generated content that converts.",
    icon: Mail,
    accentIcon: Bot,
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
    iconColor: "text-blue-600",
    buttonColor:
      "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    url: "https://mailer.firmcorner.com",
    aiFeatures: [
      "AI writes compelling email content",
      "Smart subject line generation",
      "Personalization at scale",
      "Automated follow-up sequences",
    ],
    isNew: false,
  },
  {
    name: "Firm Invoice",
    shortDesc: "AI-Enhanced Invoicing",
    description:
      "Create professional invoices with AI-powered automation and smart insights.",
    icon: FileText,
    accentIcon: Brain,
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
    iconColor: "text-purple-600",
    buttonColor:
      "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
    url: "https://invoice.firmcorner.com",
    aiFeatures: [
      "Auto-populate invoice details",
      "Smart tax calculations",
      "Payment prediction insights",
      "Automated reminders",
    ],
    isNew: false,
  },
  {
    name: "Firm Viewer",
    shortDesc: "AI-Driven Data Analysis",
    description:
      "Analyze and edit CSV/Excel files with intelligent AI assistance.",
    icon: FileSpreadsheet,
    accentIcon: Wand2,
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/10",
    iconColor: "text-green-600",
    buttonColor:
      "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
    url: "https://viewer.firmcorner.com",
    aiFeatures: [
      "AI-powered data insights",
      "Smart pattern detection",
      "Automated data cleaning",
      "Intelligent filtering suggestions",
    ],
    isNew: true,
  },
  {
    name: "Coming Soon",
    shortDesc: "More AI Tools Ahead",
    description:
      "We're building more AI-powered tools to revolutionize your business workflow.",
    icon: Sparkles,
    accentIcon: TrendingUp,
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/10",
    iconColor: "text-orange-600",
    buttonColor:
      "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800",
    url: "#",
    aiFeatures: [
      "AI content generation",
      "Smart automation",
      "Predictive analytics",
      "Voice-powered features",
    ],
    isNew: false,
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
  const [hoveredBrand, setHoveredBrand] = useState<any>(null);

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
      <main className={showAnnouncement ? "pt-20" : ""}>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-800 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden">
          {/* Animated AI Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl"
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
          </div>

          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* AI Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-bold border-2 border-purple-300 dark:border-purple-700"
                variants={fadeInUp}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(147, 51, 234, 0)",
                    "0 0 0 8px rgba(147, 51, 234, 0.1)",
                    "0 0 0 0 rgba(147, 51, 234, 0)",
                  ],
                }}
              >
                <Bot className="h-4 w-4" />
                AI-Powered Business Suite
                <Sparkles className="h-4 w-4 text-yellow-500" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                FirmCorner{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  AI Ecosystem
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300">
                  Work Smarter with AI
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed dark:text-gray-400"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Your AI-powered business toolkit. Let artificial intelligence
                handle the heavy lifting while you focus on growth. From smart
                email campaigns to intelligent data analysis - all automated and
                optimized.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3.5 text-base sm:text-lg rounded-xl transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto shadow-lg hover:shadow-xl font-semibold"
                  onClick={() =>
                    window.open("https://app.firmcorner.com", "_blank")
                  }
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Try Firmcorner App
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
                <motion.button
                  className="bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 sm:px-8 py-3.5 text-base sm:text-lg rounded-xl transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto border-2 border-purple-300 dark:border-purple-700 shadow-md hover:shadow-lg font-semibold"
                  onClick={() =>
                    document
                      .getElementById("our-tools")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bot className="mr-2 h-5 w-5" />
                  Explore AI Features
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </motion.div>

              {/* Stats with AI Theme */}
              <motion.div
                className="flex flex-wrap items-center gap-6 pt-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                {[
                  {
                    icon: Cpu,
                    text: "AI-Powered",
                    color: "text-purple-600",
                    bg: "bg-purple-100 dark:bg-purple-900/30",
                  },
                  {
                    icon: Users,
                    text: "10K+ Users",
                    color: "text-blue-600",
                    bg: "bg-blue-100 dark:bg-blue-900/30",
                  },
                  {
                    icon: Zap,
                    text: "3 AI Tools",
                    color: "text-yellow-600",
                    bg: "bg-yellow-100 dark:bg-yellow-900/30",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className={`flex items-center gap-2 ${item.bg} px-4 py-2 rounded-full`}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* AI Feature Highlight */}
              <motion.div
                className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800"
                variants={fadeInUp}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      AI Does the Heavy Lifting
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Our AI automatically generates content, analyzes data, and
                      optimizes your workflow - saving you hours every day
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Brand Cards with AI Enhancement */}
            <motion.div
              className="relative"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {/* Floating AI Icon */}
              <motion.div
                className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl z-20"
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
                <Brain className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4 relative"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {brands.map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    variants={staggerItem}
                    onHoverStart={() => setHoveredBrand(index)}
                    onHoverEnd={() => setHoveredBrand(null)}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                      {/* AI Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0"
                        animate={{
                          opacity: hoveredBrand === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* AI Badge on Card */}
                      {hoveredBrand === index && (
                        <motion.div
                          className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Bot className="h-3 w-3" />
                          Firm Corner
                        </motion.div>
                      )}

                      <div className="relative flex flex-col items-center justify-center p-6 text-center space-y-3">
                        {/* Brand Icon/Emoji with AI pulse */}
                        <motion.div
                          className="text-5xl relative"
                          animate={
                            hoveredBrand === index
                              ? {
                                  scale: [1, 1.1, 1],
                                }
                              : {}
                          }
                          transition={{ duration: 0.5 }}
                        >
                          <Image
                            src={brand.icon || "/placeholder.svg"}
                            alt={brand.name}
                            width={80}
                            height={50}
                            className="object-contain"
                          />

                          {hoveredBrand === index && (
                            <motion.div
                              className="absolute -inset-2 border-2 border-purple-400 rounded-full"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1.5, opacity: 0 }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}
                        </motion.div>

                        <div className="font-semibold text-gray-700 dark:text-gray-300">
                          {brand.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating particles effect */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Bottom Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-xs font-medium">Powered by AI</span>
              <motion.div
                className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full p-1"
                whileHover={{ borderColor: "#9333ea" }}
              >
                <motion.div
                  className="w-1.5 h-3 bg-purple-600 rounded-full mx-auto"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
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
          id="firmai"
          className="py-20 bg-white-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
          {/* Background decoration */}
          <FirmAISection />
        </section>

        {/* Our Tools Section */}
        <section
          id="our-tools"
          className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-4">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* AI Badge with animation */}
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-700 dark:text-purple-300 px-5 py-2.5 rounded-full text-sm font-bold mb-6 border-2 border-purple-200 dark:border-purple-700"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(147, 51, 234, 0)",
                    "0 0 0 10px rgba(147, 51, 234, 0.1)",
                    "0 0 0 0 rgba(147, 51, 234, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bot className="h-5 w-5" />
                AI-Powered Business Suite
                <Sparkles className="h-4 w-4 text-yellow-500" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Meet Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  AI Business Assistant
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-400 leading-relaxed">
                Every tool in our ecosystem is supercharged with artificial
                intelligence to help you work smarter, faster, and more
                efficiently
              </p>
            </motion.div>

            {/* Tools Grid */}
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
                        className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10"
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

                        {/* AI Badge on icon */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-7 h-7 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md border-2 border-purple-400"
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

                      {/* Tool name and description */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                          {tool.name}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {tool.shortDesc}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {tool.description}
                      </p>

                      {/* AI Features list */}
                      <div className="mb-5 flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <Brain className={`h-4 w-4 ${tool.iconColor}`} />
                          <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                            AI Features
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {tool.aiFeatures.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: featureIndex * 0.1 }}
                            >
                              <Sparkles className="h-3.5 w-3.5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        className={`w-full ${
                          tool.buttonColor
                        } text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${
                          tool.url === "#"
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        onClick={() =>
                          tool.url !== "#" && window.open(tool.url, "_blank")
                        }
                        whileHover={tool.url !== "#" ? { scale: 1.03 } : {}}
                        whileTap={tool.url !== "#" ? { scale: 0.97 } : {}}
                        disabled={tool.url === "#"}
                      >
                        {tool.url === "#" ? (
                          <>
                            <Zap className="h-4 w-4" />
                            Stay Tuned
                          </>
                        ) : (
                          <>
                            Launch {tool.name.split(" ")[1]}
                            <motion.div
                              animate={{ x: hoveredTool === index ? 3 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.div>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom AI Highlight Section */}
            <motion.div
              className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot className="h-5 w-5" />
                  Powered by Advanced AI
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Why AI Makes the Difference
                </h3>

                <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
                  Our AI doesn't just automate tasks—it understands context,
                  learns from patterns, and provides intelligent suggestions
                  that help you make better business decisions
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)",
                    }}
                  >
                    <Brain className="h-8 w-8 mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Smart Learning</h4>
                    <p className="text-sm text-purple-100">
                      AI adapts to your workflow and improves over time
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)",
                    }}
                  >
                    <Zap className="h-8 w-8 mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Lightning Fast</h4>
                    <p className="text-sm text-purple-100">
                      Complete hours of work in seconds with AI automation
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)",
                    }}
                  >
                    <Star className="h-8 w-8 mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Better Results</h4>
                    <p className="text-sm text-purple-100">
                      AI-powered insights lead to smarter decisions
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-8 inline-flex items-center gap-2 text-sm"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4 text-yellow-300" />
                  All tools are completely free during launch • No credit card
                  required
                </motion.div>
              </div>
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
                <a
                  href="https://firmcorner.com/privacy-policy"
                  className="text-gray-600 hover:text-purple-700 transition-colors block dark:text-gray-400"
                >
                  Privacy Policy
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
