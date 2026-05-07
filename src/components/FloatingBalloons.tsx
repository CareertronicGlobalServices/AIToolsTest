import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const balloons = [
  { id: 1, color: '#D4AF37', size: 120, initialX: 10, delay: 0 },
  { id: 2, color: '#FADADD', size: 80, initialX: 80, delay: 2 },
  { id: 3, color: '#F5F5DC', size: 150, initialX: 40, delay: 1 },
  { id: 4, color: '#D4AF37', size: 90, initialX: 70, delay: 3 },
  { id: 5, color: '#FADADD', size: 110, initialX: 20, delay: 4 },
  { id: 6, color: '#ffffff', size: 70, initialX: 55, delay: 5 },
];

export const FloatingBalloons = () => {
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute bottom-0 opacity-20"
          initial={{ y: windowHeight + 200, x: `${balloon.initialX}vw` }}
          animate={{ 
            y: -200,
            x: [`${balloon.initialX}vw`, `${balloon.initialX + 5}vw`, `${balloon.initialX - 5}vw`, `${balloon.initialX}vw`]
          }}
          transition={{
            y: { duration: 15 + balloon.delay * 2, repeat: Infinity, ease: 'linear', delay: balloon.delay },
            x: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <svg width={balloon.size} height={balloon.size * 1.8} viewBox="0 0 100 180" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id={`grad-${balloon.id}`} cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor={balloon.color} stopOpacity="1" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M50,10 C20,10 10,40 10,60 C10,90 40,110 50,120 C60,110 90,90 90,60 C90,40 80,10 50,10 Z"
              fill={`url(#grad-${balloon.id})`}
              filter="url(#glow)"
            />
            <path
              d="M45,120 L50,130 L55,120 Z"
              fill={balloon.color}
            />
            <path
              d="M50,130 Q40,150 55,170"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 2"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
