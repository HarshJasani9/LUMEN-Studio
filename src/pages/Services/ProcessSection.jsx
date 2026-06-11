import React, { useRef } from 'react';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';
import useMediaQuery from '@/hooks/useMediaQuery';
import useReducedMotion from '@/hooks/useReducedMotion';
import EyebrowLabel from '@/components/ui/EyebrowLabel';

const phases = [
  { num: '01', title: 'DISCOVER', desc: 'Deep dives into your brand, audience, and market context.' },
  { num: '02', title: 'DEFINE', desc: 'Articulating strategy, creative direction, and project scope.' },
  { num: '03', title: 'DESIGN', desc: 'Iterative visual exploration and prototype refinement.' },
  { num: '04', title: 'BUILD', desc: 'Engineering the final product with craft and precision.' },
  { num: '05', title: 'SHIP', desc: 'Launch, QA, and handoff with comprehensive documentation.' }
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (isMobile || reduceMotion || !containerRef.current || !trackRef.current) return;

    const track = trackRef.current;
    
    // Horizontal scroll
    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: '+=500%',
        invalidateOnRefresh: true,
      }
    });

    // Progress bar fill
    if (progressRef.current) {
      gsap.fromTo(progressRef.current, 
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=500%',
            scrub: true,
          }
        }
      );
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <section 
        className="w-full flex flex-col py-24 px-6 md:px-12 gap-16 relative"
        style={{ backgroundColor: 'var(--color-void)' }}
      >
        <EyebrowLabel>OUR PROCESS</EyebrowLabel>
        {phases.map((phase) => (
          <div key={phase.num} className="flex flex-col gap-4">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-citrus)',
              }}
            >
              [ PHASE {phase.num} ]
            </span>
            <h3
              className="uppercase leading-none m-0"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                color: 'var(--color-parchment)'
              }}
            >
              {phase.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-muted)'
              }}
            >
              {phase.desc}
            </p>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="w-full overflow-hidden relative"
      style={{ backgroundColor: 'var(--color-void)', height: '100dvh' }}
    >
      <div className="absolute top-24 left-12 md:left-24 z-10">
        <EyebrowLabel>OUR PROCESS</EyebrowLabel>
      </div>

      <div 
        ref={trackRef} 
        className="flex h-full w-max items-center"
      >
        {phases.map((phase) => (
          <div 
            key={phase.num} 
            className="w-screen h-full flex flex-col justify-center px-12 md:px-24 shrink-0"
          >
            <div className="max-w-2xl flex flex-col gap-6">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-citrus)',
                  letterSpacing: 'var(--tracking-mono)'
                }}
              >
                [ PHASE {phase.num} ]
              </span>
              <h2
                className="uppercase leading-none m-0"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  color: 'var(--color-parchment)',
                  letterSpacing: 'var(--tracking-display)'
                }}
              >
                {phase.title}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-muted)',
                  lineHeight: '1.6'
                }}
              >
                {phase.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar Container */}
      <div 
        className="absolute bottom-12 left-12 right-12 h-[2px]"
        style={{ backgroundColor: 'var(--color-border)' }}
      >
        {/* Fill */}
        <div 
          ref={progressRef}
          className="h-full w-full origin-left"
          style={{ backgroundColor: 'var(--color-citrus)', transform: 'scaleX(0)' }}
        />
      </div>
    </section>
  );
}
