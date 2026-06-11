import { useEffect } from 'react';
import CursorDot from './CursorDot';

export default function CursorProvider({ children }) {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      {children}
      <CursorDot />
    </>
  );
}
