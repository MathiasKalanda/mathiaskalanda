import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Mathias Kalanda. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="#home"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center text-gray-400 text-sm mt-4 md:mt-0">
            Made with{" "}
            <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> using
            Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
