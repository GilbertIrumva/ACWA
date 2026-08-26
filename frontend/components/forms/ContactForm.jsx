'use client';

import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Send, CheckCircle2, AlertCircle, Loader2, X } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    botField: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const [showToast, setShowToast] = useState(false);

  // Auto-hide toast after 6 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please fill in all required fields (Name, Email, Subject, Message).',
      });
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
        setShowToast(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          botField: '',
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Network connection error. Please check your connection and try again.',
      });
    }
  };

  return (
    <div className="relative">
      {/* Floating Live Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 max-w-md w-full bg-white dark:bg-[#042F20] border-2 border-[#16A34A] dark:border-[#22C55E] rounded-2xl shadow-2xl p-4 flex items-start space-x-4 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="p-2 rounded-xl bg-[#16A34A]/15 text-[#16A34A] dark:text-[#22C55E] shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="flex-1 space-y-1">
            <h5 className="font-serif font-bold text-base text-gray-900 dark:text-white">
              Message Delivered!
            </h5>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Your inquiry has been dispatched to ACWA leadership (<span className="font-bold text-[#16A34A] dark:text-[#22C55E]">arisecwel.acces@gmail.com</span>).
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="bg-[#F0FDF4] dark:bg-[#064E3B]/90 p-8 sm:p-10 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-xl transition-colors duration-200">
        <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4] mb-2">Send Us a Direct Message</h3>
        <p className="text-xs sm:text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 mb-6">
          Have questions about our programs in Kakuma? Reach out to our leadership team.
        </p>

        {status.success ? (
          <div className="p-6 rounded-2xl bg-[#16A34A]/10 dark:bg-[#22C55E]/20 border border-[#16A34A]/30 space-y-3 text-center">
            <CheckCircle2 className="w-12 h-12 text-[#16A34A] dark:text-[#22C55E] mx-auto" />
            <h4 className="font-serif font-bold text-xl text-[#16A34A] dark:text-[#22C55E]">Message Sent!</h4>
            <p className="text-xs sm:text-sm text-[#4A5550] dark:text-[#D5EBD9]/90">
              Thank you for contacting ACWA. We have received your inquiry and sent an email notification to our team.
            </p>
            <button
              type="button"
              onClick={() => setStatus({ loading: false, success: false, error: null })}
              className="text-xs text-[#16A34A] dark:text-[#22C55E] underline font-semibold mt-2 cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Honeypot field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="botField">Leave blank</label>
              <input
                type="text"
                id="botField"
                name="botField"
                value={formData.botField}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {status.error && (
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-800/50 flex items-start space-x-3 text-red-800 dark:text-red-200 text-xs">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600 dark:text-red-400" />
                <span>{status.error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
                  Your Full Name <span className="text-[#16A34A] dark:text-[#22C55E]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Smith"
                  className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
                  Email Address <span className="text-[#16A34A] dark:text-[#22C55E]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +254 727236976"
                  className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
                  Subject <span className="text-[#16A34A] dark:text-[#22C55E]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Inquiry regarding Education Program"
                  className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
                Message <span className="text-[#16A34A] dark:text-[#22C55E]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we assist you?"
                className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full shadow-md"
              disabled={status.loading}
            >
              {status.loading ? (
                <span className="flex items-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending Message...</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </span>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
