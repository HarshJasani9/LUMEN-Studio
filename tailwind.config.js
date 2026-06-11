/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: 'var(--color-void)',
        surface: 'var(--color-surface)',
        'border-subtle': 'var(--color-border)',
        parchment: 'var(--color-parchment)',
        muted: 'var(--color-muted)',
        citrus: 'var(--color-citrus)',
        'citrus-dim': 'var(--color-citrus-dim)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        hero: 'var(--text-hero)',
      },
      spacing: {
        section: 'var(--space-section)',
        inner: 'var(--space-inner)',
      },
      transitionTimingFunction: {
        'expo-out': 'var(--ease-out-expo)',
        'in-out': 'var(--ease-in-out)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
      },
    },
  },
  plugins: [],
};
