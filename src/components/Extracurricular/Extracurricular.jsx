import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "../Timeline/Timeline";
import { TimelineItem } from "../Timeline/TimelineItem";
import { FaMusic, FaRunning, FaMicrophone } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

const extracurricularData = [
  {
    id: 0,
    role: "PR Member",
    company: "Music Club - Magan",
    date: "Jan 2025 - Apr 2026",
    desc: "Actively involved in public relations and event promotion for the official college music club.",
    icon: <FaMusic className="w-full h-full text-secondary p-2" />
  },
  {
    id: 1,
    role: "Athletics Captain",
    company: "College Sports Team",
    date: "Sep 2024 - Nov 2025",
    desc: "Served as Athletics Team Captain, leading 8+ athletes and organizing 3 inter-college sports events.",
    icon: <FaRunning className="w-full h-full text-primary p-2" />
  },
  {
    id: 2,
    role: "PR Team Lead",
    company: "College Annual Fest",
    date: "Apr 2025 - Apr 2025",
    desc: "Headed the public relations and outreach efforts for the college’s flagship cultural event, managing a team and coordinating with external partners.",
    icon: <FaMicrophone className="w-full h-full text-secondary p-2" />
  }
];

const ExtracurricularCard = ({ item }) => (
  <>
    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-4 gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-white p-1 shadow-md flex-shrink-0 flex items-center justify-center">
          {item.icon}
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary tracking-wide">
            {item.role}
          </h3>
          <h4 className="text-secondary font-medium mt-1 mb-2 xl:mb-0">
            {item.company}
          </h4>
        </div>
      </div>
      <div className="bg-black/5 border border-black/5 text-text-secondary px-3 py-1 rounded-full whitespace-nowrap hidden xl:block">
        <p className="text-xs sm:text-sm font-medium">{item.date}</p>
      </div>
    </div>
    
    <div className="bg-black/5 border border-black/5 text-text-secondary px-3 py-1 rounded-full whitespace-nowrap inline-block xl:hidden mb-4">
      <p className="text-xs font-medium">{item.date}</p>
    </div>

    <p className="text-text-secondary leading-relaxed">{item.desc}</p>
  </>
);

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="py-24 px-[8vw] md:px-[10vw] lg:px-[16vw] font-sans relative z-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 md:mb-24"
      >
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">EXTRA CURRICULAR</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded-full"></div>
        <p className="text-text-secondary mt-6 text-lg max-w-2xl mx-auto">
          Activities and roles that go beyond academics, shaping leadership and teamwork.
        </p>
      </motion.div>

      <Timeline lineColor="from-secondary via-primary to-transparent">
        {extracurricularData.map((item) => (
          <TimelineItem 
            key={item.id}
            icon={<MdEmojiEvents />}
            accentColor="secondary"
          >
            <ExtracurricularCard item={item} />
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Extracurricular;
