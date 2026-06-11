import React from 'react';
import SplitTextReveal from '@/components/animation/SplitTextReveal';
import { studio } from '@/data/team';

export default function StudioManifesto() {
  return (
    <section 
      className="w-full"
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        paddingLeft: 'var(--space-inner)',
        paddingRight: 'var(--space-inner)',
        backgroundColor: 'var(--color-void)'
      }}
    >
      <div className="manifesto-wrapper w-full">
        <style>{`
          .manifesto-wrapper div > div:nth-child(5n),
          .manifesto-wrapper div > span:nth-child(5n),
          .manifesto-wrapper > span > span:nth-child(5n),
          .manifesto-wrapper span[style*="overflow"] > div:nth-child(5n),
          .manifesto-wrapper span[style*="overflow"]:nth-child(5n) > span,
          .manifesto-wrapper span[style*="overflow"]:nth-child(5n) {
            color: var(--color-citrus) !important;
            transition: color 0.3s ease;
          }
        `}</style>
        <h2
          className="m-0 uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            color: 'var(--color-parchment)',
            lineHeight: '1.1',
          }}
        >
          <SplitTextReveal type="words" trigger="scroll">
            {studio.manifesto}
          </SplitTextReveal>
        </h2>
      </div>
    </section>
  );
}
