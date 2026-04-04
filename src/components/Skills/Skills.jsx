import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// Devicon CDN base
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const iconMap = {
  // Languages
  "C++":           `${DEVICON}/cplusplus/cplusplus-original.svg`,
  "JavaScript":    `${DEVICON}/javascript/javascript-original.svg`,
  "PHP":           `${DEVICON}/php/php-original.svg`,
  "Python":        `${DEVICON}/python/python-original.svg`,

  // Frontend
  "HTML":          `${DEVICON}/html5/html5-original.svg`,
  "CSS":           `${DEVICON}/css3/css3-original.svg`,
  "React.js":      `${DEVICON}/react/react-original.svg`,
  "Next.js":       `${DEVICON}/nextjs/nextjs-original.svg`,
  "Tailwind CSS":  `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  "Redux":         `${DEVICON}/redux/redux-original.svg`,
  "GSAP":          "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  "Framer Motion": "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",

  // Backend
  "Node.js":       `${DEVICON}/nodejs/nodejs-original.svg`,
  "Express.js":    `${DEVICON}/express/express-original.svg`,
  "Django":        `${DEVICON}/django/django-plain.svg`,
  "REST APIs":     `${DEVICON}/fastapi/fastapi-original.svg`,
  "Socket.io":     `${DEVICON}/socketio/socketio-original.svg`,

  // Databases
  "MongoDB":       `${DEVICON}/mongodb/mongodb-original.svg`,
  "SQL":           `${DEVICON}/mysql/mysql-original.svg`,

  // Cloud & DevOps
  "AWS":           `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  "Docker":        `${DEVICON}/docker/docker-original.svg`,
  "CI/CD":         `${DEVICON}/githubactions/githubactions-original.svg`,
  "Vercel":        `${DEVICON}/vercel/vercel-original.svg`,

  // Tools
  "Git":           `${DEVICON}/git/git-original.svg`,
  "GitHub":        `${DEVICON}/github/github-original.svg`,
  "VS Code":       `${DEVICON}/vscode/vscode-original.svg`,
  "Postman":       `${DEVICON}/postman/postman-original.svg`,
  "npm":           `${DEVICON}/npm/npm-original-wordmark.svg`,
  "Yarn":          `${DEVICON}/yarn/yarn-original.svg`,
  "Figma":         `${DEVICON}/figma/figma-original.svg`,
  "Chrome DevTools": `${DEVICON}/chrome/chrome-original.svg`,
  "Antigravity":   `${DEVICON}/python/python-original.svg`,
  "Stich":         `${DEVICON}/mongodb/mongodb-original.svg`,
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial mix-blend-multiply opacity-50 z-[-1] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
          Technical Arsenal
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        <p className="text-text-secondary mt-6 text-lg max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through various projects and experiences. Look at them pop!
        </p>
      </motion.div>

      {/* Skill Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap gap-4 lg:gap-8 justify-center"
      >
        {SkillsInfo.map((category) => (
          <motion.div
            variants={itemVariants}
            key={category.title}
            className="glass glass-hover px-6 sm:px-10 py-8 mb-6 w-full sm:w-[46%] xl:w-[48%] rounded-3xl"
          >
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6 text-center tracking-wide">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => {
                  const logoSrc = iconMap[skill];
                  return (
                    <div
                      key={skill}
                      className="flex flex-col items-center justify-center space-y-2 bg-black/5 hover:bg-white/80 border border-black/5 hover:border-primary/30 transition-all duration-300 rounded-2xl py-5 px-2 text-center group cursor-pointer shadow-sm hover:shadow-[0_4px_20px_rgba(139,92,246,0.15)]"
                    >
                      {logoSrc ? (
                        <img
                          src={logoSrc}
                          alt={skill}
                          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-sm text-text-primary group-hover:scale-110 transition-transform duration-300">
                          {skill[0]}
                        </div>
                      )}
                      <span className="text-xs sm:text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors leading-tight">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;