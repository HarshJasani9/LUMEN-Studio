import React from 'react';
import cn from '@/utils/cn';

export default function EyebrowLabel({ children, className }) {
  return (
    <span
      className={cn("inline-block uppercase", className)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-mono)',
        color: 'var(--color-citrus)',
      }}
    >
      {children}
    </span>
  );
}
