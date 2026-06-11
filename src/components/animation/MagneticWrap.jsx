import React from 'react';
import useMagnet from '@/hooks/useMagnet';
import useMediaQuery from '@/hooks/useMediaQuery';
import useReducedMotion from '@/hooks/useReducedMotion';
import cn from '@/utils/cn';

export default function MagneticWrap({ children, strength = 0.4, className }) {
  const isTouch = useMediaQuery('(pointer: coarse)');
  const reduceMotion = useReducedMotion();
  
  const { ref: magnetRef, onMouseMove, onMouseLeave } = useMagnet(strength);

  if (isTouch || reduceMotion) {
    return <div className={cn("inline-block", className)}>{children}</div>;
  }

  return (
    <div
      ref={magnetRef}
      className={cn("inline-block", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
