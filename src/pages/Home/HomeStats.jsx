import React, { useRef, useState } from 'react';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';
import useReducedMotion from '@/hooks/useReducedMotion';

const statsData = [
  { value: 47, label: 'Projects Delivered' },
  { value: 12, label: 'Industry Awards' },
  { value: 8, label: 'Countries' }
];

function StatItem({ stat }) {
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(reduceMotion ? stat.value : 0);
  const containerRef = useRef(null);

  useGSAP(() => {
    if (reduceMotion || !containerRef.current) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: stat.value,
      duration: 1.5,
      ease: 'power2.out',
      snap: { val: 1 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true
      },
      onUpdate: () => {
        setDisplayValue(Math.round(obj.val));
      }
    });
  }, [stat.value, reduceMotion]);

  return (
    <div ref={containerRef} className="flex flex-col items-center md:items-start flex-1 py-8 md:py-0 px-0 md:px-12 first:pl-0 last:pr-0">
      <div 
        className="leading-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-hero)',
          color: 'var(--color-parchment)'
        }}
      >
        {displayValue}
      </div>
      <div 
        className="mt-4 uppercase text-center md:text-left"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-muted)',
          letterSpacing: 'var(--tracking-mono)'
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function HomeStats() {
  return (
    <section 
      className="w-full"
      style={{
        backgroundColor: 'var(--color-void)',
        padding: 'var(--space-section) var(--space-inner)'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-stretch">
        {statsData.map((stat, idx) => (
          <React.Fragment key={stat.label}>
            {idx > 0 && (
              <div className="hidden md:block w-[1px] self-stretch" style={{ backgroundColor: 'var(--color-border)' }} />
            )}
            {idx > 0 && (
              <div className="block md:hidden h-[1px] w-full my-8" style={{ backgroundColor: 'var(--color-border)' }} />
            )}
            <StatItem stat={stat} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
