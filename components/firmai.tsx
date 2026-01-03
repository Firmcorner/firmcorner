import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Zap,
  Building2,
  FileText,
  Users,
  BarChart,
  Shield,
} from "lucide-react";

const FirmAISection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<any>(null);

  const features = [
    {
      icon: Brain,
      title: "AI Business Consultant",
      description:
        "Get instant expert advice tailored to your specific business challenges",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/10",
    },
    {
      icon: Target,
      title: "Personalized Solutions",
      description:
        "Receive custom strategies based on your industry and business model",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/10",
    },
    {
      icon: Lightbulb,
      title: "24/7 Expert Insights",
      description:
        "Access business intelligence anytime without expensive consultants",
      color: "yellow",
      gradient: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/10",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Share Your Business",
      description: "Tell Firm AI about your company name and what you do",
      icon: Building2,
    },
    {
      step: 2,
      title: "Ask Your Question",
      description: "Describe any business challenge or query you're facing",
      icon: MessageSquare,
    },
    {
      step: 3,
      title: "Get AI Solutions",
      description: "Receive intelligent, actionable recommendations instantly",
      icon: Sparkles,
    },
  ];

  const benefits = [
    { icon: Zap, text: "Instant business advice" },
    { icon: Shield, text: "Confidential consultations" },
    { icon: BarChart, text: "Data-driven strategies" },
    { icon: Users, text: "Multi-industry expertise" },
  ];

  const useCases = [
    {
      title: "Marketing Strategy",
      query: "How can I improve my digital marketing ROI?",
      icon: TrendingUp,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Operations",
      query: "What tools can streamline my business operations?",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Growth Planning",
      query: "Should I expand to new markets this year?",
      icon: Target,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Customer Retention",
      query: "How do I reduce customer churn?",
      icon: Users,
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section
      id="firm-ai"
      className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* AI Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-700 dark:text-purple-300 px-5 py-2.5 rounded-full text-sm font-bold mb-6 border-2 border-purple-300 dark:border-purple-700"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(147, 51, 234, 0)",
                "0 0 0 10px rgba(147, 51, 234, 0.1)",
                "0 0 0 0 rgba(147, 51, 234, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Bot className="h-5 w-5" />
            Latest AI Innovation
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Introducing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Firm AI
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Your AI-powered business consultant. Get personalized advice,
            strategic insights, and solutions to any business challenge -
            instantly and intelligently.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Visual Demo Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating AI Icon */}
            <motion.div
              className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl z-20"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Brain className="h-10 w-10 text-white" />
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border-2 border-purple-200 dark:border-purple-800 relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />

              {/* Header */}
              <div className="relative mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Firm AI
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      AI Business Consultant
                    </p>
                  </div>
                </div>
              </div>

              {/* Conversation Flow */}
              <div className="space-y-4 relative">
                {/* Step 1: Company Name */}
                <motion.div
                  className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-4 border border-purple-200 dark:border-purple-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                      Company Name
                    </span>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200">
                    TechStart Solutions
                  </div>
                </motion.div>

                {/* Step 2: Business Description */}
                <motion.div
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                      Business Description
                    </span>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-200">
                    SaaS platform for small businesses
                  </div>
                </motion.div>

                {/* Step 3: Query */}
                <motion.div
                  className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4 border border-green-200 dark:border-green-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                      Your Query
                    </span>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-200">
                    How can I improve customer retention?
                  </div>
                </motion.div>

                {/* AI Response Preview */}
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 text-white relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="h-5 w-5" />
                    <span className="font-semibold">AI Solution</span>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="h-4 w-4 text-yellow-300" />
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Implement loyalty program with rewards
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Send personalized follow-ups
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Gather & act on customer feedback
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.button
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3.5 rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg relative z-10"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open("https://ai.firmcorner.com", "_blank");
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ pointerEvents: "auto" }}
              >
                Try Firm AI Free
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-xl font-bold text-sm"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              FREE 🎉
            </motion.div>
          </motion.div>

          {/* Right: Key Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Firm AI?
              </span>
            </h3>

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`${feature.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-${feature.color}-300 dark:hover:border-${feature.color}-700 transition-all duration-300 cursor-pointer`}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                whileHover={{ x: 10, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}
                    animate={
                      hoveredFeature === index
                        ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <benefit.icon className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Use Cases Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Perfect For Any Business Challenge
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get AI-powered solutions for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <useCase.icon className="h-6 w-6 text-white" />
                </motion.div>

                <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                  {useCase.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "{useCase.query}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
              Launch Special: Completely FREE
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs getting AI-powered business
              insights. No credit card required.
            </p>

            <motion.button
              className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-xl inline-flex items-center gap-3"
              onClick={() => window.open("https://ai.firmcorner.com", "_blank")}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="h-6 w-6" />
              Start Consulting with AI
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            <motion.p
              className="mt-6 text-sm text-purple-100"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ Get instant answers • No signup required • 100% Free
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirmAISection;
