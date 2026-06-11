import React from 'react';
import PageTransition from '@/components/animation/PageTransition';
import SplitTextReveal from '@/components/animation/SplitTextReveal';
import FadeUp from '@/components/animation/FadeUp';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <PageTransition>
      <section
        className="relative flex flex-col justify-center items-center text-center w-full"
        style={{
          height: '100dvh',
          backgroundColor: 'var(--color-void)',
          padding: 'var(--space-inner)',
        }}
      >
        <h1
          className="uppercase m-0 leading-none whitespace-pre-wrap"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            color: 'var(--color-parchment)',
            letterSpacing: 'var(--tracking-display)',
          }}
        >
          <SplitTextReveal type="chars" trigger="mount" stagger={0.025} delay={0.1}>
            {"WE MAKE THE\nINVISIBLE, VISIBLE."}
          </SplitTextReveal>
        </h1>
        
        <div className="mt-8">
          <FadeUp delay={0.7}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-lg)',
                color: 'var(--color-muted)',
              }}
            >
              Creative technology for forward-thinking brands.
            </p>
          </FadeUp>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <FadeUp delay={1.1}>
            <div className="flex flex-col items-center gap-2">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-muted)',
                  letterSpacing: 'var(--tracking-mono)',
                }}
              >
                SCROLL
              </span>
              <ArrowDown 
                size={16} 
                className="animate-bounce" 
                style={{ color: 'var(--color-muted)' }} 
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  );
}
