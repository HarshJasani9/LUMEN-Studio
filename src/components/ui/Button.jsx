import React from 'react';
import { Link } from 'react-router-dom';
import { useUIStore } from '@/store/uiStore';
import useMagnet from '@/hooks/useMagnet';
import cn from '@/utils/cn';

export default function Button({ 
  variant = 'primary', 
  magnetic = false, 
  href, 
  onClick, 
  type = 'button',
  children, 
  className 
}) {
  const { setCursor } = useUIStore();
  
  const { ref: magnetRef, onMouseMove, onMouseLeave: magnetMouseLeave } = useMagnet(0.4);

  const handleMouseEnter = () => {
    setCursor('hover', 'CLICK');
  };

  const handleMouseLeave = (e) => {
    setCursor('default', '');
    if (magnetic) {
      magnetMouseLeave(e);
    }
  };

  const handleMouseMove = (e) => {
    if (magnetic) {
      onMouseMove(e);
    }
  };

  const baseStyles = {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-sm)',
    letterSpacing: 'var(--tracking-mono)',
  };

  const variantClasses = {
    primary: "bg-[var(--color-citrus)] text-[var(--color-void)] hover:bg-[var(--color-citrus-dim)] border border-transparent",
    outline: "bg-transparent border border-[var(--color-parchment)] text-[var(--color-parchment)] hover:bg-[var(--color-parchment)] hover:text-[var(--color-void)]",
    ghost: "bg-transparent border-none text-[var(--color-muted)] hover:text-[var(--color-parchment)]",
  };

  const baseClasses = "inline-flex items-center justify-center px-6 py-3 transition-colors duration-300 rounded-none cursor-pointer focus:outline-none";

  // Use Link for internal routes, <a> for external, <button> otherwise
  const isInternal = href && href.startsWith('/');
  const isExternal = href && !href.startsWith('/');

  const sharedProps = {
    ref: magnetRef,
    className: cn(baseClasses, variantClasses[variant], className),
    style: baseStyles,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseMove: handleMouseMove,
  };

  if (isInternal) {
    return <Link to={href} {...sharedProps}>{children}</Link>;
  }

  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>{children}</a>;
  }

  return (
    <button type={type} onClick={onClick} {...sharedProps}>
      {children}
    </button>
  );
}
