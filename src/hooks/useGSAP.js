import { useEffect, useRef } from 'react';
import gsap from '@/utils/gsapConfig';

export default function useGSAP(callback, deps = []) {
  const ctx = useRef(null);

  useEffect(() => {
    ctx.current = gsap.context(callback);
    return () => ctx.current?.revert();
  }, deps);

  return ctx;
}
