import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 bg-[#F0FDF4]">
      <div className="w-12 h-12 rounded-full border-4 border-[#16A34A]/20 border-t-[#16A34A] animate-spin" />
      <p className="text-xs font-semibold text-[#16A34A] uppercase tracking-wider">
        Loading ACWA Community Content...
      </p>
    </div>
  );
}
