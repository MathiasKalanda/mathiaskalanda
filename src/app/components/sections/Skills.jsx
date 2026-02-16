"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiShopify,
  SiVercel,
  SiSanity,
  SiExpress,
  SiRemix,
  SiMedusa,
} from "react-icons/si";
import { TbApi, TbSeo } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Remix", icon: SiRemix, color: "#ffffff" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TanStack", icon: VscServerProcess, color: "#FF4154" },
  { name: "Node.js/Express", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "API Integration", icon: TbApi, color: "#FF6B6B" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "Medusa", icon: SiMedusa, color: "#FF4D4D" },
  { name: "Sanity.io", icon: SiSanity, color: "#F03E2F" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "SEO", icon: TbSeo, color: "#4CAF50" },
  { name: "Domain Setup", icon: VscServerProcess, color: "#FFA500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit I've developed through my Computer Science
            education and professional experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <div className="relative bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center gap-2 h-full border border-gray-700 group-hover:border-transparent transition-all duration-300">
                <skill.icon
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-xs text-center font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
