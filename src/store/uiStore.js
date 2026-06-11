import { create } from 'zustand';

export const useUIStore = create((set) => ({
  // Cursor slice
  cursorVariant: 'default',
  cursorLabel: '',
  setCursor: (variant, label = '') => set({ cursorVariant: variant, cursorLabel: label }),

  // Navigation slice
  navOpen: false,
  toggleNav: () => set((state) => ({ navOpen: !state.navOpen })),
  closeNav: () => set({ navOpen: false }),

  // Page theme slice
  pageTheme: 'dark',
  setPageTheme: (theme) => set({ pageTheme: theme }),
}));
