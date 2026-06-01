import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth the scroll progress so it feels premium and fluid
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-[90]">
      {/* The Scroll Track */}
      <div className="w-1 md:w-1.5 h-32 md:h-48 bg-white/10 rounded-full relative overflow-hidden">
        {/* The Scroll Fill */}
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          style={{ 
            height: '100%',
            scaleY, 
            transformOrigin: 'top' 
          }}
        />
      </div>
      
      {/* Small dot below the scrollbar to match the image design */}
      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-slate-500 rounded-full" />
    </div>
  );
};

export default ScrollProgress;
