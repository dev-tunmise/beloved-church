'use client';

import React from 'react';

interface PaystackButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'success' | 'gold';
}

/**
 * Reusable Paystack payment button component
 * Provides consistent styling and behavior for payment triggers
 */
export function PaystackButton({
  onClick,
  disabled = false,
  loading = false,
  children,
  className = '',
  icon,
  variant = 'primary',
}: PaystackButtonProps) {
  const baseStyles = "w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-gold to-accent-gold text-white hover:shadow-xl",
    success: "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-xl hover:from-green-700 hover:to-green-800",
    gold: "bg-gradient-to-r from-gold to-accent-gold text-dark-purple hover:shadow-xl",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Processing...
        </>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
}

interface PaystackProductButtonProps {
  productName: string;
  onPaymentClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

/**
 * Specialized button for product purchases
 * Includes Paystack branding and product-specific styling
 */
export function PaystackProductButton({
  productName,
  onPaymentClick,
  disabled = false,
  loading = false,
  className = '',
}: PaystackProductButtonProps) {
  return (
    <button
      type="button"
      onClick={onPaymentClick}
      disabled={disabled || loading}
      className={`w-full bg-gradient-to-r from-royal-purple to-dark-purple text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Processing...
        </>
      ) : (
        <>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
          </svg>
          Buy Now with Paystack
        </>
      )}
    </button>
  );
}

interface PaystackDonationButtonProps {
  amount: number;
  givingType: string;
  onPaymentClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

/**
 * Specialized button for donations
 * Includes giving-specific styling and messaging
 */
export function PaystackDonationButton({
  amount,
  givingType,
  onPaymentClick,
  disabled = false,
  loading = false,
  className = '',
}: PaystackDonationButtonProps) {
  return (
    <button
      type="button"
      onClick={onPaymentClick}
      disabled={disabled || loading}
      className={`w-full bg-gradient-to-r from-gold to-accent-gold text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Processing Payment...
        </>
      ) : (
        <>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {amount > 0 ? `Give ₦${amount.toLocaleString()} - Secure Payment` : 'Proceed to Secure Payment'}
        </>
      )}
    </button>
  );
}
