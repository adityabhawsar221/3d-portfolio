import React from "react";
import { personalInfo } from "../constants";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full relative z-10 py-6 border-t border-white/5 mt-10" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-[14px]">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary hover:text-primary transition-all duration-300 text-white"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon/20 hover:border-neon hover:text-neon transition-all duration-300 text-white"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
