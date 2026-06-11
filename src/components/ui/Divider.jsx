import React, { useRef } from 'react';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';
import useReducedMotion from '@/hooks/useReducedMotion';
import cn from '@/utils/cn';

export default function Divider({ className }) {
  const lineRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (reduceMotion) return;
    gsap.fromTo(lineRef.current,
      { width: '0%' },
      {
        width: '100%',
        ease: 'power3.out',
        duration: 1,
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 90%',
          once: true
        }
      }
    );
  }, []);

  return (
    <hr
      ref={lineRef}
      className={cn("border-none m-0", className)}
      style={{
        height: '1px',
        backgroundColor: 'var(--color-border)',
        width: '100%',
      }}
    />
  );
}
