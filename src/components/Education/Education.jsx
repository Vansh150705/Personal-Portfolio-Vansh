import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";
import { Timeline } from "../Timeline/Timeline";
import { TimelineItem } from "../Timeline/TimelineItem";
import { FaGraduationCap } from "react-icons/fa";

// Education components

const EducationCard = ({ edu }) => (
  <>
    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-4 gap-4">
      <div className="flex items-center gap-4">
        {/* School logo kept within the card for branding */}
        <div className="w-12 h-12 rounded-lg bg-white p-1 shadow-md flex-shrink-0">
          <img src={edu.img} alt={edu.school} className="w-full h-full object-contain rounded-md" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary tracking-wide">
            {edu.degree}
          </h3>
          <h4 className="text-secondary font-medium mt-1 mb-2 xl:mb-0">
            {edu.school}
          </h4>
        </div>
      </div>
      <div className="bg-black/5 border border-black/5 text-text-secondary px-3 py-1 rounded-full whitespace-nowrap hidden xl:block">
        <p className="text-xs sm:text-sm font-medium">{edu.date}</p>
      </div>
    </div>
    
    <div className="bg-black/5 border border-black/5 text-text-secondary px-3 py-1 rounded-full whitespace-nowrap inline-block xl:hidden mb-4">
      <p className="text-xs font-medium">{edu.date}</p>
    </div>

    {edu.grade && (
      <div className="mb-4 inline-block bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-lg">
        <span className="text-sm font-bold text-text-primary">Grade: </span>
        <span className="text-sm text-secondary font-semibold">{edu.grade}</span>
      </div>
    )}
    <p className="text-text-secondary leading-relaxed">{edu.desc}</p>
  </>
);

const Education = () => {
  return (
    <section id="education" className="py-24 px-[8vw] md:px-[10vw] lg:px-[16vw] font-sans relative z-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 md:mb-24"
      >
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">EDUCATION</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded-full"></div>
        <p className="text-text-secondary mt-6 text-lg max-w-2xl mx-auto">
          My academic background and qualifications.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <Timeline lineColor="from-secondary via-primary to-transparent">
        {education.map((edu) => (
          <TimelineItem 
            key={edu.id}
            icon={<FaGraduationCap />}
            accentColor="secondary"
          >
            <EducationCard edu={edu} />
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Education;
