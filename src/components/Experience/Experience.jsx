import { experiences } from "../../constants";
import { motion } from "framer-motion";
import { Timeline } from "../Timeline/Timeline";
import { TimelineItem } from "../Timeline/TimelineItem";
import { MdWorkOutline } from "react-icons/md";

// Experience components

const ExperienceCard = ({ experience }) => (
  <>
    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-4 gap-4">
      <div className="flex items-center gap-4">
        {/* Company logo kept within the card for branding */}
        <div className="w-12 h-12 rounded-lg bg-white p-1 shadow-md flex-shrink-0">
          <img src={experience.img} alt={experience.company} className="w-full h-full object-contain rounded-md" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary tracking-wide">
            {experience.role}
          </h3>
          <h4 className="text-primary font-medium mt-1 mb-2 xl:mb-0">
            {experience.company}
          </h4>
        </div>
      </div>
      <div className="bg-black/5 border border-black/5 text-text-secondary px-3 py-1 rounded-full whitespace-nowrap hidden xl:block">
        <p className="text-xs sm:text-sm font-medium">{experience.date}</p>
      </div>
    </div>
    
    <div className="bg-black/5 border border-black/5 text-text-secondary px-3 py-1 rounded-full whitespace-nowrap inline-block xl:hidden mb-4">
      <p className="text-xs font-medium">{experience.date}</p>
    </div>

    <p className="text-text-secondary leading-relaxed">{experience.desc}</p>
    
    <div className="mt-6">
      <ul className="flex flex-wrap gap-2 mt-2">
        {experience.skills.map((skill, idx) => (
          <li
            key={idx}
            className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-semibold rounded-lg"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-[8vw] md:px-[10vw] lg:px-[16vw] font-sans relative z-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 md:mb-24"
      >
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">EXPERIENCE</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        <p className="text-text-secondary mt-6 text-lg max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken to build impactful products.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <Timeline lineColor="from-primary via-secondary to-transparent">
        {experiences.map((experience) => (
          <TimelineItem 
            key={experience.id}
            icon={<MdWorkOutline />}
            accentColor="primary"
          >
            <ExperienceCard experience={experience} />
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
