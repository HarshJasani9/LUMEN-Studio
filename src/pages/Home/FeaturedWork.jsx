import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUIStore } from '@/store/uiStore';
import { projects } from '@/data/projects';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Tag from '@/components/ui/Tag';
import FadeUp from '@/components/animation/FadeUp';
import useReducedMotion from '@/hooks/useReducedMotion';
import cn from '@/utils/cn';

const getGridClasses = (index) => {
  switch (index) {
    case 0: return "md:col-span-2 md:row-span-1";
    case 1: return "md:col-span-1 md:row-span-1";
    case 2: return "md:col-span-1 md:row-span-2";
    case 3: return "md:col-span-1 md:row-span-1";
    case 4: return "md:col-span-1 md:row-span-1";
    default: return "";
  }
};

export default function FeaturedWork() {
  const { setCursor } = useUIStore();
  const reduceMotion = useReducedMotion();
  const featuredProjects = projects.slice(0, 5);

  return (
    <section 
      className="w-full"
      style={{
        backgroundColor: 'var(--color-void)',
        padding: 'var(--space-section) var(--space-inner)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <EyebrowLabel className="mb-4">SELECTED WORK</EyebrowLabel>
          <h2
            className="uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              color: 'var(--color-parchment)',
              letterSpacing: 'var(--tracking-display)'
            }}
          >
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] md:auto-rows-[400px] gap-6">
          {featuredProjects.map((project, index) => (
            <FadeUp 
              key={project.id} 
              delay={index * 0.1}
              className={cn("w-full h-full block", getGridClasses(index))}
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                className="w-full h-full block relative"
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="block w-full h-full relative overflow-hidden"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                  onMouseEnter={() => setCursor('hover', 'VIEW')}
                  onMouseLeave={() => setCursor('default', '')}
                >
                  {/* Colored Square Placeholder */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-80"
                    style={{ backgroundColor: project.color }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <h3
                      className="uppercase leading-none m-0"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-xl)',
                        color: 'var(--color-parchment)',
                        letterSpacing: 'var(--tracking-display)'
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-citrus) 90%, transparent)'
                    }}
                    variants={{
                      initial: { y: reduceMotion ? '0%' : '100%', opacity: 0 },
                      hover: { y: '0%', opacity: 1 }
                    }}
                    transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-void)',
                        letterSpacing: 'var(--tracking-mono)'
                      }}
                    >
                      VIEW PROJECT →
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
