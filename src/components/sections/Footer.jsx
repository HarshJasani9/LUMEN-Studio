import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-void)',
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--space-inner)',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              color: 'var(--color-parchment)',
              letterSpacing: 'var(--tracking-display)',
            }}
          >
            LUMEN
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-muted)',
            }}
          >
            We make the invisible, visible.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3">
          {['Home', 'Work', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="w-fit transition-colors duration-200"
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-muted)',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-parchment)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <a
            href="mailto:hello@lumenstudio.co"
            className="w-fit transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-parchment)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-citrus)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-parchment)')}
          >
            hello@lumenstudio.co
          </a>
          
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="transition-colors duration-200"
               style={{ color: 'var(--color-parchment)' }}
               onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-citrus)')}
               onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-parchment)')}>
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors duration-200"
               style={{ color: 'var(--color-parchment)' }}
               onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-citrus)')}
               onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-parchment)')}>
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors duration-200"
               style={{ color: 'var(--color-parchment)' }}
               onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-citrus)')}
               onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-parchment)')}>
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div 
        className="pt-8 text-center"
        style={{
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-muted)',
          }}
        >
          © 2024 LUMEN Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
