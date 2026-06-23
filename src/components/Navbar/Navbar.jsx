import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({ children, className, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3); // Scale down the pull a bit for subtlety
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.button>
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "volunteering", label: "Volunteering" },
    { id: "extracurricular", label: "Extra Curricular" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-black/5 py-4 shadow-lg shadow-primary/5" : "bg-transparent py-6"
      }`}
    >
      <div className="flex justify-between items-center text-text-primary">
        {/* Logo */}
        <div className="text-xl font-heading font-bold cursor-pointer flex items-center gap-1 group" onClick={() => handleMenuItemClick('about')}>
          <span className="text-primary transition-transform group-hover:-translate-x-1">&lt;</span>
          <span>Vansh</span>
          <span className="text-secondary">/</span>
          <span>Mahajan</span>
          <span className="text-primary transition-transform group-hover:translate-x-1">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex relative space-x-2 text-text-secondary">
          {menuItems.map((item) => (
            <li key={item.id} className="relative z-10">
              <MagneticButton
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative px-4 py-2 rounded-full transition-colors font-medium ${
                  activeSection === item.id ? "text-text-primary" : "hover:text-text-primary"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.label}
              </MagneticButton>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-5">
          <a
            href="https://github.com/Vansh150705"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-mahajan-napv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <FiX
              className="text-3xl text-primary cursor-pointer hover:rotate-90 transition-transform"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-primary cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-xl border border-black/5 p-6 z-40 rounded-2xl shadow-2xl md:hidden"
          >
            <ul className="flex flex-col items-center space-y-6 text-text-secondary">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="w-full text-center"
                >
                  <button 
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`text-lg font-medium w-full py-2 rounded-xl transition-all ${
                      activeSection === item.id ? "bg-primary/10 text-text-primary border border-primary/20" : "hover:bg-black/5 hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-black/5 w-full justify-center">
                <a
                  href="https://github.com/Vansh150705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors p-2 bg-black/5 rounded-full"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vansh-mahajan-napv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors p-2 bg-black/5 rounded-full"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
