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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const WorkEx = () => {
  return (
    <div className="bg-[#faf9f6]">

      <div className="w-full flex justify-center">
        <div className="w-[90%] max-w-[1300px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[28px] sm:text-[32px] lg:text-[35px] tracking-[0.15em] text-black font-semibold"
          >
            WORK EXPERIENCE
          </motion.p>
        </div>
      </div>

      <section className="w-full flex justify-center py-16 sm:py-20">
        <div className="w-[90%] max-w-[1100px] flex flex-col gap-16">

          {/* CoreOps.ai */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#ece8df] flex items-center justify-center shadow-sm">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                  alt="AI"
                  className="w-9 h-9"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#2d2b26] text-[28px] font-semibold leading-tight">
                  AI Engineer 
                </h2>
                <span className="text-[#8a8373] text-[14px] tracking-wide">
                  CoreOps.ai
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 bg-[#ece8df] text-[#6b5c3d] text-[13px] font-medium px-3 py-1 rounded-full">
                2026 · On-site · 3 months
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-[760px] text-[#4d4a43] leading-[1.75] text-[17px]"
            >
              Built a RAG-powered SAP knowledge assistant at CoreOps.ai, integrating
              LLM-based document retrieval with semantic search across SAP MM, FICO,
              and SD modules. Designed contextual query workflows and structured
              document intelligence pipelines to help consultants surface process
              knowledge and project insights through natural language.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="max-w-[760px] text-[#4d4a43] leading-[1.75] text-[17px] mt-5"
            >
              This shaped how I think about applied AI — moving past model accuracy
              to focus on how retrieval systems behave under real business constraints,
              messy documents, and domain-specific terminology.
            </motion.p>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-[#e8e3d8]" />

          {/* Xs.Infosol */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#ece8df] flex items-center justify-center shadow-sm">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                  className="w-9 h-9"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#2d2b26] text-[28px] font-semibold leading-tight">
                  Python Developer Intern
                </h2>
                <span className="text-[#8a8373] text-[14px] tracking-wide">
                  Xs.Infosol
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 bg-[#ece8df] text-[#6b5c3d] text-[13px] font-medium px-3 py-1 rounded-full">
                2025 · On-site · 3 months
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-[760px] text-[#4d4a43] leading-[1.75] text-[17px]"
            >
              I contributed to the development of AI-based biometric products,
              including fingerprint detection and face recognition systems built
              using machine learning techniques. Working closely with a small team,
              I helped design, test, and refine model pipelines while integrating
              them into practical applications.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="max-w-[760px] text-[#4d4a43] leading-[1.75] text-[17px] mt-5"
            >
              This experience taught me how real ML products move from experimentation
              to usable systems — where collaboration, iteration, and clarity in code
              matter just as much as model accuracy.
            </motion.p>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default WorkEx;
