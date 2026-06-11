import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
  return (
    <>
      {/* Left side - Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-0 left-6 md:left-10 z-40 hidden xl:flex flex-col items-center gap-8"
      >
        <a 
          href="https://github.com/KhenDevv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
        >
          <Github size={26} />
        </a>
        <a 
          href="https://www.linkedin.com/in/khen-dela-cruz-89216b323/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
        >
          <Linkedin size={26} />
        </a>
        <div className="w-px h-24 bg-slate-600 mt-2"></div>
      </motion.div>

      {/* Right side - Email */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-0 right-6 md:right-10 z-40 hidden xl:flex flex-col items-center gap-8"
      >
        <a 
          href="mailto:Khendc69@gmail.com" 
          className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 text-base font-semibold tracking-widest font-mono"
          style={{ writingMode: 'vertical-rl' }}
        >
          Khendc69@gmail.com
        </a>
        <div className="w-px h-24 bg-slate-600 mt-2"></div>
      </motion.div>
    </>
  );
};

export default SocialSidebar;
