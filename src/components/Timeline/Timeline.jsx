import React from "react";

export const Timeline = ({ children, lineColor = "from-primary via-secondary to-transparent" }) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-10">
      <div 
        className="grid grid-cols-[80px_1fr] sm:grid-cols-[1fr_100px_1fr] gap-y-16 lg:gap-y-24 relative w-full items-center"
      >
        {/* Full-height vertical timeline line anchored cleanly in grid column */}
        <div 
          className="col-start-1 sm:col-start-2 row-start-1 row-end-auto flex justify-center items-center pointer-events-none z-0" 
          style={{ gridRow: "1 / -1" }}
        >
          <div className={`w-[2px] h-full bg-gradient-to-b ${lineColor}`}></div>
        </div>

        {children}
      </div>
    </div>
  );
};
