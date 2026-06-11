import React, { useRef } from 'react';
import gsap from '@/utils/gsapConfig';
import useGSAP from '@/hooks/useGSAP';
import useMediaQuery from '@/hooks/useMediaQuery';
import EyebrowLabel from '@/components/ui/EyebrowLabel';

const services = [
  {
    num: '01',
    title: 'STRATEGY',
    desc: 'We find clarity in complexity. Brand architecture, audience mapping, and positioning.'
  },
  {
    num: '02',
    title: 'DESIGN',
    desc: 'Every pixel earns its place. Visual identity, UI/UX, and design systems.'
  },
  {
    num: '03',
    title: 'MOTION',
    desc: 'We give ideas a heartbeat. Animation, film, and interactive experiences.'
  },
  {
    num: '04',
    title: 'CODE',
    desc: 'Technology as craft. Web apps, creative dev, and immersive digital products.'
  }
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  useGSAP(() => {
    if (isMobile || !containerRef.current || !trackRef.current) return;

    const track = trackRef.current;
    
    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: '+=400%',
        invalidateOnRefresh: true,
      }
    });
  }, [isMobile]);

  if (isMobile) {
    return (
      <section 
        className="w-full flex flex-col"
        style={{
          backgroundColor: 'var(--color-void)',
          paddingTop: 'var(--space-section)',
          paddingBottom: 'var(--space-section)',
          gap: 'var(--space-section)'
        }}
      >
        {services.map((service) => (
          <div key={service.num} className="w-full px-8 flex flex-col justify-center">
            <EyebrowLabel className="mb-4">{service.num}</EyebrowLabel>
            <h2
              className="mb-6 uppercase leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                color: 'var(--color-parchment)',
                letterSpacing: 'var(--tracking-display)',
              }}
            >
              {service.title}
            </h2>
            <p
              className="max-w-[480px]"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-muted)',
              }}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="w-full overflow-hidden"
      style={{ backgroundColor: 'var(--color-void)', height: '100dvh' }}
    >
      <div 
        ref={trackRef} 
        className="flex h-full w-max"
      >
        {services.map((service) => (
          <div 
            key={service.num} 
            className="w-screen h-full flex flex-col justify-center px-12 md:px-32 shrink-0"
          >
            <div className="max-w-2xl">
              <EyebrowLabel className="mb-6">{service.num}</EyebrowLabel>
              <h2
                className="mb-8 uppercase leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  color: 'var(--color-parchment)',
                  letterSpacing: 'var(--tracking-display)',
                }}
              >
                {service.title}
              </h2>
              <p
                className="max-w-[480px]"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-muted)',
                  lineHeight: '1.6',
                }}
              >
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
