import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = ({ isLoading }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="section-padding relative z-10 w-full flex justify-center">
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          
          <AnimatePresence>
            {!isLoading && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.1
                    }
                  }
                }}
                className="flex flex-col items-center"
              >
                {/* Headline Row */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8 overflow-hidden pt-4 px-4">
                  <motion.span 
                    variants={{
                      hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                  >
                    Hi, I'm
                  </motion.span>
                  
                  {/* Name Container with Sweeping Line */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: "blur(12px)" },
                      visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="relative group cursor-default select-none flex items-center"
                  >
                    {/* Sweeping Line */}
                    <div className="absolute -left-3 md:-left-5 w-1.5 h-16 md:h-24 bg-slate-300 shadow-[0_0_15px_rgba(203,213,225,0.6)] transition-all duration-[500ms] ease-in-out group-hover:left-[calc(100%+1rem)] z-20"></div>
                    
                    {/* Name */}
                    <h1 className="text-7xl md:text-[8rem] font-hero-name font-black tracking-widest uppercase flex">
                      {['K', 'H', 'E', 'N'].map((letter, index) => (
                        <span 
                          key={index} 
                          className="hover-glow-letter inline-block"
                          style={{ transitionDelay: `${index * 120}ms` }}
                        >
                          {letter}
                        </span>
                      ))}
                    </h1>
                  </motion.div>
                </div>
                
                {/* Subtitle */}
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light"
                >
                  An aspiring Front end Developer passionate about building sleek web experience.
                </motion.p>

                {/* Action Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#projects" className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold tracking-widest uppercase rounded shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                    VIEW PROJECTS
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
