import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const name = "KHEN";

  useEffect(() => {
    // Start fading out after a bit more time to appreciate the animation
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3500);

    // Call onComplete to unmount after fade out transition (700ms)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center font-hero-name text-6xl sm:text-8xl md:text-9xl font-black tracking-[0.25em]">
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
      </div>
    </div>
  );
};

export default Preloader;
