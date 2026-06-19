import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-[1300px] flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-12">

        <motion.div
          className="flex flex-col max-w-[650px] text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-3 text-[11px] sm:text-[12px] tracking-[0.25em] font-medium text-[#9b927e] mb-4"
          >
            <span>CODER.</span>
            <span>LIFTER.</span>
            <span>LEARNER.</span>
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              variants={itemVariants}
              className="font-bold text-[#2d2b26] text-[30px] sm:text-[36px] lg:text-[45px] leading-tight"
            >
              Hey! I’m Anant —
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="font-bold text-[#2d2b26] text-[30px] sm:text-[36px] lg:text-[45px] leading-tight"
            >
              a Full-Stack Developer
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="font-bold text-[#2d2b26] text-[28px] sm:text-[34px] lg:text-[45px] leading-tight"
            >
              with a passion for thoughtfully designed web applications
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="max-w-[520px] mt-4 mx-auto lg:mx-0"
          >
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.7] text-[#4d4a43]">
              I design and develop modern web applications focused on performance,
              reliability, and clean user experience — from intuitive front-ends
              to robust back-end systems.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-6 sm:px-7 py-3 rounded-full bg-[#6b5c3d] text-white font-semibold text-[14px] sm:text-[15px] transition-transform hover:scale-[1.04] hover:bg-[#5a4c32]"
            >
              Projects
            </a>

            <a
              href="#bio"
              className="px-6 sm:px-7 py-3 rounded-full border-2 border-[#6b5c3d] text-[#6b5c3d] font-semibold text-[14px] sm:text-[15px] transition-transform hover:scale-[1.04] hover:bg-[#6b5c3d] hover:text-white"
            >
              Bio
            </a>

            <a
              href="https://eazy-resume.vercel.app/view/anant-singh-resume-51823"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3 rounded-full border-2 border-[#6b5c3d] text-[#6b5c3d] font-semibold text-[14px] sm:text-[15px] transition-transform hover:scale-[1.04] hover:bg-[#6b5c3d] hover:text-white"
            >
              Live Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.75, ease: "easeOut" }}
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full object-cover bg-gradient-to-br from-[#d6c9a3] to-[#bba36a] shadow-[0_40px_80px_rgba(0,0,0,0.15)] mb-6 lg:mr-10"
          />

          <div className="text-center lg:mr-10">
            <p className="text-[14px] sm:text-[15px] font-semibold text-[#2d2b26]">
              B.Sc. (Hons) Computer Science
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#6b6455]">
              2022 – 2025 · Delhi University
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#6b6455]">
              Shaheed Sukhdev College
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
