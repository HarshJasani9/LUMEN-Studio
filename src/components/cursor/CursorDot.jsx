import { useEffect, useRef } from 'react';
import { useUIStore } from '@/store/uiStore';
import gsap from '@/utils/gsapConfig';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function CursorDot() {
  const isTouch = useMediaQuery('(pointer: coarse)');
  const cursorRef = useRef(null);
  const { cursorVariant, cursorLabel } = useUIStore();

  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    if (isTouch || !cursorRef.current) return;
    
    // Set initial centering so the top-left coordinate maps to the center of the circle
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    xTo.current = gsap.quickTo(cursorRef.current, 'x', { duration: 0.15, ease: 'power3' });
    yTo.current = gsap.quickTo(cursorRef.current, 'y', { duration: 0.15, ease: 'power3' });

    const onMouseMove = (e) => {
      xTo.current(e.clientX);
      yTo.current(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isTouch]);

  useEffect(() => {
    if (isTouch || !cursorRef.current) return;

    let size = 12;
    let backgroundColor = 'var(--color-citrus)';
    let borderColor = 'transparent';
    let borderWidth = '0px';

    if (cursorVariant !== 'default') {
      size = cursorVariant === 'hover' ? 60 : 80;
      backgroundColor = 'var(--color-void)';
      borderColor = 'var(--color-citrus)';
      borderWidth = '1px';
    }

    gsap.to(cursorRef.current, {
      width: size,
      height: size,
      backgroundColor,
      borderColor,
      borderWidth,
      duration: 0.3,
      ease: 'lumen',
    });
  }, [cursorVariant, isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full overflow-hidden text-center"
      style={{
        width: 12,
        height: 12,
        backgroundColor: 'var(--color-citrus)',
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderWidth: 0,
      }}
    >
      {cursorLabel && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-parchment)',
          }}
        >
          {cursorLabel}
        </span>
      )}
    </div>
  );
}
