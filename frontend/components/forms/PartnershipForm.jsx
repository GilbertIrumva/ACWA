'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    partnershipType: 'NGO',
    message: '',
    botField: '', // Honeypot field
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // Client-side validation
    if (!formData.name.trim() || !formData.organization.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please fill in all required fields (Name, Organization, Email, Message).',
      });
      return;
    }

    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          partnershipType: 'NGO',
          message: '',
          botField: '',
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || 'Failed to send inquiry. Please try again later.',
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Network connection error. Please try again.',
      });
    }
  };

  return (
    <div className="bg-[#F0FDF4] dark:bg-[#064E3B]/90 p-8 sm:p-10 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-xl transition-colors duration-200">
      <h3 className="font-serif font-bold text-2xl text-[#171A17] dark:text-[#F0FDF4] mb-2">
        Submit Institutional Partnership Inquiry
      </h3>
      <p className="text-xs sm:text-sm text-[#4A5550] dark:text-[#D5EBD9]/85 mb-6">
        Fill out the form below. Our leadership team (led by OMBENI MASUMBUKO) will review your proposal and respond promptly.
      </p>

      {status.success ? (
        <div className="p-6 rounded-2xl bg-[#16A34A]/10 dark:bg-[#22C55E]/20 border border-[#16A34A]/30 space-y-3 text-center">
          <CheckCircle2 className="w-12 h-12 text-[#16A34A] dark:text-[#22C55E] mx-auto" />
          <h4 className="font-serif font-bold text-xl text-[#16A34A] dark:text-[#22C55E]">Inquiry Received!</h4>
          <p className="text-xs sm:text-sm text-[#4A5550] dark:text-[#D5EBD9]/90">
            Thank you for reaching out to ACWA. We have received your partnership request and will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus({ loading: false, success: false, error: null })}
            className="text-xs text-[#16A34A] dark:text-[#22C55E] underline font-semibold mt-2"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Honeypot anti-spam field */}
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
                Your Full Name <span className="text-[#D87532]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
                Organization Name <span className="text-[#D87532]">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Global Welfare Foundation"
                className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
                Official Email <span className="text-[#D87532]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. jane@organization.org"
                className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>

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
                placeholder="e.g. +254 700 000000"
                className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="partnershipType" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
              Partnership Type
            </label>
            <select
              id="partnershipType"
              name="partnershipType"
              value={formData.partnershipType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
            >
              <option value="NGO" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Non-Governmental Organization (NGO)</option>
              <option value="Donor" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Donor / Philanthropic Foundation</option>
              <option value="Government" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Government Institution / Local Authority</option>
              <option value="Faith-Based" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Faith-Based Organization</option>
              <option value="Humanitarian" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Humanitarian Agency</option>
              <option value="Other" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Other Community Partner</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
              Partnership Proposal / Message <span className="text-[#D87532]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your organization and proposed area of partnership (e.g. Peacebuilding, Permaculture co-funding, Education supplies)..."
              className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
            />
          </div>

          <Button
            type="submit"
            variant="orange"
            size="lg"
            className="w-full shadow-md"
            disabled={status.loading}
          >
            {status.loading ? (
              <span className="flex items-center space-x-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending Proposal...</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Submit Partnership Proposal</span>
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
