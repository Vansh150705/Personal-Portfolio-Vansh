import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_71gqxjo", 
        "template_mg0xlog", 
        form.current,
        "oqbQB5QkQW2SuUDfo"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully! ✨");
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="contact" className="py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans relative z-10">
      
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-[-1]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">GET IN TOUCH</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded-full"></div>
        <p className="text-text-secondary mt-6 text-lg max-w-xl mx-auto">
          Have a question or want to work together? Leave a message below and I will get back to you as soon as possible.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg mx-auto glass glass-hover p-8 md:p-10 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 blur-[60px] rounded-full pointer-events-none" />

        <h3 className="text-2xl font-bold text-text-primary text-center mb-8 relative z-10 tracking-wide font-heading">
          Connect With Me <motion.span 
            animate={{ rotate: [0, 10, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block origin-bottom-right"
          >🚀</motion.span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6 relative z-10">
          <div className="relative group">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-black/5 text-text-primary border border-black/10 focus:outline-none focus:border-primary focus:bg-black/5 transition-all font-medium placeholder:text-text-secondary placeholder:font-normal"
            />
          </div>
          
          <div className="relative group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-black/5 text-text-primary border border-black/10 focus:outline-none focus:border-primary focus:bg-black/5 transition-all font-medium placeholder:text-text-secondary placeholder:font-normal"
            />
          </div>

          <div className="relative group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl bg-black/5 text-text-primary border border-black/10 focus:outline-none focus:border-primary focus:bg-black/5 transition-all font-medium placeholder:text-text-secondary placeholder:font-normal"
            />
          </div>

          <div className="relative group">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-black/5 text-text-primary border border-black/10 focus:outline-none focus:border-primary focus:bg-black/5 transition-all font-medium placeholder:text-text-secondary placeholder:font-normal resize-none"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 text-white font-bold text-lg rounded-xl transition-all bg-gradient-to-r from-primary to-secondary shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] tracking-wide"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
