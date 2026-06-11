export default function useLenis() {
  if (typeof window !== 'undefined') {
    return window.__lenis || null;
  }
  return null;
}
