'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ open, onClose, onSubmit }) => {
  const t = useTranslations('ContactModal');
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    purpose: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (message) setMessage(null); // Clear message on edit
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setMessage({ type: 'success', text: t('success') });
      if (onSubmit) onSubmit(form);
      // Clear form fields
      setForm({
        name: '',
        company: '',
        phone: '',
        email: '',
        purpose: '',
      });
    } else {
      setMessage({ type: 'error', text: t('error') });
    }
  };

  // Clear message when modal is closed
  React.useEffect(() => {
    if (!open) setMessage(null);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-[#F2FBFF] rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[var(--branded-blue)]">
          {t('contactModalTitle')}
        </h2>
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg border-none bg-white px-4 py-3 text-gray-500 text-base shadow focus:outline-none focus:ring-2 focus:ring-[#7EEBAE] placeholder-gray-400"
            placeholder={t('name')}
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-lg border-none bg-white px-4 py-3 text-gray-500 text-base shadow focus:outline-none focus:ring-2 focus:ring-[#7EEBAE] placeholder-gray-400"
            placeholder={t('company')}
            name="company"
            value={form.company}
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-lg border-none bg-white px-4 py-3 text-gray-500 text-base shadow focus:outline-none focus:ring-2 focus:ring-[#7EEBAE] placeholder-gray-400"
            placeholder={t('email')}
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-lg border-none bg-white px-4 py-3 text-gray-500 text-base shadow focus:outline-none focus:ring-2 focus:ring-[#7EEBAE] placeholder-gray-400"
            placeholder={t('phone')}
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <div className="relative">
            <select
              className="w-full rounded-lg border-none bg-white px-4 py-3 text-gray-500 text-base shadow focus:outline-none focus:ring-2 focus:ring-[#7EEBAE] placeholder-gray-400 pr-8 appearance-none"
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              required
            >
              <option value="" disabled>{t('purpose')}</option>
              <option value="1">{t('purposeConsult')}</option>
              <option value="2">{t('purposeCollaboration')}</option>
              <option value="3">{t('purposeMedia')}</option>
              <option value="100">{t('purposeOther')}</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">&gt;</span>
          </div>
          {message && (
            <div className={`text-sm mb-2 text-center ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{message.text}</div>
          )}
          <Button type="submit" size="md" className="self-center px-10 my-4" disabled={loading}>
            {loading ? t('submitting') : t('submit')}
          </Button>
        </form>
      </div>
    </div>
  );
}; 