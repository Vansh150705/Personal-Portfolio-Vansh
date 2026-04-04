import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "../Timeline/Timeline";
import { TimelineItem } from "../Timeline/TimelineItem";
import { MdVolunteerActivism } from "react-icons/md";

import hamariLogo from "../../assets/company_logo/hamari-logo.png";
import risingLogo from "../../assets/company_logo/rising-logo.png";
import pragatiLogo from "../../assets/company_logo/pragati-logo.png";

const volunteeringData = [
  {
    id: 0,
    role: "Marketing and Content Intern · Malnutrition",
    company: "Hamari Pachhan NGO",
    date: "Aug 2024 - Sep 2024",
    desc: "Designed 15+ social media creatives and contributed to digital marketing campaigns.",
    img: hamariLogo
  },
  {
    id: 1,
    role: "Teaching Intern · Teaching Underprivileged Children",
    company: "The Rising People Welfare Society",
    date: "Jul 2024 - Sep 2024",
    desc: "Taught 20+ underprivileged students, supporting after-school learning programs.",
    img: risingLogo,
    imgClass: "scale-[1.2]"
  },
  {
    id: 2,
    role: "Community Service Intern · Food Distribution",
    company: "Pragati Prayas",
    date: "Jun 2025 - Jul 2025",
    desc: "Organized 3+ food distribution drives, providing essential resources to underprivileged communities.",
    img: pragatiLogo,
    imgClass: "scale-[1.9]"
  }
];

const VolunteeringCard = ({ item }) => (
  <>
    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-4 gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-white p-1 shadow-md flex-shrink-0 overflow-hidden flex items-center justify-center">
          <img src={item.img} alt={item.company} className={`w-full h-full object-contain rounded-md transition-transform ${item.imgClass || ""}`} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary tracking-wide">
            {item.role}
          </h3>
          <h4 className="text-primary font-medium mt-1 mb-2 xl:mb-0">
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

const Volunteering = () => {
  return (
    <section id="volunteering" className="py-24 px-[8vw] md:px-[10vw] lg:px-[16vw] font-sans relative z-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 md:mb-24"
      >
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">VOLUNTEERING</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        <p className="text-text-secondary mt-6 text-lg max-w-2xl mx-auto">
          Giving back to the community and making an impact through various social initiatives.
        </p>
      </motion.div>

      <Timeline lineColor="from-primary via-secondary to-transparent">
        {volunteeringData.map((item) => (
          <TimelineItem 
            key={item.id}
            icon={<MdVolunteerActivism />}
            accentColor="primary"
          >
            <VolunteeringCard item={item} />
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Volunteering;
