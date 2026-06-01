import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const updatePosition = (e) => {
      // Use requestAnimationFrame for smoother performance
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[10000]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill={isHovering ? "#60a5fa" : "#e2e8f0"} 
        stroke="#0f172a" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="transition-colors duration-200"
        style={{ transformOrigin: 'top left', marginLeft: '-2px', marginTop: '-2px' }}
      >
        {/* Sleek, modern custom arrow exactly like the reference image */}
        <path d="M4 2 L20 10 L12 12 L9 21 Z" />
      </svg>
    </div>
  );
};

export default CustomCursor;
