import React, { useRef } from 'react';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';
import cn from '@/utils/cn';

export default function MarqueeBand({ items = [], speed = 20, className }) {
  const trackRef = useRef(null);
  const tween = useRef(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    
    tween.current = gsap.to(trackRef.current, {
      x: '-50%',
      duration: speed,
      repeat: -1,
      ease: 'none',
    });
  }, [speed]);

  const handleMouseEnter = () => {
    if (tween.current) {
      gsap.to(tween.current, { timeScale: 0.3, duration: 0.4 });
    }
  };

  const handleMouseLeave = () => {
    if (tween.current) {
      gsap.to(tween.current, { timeScale: 1, duration: 0.4 });
    }
  };

  const displayItems = [...items, ...items];

  return (
    <div
      className={cn("w-full overflow-hidden whitespace-nowrap flex items-center py-4", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={trackRef} className="inline-flex items-center">
        {displayItems.map((item, index) => (
          <React.Fragment key={index}>
            <span
              className="uppercase inline-block"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-muted)',
                letterSpacing: 'var(--tracking-mono)',
              }}
            >
              {item}
            </span>
            <span
              className="mx-6 inline-block"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-muted)',
              }}
            >
              ·
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
