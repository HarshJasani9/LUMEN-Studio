import React from 'react';
import PageTransition from '@/components/animation/PageTransition';
import SplitTextReveal from '@/components/animation/SplitTextReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import WorkGrid from './WorkGrid';
import { projects } from '@/data/projects';

export default function Work() {
  return (
    <PageTransition>
      <main 
        className="w-full"
        style={{
          backgroundColor: 'var(--color-void)',
          minHeight: '100dvh',
        }}
      >
        <section 
          className="w-full"
          style={{
            paddingTop: '8rem',
            paddingBottom: 'var(--space-section)'
          }}
        >
          {/* Header Section */}
          <header 
            style={{
              paddingLeft: 'var(--space-inner)',
              paddingRight: 'var(--space-inner)',
            }}
          >
            <EyebrowLabel className="mb-6">OUR WORK</EyebrowLabel>
            
            <div className="flex items-baseline gap-4 mb-12">
              <h1
                className="uppercase m-0 leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-hero)',
                  color: 'var(--color-parchment)',
                  letterSpacing: 'var(--tracking-display)'
                }}
              >
                <SplitTextReveal type="chars" trigger="mount">
                  Projects
                </SplitTextReveal>
              </h1>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-muted)',
                }}
              >
                ({projects.length})
              </span>
            </div>
          </header>
          
          {/* Grid Section */}
          <WorkGrid />
        </section>
      </main>
    </PageTransition>
  );
}
