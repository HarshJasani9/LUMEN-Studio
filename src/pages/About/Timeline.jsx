import React, { useRef } from 'react';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';
import useMediaQuery from '@/hooks/useMediaQuery';
import { studio } from '@/data/team';

export default function Timeline() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const dotsRef = useRef([]);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  useGSAP(() => {
    if (!containerRef.current) return;

    if (isMobile) {
      dotsRef.current.forEach((dot) => {
        if (!dot) return;
        gsap.fromTo(dot,
          { opacity: 0, scale: 0 },
          {
            opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
      return;
    }

    const track = trackRef.current;
    if (!track) return;
    
    // Horizontal scroll
    const horizontalTween = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: '+=300%',
        invalidateOnRefresh: true,
      }
    });

    // Individual dot triggers within containerAnimation
    dotsRef.current.forEach((dot) => {
      if (!dot) return;
      gsap.fromTo(dot, 
        { opacity: 0, scale: 0 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.5,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: dot,
            containerAnimation: horizontalTween,
            start: 'left center', // When left of dot hits center of viewport
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

  }, [isMobile]);

  // Handle Mobile Vertical Timeline
  if (isMobile) {
    return (
      <section 
        ref={containerRef}
        className="w-full flex flex-col relative py-24 px-6 md:px-12"
        style={{ backgroundColor: 'var(--color-void)' }}
      >
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-12 top-24 bottom-24 w-[1px] bg-[var(--color-border)]" />
        
        <div className="flex flex-col gap-16">
          {studio.history.map((event, index) => (
            <div key={index} className="relative pl-12 flex flex-col gap-4">
              {/* Dot */}
              <div 
                ref={el => dotsRef.current[index] = el}
                className="absolute left-[-2.5px] top-4 w-[6px] h-[6px] rounded-full"
                style={{ backgroundColor: 'var(--color-citrus)' }}
              />
              <div
                className="uppercase leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  color: 'var(--color-parchment)'
                }}
              >
                {event.year}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-muted)'
                }}
              >
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop Horizontal Timeline
  return (
    <section 
      ref={containerRef} 
      className="w-full overflow-hidden"
      style={{ backgroundColor: 'var(--color-void)', height: '100dvh' }}
    >
      <div 
        ref={trackRef} 
        className="flex h-full w-max items-center relative"
      >
        {/* Horizontal Line across track */}
        <div 
          className="absolute left-0 right-0 h-[1px] top-1/2 -translate-y-1/2"
          style={{ backgroundColor: 'var(--color-border)' }}
        />

        {studio.history.map((event, index) => (
          <div 
            key={index} 
            className="w-screen h-full flex flex-col justify-center px-24 shrink-0 relative"
          >
            {/* Event Dot */}
            <div 
              ref={el => dotsRef.current[index] = el}
              className="absolute left-24 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full z-10"
              style={{ backgroundColor: 'var(--color-citrus)', opacity: 0 }}
            />
            
            {/* Content positioned above/below the line */}
            <div className={`flex flex-col gap-6 max-w-lg ${index % 2 === 0 ? 'mb-48' : 'mt-48'}`}>
              <div
                className="uppercase leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  color: 'var(--color-parchment)'
                }}
              >
                {event.year}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-muted)',
                  lineHeight: '1.6'
                }}
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
