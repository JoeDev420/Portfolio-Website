import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import WorkEx from "../components/Home/WorkEx";
import Bio from "../components/Home/Bio";
import Footer from "../components/Home/Footer";

/* ---------------- ANIMATION VARIANTS ---------------- */

const iconContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const iconItem = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/* ---------------- ICON ---------------- */

const ResumeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="stroke-gray-600"
  >
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2v6h6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13h6M9 17h6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/* ---------------- COMPONENT ---------------- */

const Home = () => {
  return (
    <div>

      {/* TOP RIGHT ICON BAR */}
      <div className="flex items-center justify-end sticky top-5 mt-3 mr-10 z-20">
        <motion.div
          className="flex items-center gap-6"
          variants={iconContainer}
          initial="hidden"
          animate="visible"
        >

          {/* GitHub */}
          <motion.a
            variants={iconItem}
            href="https://github.com/JoeDev420"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition"
            title="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            variants={iconItem}
            href="https://www.linkedin.com/in/anant-singh-b33a93373/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition"
            title="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </motion.a>

          

        </motion.div>
      </div>

      {/* PAGE SECTIONS */}
      <Hero />
      <div className="flex justify-center"><hr className="w-[90%] border-t border-[#e8e3d8]" /></div>
      <Skills />
      <div className="flex justify-center"><hr className="w-[90%] border-t border-[#e8e3d8]" /></div>
      <Projects />
      <div className="flex justify-center"><hr className="w-[90%] border-t border-[#e8e3d8]" /></div>
      <WorkEx />
      <div className="flex justify-center"><hr className="w-[90%] border-t border-[#e8e3d8]" /></div>
      <Bio />
      <Footer />

    </div>
  );
};

export default Home;
