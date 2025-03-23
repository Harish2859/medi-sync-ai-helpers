
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop devices
    if (window.innerWidth > 768) {
      document.body.classList.add('custom-cursor-enabled');
      setIsEnabled(true);
      
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || 
            target.tagName === 'A' || 
            target.tagName === 'INPUT' || 
            target.closest('button') || 
            target.closest('a')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', handleMouseOver);
      
      return () => {
        document.body.classList.remove('custom-cursor-enabled');
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* Main cursor glow effect */}
      <div 
        className="custom-cursor" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          opacity: isHovering ? 0.8 : 0.6,
        }}
      />
      
      {/* Small cursor dot */}
      <div 
        className="cursor-dot" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      />
      
      {/* Stethoscope SVG */}
      <div
        className="stethoscope-cursor"
        style={{
          left: `${position.x + 15}px`,
          top: `${position.y + 15}px`,
          transform: isHovering ? 'rotate(15deg)' : 'rotate(0deg)',
          opacity: isHovering ? 1 : 0.8,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M4.5 12.5L4.5 17C4.5 18.6569 5.84315 20 7.5 20C9.15685 20 10.5 18.6569 10.5 17C10.5 15.3431 9.15685 14 7.5 14C5.84315 14 4.5 15.3431 4.5 17" 
            stroke={isHovering ? "#1f7aff" : "#369eff"} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M19.5 17C19.5 18.6569 18.1569 20 16.5 20C14.8431 20 13.5 18.6569 13.5 17C13.5 15.3431 14.8431 14 16.5 14C18.1569 14 19.5 15.3431 19.5 17Z" 
            stroke={isHovering ? "#1f7aff" : "#369eff"} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M13.6312 13.0307C13.5806 12.4975 13.4124 11.9829 13.1462 11.5183C12.5123 10.4863 11.4276 10 10 10C8.57238 10 7.48775 10.4863 6.85385 11.5183C6.58774 11.983 6.41981 12.4979 6.36912 13.0312C6.30394 13.7078 6.26087 14.3071 6.21781 14.9017C6.12353 16.2229 6.02924 17.5548 5.5 18.5" 
            stroke={isHovering ? "#1f7aff" : "#369eff"} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M18.5 18.5C17.9708 17.5548 17.8765 16.2229 17.7822 14.9017C17.7391 14.3071 17.6961 13.7078 17.6309 13.0312" 
            stroke={isHovering ? "#1f7aff" : "#369eff"} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M7 10V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V10" 
            stroke={isHovering ? "#1f7aff" : "#369eff"} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;
