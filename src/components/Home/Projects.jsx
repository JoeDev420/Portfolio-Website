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
    <section id="projects" className="w-full bg-[#faf9f6] flex justify-center py-28">
      <div className="w-[90%] max-w-[1300px]">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[35px] tracking-[0.15em] text-black font-medium mb-12"
        >
          PROJECTS
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >

          {/* PROJECT 1 */}
          <motion.div
            variants={cardVariants}
            className="bg-[#f1ede4] rounded-[28px] p-10 relative overflow-hidden flex flex-col min-h-[520px]"
          >
            <motion.img
              src="/mohit.png"
              alt="Resume Builder Preview"
              variants={imageVariants}
              className="absolute right-[-100px] bottom-[-50px] w-[800px] h-[250px] rotate-[-15deg] pointer-events-none z-0 rounded-2xl"
            />

            <motion.div
              variants={contentVariants}
              className="relative z-10 max-w-[480px] pb-[220px]"
            >
              <motion.h3 variants={itemVariants} className="text-[26px] font-semibold text-[#2d2b26] mb-3">
                Resume Builder Platform
              </motion.h3>

              <motion.p variants={itemVariants} className="text-[#4d4a43] text-[16px] leading-[2.3]">
                Built and deployed a full-stack AI-powered resume builder that
                analyzes resumes for ATS compatibility and enhances them using
                AI-driven keyword optimization and role-specific suggestions.
              </motion.p>

              {/* Links */}
              <motion.div variants={itemVariants} className="mt-5 flex flex-col gap-2 text-[15px]">
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

          {/* PROJECT 2 */}
          <motion.div
            variants={cardVariants}
            className="bg-[#f1ede4] rounded-[28px] p-10 relative overflow-hidden flex flex-col min-h-[520px]"
          >
            <motion.img
              src="/go3.png"
              alt="Ecommerce Preview"
              variants={imageVariants}
              className="absolute right-[-100px] bottom-[-50px] w-[550px] h-[290px] rotate-[-19deg] pointer-events-none z-0 rounded-2xl"
            />

            <motion.div
              variants={contentVariants}
              className="relative z-10 max-w-[480px] pb-[220px]"
            >
              <motion.h3 variants={itemVariants} className="text-[26px] font-semibold text-[#2d2b26] mb-3">
                Full-Stack Ecommerce Platform
              </motion.h3>

              <motion.p variants={itemVariants} className="text-[#4d4a43] text-[16px] leading-[2.1]">
                A production-ready ecommerce website with authentication,
                product catalog, cart & checkout flow, secure payments, and
                admin controls.
              </motion.p>

              {/* Links */}
              <motion.div variants={itemVariants} className="mt-5 flex flex-col gap-2 text-[15px]">
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
                  className="font-semibold text-[#6b5c3d] hover:underline"
                  target="_blank"
                >
                  GitHub Repo →
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* PROJECT 3 */}
          {/* PROJECT 3 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#f1ede4] rounded-[28px] p-10 relative overflow-hidden flex flex-col min-h-[520px]"
            >
              <motion.img
                src="/algo2.png"
                alt="DSA Visualizer Preview"
                variants={imageVariants}
                className="absolute right-[-100px] bottom-[-50px] w-[550px] h-[290px] rotate-[-19deg] pointer-events-none z-0 rounded-2xl"
              />

              <motion.div
                variants={contentVariants}
                className="relative z-10 max-w-[480px] pb-[220px]"
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-[26px] font-semibold text-[#2d2b26] mb-3"
                >
                  DSA Visualizer Platform
                </motion.h3>

                <motion.p
                  variants={itemVariants}
                  className="text-[#4d4a43] text-[16px] leading-[2.1]"
                >
                  A hands-on data structures and algorithms visualizer that breaks down
                  complex concepts into clear, step-by-step animations. Designed to help
                  learners intuitively understand how algorithms operate internally,
                  including state changes, traversal logic, and time complexity behavior.
                </motion.p>
              </motion.div>
            </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
