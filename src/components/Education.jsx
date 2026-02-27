import React from "react";
import { motion } from "framer-motion";
import { education } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const Education = () => {
  return (
    <section id="education" className="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-6 max-w-3xl">
        {education.map((edu, index) => (
          <motion.div
            key={`education-${index}`}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-neon/30 transition-colors duration-300 relative overflow-hidden group"
          >
            {/* Glow accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon to-transparent rounded-l-2xl" />

            <div className="pl-2">
              <h3 className="text-white text-[22px] font-bold">{edu.title}</h3>
              <p className="text-neon text-[15px] font-semibold mt-1">{edu.institution}</p>
              <p className="text-text-muted text-[13px] mt-1">{edu.date}</p>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {edu.points.map((point, i) => (
                  <li key={i} className="text-white/75 text-[14px] leading-[24px]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
