'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import BankTransferDetails from './BankTransferDetails';
import { Heart, Lock, CheckCircle2, AlertCircle, Loader2, CreditCard, Building2 } from 'lucide-react';

const PRESET_AMOUNTS = [15, 30, 60, 120, 250];

export default function DonationForm() {
  const [paymentMethod, setPaymentMethod] = useState('bank'); // 'bank' | 'online'
  const [frequency, setFrequency] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(30);
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [programPreference, setProgramPreference] = useState('general');

  const [donor, setDonor] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    transactionId: null,
    error: null,
  });

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, transactionId: null, error: null });

    if (!finalAmount || finalAmount <= 0) {
      setStatus({ loading: false, success: false, transactionId: null, error: 'Please enter a valid donation amount.' });
      return;
    }

    if (!donor.name.trim() || !donor.email.trim()) {
      setStatus({ loading: false, success: false, transactionId: null, error: 'Please provide your name and email.' });
      return;
    }

    try {
      const res = await fetch('/api/donations/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: finalAmount,
          currency,
          donationType: frequency,
          name: donor.name,
          email: donor.email,
          phone: donor.phone,
          programPreference,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
          return;
        }
        setStatus({
          loading: false,
          success: true,
          transactionId: data.transactionId,
          error: null,
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          transactionId: null,
          error: data.message || 'Donation processing failed. Please try again.',
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        transactionId: null,
        error: 'Network connection issue. Please try again.',
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Payment Method Switcher Tabs */}
      <div className="flex bg-[#D5EBD9] dark:bg-[#042F20] p-1.5 rounded-2xl border border-[#16A34A]/20 dark:border-emerald-800/50 max-w-2xl mx-auto">
        <button
          type="button"
          onClick={() => setPaymentMethod('online')}
          className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center space-x-2 transition-all ${
            paymentMethod === 'online'
              ? 'bg-[#16A34A] text-white shadow-md'
              : 'text-[#171A17] dark:text-[#F0FDF4] hover:text-[#16A34A] dark:hover:text-[#22C55E]'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Online Card / Mobile</span>
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod('bank')}
          className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center space-x-2 transition-all ${
            paymentMethod === 'bank'
              ? 'bg-[#16A34A] text-white shadow-md'
              : 'text-[#171A17] dark:text-[#F0FDF4] hover:text-[#16A34A] dark:hover:text-[#22C55E]'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Direct Bank Transfer</span>
        </button>
      </div>

      {/* Render Bank Transfer Details if 'bank' is selected */}
      {paymentMethod === 'bank' ? (
        <BankTransferDetails />
      ) : (
        <div className="bg-[#F0FDF4] dark:bg-[#064E3B]/90 p-8 sm:p-12 rounded-3xl border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-xl max-w-2xl mx-auto transition-colors duration-200">
          {/* Frequency Toggle */}
          <div className="flex bg-[#D5EBD9] dark:bg-[#042F20] p-1.5 rounded-full border border-[#16A34A]/10 dark:border-emerald-800/40 mb-8">
            <button
              type="button"
              onClick={() => setFrequency('one-time')}
              className={`flex-1 py-3 text-xs font-semibold rounded-full transition-colors ${
                frequency === 'one-time'
                  ? 'bg-[#16A34A] text-[#F0FDF4] shadow-sm'
                  : 'text-[#171A17] dark:text-[#F0FDF4] hover:text-[#16A34A] dark:hover:text-[#22C55E]'
              }`}
            >
              Give One-Time
            </button>
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`flex-1 py-3 text-xs font-semibold rounded-full transition-colors ${
                frequency === 'monthly'
                  ? 'bg-[#16A34A] text-[#F0FDF4] shadow-sm'
                  : 'text-[#171A17] dark:text-[#F0FDF4] hover:text-[#16A34A] dark:hover:text-[#22C55E]'
              }`}
            >
              Give Monthly (Sustainer)
            </button>
          </div>

          {status.success ? (
            <div className="p-8 rounded-2xl bg-[#16A34A]/10 dark:bg-[#22C55E]/20 border border-[#16A34A]/30 space-y-4 text-center">
              <CheckCircle2 className="w-14 h-14 text-[#16A34A] dark:text-[#22C55E] mx-auto" />
              <h3 className="font-serif font-bold text-2xl text-[#16A34A] dark:text-[#22C55E]">Thank You for Your Generosity!</h3>
              <p className="text-sm text-[#4A5550] dark:text-[#D5EBD9]/90 leading-relaxed">
                Your support helps ACWA empower refugee and host communities in Kakuma.
              </p>
              <div className="p-3 bg-[#F0FDF4] dark:bg-[#042F20] rounded-xl text-xs font-mono text-[#16A34A] dark:text-[#22C55E] border border-[#16A34A]/20 dark:border-emerald-600/40 inline-block">
                Reference ID: {status.transactionId}
              </div>
              <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/80">
                A receipt confirmation has been logged for <strong>{donor.email}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setStatus({ loading: false, success: false, transactionId: null, error: null })}
                className="text-xs text-[#16A34A] dark:text-[#22C55E] underline font-semibold mt-4 block mx-auto"
              >
                Make Another Contribution
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {status.error && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-800/50 flex items-start space-x-3 text-red-800 dark:text-red-200 text-xs">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-600 dark:text-red-400" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Amount selector */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider">
                  Select Amount ({currency})
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-2 rounded-xl text-sm font-bold border transition-colors ${
                        selectedAmount === amt && !customAmount
                          ? 'bg-[#16A34A] text-[#F0FDF4] border-[#16A34A] shadow-sm'
                          : 'bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4] border-[#16A34A]/15 dark:border-emerald-700/40 hover:border-[#16A34A] dark:hover:border-emerald-500'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                {/* Custom Amount input */}
                <div className="relative pt-2">
                  <span className="absolute left-4 top-5 text-sm font-bold text-[#22C55E] dark:text-[#22C55E]">$</span>
                  <input
                    type="number"
                    min="1"
                    step="any"
                    placeholder="Or enter custom amount in USD"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  />
                </div>
              </div>

              {/* Program Allocation */}
              <div>
                <label htmlFor="programPreference" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-2">
                  Direct Contribution To
                </label>
                <select
                  id="programPreference"
                  value={programPreference}
                  onChange={(e) => setProgramPreference(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                >
                  <option value="general" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Where Most Needed (General Community Welfare)</option>
                  <option value="peacebuilding" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Peacebuilding & Conflict Dialogues</option>
                  <option value="education" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Education Support & Scholastic Kits</option>
                  <option value="child-protection" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Child Protection & Orphan Welfare</option>
                  <option value="permaculture" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Permaculture & Sustainable Agriculture</option>
                  <option value="health" className="bg-[#D5EBD9] dark:bg-[#042F20] text-[#171A17] dark:text-[#F0FDF4]">Community Health & Hygiene</option>
                </select>
              </div>

              {/* Donor Information */}
              <div className="space-y-4 pt-2 border-t border-[#16A34A]/10 dark:border-emerald-800/40">
                <h4 className="text-xs font-bold text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider">Donor Details</h4>

                <div>
                  <label htmlFor="donorName" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-1">
                    Full Name <span className="text-[#16A34A] dark:text-[#22C55E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="donorName"
                    required
                    value={donor.name}
                    onChange={(e) => setDonor((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Mary Wanjiku"
                    className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="donorEmail" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-1">
                      Email Address <span className="text-[#16A34A] dark:text-[#22C55E]">*</span>
                    </label>
                    <input
                      type="email"
                      id="donorEmail"
                      required
                      value={donor.email}
                      onChange={(e) => setDonor((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="mary@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="donorPhone" className="block text-xs font-semibold text-[#171A17] dark:text-[#F0FDF4] uppercase tracking-wider mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="donorPhone"
                      value={donor.phone}
                      onChange={(e) => setDonor((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="+254 700 000000"
                      className="w-full px-4 py-3 rounded-xl bg-[#D5EBD9] dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-600/40 text-sm text-[#171A17] dark:text-[#F0FDF4] placeholder-[#4A5550]/60 dark:placeholder-[#D5EBD9]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full shadow-lg"
                disabled={status.loading}
              >
                {status.loading ? (
                  <span className="flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Initiating Donation (${finalAmount || 0})...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>Donate ${finalAmount || 0} {frequency === 'monthly' ? '/ month' : ''} Now</span>
                  </span>
                )}
              </Button>

              <div className="flex items-center justify-center space-x-2 text-xs text-[#4A5550] dark:text-[#D5EBD9]/80 pt-2">
                <Lock className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#22C55E]" />
                <span>Encrypted Server-Side Payment Gateway • PCI Compliant</span>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
