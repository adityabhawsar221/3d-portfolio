import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Certifications</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 flex flex-wrap gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="group flex items-start gap-4 glassmorphism p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(100,108,255,0.15)] transition-all duration-300 w-full sm:w-auto sm:min-w-[300px]"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Award size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="text-white font-bold text-[16px] group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-text-muted text-[13px] mt-1">{cert.issuer} &bull; {cert.year}</p>
              <span className="text-neon text-[12px] flex items-center gap-1 mt-2 group-hover:underline">
                View Certificate <ExternalLink size={12} />
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
