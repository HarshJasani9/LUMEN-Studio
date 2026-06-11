import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectNav({ prevProject, nextProject }) {
  return (
    <nav 
      className="w-full flex flex-col md:flex-row border-t border-[var(--color-border)]"
      style={{
        backgroundColor: 'var(--color-void)',
      }}
    >
      {/* Previous */}
      <div className="flex-1 flex border-b md:border-b-0 md:border-r border-[var(--color-border)] min-h-[160px]">
        {prevProject ? (
          <motion.div
            className="w-full h-full"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <Link 
              to={`/work/${prevProject.slug}`}
              className="flex items-center justify-start w-full h-full p-8 md:p-12 focus:outline-none relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 z-0"
                style={{ backgroundColor: 'var(--color-surface)' }}
                variants={{
                  rest: { y: '100%' },
                  hover: { y: '0%' }
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <span 
                className="relative z-10 uppercase transition-colors"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-parchment)',
                  letterSpacing: 'var(--tracking-display)'
                }}
              >
                ← {prevProject.title}
              </span>
            </Link>
          </motion.div>
        ) : (
          <div className="w-full h-full p-8 md:p-12" />
        )}
      </div>

      {/* Next */}
      <div className="flex-1 flex min-h-[160px]">
        {nextProject ? (
          <motion.div
            className="w-full h-full"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <Link 
              to={`/work/${nextProject.slug}`}
              className="flex items-center justify-end w-full h-full p-8 md:p-12 focus:outline-none relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 z-0"
                style={{ backgroundColor: 'var(--color-surface)' }}
                variants={{
                  rest: { y: '100%' },
                  hover: { y: '0%' }
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <span 
                className="relative z-10 uppercase transition-colors"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-parchment)',
                  letterSpacing: 'var(--tracking-display)'
                }}
              >
                {nextProject.title} →
              </span>
            </Link>
          </motion.div>
        ) : (
          <div className="w-full h-full p-8 md:p-12" />
        )}
      </div>
    </nav>
  );
}
