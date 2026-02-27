import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const SkillBubble = ({ name, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.06, 0.5)}
    className="relative group cursor-pointer flex flex-col items-center gap-1.5"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border border-white/10 hover:border-primary/60 hover:shadow-[0_0_14px_rgba(100,108,255,0.35)] transition-all duration-300 transform group-hover:-translate-y-1 bg-dark-card group-hover:bg-primary/10 overflow-hidden p-2.5"
      style={{ backdropFilter: "blur(4px)" }}>
      <img
        src={icon}
        alt={name}
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        style={{ filter: name === "Express.js" ? "invert(1) brightness(0.75)" : "none" }}
      />
    </div>
    <span className="text-text-muted text-[10px] font-medium text-center leading-tight max-w-[56px]">{name}</span>
  </motion.div>
);

const SkillGroup = ({ title, color, items, delay = 0 }) => (
  <motion.div
    variants={fadeIn("up", "spring", delay, 0.6)}
    className="glassmorphism rounded-xl p-5 border border-white/8 hover:border-primary/20 transition-colors duration-300"
  >
    <h3 className={`text-[13px] font-bold uppercase tracking-widest mb-4 ${color}`}>{title}</h3>
    <motion.div
      variants={staggerContainer(0.04, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-wrap gap-3"
    >
      {items.map((skill, index) => (
        <SkillBubble key={skill.name} index={index} {...skill} />
      ))}
    </motion.div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills</h2>
      </motion.div>

      {/* 2-column split grid — compact and space-efficient */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <SkillGroup
          title="Programming Languages"
          color="text-primary"
          items={skills.languages}
          delay={0}
        />
        <SkillGroup
          title="Frontend"
          color="text-neon"
          items={skills.frontend}
          delay={0.1}
        />
        <SkillGroup
          title="Backend & Database"
          color="text-secondary"
          items={[...skills.backend, ...skills.database]}
          delay={0.2}
        />
        <SkillGroup
          title="Tools & Concepts"
          color="text-purple-400"
          items={[...skills.tools, ...skills.concepts]}
          delay={0.3}
        />
      </motion.div>
    </section>
  );
};

export default Skills;
