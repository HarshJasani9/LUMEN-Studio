import { useRef, useEffect } from 'react';
import gsap from '@/utils/gsapConfig';

export default function useMagnet(strength = 0.4) {
  const ref = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    xTo.current = gsap.quickTo(ref.current, 'x', { duration: 0.3, ease: 'lumen' });
    yTo.current = gsap.quickTo(ref.current, 'y', { duration: 0.3, ease: 'lumen' });
  }, []);

  const onMouseMove = (e) => {
    if (!ref.current || !xTo.current || !yTo.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    
    xTo.current(x);
    yTo.current(y);
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'lumen' });
  };

  return { ref, onMouseMove, onMouseLeave };
}
