// AdvancedScrollingText3D.tsx
import React from 'react';
import '../css/ScollingText.css';

interface AdvancedScrollingTextProps {
  words: string[];
  speed?: number;
  direction?: 'up' | 'down';
  tiltAngle?: number;
}

const AdvancedScrollingText3D: React.FC<AdvancedScrollingTextProps> = ({
  words,
  speed = 2,
  direction = 'up',
  tiltAngle = 25
}) => {
  const totalDuration = speed;
  const itemDuration = totalDuration / words.length;

  return (
    <div className="advanced-scrolling-container">
      <div className={`advanced-scrolling-content ${direction}`}>
        {words.map((word, index) => (
          <div 
            key={index}
            className="advanced-word-item"
            style={{
              animationDuration: `${totalDuration}s`,
              animationDelay: `-${index * itemDuration}s`,
              '--tilt-angle': `${tiltAngle}deg`
            } as React.CSSProperties}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedScrollingText3D;