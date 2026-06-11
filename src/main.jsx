import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { initLenis } from '@/utils/lenisConfig';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/global.css';

// Initialize Lenis and store globally
window.__lenis = initLenis();

// Refresh ScrollTrigger once fonts are fully loaded to prevent layout jumps
document.fonts.ready.then(() => {
  ScrollTrigger.refresh();
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);