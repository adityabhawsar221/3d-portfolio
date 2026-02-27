import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link, features }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        options={{ max: 20, scale: 1.03, speed: 450 }}
        className="bg-dark-card p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Image area */}
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-dark-bg flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-text-muted text-sm">
            <span className="text-2xl">📁</span>
            <span className="font-semibold text-white">{name}</span>
          </div>
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover z-10 relative"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          )}
          {/* Buttons top-right */}
          <div className="absolute top-3 right-3 flex gap-2 z-20">
            <button
              onClick={() => window.open(live_demo_link, "_blank")}
              className="bg-dark-bg/80 backdrop-blur-sm w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:bg-neon hover:text-dark-bg transition-colors border border-white/10 text-white"
              title="Live Demo"
            >
              <ExternalLink size={16} />
            </button>
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-dark-bg/80 backdrop-blur-sm w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition-colors border border-white/10 text-white"
              title="GitHub"
            >
              <Github size={16} />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <p className="mt-2 text-text-muted text-[14px] leading-[22px]">{description}</p>

          <ul className="mt-3 list-disc ml-5 text-text-muted text-[13px] space-y-1">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[11px] font-semibold px-2 py-1 rounded-md bg-white/5 border border-white/10 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 text-text-muted text-[16px] max-w-3xl leading-[28px]"
      >
        Here are some projects that showcase my skills in building real-world full-stack applications.
      </motion.p>

      <motion.div
        variants={staggerContainer(0.2, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-14 flex flex-wrap gap-7"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
