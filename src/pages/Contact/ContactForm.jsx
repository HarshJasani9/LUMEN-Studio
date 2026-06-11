import React, { useState } from 'react';
import useReducedMotion from '@/hooks/useReducedMotion';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [status, setStatus] = useState('default'); // 'default' | 'sending' | 'sent'
  const reduceMotion = useReducedMotion();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status !== 'default') return;

    setStatus('sending');

    if (reduceMotion) {
      setStatus('sent');
      return;
    }

    setTimeout(() => setStatus('sent'), 1500);
  };

  const fieldClass =
    'peer w-full bg-transparent border-b border-[var(--color-border)] py-4 outline-none focus:border-[var(--color-parchment)] transition-colors placeholder-transparent text-[var(--color-parchment)]';
  const labelClass =
    'absolute left-0 -top-0 text-xs transition-all peer-placeholder-shown:top-10 peer-placeholder-shown:text-base peer-focus:-top-0 peer-focus:text-xs text-[var(--color-muted)] pointer-events-none uppercase tracking-widest';

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">

      {/* Name */}
      <div className="relative pt-6 mb-4">
        <input
          required
          type="text"
          name="name"
          id="contact-name"
          className={fieldClass}
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}
        />
        <label htmlFor="contact-name" className={labelClass} style={{ fontFamily: 'var(--font-mono)' }}>
          Name
        </label>
      </div>

      {/* Email */}
      <div className="relative pt-6 mb-4">
        <input
          required
          type="email"
          name="email"
          id="contact-email"
          className={fieldClass}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}
        />
        <label htmlFor="contact-email" className={labelClass} style={{ fontFamily: 'var(--font-mono)' }}>
          Email
        </label>
      </div>

      {/* Project Type */}
      <div className="relative pt-6 mb-4">
        <select
          required
          name="projectType"
          id="contact-project-type"
          className="peer w-full bg-transparent border-b border-[var(--color-border)] py-4 outline-none focus:border-[var(--color-parchment)] transition-colors text-[var(--color-parchment)] appearance-none rounded-none"
          value={formData.projectType}
          onChange={handleChange}
          style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}
        >
          <option value="" disabled hidden></option>
          <option value="Brand Strategy" className="bg-[var(--color-surface)]">Brand Strategy</option>
          <option value="Visual Identity" className="bg-[var(--color-surface)]">Visual Identity</option>
          <option value="Digital Product" className="bg-[var(--color-surface)]">Digital Product</option>
          <option value="Motion & Film" className="bg-[var(--color-surface)]">Motion & Film</option>
          <option value="Creative Technology" className="bg-[var(--color-surface)]">Creative Technology</option>
          <option value="Something Else" className="bg-[var(--color-surface)]">Something Else</option>
        </select>
        <label
          htmlFor="contact-project-type"
          className="absolute left-0 -top-0 text-xs transition-all peer-invalid:top-10 peer-invalid:text-base peer-focus:-top-0 peer-focus:text-xs text-[var(--color-muted)] pointer-events-none uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Project Type
        </label>
      </div>

      {/* Message */}
      <div className="relative pt-6 mb-12">
        <textarea
          required
          name="message"
          id="contact-message"
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}
        />
        <label htmlFor="contact-message" className={labelClass} style={{ fontFamily: 'var(--font-mono)' }}>
          Message
        </label>
      </div>

      {/* Submit — Button renders as <button type="submit"> */}
      <div className="w-max">
        <Button
          type="submit"
          variant="primary"
          magnetic={status === 'default'}
          className={status === 'sent' ? 'opacity-50 pointer-events-none' : ''}
        >
          {status === 'default' && 'SEND MESSAGE'}
          {status === 'sending' && 'SENDING...'}
          {status === 'sent' && 'SENT ✓'}
        </Button>
      </div>
    </form>
  );
}
