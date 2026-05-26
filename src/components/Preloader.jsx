import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState('text');
  const name = "KHEN";

  useEffect(() => {
    // Start majestic wipe after 3.2s
    const wipeTimer = setTimeout(() => {
      setPhase('wipe');
    }, 3200);

    // Unmount after wipe completes (1.6s duration + 0.24s stagger = 1.84s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5100);

    return () => {
      clearTimeout(wipeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const columns = 9;
  const centerIdx = Math.floor(columns / 2);

  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none">
      
      {/* 3D Venetian Shutter Wipe */}
      <div className="absolute inset-0 flex w-full h-full overflow-hidden bg-transparent" style={{ perspective: '1200px' }}>
        {Array.from({ length: columns }).map((_, i) => {
          const delayFromCenter = Math.abs(i - centerIdx) * 0.06;
          
          return (
            <motion.div
              key={i}
              initial={{ y: "0%", rotateY: 0, z: 0 }}
              animate={phase === 'wipe' ? { 
                y: "-100%", 
                rotateY: [0, -75, 0], 
                z: [0, -150, 0] 
              } : { 
                y: "0%", rotateY: 0, z: 0 
              }}
              transition={{
                duration: 1.6,
                ease: [0.85, 0, 0.15, 1], // Expo ease for dramatic sweeping
                delay: phase === 'wipe' ? delayFromCenter : 0,
                rotateY: { duration: 1.6, times: [0, 0.5, 1], ease: "easeInOut", delay: phase === 'wipe' ? delayFromCenter : 0 },
                z: { duration: 1.6, times: [0, 0.5, 1], ease: "easeInOut", delay: phase === 'wipe' ? delayFromCenter : 0 }
              }}
              className="relative flex-1 h-[200%] flex flex-col"
              style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
            >
              {/* TOP HALF: Solid Black Screen */}
              <div className="flex-1 bg-[#050505]" />
              
              {/* LASER BOUNDARY */}
              <div className="relative h-[2px] w-full z-20">
                <div className="absolute inset-0 bg-white shadow-[0_0_25px_4px_rgba(255,255,255,0.9)]" />
                {/* Intense Core Flare */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-white/60 blur-[1px]" />
                {/* Volumetric Trail */}
                <div className="absolute top-full left-0 w-full h-[10vh] bg-gradient-to-b from-white/20 to-transparent" />
              </div>
              
              {/* BOTTOM HALF: Premium Breathing Grey Carbon Plate */}
              <motion.div 
                className={`flex-1 relative overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.9)] ${i !== columns - 1 ? 'border-r border-neutral-700/50' : ''}`}
                animate={{ backgroundColor: ["#141414", "#2a2a2a", "#141414"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delayFromCenter,
                }}
              >
                {/* Carbon Fiber / Diagonal Mesh Overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.15]" 
                  style={{
                    backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 6px, #ffffff 6px, #ffffff 7px)"
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* The Text Layer with 3D Tilt Fall */}
      <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none" style={{ perspective: '1000px' }}>
        <motion.div 
          className="relative flex items-center font-hero-name text-6xl sm:text-8xl md:text-9xl font-black tracking-[0.25em]"
          animate={
            phase === 'wipe' 
              ? { opacity: 0, scale: 0.8, y: -60, rotateX: 50, filter: "blur(12px)" } 
              : { opacity: 1, scale: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
          }
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Subtle background glow for the whole word */}
          <div className="absolute inset-0 blur-[60px] bg-white/5 rounded-full" />
          
          {name.split('').map((char, index) => (
            <span
              key={index}
              className="premium-letter relative z-10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {char}
            </span>
          ))}
          {/* Creative Terminal Blinker */}
          <span className="blinker ml-2 md:ml-4 w-4 md:w-6 h-12 md:h-20 bg-white inline-block shadow-[0_0_15px_rgba(255,255,255,0.6)] relative z-10"></span>
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;
