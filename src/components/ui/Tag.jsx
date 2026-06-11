import React from 'react';
import cn from '@/utils/cn';

export default function Tag({ children, className }) {
  return (
    <span
      className={cn("inline-flex items-center px-[0.6rem] py-[0.25rem] rounded-none", className)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-mono)',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-muted)'
      }}
    >
      {children}
    </span>
  );
}
