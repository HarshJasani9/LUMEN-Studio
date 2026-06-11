import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Tag from '@/components/ui/Tag';
import { services } from '@/data/services';

export default function ServiceList() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(prev => prev === id ? null : id);
  };

  return (
    <section 
      className="w-full"
      style={{
        paddingLeft: 'var(--space-inner)',
        paddingRight: 'var(--space-inner)',
        paddingBottom: 'var(--space-section)',
        backgroundColor: 'var(--color-void)'
      }}
    >
      <div className="max-w-7xl mx-auto border-t border-[var(--color-border)]">
        {services.map((service) => {
          const isOpen = activeId === service.id;

          return (
            <div 
              key={service.id} 
              className="w-full border-b border-[var(--color-border)] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between py-8 md:py-12 focus:outline-none text-left group cursor-pointer"
                onClick={() => toggleAccordion(service.id)}
              >
                <h2
                  className="m-0 uppercase transition-colors"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-2xl)',
                    color: isOpen ? 'var(--color-citrus)' : 'var(--color-parchment)',
                    letterSpacing: 'var(--tracking-display)'
                  }}
                >
                  {service.title}
                </h2>
                <div 
                  className="shrink-0 ml-4 transition-colors"
                  style={{ color: isOpen ? 'var(--color-citrus)' : 'var(--color-muted)' }}
                >
                  {isOpen ? <Minus size={32} strokeWidth={1} /> : <Plus size={32} strokeWidth={1} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 max-w-3xl">
                      <p
                        className="mb-8"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-lg)',
                          color: 'var(--color-muted)',
                          lineHeight: '1.6'
                        }}
                      >
                        {service.fullDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map(item => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
