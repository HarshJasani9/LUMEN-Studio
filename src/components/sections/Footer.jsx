import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const navLinks = ['Home', 'Work', 'About', 'Services', 'Contact'];
  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-void)',
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--space-inner)',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
        {/* Column 1 — Brand */}
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
              lineHeight: '1.6',
            }}
          >
            Creative technology for<br />forward-thinking brands.
          </p>
        </div>

        {/* Column 2 — Nav */}
        <div className="flex flex-col gap-3">
          <span
            className="uppercase mb-2"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-muted)',
              letterSpacing: 'var(--tracking-mono)',
            }}
          >
            Navigate
          </span>
          {navLinks.map((item) => (
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

        {/* Column 3 — Contact & Social */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span
              className="uppercase"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-muted)',
                letterSpacing: 'var(--tracking-mono)',
              }}
            >
              Say hello
            </span>
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
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-muted)',
                  letterSpacing: 'var(--tracking-mono)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-parchment)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="pt-8 flex justify-between items-center"
        style={{ borderTop: '1px solid var(--color-border)' }}
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
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-muted)',
            letterSpacing: 'var(--tracking-mono)',
          }}
        >
          BERLIN — 52°N
        </span>
      </div>
    </footer>
  );
}
