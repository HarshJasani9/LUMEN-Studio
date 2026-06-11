// TODO: src/main.jsx — Application entry point, rendering the root component into the DOM.
// PROJECT: LUMEN Studio — a fictional creative technology agency showcase site.
// STACK: React 18, Vite, React Router v6 (createBrowserRouter), GSAP 3 + ScrollTrigger + SplitText + Flip, Framer Motion 11, Lenis, Tailwind CSS v4, Zustand, Lucide React, clsx, tailwind-merge.
// FONTS: Bebas Neue (display), Inter (body), DM Mono (labels) — loaded via @fontsource packages.
// PATH ALIAS: @ maps to ./src

// DESIGN TOKENS (never hardcode these values, always use the CSS var):
//   --color-void:       #0A0A0F   (page background)
//   --color-surface:    #13131F   (card backgrounds)
//   --color-border:     #2A2A3D   (dividers)
//   --color-parchment:  #F0EDE6   (primary text)
//   --color-muted:      #6B6B80   (secondary text)
//   --color-citrus:     #C8F04D   (accent — used ONCE per viewport max)
//   --color-citrus-dim: #8AAD2A   (accent hover)

// RULES:
// 1. Never use useEffect for GSAP — always use the custom useGSAP hook at @/hooks/useGSAP.js
// 2. Never hardcode color hex values — always use var(--token-name)
// 3. Citrus accent appears on at most ONE element visible at a time
// 4. GSAP owns: timeline animations, scroll triggers, text splits
// 5. Framer Motion owns: page transitions, hover/tap interactions, layoutId morphs
// 6. Never animate the same CSS property on the same element with both GSAP and Framer Motion