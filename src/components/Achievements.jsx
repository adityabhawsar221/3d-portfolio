import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const end = parseInt(value);
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [value, isInView]);

  return <span ref={ref}>{count}</span>;
};

const Achievements = () => {
  return (
    <section id="achievements" className="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Achievements</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 flex flex-wrap gap-8 justify-start"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className="w-full sm:w-[280px] glassmorphism p-8 rounded-2xl border border-white/10 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(100,108,255,0.15)] transition-all duration-300 flex flex-col items-center justify-center"
          >
            <h3 className="text-neon font-black md:text-[56px] text-[46px] leading-tight">
              <Counter value={achievement.value} />
              <span className="text-primary">{achievement.suffix}</span>
            </h3>
            <p className="text-white text-[16px] font-medium text-center mt-2">{achievement.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
