import React from 'react';
import PageTransition from '@/components/animation/PageTransition';
import SplitTextReveal from '@/components/animation/SplitTextReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <PageTransition>
      <main className="w-full" style={{ backgroundColor: 'var(--color-void)', minHeight: '100dvh' }}>
        <section 
          className="w-full"
          style={{
            paddingTop: '8rem',
            paddingLeft: 'var(--space-inner)',
            paddingRight: 'var(--space-inner)',
            paddingBottom: 'var(--space-section)'
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16 md:mb-24">
              <EyebrowLabel className="mb-6">GET IN TOUCH</EyebrowLabel>
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
                  Say Hello.
                </SplitTextReveal>
              </h1>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
              {/* Form (2/3 width) -> 8 cols */}
              <div className="md:col-span-8 lg:col-span-7">
                <ContactForm />
              </div>

              {/* Spacer */}
              <div className="hidden lg:block lg:col-span-1" />

              {/* Info (1/3 width) -> 4 cols */}
              <div className="md:col-span-4">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
