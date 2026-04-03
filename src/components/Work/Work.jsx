import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="work" className="py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans relative z-10">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />
      <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />

      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">FEATURED PROJECTS</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-text-secondary mt-6 text-lg max-w-2xl mx-auto">
          A showcase of the systems and applications I've built, reflecting my journey as a full-stack developer.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div variants={itemVariants} key={project.id}>
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1000}
              gyroscope={true}
              className="h-full"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="h-full glass glass-hover rounded-3xl overflow-hidden cursor-pointer flex flex-col group bg-white/40"
              >
                <div className="relative overflow-hidden h-56 p-4">
                  {/* Subtle vignette gradient in light mode */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 shadow-sm"
                  />
                  {/* Decorative corner accents */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-primary/50 rounded-tl-xl" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-secondary/50 rounded-br-xl" />
                </div>
                
                <div className="p-6 flex-grow flex flex-col relative z-20 -mt-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-3 tracking-wide drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-6 text-sm flex-grow line-clamp-3 font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary rounded-full px-3 py-1 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-black/5 border border-black/10 text-[10px] font-bold text-text-secondary rounded-full px-3 py-1 uppercase tracking-wider">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Container */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-md bg-white/40"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-black/10 rounded-3xl shadow-2xl shadow-black/10 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-text-primary hover:bg-primary hover:text-white transition-colors border border-black/10 shadow-sm"
              >
                &times;
              </button>

              <div className="overflow-y-auto no-scrollbar">
                <div className="w-full h-64 md:h-80 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover relative z-0"
                  />
                </div>
                
                <div className="p-8 md:p-12 relative z-20 -mt-20">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 border border-primary/20 text-xs font-bold text-primary rounded-full px-3 py-1 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-text-secondary text-base md:text-lg mb-10 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-black/5 border border-black/10 hover:bg-black/10 text-text-primary px-8 py-4 rounded-2xl text-center text-lg font-semibold transition-all hover:-translate-y-1"
                    >
                      View Source
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-center text-lg font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:-translate-y-1"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
