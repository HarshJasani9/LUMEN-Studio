import React from 'react';
import { motion } from 'framer-motion';
import useReducedMotion from '@/hooks/useReducedMotion';
import cn from '@/utils/cn';

export default function FadeUp({ children, delay = 0, duration = 0.5, className }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
