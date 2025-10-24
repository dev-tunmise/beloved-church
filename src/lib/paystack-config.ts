/**
 * Paystack Configuration
 * 
 * This file contains configuration for Paystack payment integration.
 * Update the PAYSTACK_PUBLIC_KEY with your actual public key from Paystack.
 */

export const PAYSTACK_CONFIG = {
  // TODO: Replace with your actual Paystack public key
  // Get your key from: https://dashboard.paystack.com/#/settings/developer
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  
  // Currency (Nigerian Naira)
  currency: 'NGN',
  
  // WhatsApp number for product confirmations (without + sign)
  whatsappNumber: '2347069609892',
  
  // Success URLs
  successUrl: {
    donation: '/giving/success',
    product: '/tdgi/success',
  },
  
  // Email for receipts and notifications
  churchEmail: 'toyinjato@gmail.com',
  
  // Church/Business information
  metadata: {
    churchName: 'BELOVED New Beginning Ministries',
    businessName: 'TDGI Enterprise',
    custom_fields: [],
  }
} as const;

/**
 * Generate WhatsApp link with message
 */
export function generateWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PAYSTACK_CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Format amount for Paystack (convert to kobo - smallest currency unit)
 * Paystack expects amount in kobo (₦1 = 100 kobo)
 */
export function formatAmountForPaystack(amount: number): number {
  return Math.round(amount * 100);
}

/**
 * Format amount for display (from kobo to naira)
 */
export function formatAmountFromPaystack(amountInKobo: number): number {
  return amountInKobo / 100;
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/**
 * Validate Paystack public key format
 */
export function isValidPaystackKey(key: string): boolean {
  return key.startsWith('pk_test_') || key.startsWith('pk_live_');
}

/**
 * Check if Paystack is properly configured
 */
export function isPaystackConfigured(): boolean {
  const key = PAYSTACK_CONFIG.publicKey;
  return isValidPaystackKey(key) && !key.includes('XXXXXXXX');
}
