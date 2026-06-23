export const Timeline = ({ children, lineColor = "from-primary via-secondary to-transparent" }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-10 flex flex-col items-center">
      {/* Central absolute line overlay aligned flawlessly to 50% */}
      <div className={`absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b ${lineColor} z-0 -ml-[1px]`} />

      {/* 1-Col Stack Array */}
      <div className="flex flex-col gap-y-16 md:gap-y-24 relative w-full z-10 px-2 sm:px-8">
        {children}
      </div>
    </div>
  );
};
