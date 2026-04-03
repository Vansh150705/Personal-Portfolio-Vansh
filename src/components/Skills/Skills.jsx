import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

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
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">Technical Arsenal</h2>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center space-y-2 bg-black/5 hover:bg-white/80 border border-black/5 hover:border-primary/50 transition-colors rounded-2xl py-4 px-2 text-center group cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                  >
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm group-hover:drop-shadow-md"
                      />
                    ) : (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xs text-text-primary group-hover:scale-110 transition-transform duration-300">
                        {skill.name[0]}
                      </div>
                    )}
                    <span className="text-xs sm:text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
