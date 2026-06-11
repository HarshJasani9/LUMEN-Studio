import React from 'react';
import { useUIStore } from '@/store/uiStore';
import useScrollProgress from '@/hooks/useScrollProgress';

export default function Navbar() {
  const { navOpen, toggleNav } = useUIStore();
  const progress = useScrollProgress();

  // useScrollProgress continually triggers re-renders on scroll, 
  // allowing us to perform this synchronous check naturally.
  const isScrolled = typeof window !== 'undefined' && window.scrollY > 80;

  return (
    <header
      className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-6 md:px-12"
      style={{
        backgroundColor: isScrolled ? 'var(--color-surface)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'background-color var(--duration-base), border-color var(--duration-base)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-xl)',
          color: 'var(--color-parchment)',
          letterSpacing: 'var(--tracking-display)',
        }}
      >
        LUMEN
      </div>

      <button
        onClick={toggleNav}
        className="relative flex flex-col justify-center items-center w-10 h-10 focus:outline-none cursor-pointer"
        aria-label="Toggle Navigation"
        aria-expanded={navOpen}
      >
        {/* Top line */}
        <span
          className="block w-8 h-[2px] rounded-full absolute"
          style={{
            backgroundColor: 'var(--color-parchment)',
            transition: 'transform var(--duration-base) var(--ease-in-out), opacity var(--duration-base) var(--ease-in-out)',
            transform: navOpen ? 'translateY(0) rotate(45deg)' : 'translateY(-8px) rotate(0)',
          }}
        />
        {/* Middle line */}
        <span
          className="block w-8 h-[2px] rounded-full absolute"
          style={{
            backgroundColor: 'var(--color-parchment)',
            transition: 'opacity var(--duration-base) var(--ease-in-out)',
            opacity: navOpen ? 0 : 1,
          }}
        />
        {/* Bottom line */}
        <span
          className="block w-8 h-[2px] rounded-full absolute"
          style={{
            backgroundColor: 'var(--color-parchment)',
            transition: 'transform var(--duration-base) var(--ease-in-out), opacity var(--duration-base) var(--ease-in-out)',
            transform: navOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(8px) rotate(0)',
          }}
        />
      </button>
    </header>
  );
}
