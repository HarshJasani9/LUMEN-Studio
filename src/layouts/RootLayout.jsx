import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/navigation/Navbar';
import NavMenu from '@/components/navigation/NavMenu';
import Footer from '@/components/sections/Footer';
import CursorProvider from '@/components/cursor/CursorProvider';

export default function RootLayout() {
  const location = useLocation();

  return (
    <CursorProvider>
      <Navbar />
      <NavMenu />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer />
    </CursorProvider>
  );
}