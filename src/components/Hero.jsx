import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import { Canvas } from "@react-three/fiber";
import AbstractScene from "./canvas/AbstractScene";
import { Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen mx-auto flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas Background — strictly behind everything */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ pointerEvents: "none" }}
        >
          <AbstractScene />
        </Canvas>
      </div>

      {/* Overlay gradient so text is readable over 3D */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 via-dark-bg/60 to-transparent"
        style={{ zIndex: 1, pointerEvents: "none" }}
      />

      {/* Hero content */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5 pt-24"
        style={{ zIndex: 2 }}
      >
        {/* Vertical line accent */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-transparent" />
        </div>

        {/* Text content */}
        <div className="mt-5">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-primary">
              Aditya Bhawsar
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-main font-medium lg:text-[28px] sm:text-[22px] text-[16px] mt-2"
          >
            {personalInfo.tagline}
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8 items-center"
          >
            <a
              href="https://drive.google.com/file/d/1z78RkbG6OtsEK0oo8bM78ONUrBN99csl/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(100,108,255,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download size={20} /> View Resume
            </a>
            <div className="flex gap-3 items-center">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-primary hover:text-primary transition-all duration-300 text-white"
              >
                <Github size={22} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-neon hover:text-neon transition-all duration-300 text-white"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — anchored to bottom of hero ONLY */}
      <div
        className="absolute bottom-8 w-full flex justify-center items-center"
        style={{ zIndex: 2 }}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-text-muted/40 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-primary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
