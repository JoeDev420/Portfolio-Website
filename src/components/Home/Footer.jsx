import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
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

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-[#faf9f6] border-t border-gray-200 mt-auto">
      <motion.div
        className="w-[90%] max-w-[1300px] mx-auto flex items-center justify-between text-sm text-gray-600"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        <div className="flex items-center gap-6">
 
          <motion.a
            variants={itemVariants}
            href="https://github.com/JoeDev420"
            className="opacity-70 hover:opacity-100 transition"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/anant-singh-b33a93373/"
            className="opacity-70 hover:opacity-100 transition"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </motion.a>

          
        </div>

       
        <motion.div
          variants={itemVariants}
          className="text-gray-500"
        >
          Built with <span className="font-medium">React 19</span>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
