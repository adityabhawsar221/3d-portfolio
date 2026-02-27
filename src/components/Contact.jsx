import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { personalInfo } from "../constants";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending — replace with real EmailJS logic
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h2>
      </motion.div>

      <div className="mt-12 flex xl:flex-row flex-col gap-10">
        {/* Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-[0.7] glassmorphism p-8 rounded-2xl border border-white/10"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="text-white text-[14px] font-semibold block mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full bg-white/5 border border-white/10 hover:border-primary/40 focus:border-neon focus:outline-none rounded-lg px-5 py-3 text-white placeholder:text-text-muted transition-colors"
              />
            </div>
            <div>
              <label className="text-white text-[14px] font-semibold block mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full bg-white/5 border border-white/10 hover:border-primary/40 focus:border-neon focus:outline-none rounded-lg px-5 py-3 text-white placeholder:text-text-muted transition-colors"
              />
            </div>
            <div>
              <label className="text-white text-[14px] font-semibold block mb-2">Message</label>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hey Aditya, I'd love to connect..."
                required
                className="w-full bg-white/5 border border-white/10 hover:border-primary/40 focus:border-neon focus:outline-none rounded-lg px-5 py-3 text-white placeholder:text-text-muted transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="self-start px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-[0_0_20px_rgba(100,108,255,0.5)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "Sending..." : sent ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Info Panel */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-[0.3] glassmorphism p-8 rounded-2xl border border-white/10 flex flex-col gap-6 justify-center"
        >
          <h3 className="text-white text-[20px] font-bold">Or reach me directly</h3>
          <div className="flex flex-col gap-5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-text-muted hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                <Mail size={18} />
              </div>
              <span className="text-[14px]">{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-text-muted hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all">
                <Github size={18} />
              </div>
              <span className="text-[14px]">GitHub Profile</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-text-muted hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon/10 group-hover:border-neon/30 transition-all">
                <Linkedin size={18} />
              </div>
              <span className="text-[14px]">LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
