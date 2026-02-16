"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => (filter === "featured" ? p.featured : true));

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my best work showcasing my skills in modern web
            development
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === "all"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === "featured"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Featured
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <Link
                          href={project.github}
                          target="_blank"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={20} />
                        </Link>
                        <Link
                          href={project.live}
                          target="_blank"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={20} />
                        </Link>
                      </div>
                      <Link
                        href={`/projects/${project.id}`}
                        className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center"
                      >
                        View Details <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors"
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
