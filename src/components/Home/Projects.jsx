import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.45 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.45 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 120 },
  visible: {
    opacity: 0.75,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-[#faf9f6] flex justify-center py-20 sm:py-24 lg:py-28"
    >
      <div className="w-[90%] max-w-[1300px]">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[28px] sm:text-[32px] lg:text-[35px] tracking-[0.15em] text-black font-semibold mb-10 lg:mb-12 text-center lg:text-left"
        >
          PROJECTS
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#e8e0d0] rounded-[28px] p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col min-h-[480px] sm:min-h-[520px]"
          >
            <motion.img
              src="/mohit.png"
              alt="Resume Builder Preview"
              variants={imageVariants}
              className="absolute right-[-120px] bottom-[-60px] w-[650px] sm:w-[750px] lg:w-[800px] h-[220px] sm:h-[250px] rotate-[-15deg] pointer-events-none z-0 rounded-2xl"
            />

            <motion.div
              variants={contentVariants}
              className="relative z-10 max-w-[480px] pb-[200px] sm:pb-[220px]"
            >
              <motion.h3
                variants={itemVariants}
                className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-[#2d2b26] mb-3"
              >
                Resume Builder Platform
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-[#2d2b26] text-[15px] sm:text-[16px] leading-[2.1] sm:leading-[2.3]"
              >
                Built and deployed a full-stack AI-powered resume builder that
                analyzes resumes for ATS compatibility and enhances them using
                AI-driven keyword optimization and role-specific suggestions.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-5 flex flex-col gap-2 text-[14px] sm:text-[15px]"
              >
                <a
                  href="https://eazy-resume.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#4d4a43]"
                >
                  Live Link → https://eazy-resume.vercel.app
                </a>

                <a
                  href="https://github.com/JoeDev420/EazyResume-AI_Resume_Builder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6b5c3d] hover:underline"
                >
                  GitHub Repo →
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#f1ede4] rounded-[28px] p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col min-h-[480px] sm:min-h-[520px]"
          >
            <motion.img
              src="/go3.png"
              alt="Ecommerce Preview"
              variants={imageVariants}
              className="absolute right-[-120px] bottom-[-60px] w-[450px] sm:w-[500px] lg:w-[550px] h-[260px] sm:h-[290px] rotate-[-19deg] pointer-events-none z-0 rounded-2xl"
            />

            <motion.div
              variants={contentVariants}
              className="relative z-10 max-w-[480px] pb-[200px] sm:pb-[220px]"
            >
              <motion.h3
                variants={itemVariants}
                className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-[#2d2b26] mb-3"
              >
                Full-Stack Ecommerce Platform
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-[#2d2b26] text-[15px] sm:text-[16px] leading-[2.1]"
              >
                A production-ready ecommerce website with authentication,
                product catalog, cart & checkout flow, secure payments, and
                admin controls.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-5 flex flex-col gap-2 text-[14px] sm:text-[15px]"
              >
                <a
                  href="https://go-cart-store-ten.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#4d4a43]"
                >
                  Live Link → https://go-cart-store-ten.vercel.app
                </a>

                <a
                  href="https://github.com/JoeDev420/gocart_Ecommerce_Store"
                  target="_blank"
                  className="font-semibold text-[#6b5c3d] hover:underline"
                >
                  GitHub Repo →
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#f1ede4] rounded-[28px] p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col min-h-[480px] sm:min-h-[520px]"
          >
            <motion.img
              src="/algo2.png"
              alt="DSA Visualizer Preview"
              variants={imageVariants}
              className="absolute right-[-120px] bottom-[-60px] w-[450px] sm:w-[500px] lg:w-[550px] h-[260px] sm:h-[290px] rotate-[-19deg] pointer-events-none z-0 rounded-2xl"
            />

            <motion.div
              variants={contentVariants}
              className="relative z-10 max-w-[480px] pb-[200px] sm:pb-[220px]"
            >
              <motion.h3
                variants={itemVariants}
                className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-[#2d2b26] mb-3"
              >
                DSA Visualizer Platform
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-[#2d2b26] text-[15px] sm:text-[16px] leading-[2.1]"
              >
                A hands-on data structures and algorithms visualizer that breaks
                down complex concepts into clear, step-by-step animations.
                Designed to help learners intuitively understand internal
                algorithm behavior, traversal logic, and time complexity.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#f1ede4] rounded-[28px] p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col min-h-[480px] sm:min-h-[520px]"
          >
            <motion.img
              src="/sap.png"
              alt="SAP Assistant Preview"
              variants={imageVariants}
              className="absolute right-[-120px] bottom-[-60px] w-[450px] sm:w-[500px] lg:w-[550px] h-[260px] sm:h-[290px] rotate-[-19deg] pointer-events-none z-0 rounded-2xl"
            />

            <motion.div
              variants={contentVariants}
              className="relative z-10 max-w-[480px] pb-[200px] sm:pb-[220px]"
            >
              <motion.h3
                variants={itemVariants}
                className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-[#2d2b26] mb-3"
              >
                SAP Knowledge Assistant
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-[#2d2b26] text-[15px] sm:text-[16px] leading-[2.1]"
              >
                Built a RAG-powered assistant that lets users query SAP MM, FICO,
                and SD documentation through natural language. Combines LLM-based
                retrieval with semantic search and structured document intelligence
                to surface process insights and project knowledge instantly.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-5 flex flex-col gap-2 text-[14px] sm:text-[15px]"
              >
                <span className="inline-flex items-center gap-2 bg-[#ece8df] text-[#6b5c3d] text-[13px] font-medium px-3 py-1 rounded-full w-fit">
                  Prototype · No live link
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
