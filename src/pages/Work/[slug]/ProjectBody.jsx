import React from 'react';
import FadeUp from '@/components/animation/FadeUp';
import Tag from '@/components/ui/Tag';

export default function ProjectBody({ project }) {
  return (
    <section 
      className="w-full flex flex-col"
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        paddingLeft: 'var(--space-inner)',
        paddingRight: 'var(--space-inner)',
        backgroundColor: 'var(--color-void)',
        gap: 'var(--space-section)'
      }}
    >
      {/* Block 1: Description */}
      <FadeUp delay={0.1}>
        <div className="max-w-[680px] text-left md:ml-12">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              color: 'var(--color-muted)',
              lineHeight: '1.6'
            }}
          >
            {project.description}
          </p>
        </div>
      </FadeUp>

      {/* Block 2: Meta Row */}
      <FadeUp delay={0.3}>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-[var(--color-border)] py-12 md:mx-12">
          {/* Role */}
          <div className="flex flex-col gap-2">
            <span
              className="uppercase"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-muted)',
                letterSpacing: 'var(--tracking-mono)'
              }}
            >
              Role
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-parchment)',
              }}
            >
              Creative Development
            </span>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-2">
            <span
              className="uppercase"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-muted)',
                letterSpacing: 'var(--tracking-mono)'
              }}
            >
              Timeline
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-parchment)',
              }}
            >
              8 Weeks
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-2">
            <span
              className="uppercase"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-muted)',
                letterSpacing: 'var(--tracking-mono)'
              }}
            >
              Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Block 3: Full Bleed Imagery */}
      <FadeUp delay={0.5}>
        <div 
          className="w-full flex items-center justify-center rounded-sm overflow-hidden"
          style={{
            aspectRatio: '16/9',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-muted)',
              letterSpacing: 'var(--tracking-mono)'
            }}
          >
            [ PROJECT IMAGERY ]
          </span>
        </div>
      </FadeUp>
    </section>
  );
}
