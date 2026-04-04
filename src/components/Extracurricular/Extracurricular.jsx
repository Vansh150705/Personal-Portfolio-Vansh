import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "../Timeline/Timeline";
import { TimelineItem } from "../Timeline/TimelineItem";
import { FaMusic, FaRunning, FaMicrophone } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

const extracurricularData = [
  {
    id: 0,
    role: "Public Relations Member",
    company: "Music Club — Magan, SRM IST",
    date: "Jan 2025 - Apr 2026",
    desc: "Drove visibility and audience engagement for one of the college's most active creative clubs. Managed event promotion, external outreach, and digital communications — building brand presence for Magan's performances and cultural showcases across campus.",
    icon: <FaMusic className="w-full h-full text-secondary p-2" />
  },
  {
    id: 1,
    role: "Athletics Team Captain",
    company: "College Sports Team, SRM IST",
    date: "Sep 2024 - Nov 2025",
    desc: "Captained a team of 8+ athletes across inter-college competitions, managing training schedules, team coordination, and on-ground strategy. Organized 3 inter-college sports events end-to-end — demonstrating leadership, discipline, and the ability to perform under competitive pressure.",
    icon: <FaRunning className="w-full h-full text-primary p-2" />
  },
  {
    id: 2,
    role: "PR Team Lead",
    company: "College Annual Cultural Fest, SRM IST",
    date: "Apr 2025",
    desc: "Led the public relations and outreach division for the college's flagship annual fest — managing a cross-functional team, coordinating with external sponsors and partners, and driving pre-event buzz across social channels. Ensured seamless communication between internal teams and external stakeholders under tight deadlines.",
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
          Leadership, communication, and teamwork — built outside the classroom and proven under real pressure.
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