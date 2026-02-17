"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Code2, Terminal, Cpu, Globe, User, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Globe },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Projects", href: "#projects", icon: Code2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't render until after mount to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-pink-600/10 animate-gradient-x"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo with tech styling */}
            <Link href="/" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              <div className="relative flex items-center space-x-2">
                <Terminal className="w-8 h-8 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  Mathias Kalanda
                </span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30 ml-2 hidden sm:inline-block">
                  CS Grad
                </span>
              </div>
            </Link>

            {/* Desktop Menu - Tech Style */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-2"
                  >
                    <div className="relative flex items-center space-x-2">
                      <Icon
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActive
                            ? "text-purple-400"
                            : "text-gray-400 group-hover:text-purple-400"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Animated indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </Link>
                );
              })}

              {/* Resume Button */}
              <Link
                href="/resume.pdf"
                className="ml-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Resume
              </Link>
            </div>

            {/* Mobile Menu Button - Tech Styled */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-purple-400" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-300" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu - Tech Style */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-4 right-4 top-20 bg-gray-800/95 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
            >
              <div className="p-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-purple-500/10 transition-colors duration-300 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover:text-white font-medium">
                          {item.name}
                        </span>
                        <div className="ml-auto w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-500 transition-colors duration-300"></div>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Resume Button for Mobile */}
                <Link
                  href="/resume.pdf"
                  className="flex items-center space-x-3 px-4 py-3 mt-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30"
                  onClick={() => setIsOpen(false)}
                >
                  <Terminal className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">View Resume</span>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
