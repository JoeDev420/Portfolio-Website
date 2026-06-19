import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    subtitle: "Frontend Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    subtitle: "Backend Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    subtitle: "Backend Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    subtitle: "NoSQL Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    subtitle: "Relational Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Tailwind",
    subtitle: "CSS Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Next.js",
    subtitle: "React Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "GitHub",
    subtitle: "Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "TypeScript",
    subtitle: "Typed JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Framer Motion",
    subtitle: "Animation Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section className="w-full bg-[#faf9f6] flex justify-center py-12 sm:py-16">
      <div className="w-[90%] max-w-[1300px]">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[28px] sm:text-[32px] lg:text-[35px] tracking-[0.10em] text-black font-semibold mb-3 text-center lg:text-left"
        >
          STACK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#6b665c] mb-10 text-center lg:text-left max-w-[700px]"
        >
          Tools I use to design, build, and ship reliable web applications.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4 bg-[#f3efe6] rounded-2xl px-4 py-5 shadow-sm hover:shadow-md hover:border hover:border-[#c8b99a] border border-transparent transition"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-xl shadow">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
              </div>

              <div>
                <h3 className="font-semibold text-[#2d2b26] text-[15px] sm:text-[16px]">
                  {skill.name}
                </h3>
                <p className="text-[13px] sm:text-sm text-[#6b665c]">
                  {skill.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
