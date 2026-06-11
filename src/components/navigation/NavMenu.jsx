import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '@/store/uiStore';
import NavLink from './NavLink';
import useLenis from '@/hooks/useLenis';
import useMediaQuery from '@/hooks/useMediaQuery';

const menuVariants = {
  initial: { clipPath: 'inset(0 0 100% 0)' },
  enter: { 
    clipPath: 'inset(0 0 0% 0)',
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1], 
      staggerChildren: 0.07,
      delayChildren: 0.2 
    }
  },
  exit: { 
    clipPath: 'inset(0 100% 0 0)',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

const linkVariants = {
  initial: { y: 40, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0 }
};

const links = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function NavMenu() {
  const { navOpen, closeNav } = useUIStore();
  const lenis = useLenis();
  const isMobile = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    if (navOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [navOpen, lenis]);

  return (
    <AnimatePresence>
      {navOpen && (
        <motion.nav
          className="fixed inset-0 z-[200] flex flex-col justify-center items-center"
          style={{ backgroundColor: 'var(--color-void)' }}
          variants={menuVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="flex flex-col items-center gap-6">
            {links.map((link) => (
              <motion.div key={link.name} variants={linkVariants}>
                <NavLink 
                  to={link.path} 
                  onClick={closeNav}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: isMobile ? 'var(--text-2xl)' : 'var(--text-hero)',
                  }}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
