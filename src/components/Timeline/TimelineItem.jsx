import React from "react";
import { motion } from "framer-motion";

export const TimelineItem = ({ leftContent, rightContent, icon, accentColor = "primary" }) => {
  return (
    <div 
      className="col-span-full grid items-center w-full relative z-10" 
      style={{ gridTemplateColumns: 'inherit' }}
    >
       {/* Left Card (Hidden on Mobile, Desktop Left Items Only) */}
       {leftContent ? (
         <div className="hidden sm:flex w-full justify-end pr-4 sm:pr-8 sm:col-start-1">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
               className="glass glass-hover p-6 sm:p-8 rounded-3xl w-full max-w-2xl"
            >
              {leftContent}
            </motion.div>
         </div>
       ) : (
         <div className="hidden sm:block w-full sm:col-start-1" />
       )}

       {/* Middle Node Logo */}
       <div className="col-start-1 sm:col-start-2 flex justify-center items-center self-stretch py-8">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl border-4 ${accentColor === 'primary' ? 'border-primary shadow-primary/20 text-primary' : 'border-secondary shadow-secondary/20 text-secondary'}`}
          >
            {icon ? (
               <div className="text-2xl sm:text-4xl flex items-center justify-center">{icon}</div>
            ) : (
               <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-current" />
            )}
          </motion.div>
       </div>

       {/* Right Card / Mobile Card */}
       <div className="col-start-2 sm:col-start-3 flex flex-col gap-8 w-full justify-start pl-2 sm:pl-8 overflow-hidden py-4 pr-4 sm:pr-0">
          
          {/* Mobile explicitly renders leftContent as stacked card before rightContent */}
          {leftContent && (
             <div className="w-full max-w-2xl sm:hidden block">
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                 className="glass glass-hover p-6 sm:p-8 rounded-3xl w-full"
               >
                 {leftContent}
               </motion.div>
             </div>
          )}

          {/* Desktop Right Card / Mobile second stacked card */}
          {rightContent && (
             <div className="w-full max-w-2xl block">
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                 className="glass glass-hover p-6 sm:p-8 rounded-3xl w-full"
               >
                 {rightContent}
               </motion.div>
             </div>
          )}
       </div>
    </div>
  );
};
