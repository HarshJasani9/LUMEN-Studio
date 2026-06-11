import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Flip } from 'gsap/Flip';
import useGSAP from '@/hooks/useGSAP';
import { projects } from '@/data/projects';
import WorkCard from './WorkCard';

const FILTERS = ['All', 'Branding', 'Web', 'Motion', 'Campaign'];

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const cardsRef = useRef({});
  const flipStateRef = useRef(null);

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;

    // Capture the state of all currently rendered cards before React updates the DOM
    const elements = Object.values(cardsRef.current).filter(Boolean);
    flipStateRef.current = Flip.getState(elements);

    // Trigger re-render with new filter
    setActiveFilter(filter);
  };

  // Safe GSAP execution using the custom hook, triggers on state update
  useGSAP(() => {
    if (flipStateRef.current) {
      Flip.from(flipStateRef.current, {
        duration: 0.5,
        ease: 'lumen',
        stagger: 0.04,
      });
      flipStateRef.current = null;
    }
  }, [activeFilter]);

  return (
    <section className="w-full relative pb-32">
      {/* Sticky Filter Bar */}
      <div 
        className="sticky top-[80px] z-40 w-full py-4 px-6 md:px-12 flex items-center overflow-x-auto no-scrollbar"
        style={{
          backgroundColor: 'var(--color-void)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="flex gap-8 min-w-max">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className="relative pb-2 focus:outline-none transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  letterSpacing: 'var(--tracking-mono)',
                  color: isActive ? 'var(--color-citrus)' : 'var(--color-muted)',
                }}
              >
                {filter}
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="filter-indicator"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px]"
                    style={{ backgroundColor: 'var(--color-citrus)' }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isVisible = activeFilter === 'All' || project.tags.includes(activeFilter);
            return (
              <WorkCard
                key={project.id}
                project={project}
                index={index}
                ref={el => cardsRef.current[project.id] = el}
                className={isVisible ? "block" : "hidden"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
