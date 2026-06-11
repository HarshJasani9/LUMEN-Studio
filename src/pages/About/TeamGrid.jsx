import React from 'react';
import { motion } from 'framer-motion';
import FadeUp from '@/components/animation/FadeUp';
import { members } from '@/data/team';

export default function TeamGrid() {
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {members.map((member, index) => (
            <FadeUp key={member.id} delay={index * 0.1}>
              <motion.div
                className="w-full flex flex-col gap-6 group"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Square placeholder */}
                <div 
                  className="w-full rounded-sm overflow-hidden relative"
                  style={{ aspectRatio: '1/1', backgroundColor: member.color }}
                >
                  <motion.div
                    className="absolute inset-0 p-8 flex items-center justify-center text-center"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-void) 88%, transparent)' }}
                    variants={{
                      rest: { opacity: 0, y: 8 },
                      hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-parchment)',
                        lineHeight: '1.6'
                      }}
                    >
                      {member.bio}
                    </p>
                  </motion.div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3
                    className="m-0 uppercase leading-none"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-xl)',
                      color: 'var(--color-parchment)',
                      letterSpacing: 'var(--tracking-display)'
                    }}
                  >
                    {member.name}
                  </h3>
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-muted)',
                      letterSpacing: 'var(--tracking-mono)'
                    }}
                  >
                    {member.role}
                  </span>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
