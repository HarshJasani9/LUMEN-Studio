import React, { useRef } from 'react';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';
import useReducedMotion from '@/hooks/useReducedMotion';
import cn from '@/utils/cn';

export default function ParallaxLayer({ children, speed = 0.3, className }) {
  const layerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (reduceMotion || !layerRef.current) return;

    gsap.to(layerRef.current, {
      y: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: layerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, [speed, reduceMotion]);

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <div ref={layerRef} className={cn(className)}>
      {children}
    </div>
  );
}
