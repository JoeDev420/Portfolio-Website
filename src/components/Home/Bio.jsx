import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Bio = () => {
  return (
    <section id="bio" className="w-full bg-[#faf9f6] flex justify-center py-30">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[90%] max-w-[1300px] flex flex-col lg:flex-row overflow-hidden rounded-[32px] shadow-lg"
      >

  
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 h-[500px] lg:h-auto relative bg-[#ece8df]"
        >
          
        <img src="/aboutme.jpeg" alt="Anant" className="w-full h-full object-cover" />
        </motion.div>

      
        <motion.div
          variants={containerVariants}
          className="w-full lg:w-1/2 bg-[#3b372f] px-40 py-20 flex flex-col justify-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-[12px] tracking-[0.25em] text-[#b8b09b] mb-4"
          >
            ABOUT ME
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-[25px] font-bold text-[#f5f3ee] mb-6"
          >
            Coder. Lifter. Learner.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#d6d1c4] leading-[1.7] mb-5"
          >
            I’m a full-stack developer who values clarity over flash, and structure
            over noise.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[#d6d1c4] leading-[1.7] mb-5"
          >
            Outside of code, I train, meditate, and study eastern philosophy —
            practices that quietly shape how I think, work, and design.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[#d6d1c4] leading-[1.7]"
          >
            Right now I am focused on building systems that are easy to understand,
            reliable to use, and designed with respect for the user.
          </motion.p>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default Bio;
