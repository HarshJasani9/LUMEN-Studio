import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUIStore } from '@/store/uiStore';
import Tag from '@/components/ui/Tag';
import FadeUp from '@/components/animation/FadeUp';
import useReducedMotion from '@/hooks/useReducedMotion';
import cn from '@/utils/cn';

const WorkCard = forwardRef(({ project, index, className }, ref) => {
  const { setCursor } = useUIStore();
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className={cn("w-full h-full", className)}>
      <FadeUp delay={index * 0.07} className="w-full h-full">
        <motion.div
          layoutId={project.id}
          className="w-full relative block overflow-hidden rounded-sm"
          style={{
            aspectRatio: '4/3',
            backgroundColor: project.color,
          }}
          whileHover={{ scale: reduceMotion ? 1 : 1.03 }}
          transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to={`/work/${project.slug}`}
            className="block w-full h-full absolute inset-0 focus:outline-none"
            onMouseEnter={() => setCursor('hover', 'VIEW')}
            onMouseLeave={() => setCursor('default', '')}
          >
            {/* Top-right year */}
            <div 
              className="absolute top-6 right-6"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-muted)',
              }}
            >
              {project.year}
            </div>

            {/* Bottom-left content */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
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
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Tag 
                    key={tag} 
                    className="bg-[var(--color-void)] opacity-80 border-transparent"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      </FadeUp>
    </div>
  );
});

WorkCard.displayName = 'WorkCard';
export default WorkCard;
