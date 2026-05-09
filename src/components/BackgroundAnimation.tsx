import React, { useMemo } from 'react';
import { motion } from 'motion/react';

export const BackgroundAnimation: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 300 + 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -20,
      color: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-slate-950">
      <div className="absolute inset-0 opacity-20">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full blur-[80px]"
            animate={{
              x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: 0.15,
              willChange: 'transform'
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
    </div>
  );
};
