import { motion } from "framer-motion";

export const TimelineItem = ({ icon, accentColor = "primary", children }) => {
  return (
    <div className="relative w-full z-10 flex flex-col items-center">
      
      {/* Node explicitly stacked top-center via flex-col mechanics */}
      <div className={`mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg border-4 z-20 relative bg-white border-black/10 text-text-primary`}>
         <div className="text-2xl sm:text-3xl flex flex-col items-center justify-center z-10">{icon}</div>
      </div>

      {/* Card horizontally balanced below the node */}
      <div className="w-full relative group">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className={`glass rounded-3xl p-6 sm:p-8 md:p-10 w-full block border transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl relative
               ${accentColor === 'primary' ? 'border-primary/10 group-hover:shadow-primary/20 bg-white/70 backdrop-blur-xl' : 'border-secondary/10 group-hover:shadow-secondary/20 bg-white/70 backdrop-blur-xl'}
            `}
         >
            {/* Ambient card cast-shadow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl z-[-1] blur-2xl ${accentColor === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
            {children}
         </motion.div>
      </div>
      
    </div>
  );
};
