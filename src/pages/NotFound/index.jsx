import React, { useRef } from 'react';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';
import useReducedMotion from '@/hooks/useReducedMotion';
import Button from '@/components/ui/Button';

export default function NotFound() {
  const glitchRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (!glitchRef.current || reduceMotion) return;

    gsap.timeline({ repeat: -1, repeatDelay: 3 })
      .to(glitchRef.current, { skewX: 10, duration: 0.1, ease: 'none' })
      .to(glitchRef.current, { skewX: -8, duration: 0.1, ease: 'none' })
      .to(glitchRef.current, { skewX: 0, duration: 0.1, ease: 'none' })
      .to(glitchRef.current, { x: 6, duration: 0.05 })
      .to(glitchRef.current, { x: -4, duration: 0.05 })
      .to(glitchRef.current, { x: 0, duration: 0.05 });
  }, [reduceMotion]);

  return (
    <main 
      className="w-full flex flex-col items-center justify-center text-center"
      style={{
        backgroundColor: 'var(--color-void)',
        minHeight: '100dvh',
        padding: 'var(--space-inner)'
      }}
    >
      <div 
        ref={glitchRef}
        className="leading-none m-0 uppercase"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '20vw',
          color: 'var(--color-parchment)'
        }}
      >
        404
      </div>
      <p
        className="mt-8 mb-12"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-lg)',
          color: 'var(--color-muted)'
        }}
      >
        Page not found.
      </p>
      <Button variant="primary" magnetic={true} href="/">
        BACK HOME
      </Button>
    </main>
  );
}
