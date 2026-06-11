import React, { useRef } from 'react';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';
import useReducedMotion from '@/hooks/useReducedMotion';
import cn from '@/utils/cn';
import { SplitText } from 'gsap/SplitText';

export default function SplitTextReveal({
  children,
  type = 'chars',
  stagger = 0.03,
  delay = 0,
  trigger = 'scroll',
  className
}) {
  const textRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (reduceMotion || !textRef.current) return;

    // Use lines class to act as the overflow-hidden parent wrapper for each unit
    const types = type === 'lines' ? 'lines' : `${type}, lines`;
    const split = new SplitText(textRef.current, { 
      type: types, 
      linesClass: 'overflow-hidden' 
    });
    
    const targets = split[type] || split.chars;

    const animConfig = {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      ease: 'lumen',
      stagger,
      delay,
    };

    if (trigger === 'scroll') {
      animConfig.scrollTrigger = {
        trigger: textRef.current,
        start: 'top 85%',
      };
    }

    gsap.fromTo(targets, 
      { y: '110%', opacity: 0 }, 
      animConfig
    );
  }, [type, stagger, delay, trigger, reduceMotion]);

  if (reduceMotion) {
    return <span className={cn("block", className)}>{children}</span>;
  }

  return (
    <span ref={textRef} className={cn("block", className)}>
      {children}
    </span>
  );
}
