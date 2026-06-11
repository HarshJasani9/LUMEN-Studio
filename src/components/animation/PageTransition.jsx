import React from 'react';
import { motion } from 'framer-motion';
import useReducedMotion from '@/hooks/useReducedMotion';

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className="w-full h-full">{children}</div>;
  }

  return (
    <motion.div
      className="w-full h-full"
      variants={{
        initial: { opacity: 0, y: 24 },
        enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
        exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: [0.87, 0, 0.13, 1] } }
      }}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
