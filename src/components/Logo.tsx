
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  return (
    <div className={`relative inline-block font-display font-bold ${sizeClasses[size]} ${className}`}>
      {/* Base text layer */}
      <div className="relative z-10 text-white">
        OILTAC
      </div>
      
      {/* Layered stripe effects */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1 - Dark copper stripes */}
        <div 
          className="absolute inset-0 text-oiltac-copper opacity-80"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 2px,
              currentColor 2px,
              currentColor 4px
            )`
          }}
        >
          <div className="opacity-60">OILTAC</div>
        </div>
        
        {/* Layer 2 - Forest green stripes */}
        <div 
          className="absolute inset-0 text-oiltac-forest opacity-60"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 3px,
              currentColor 3px,
              currentColor 6px
            )`
          }}
        >
          <div className="opacity-70">OILTAC</div>
        </div>
        
        {/* Layer 3 - Earth tone stripes */}
        <div 
          className="absolute inset-0 text-oiltac-earth opacity-50"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 4px,
              currentColor 4px,
              currentColor 8px
            )`
          }}
        >
          <div className="opacity-50">OILTAC</div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
