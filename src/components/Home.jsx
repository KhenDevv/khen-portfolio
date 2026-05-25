import React from 'react';
import { motion } from 'framer-motion';
import GridScan from './GridScan';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#888888"
          gridScale={0.1}
          scanColor="#ffffff"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={1.2}
          chromaticAberration={0.004}
          noiseIntensity={0.01}
        />
      </div>

      <div className="section-padding relative z-10 w-full flex justify-center">
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Headline Row */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8">
              <span className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Hi, I'm
              </span>
              
              {/* Name Container with Sweeping Line */}
              <div className="relative group cursor-default select-none flex items-center">
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
              </div>
            </div>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light">
              An aspiring Front end Developer passionate about building sleek web experience.
            </p>

            {/* Action Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#projects" className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold tracking-widest uppercase rounded shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                VIEW PROJECTS
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
