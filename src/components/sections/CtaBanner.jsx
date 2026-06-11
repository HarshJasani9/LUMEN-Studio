import React, { useRef, useState } from 'react';
import gsap from '@/utils/gsapConfig';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGSAP from '@/hooks/useGSAP';
import useReducedMotion from '@/hooks/useReducedMotion';
import Button from '@/components/ui/Button';
import cn from '@/utils/cn';

export default function CtaBanner({ heading, subtext, buttonLabel, buttonHref }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [isCitrus, setIsCitrus] = useState(false);

  useGSAP(() => {
    if (!sectionRef.current) return;

    if (reduceMotion) {
      // No tween — just use ScrollTrigger to toggle state instantly
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 50%',
        onEnter: () => {
          sectionRef.current.style.backgroundColor = 'var(--color-citrus)';
          setIsCitrus(true);
        },
        onLeaveBack: () => {
          sectionRef.current.style.backgroundColor = 'var(--color-surface)';
          setIsCitrus(false);
        },
      });
      return;
    }

    gsap.to(sectionRef.current, {
      backgroundColor: 'var(--color-citrus)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'top 30%',
        scrub: true,
        onUpdate: (self) => {
          setIsCitrus(self.progress > 0.5);
        },
      },
    });
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-32 px-6 md:px-12 flex flex-col items-center text-center"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <h2
        className="uppercase mb-6 transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-2xl)',
          color: isCitrus ? 'var(--color-void)' : 'var(--color-parchment)',
          letterSpacing: 'var(--tracking-display)',
        }}
      >
        {heading}
      </h2>
      <p
        className="max-w-2xl mb-10 transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          color: isCitrus ? 'var(--color-void)' : 'var(--color-muted)',
        }}
      >
        {subtext}
      </p>

      <Button
        href={buttonHref}
        variant="primary"
        magnetic
        className={cn(
          "transition-colors duration-300",
          isCitrus && "!bg-[var(--color-void)] !text-[var(--color-citrus)] hover:!bg-[var(--color-border)]"
        )}
      >
        {buttonLabel}
      </Button>
    </section>
  );
}
