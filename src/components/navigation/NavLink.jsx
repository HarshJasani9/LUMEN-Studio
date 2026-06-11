import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cn from '@/utils/cn';

export default function NavLink({ to, children, onClick, className, style }) {
  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      className={cn("relative inline-block", className)}
      style={{
        color: 'var(--color-parchment)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-lg)',
        ...style
      }}
    >
      <Link to={to} onClick={onClick} className="block w-full h-full cursor-pointer focus:outline-none">
        {children}
      </Link>
      <motion.span
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 bottom-0 w-full h-[2px]"
        style={{ 
          transformOrigin: 'left',
          backgroundColor: 'var(--color-citrus)'
        }}
      />
    </motion.div>
  );
}
