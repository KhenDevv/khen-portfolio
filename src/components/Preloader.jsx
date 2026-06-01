import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Event Horizon text reveal
    const t1 = setTimeout(() => setPhase(1), 800);
    
    // Phase 2: Supernova Wind-up (blur and intensify)
    const t2 = setTimeout(() => setPhase(2), 2400);

    // Phase 3: The Supernova Explosion (white flash)
    const t3 = setTimeout(() => setPhase(3), 3000);

    // Phase 4: Complete and Unmount
    const t4 = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  }, [onComplete]);

  // Generate stable random values for cosmic dust
  const dustParticles = React.useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      x1: (Math.random() - 0.5) * 100,
      y1: (Math.random() - 0.5) * 100,
      x2: (Math.random() - 0.5) * 120,
      y2: (Math.random() - 0.5) * 120,
      scale: Math.random() * 1.5 + 0.5,
      duration: 2 + Math.random() * 3,
    }));
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712] overflow-hidden pointer-events-none"
      animate={phase === 3 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
    >
      {/* Cosmic Dust Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {dustParticles.map((particle, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]"
            style={{ width: 2, height: 2 }}
            initial={{
              x: `${particle.x1}vw`,
              y: `${particle.y1}vh`,
              scale: particle.scale,
              opacity: 0
            }}
            animate={
              phase < 2 
                ? {
                    x: `${particle.x2}vw`,
                    y: `${particle.y2}vh`,
                    opacity: [0, 0.8, 0],
                  }
                : {
                    scale: 0,
                    opacity: 0,
                  }
            }
            transition={{
              duration: particle.duration,
              ease: "linear",
              repeat: phase < 2 ? Infinity : 0
            }}
          />
        ))}
      </div>

      {/* Center Event Horizon Line */}
      <motion.div 
        className="absolute top-1/2 left-0 right-0 h-[2px] bg-blue-400 shadow-[0_0_30px_10px_rgba(96,165,250,0.6)] z-10 origin-center"
        initial={{ scaleX: 0, scaleY: 1 }}
        animate={
          phase === 0 ? { scaleX: 0, scaleY: 1 } :
          phase === 1 ? { scaleX: 1, scaleY: 1 } :
          phase === 2 ? { scaleX: 1, scaleY: 2, backgroundColor: "#bae6fd", boxShadow: "0 0 50px 20px rgba(186,230,253,1)" } :
          { scaleX: 1.5, scaleY: 3000, backgroundColor: "#ffffff", boxShadow: "0 0 100px 50px rgba(255,255,255,1)" }
        }
        transition={{
          scaleX: { duration: 0.8, ease: "circOut" },
          scaleY: phase === 3 ? { duration: 0.6, ease: "circIn" } : { duration: 0.6, ease: "easeInOut" },
          backgroundColor: { duration: 0.6 }
        }}
      />

      {/* Top Text Reveal: KHEN */}
      <div className="absolute bottom-1/2 left-0 right-0 h-[40vh] overflow-hidden flex items-end justify-center pb-2 z-20">
        <motion.div
          className="font-syncopate font-bold text-6xl sm:text-7xl md:text-[8rem] tracking-[0.15em] text-white flex items-end drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
          initial={{ y: "100%", opacity: 0 }}
          animate={
            phase === 0 ? { y: "100%", opacity: 0 } :
            phase === 1 ? { y: "0%", opacity: 1, filter: "blur(0px) brightness(1)", scale: 1 } :
            phase === 2 ? { y: "0%", opacity: 1, filter: "blur(8px) brightness(1.5)", scale: 1.05 } :
            { y: "-50%", opacity: 0, filter: "blur(20px)", scale: 1.2 }
          }
          transition={{
            y: phase === 3 ? { duration: 0.8, ease: "circIn" } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.4 },
            filter: { duration: 0.6, ease: "easeIn" },
            scale: { duration: 0.6, ease: "easeIn" }
          }}
        >
          KHEN
        </motion.div>
      </div>
      
      {/* Bottom Text Reveal: ROLE */}
      <div className="absolute top-1/2 left-0 right-0 h-[20vh] overflow-hidden flex items-start justify-center pt-4 z-20">
        <motion.div
          className="font-space text-blue-200 tracking-[0.4em] md:tracking-[0.6em] text-sm md:text-xl font-light uppercase drop-shadow-[0_0_10px_rgba(191,219,254,0.5)]"
          initial={{ y: "-100%", opacity: 0 }}
          animate={
            phase === 0 ? { y: "-100%", opacity: 0 } :
            phase === 1 ? { y: "0%", opacity: 1, filter: "blur(0px)" } :
            phase === 2 ? { y: "0%", opacity: 0.5, filter: "blur(4px)" } :
            { opacity: 0, y: "50%" }
          }
          transition={{
            y: phase === 3 ? { duration: 0.8, ease: "circIn" } : { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
            opacity: { duration: 0.4, delay: phase === 1 ? 0.1 : 0 },
            filter: { duration: 0.6 }
          }}
        >
          Frontend Developer
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Preloader;
