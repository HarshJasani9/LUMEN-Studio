import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import FadeUp from '@/components/animation/FadeUp';

export default function ContactInfo() {
  const infoItems = [
    { icon: Mail, label: 'Email', value: 'hello@lumenstudio.co' },
    { icon: MapPin, label: 'Location', value: 'Berlin, Germany' },
    { icon: Clock, label: 'Response time', value: 'Within 48 hours' },
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
  ];

  return (
    <div className="w-full flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        {infoItems.map((item, index) => (
          <FadeUp key={item.label} delay={index * 0.1}>
            <div className="flex items-start gap-4">
              <div
                className="mt-1 shrink-0"
                style={{ color: 'var(--color-citrus)' }}
              >
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="uppercase"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-muted)',
                    letterSpacing: 'var(--tracking-mono)',
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-parchment)',
                  }}
                >
                  {item.value}
                </span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.4}>
        <div className="flex items-center gap-6 pt-8 border-t border-[var(--color-border)]">
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
      </FadeUp>
    </div>
  );
}
