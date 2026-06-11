import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';

export default function ProjectHero({ project }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(
      containerRef.current, 
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'lumen' }
    );
  }, [project.id]);

  return (
    <motion.div
      ref={containerRef}
      layoutId={project.id}
      className="w-full relative overflow-hidden flex flex-col justify-end"
      style={{
        height: '100dvh',
        backgroundColor: project.color,
        padding: 'var(--space-inner)',
      }}
    >
      <div 
        className="absolute top-[120px] md:top-8 right-6 md:right-12"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-muted)',
        }}
      >
        [ {project.year} ]
      </div>

      <div className="relative z-10 flex flex-col gap-2 max-w-5xl">
        <h1
          className="uppercase m-0 leading-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            color: 'var(--color-parchment)',
            letterSpacing: 'var(--tracking-display)',
          }}
        >
          {project.title}
        </h1>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-lg)',
            color: 'var(--color-muted)',
          }}
        >
          — {project.client}
        </div>
      </div>
    </motion.div>
  );
}
