import React from 'react';
import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-75 ease-out active:scale-95 active:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none touch-manipulation';

  const variants = {
    primary: 'bg-[#16A34A] hover:bg-[#15803D] active:bg-[#166534] text-[#F0FDF4] shadow-sm hover:shadow active:shadow-none focus-visible:ring-[#16A34A]',
    secondary: 'bg-[#D5EBD9] hover:bg-[#C2E3C7] active:bg-[#B0DCB6] text-[#16A34A] border border-[#16A34A]/20 focus-visible:ring-[#16A34A]',
    orange: 'bg-[#D87532] hover:bg-[#C26223] active:bg-[#A8501B] text-white shadow-sm hover:shadow active:shadow-none focus-visible:ring-[#D87532]',
    earth: 'bg-[#A8875A] hover:bg-[#92744B] active:bg-[#7D623C] text-white shadow-sm focus-visible:ring-[#A8875A]',
    outline: 'border-2 border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-[#F0FDF4] active:bg-[#15803D] active:border-[#15803D] focus-visible:ring-[#16A34A]',
    ghost: 'text-[#16A34A] hover:bg-[#16A34A]/10 active:bg-[#16A34A]/20 focus-visible:ring-[#16A34A]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[38px]',
    md: 'px-6 py-3 text-base min-h-[46px]',
    lg: 'px-8 py-4 text-lg min-h-[54px]',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <Link href={href} prefetch={true} className={combinedClasses} aria-label={ariaLabel} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
