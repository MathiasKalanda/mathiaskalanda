"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  MessageSquare,
  User,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Terminal,
  Copy,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [copied, setCopied] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Business hours (Zambia time)
  const businessHours = {
    start: 9, // 9 AM
    end: 18, // 6 PM
    timezone: "EAT (UTC+3)",
  };

  const isWithinBusinessHours = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= businessHours.start && hours < businessHours.end;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mathias.kalanda@example.com",
      link: "mailto:mathias.kalanda@example.com",
      color: "from-purple-500 to-pink-500",
      copyable: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+256 70X XXX XXX", // Uganda format: +256
      link: "tel:+25670XXXXXXX",
      color: "from-blue-500 to-cyan-500",
      copyable: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kampala, Uganda",
      link: "https://maps.google.com/?q=Kampala,Uganda",
      color: "from-green-500 to-emerald-500",
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MathiasKalanda",
      label: "GitHub",
      color: "hover:bg-gray-700",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mathiaskalanda",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/mathiaskalanda",
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900"></div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 1px 1px, #4f4f4f 1px, transparent 0)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating message bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 border border-purple-500/20 rounded-lg"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 45, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 2,
          }}
        >
          <MessageSquare className="w-full h-full text-purple-500/20" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
              <span className="text-purple-400 font-mono text-sm">
                _connect
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-pink-500 to-transparent"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Let's Connect
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Have a project in mind or want to collaborate? I'm just a message
            away!
          </p>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
            <div
              className={`w-2 h-2 rounded-full ${isWithinBusinessHours() ? "bg-green-400 animate-pulse" : "bg-yellow-400"}`}
            ></div>
            <span className="text-sm text-gray-300">
              {isWithinBusinessHours()
                ? "🟢 Available for work - Kampala time (EAT)"
                : "🟡 Outside business hours - Will respond tomorrow"}
            </span>
            <Terminal className="w-4 h-4 text-purple-400" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>

                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 group-hover:border-purple-500 transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 bg-gradient-to-r ${info.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <div>
                          <p className="text-sm text-gray-400 mb-1">
                            {info.label}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={
                                info.label === "Location" ? "_blank" : undefined
                              }
                              rel="noopener noreferrer"
                              className="text-white hover:text-purple-400 transition-colors text-lg font-medium flex items-center space-x-2"
                            >
                              <span>{info.value}</span>
                              {info.label === "Location" && (
                                <ExternalLink
                                  size={14}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                              )}
                            </a>
                          ) : (
                            <p className="text-white text-lg font-medium">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>

                      {info.copyable && (
                        <button
                          onClick={() => copyToClipboard(info.value)}
                          className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group/btn"
                        >
                          {copied ? (
                            <CheckCircle size={16} className="text-green-400" />
                          ) : (
                            <Copy
                              size={16}
                              className="text-gray-400 group-hover/btn:text-white"
                            />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>Business Hours</span>
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 - 18:00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 - 15:00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center border-l border-gray-700 pl-4">
                  <Clock className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-xs text-gray-400 text-center">
                    {businessHours.timezone}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Follow Me</span>
              </h4>

              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        className="group relative block"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                        <div
                          className={`relative p-4 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-purple-500 transition-all duration-300 ${social.color}`}
                        >
                          <Icon size={20} className="relative z-10" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <span>Send a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 flex items-center space-x-2"
                  >
                    <User size={14} className="text-purple-400" />
                    <span>Name</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      required
                      className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors duration-300 pr-10"
                      placeholder="John Doe"
                    />
                    {activeField === "name" && (
                      <motion.div
                        layoutId="fieldGlow"
                        className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 flex items-center space-x-2"
                  >
                    <Mail size={14} className="text-purple-400" />
                    <span>Email</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      required
                      className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 flex items-center space-x-2"
                  >
                    <MessageSquare size={14} className="text-purple-400" />
                    <span>Message</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium overflow-hidden disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {status === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle size={18} />
                        <span>Message Sent!</span>
                      </>
                    ) : status === "error" ? (
                      <>
                        <AlertCircle size={18} />
                        <span>Error. Try again.</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </span>

                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Response Time Guarantee */}
                <p className="text-xs text-center text-gray-500">
                  🚀 Usually responds within 2 hours during business hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Floating Notification for Copy */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 bg-gray-800 rounded-lg px-4 py-2 border border-purple-500 shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-sm text-white">Copied to clipboard!</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
