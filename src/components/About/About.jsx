import React, { useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '../../assets/Vansh Professional Pic 3.png';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section ref={ref} id="about" className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col-reverse md:flex-row justify-between items-center"
      >
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 relative z-20">
          <div className="overflow-hidden">
            <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium text-text-secondary mb-2 leading-tight">
              Hi, I am
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary mb-4 leading-tight tracking-tight">
              Vansh Mahajan
            </motion.h2>
          </div>
          
          <div className="overflow-hidden">
            <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-primary leading-tight">
              <span className="text-text-primary">I build </span>
              <ReactTypingEffect
                text={[
                  'Scalable Full Stack Systems',
                  'AI-Integrated Applications',
                  'Production-Ready Architectures',
                  'Cloud-Ready Solutions',
                ]}
                speed={80}
                eraseSpeed={40}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-primary">{cursor}</span>
                )}
              />
            </motion.h3>
          </div>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-text-secondary mb-8 mt-6 leading-relaxed max-w-lg mx-auto md:mx-0">
            Full-Stack Engineer — experienced in designing and building end-to-end web applications across real-world projects and internships. Specialized in the MERN stack with growing expertise in AI integration and AWS cloud, focused on developing scalable, high-performance systems with clean architecture and reliable deployment.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="/Vansh Resume.pdf"
            download="Vansh Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
          >
            DOWNLOAD CV
          </motion.a>
        </div>

        {/* Right Side */}
        <motion.div 
          style={{ y: yImage }}
          className="md:w-1/2 flex justify-center md:justify-end relative"
        >
          <motion.div style={{ y: yBackground }} className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full z-[-1]" />
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] rounded-full p-2"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="w-full h-full rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm p-4 shadow-[0_0_40px_rgba(139,92,246,0.1)]">
              <img
                src={profileImage}
                alt="Vansh Mahajan"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;