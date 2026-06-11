import React from 'react';
import PageTransition from '@/components/animation/PageTransition';
import SplitTextReveal from '@/components/animation/SplitTextReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Divider from '@/components/ui/Divider';
import StudioManifesto from './StudioManifesto';
import TeamGrid from './TeamGrid';
import Timeline from './Timeline';

export default function About() {
  return (
    <PageTransition>
      <main className="w-full" style={{ backgroundColor: 'var(--color-void)', minHeight: '100dvh' }}>
        
        {/* Header Section */}
        <header 
          className="w-full"
          style={{
            paddingTop: '8rem',
            paddingLeft: 'var(--space-inner)',
            paddingRight: 'var(--space-inner)',
            paddingBottom: 'var(--space-section)'
          }}
        >
          <div className="max-w-7xl mx-auto">
            <EyebrowLabel className="mb-6">OUR STORY</EyebrowLabel>
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
                About Us
              </SplitTextReveal>
            </h1>
          </div>
        </header>

        <StudioManifesto />
        <Divider />
        <TeamGrid />
        <Divider />
        <Timeline />

      </main>
    </PageTransition>
  );
}
