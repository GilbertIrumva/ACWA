'use client';

import React, { useState } from 'react';
import { Building2, Copy, Check, ShieldCheck, Info, CreditCard } from 'lucide-react';

export default function BankTransferDetails({ bankInfo }) {
  const [copiedField, setCopiedField] = useState(null);

  const defaultBankDetails = {
    bankName: bankInfo?.bankName || process.env.NEXT_PUBLIC_BANK_NAME || 'Equity Bank Kenya',
    accountName: bankInfo?.accountName || process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME || 'Arise Community Welfare Access (ACWA)',
    accountNumber: bankInfo?.accountNumber || process.env.NEXT_PUBLIC_BANK_ACCOUNT_NUMBER || '1650186914260',
    swiftCode: bankInfo?.swiftCode || process.env.NEXT_PUBLIC_BANK_SWIFT_CODE || 'EQBLKENA',
  };

  const handleCopy = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const fields = [
    { label: 'Bank Name', value: defaultBankDetails.bankName, key: 'bankName' },
    { label: 'Account Name', value: defaultBankDetails.accountName, key: 'accountName' },
    { label: 'Account Number', value: defaultBankDetails.accountNumber, key: 'accountNumber', highlight: true },
    { label: 'SWIFT / BIC Code', value: defaultBankDetails.swiftCode, key: 'swiftCode', highlight: true },
  ];

  return (
    <div className="bg-[#F0FDF4] dark:bg-[#064E3B]/90 p-8 sm:p-10 rounded-3xl border border-[#16A34A]/20 dark:border-emerald-700/50 shadow-xl max-w-2xl mx-auto space-y-6 transition-colors duration-200">
      <div className="flex items-center space-x-3 pb-4 border-b border-[#16A34A]/15 dark:border-emerald-800/50">
        <div className="p-3 bg-[#16A34A] text-[#F0FDF4] rounded-2xl shadow-md">
          <Building2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#171A17] dark:text-[#F0FDF4]">
            Direct Bank Wire Transfer
          </h3>
          <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/80">
            Send direct contributions via Electronic Funds Transfer (EFT) or SWIFT wire.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((item) => (
          <div
            key={item.key}
            className={`p-4 rounded-2xl border transition-all ${
              item.highlight
                ? 'bg-[#D5EBD9] dark:bg-[#042F20] border-[#16A34A]/30 dark:border-emerald-600/50 shadow-sm'
                : 'bg-white/70 dark:bg-[#042F20]/50 border-gray-200/80 dark:border-emerald-800/30'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-[#4A5550] dark:text-[#D5EBD9]/70 mb-1 font-medium">
              <span>{item.label}</span>
              <button
                type="button"
                onClick={() => handleCopy(item.value, item.key)}
                className="text-[#16A34A] dark:text-[#22C55E] hover:opacity-80 flex items-center space-x-1 text-[11px] font-semibold transition-opacity"
                title={`Copy ${item.label}`}
              >
                {copiedField === item.key ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p
              className={`text-sm font-semibold tracking-wide select-all break-words ${
                item.highlight
                  ? 'text-[#16A34A] dark:text-[#22C55E] font-mono font-bold'
                  : 'text-[#171A17] dark:text-[#F0FDF4]'
              }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-[#D5EBD9]/60 dark:bg-[#042F20] border border-[#16A34A]/20 dark:border-emerald-800/40 space-y-2 text-xs text-[#4A5550] dark:text-[#D5EBD9]/90">
        <div className="flex items-center space-x-2 font-bold text-[#16A34A] dark:text-[#22C55E]">
          <Info className="w-4 h-4 shrink-0" />
          <span>Bank Transfer Instructions</span>
        </div>
        <ul className="list-disc list-inside space-y-1 text-xs leading-relaxed pl-1">
          <li>Please include your <strong>Full Name</strong> or <strong>Email Address</strong> as the transfer reference code.</li>
          <li>After initiating the transfer, send a copy of your transfer receipt to <a href="mailto:arisecwel.acces@gmail.com" className="underline font-semibold text-[#16A34A] dark:text-[#22C55E]">arisecwel.acces@gmail.com</a> for confirmation and tax receipt issuance.</li>
        </ul>
      </div>

      <div className="flex items-center justify-center space-x-2 text-xs text-[#4A5550] dark:text-[#D5EBD9]/80 pt-2 border-t border-[#16A34A]/10 dark:border-emerald-800/40">
        <ShieldCheck className="w-4 h-4 text-[#16A34A] dark:text-[#22C55E]" />
        <span>Official CBO Registered Account • Arise Community Welfare Access</span>
      </div>
    </div>
  );
}
