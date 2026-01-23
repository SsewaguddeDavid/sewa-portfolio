import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Web Designer & <span className="text-primary">Developer.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
        >
          I specialize in crafting websites and web applications that combine
          clean design, smooth functionality, and optimal performance. My goal
          is to deliver digital experiences that are both visually compelling
          and highly effective for businesses and users alike.
        </motion.p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-primary hover:bg-blue-600 text-white px-4 py-2 md:px-8 md:py-3 rounded-full font-medium transition-all"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 md:px-8 md:py-3  rounded-full font-medium transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
