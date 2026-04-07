import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-text-primary relative z-10 border-t border-black/5 bg-background/50 backdrop-blur-xl py-12 px-[8vw] md:px-[7vw] lg:px-[16vw]">
      <div className="flex flex-col items-center">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={handleScrollToTop}
          className="text-2xl sm:text-3xl font-heading font-bold cursor-pointer flex items-center gap-1 group mb-8"
        >
          <span className="text-primary transition-transform group-hover:-translate-x-1">&lt;</span>
          <span>Vansh</span>
          <span className="text-secondary opacity-70">/</span>
          <span>Mahajan</span>
          <span className="text-primary transition-transform group-hover:translate-x-1">&gt;</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
          {[
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "experience", label: "Experience" },
            { id: "work", label: "Projects" },
            { id: "education", label: "Education" },
            { id: "volunteering", label: "Volunteering" },
            { id: "extracurricular", label: "Extra Curricular" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm sm:text-base font-medium tracking-wide relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-10">
          <a
            href="https://github.com/Vansh150705"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-all transform hover:scale-110 p-3 bg-black/5 border border-black/5 rounded-full hover:border-primary/50 shadow-sm"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-mahajan-napv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-all transform hover:scale-110 p-3 bg-black/5 border border-black/5 rounded-full hover:border-primary/50 shadow-sm"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="text-center text-text-secondary text-sm font-medium">
          <p>
            &copy; {currentYear} built with ❤️ by <span className="text-primary font-bold">Vansh Mahajan</span>.
          </p>
          <p className="mt-1 text-xs opacity-70">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
