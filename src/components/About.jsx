import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { Lightbulb, Code2 } from "lucide-react";

const highlightCards = [
  {
    title: "Problem Solver",
    desc: "300+ LeetCode problems solved with a strong DSA foundation.",
    icon: <Lightbulb size={28} className="text-neon" />,
  },
  {
    title: "MERN Stack",
    desc: "Specializing in MongoDB, Express, React, and Node.js full-stack apps.",
    icon: <Code2 size={28} className="text-primary" />,
  },
];

const About = () => {
  return (
    <section id="about" className="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-4 text-[17px] max-w-3xl leading-[30px] text-text-muted"
      >
        {personalInfo.intro}
      </motion.p>

      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 flex flex-wrap gap-6"
      >
        {highlightCards.map((card, i) => (
          <motion.div
            key={card.title}
            variants={fadeIn("up", "spring", i * 0.2, 0.75)}
            className="w-full sm:w-[260px] glassmorphism rounded-2xl p-6 flex flex-col gap-3 border border-white/10 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,108,255,0.2)]"
          >
            {card.icon}
            <h3 className="text-white text-[18px] font-bold">{card.title}</h3>
            <p className="text-text-muted text-[14px] leading-6">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
