'use client';

import { useCallback } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { 
  PAYSTACK_CONFIG, 
  formatAmountForPaystack,
  isPaystackConfigured 
} from '@/lib/paystack-config';

export interface DonationConfig {
  amount: number;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  givingType: 'tithe' | 'offering' | 'missions' | 'building';
  frequency?: 'one-time' | 'monthly';
}

export interface DonationResponse {
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  message: string;
  trxref: string;
}

/**
 * Custom hook for handling Paystack donation payments
 * Manages donation transactions with Paystack payment gateway
 */
export function usePaystackDonation() {
  /**
   * Initialize Paystack payment for donation
   */
  const initializePayment = useCallback((
    config: DonationConfig,
    onSuccess: (response: DonationResponse) => void,
    onClose: () => void
  ) => {
    // Check if Paystack is properly configured
    if (!isPaystackConfigured()) {
      alert('Paystack is not properly configured. Please contact the administrator.');
      console.error('Invalid Paystack configuration');
      return null;
    }

    // Validate amount
    if (!config.amount || config.amount <= 0) {
      alert('Please enter a valid amount');
      return null;
    }

    // Validate email
    if (!config.email || !config.email.includes('@')) {
      alert('Please enter a valid email address');
      return null;
    }

    // Generate unique reference
    const reference = `DON-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    // Prepare Paystack configuration
    const paystackConfig = {
      email: config.email,
      amount: formatAmountForPaystack(config.amount),
      publicKey: PAYSTACK_CONFIG.publicKey,
      reference,
      metadata: {
        custom_fields: [
          {
            display_name: 'Giving Type',
            variable_name: 'giving_type',
            value: config.givingType,
          },
          {
            display_name: 'Frequency',
            variable_name: 'frequency',
            value: config.frequency || 'one-time',
          },
          {
            display_name: 'Church',
            variable_name: 'church',
            value: PAYSTACK_CONFIG.metadata.churchName,
          },
          ...(config.firstName ? [{
            display_name: 'First Name',
            variable_name: 'first_name',
            value: config.firstName,
          }] : []),
          ...(config.lastName ? [{
            display_name: 'Last Name',
            variable_name: 'last_name',
            value: config.lastName,
          }] : []),
          ...(config.phone ? [{
            display_name: 'Phone',
            variable_name: 'phone',
            value: config.phone,
          }] : []),
        ],
      },
    };

    // Initialize Paystack payment hook
    const initPayment = usePaystackPayment(paystackConfig);

    // Trigger payment with callbacks
    initPayment({
      onSuccess: (response: DonationResponse) => {
        console.log('Payment successful:', response);
        onSuccess(response);
      },
      onClose: () => {
        console.log('Payment closed');
        onClose();
      },
    });

    return reference;
  }, []);

  /**
   * Helper to redirect to success page after payment
   */
  const redirectToSuccess = useCallback((
    reference: string,
    givingType: string,
    amount: number
  ) => {
    const params = new URLSearchParams({
      reference,
      type: givingType,
      amount: amount.toString(),
    });
    
    window.location.href = `${PAYSTACK_CONFIG.successUrl.donation}?${params.toString()}`;
  }, []);

  return {
    initializePayment,
    redirectToSuccess,
    isConfigured: isPaystackConfigured(),
  };
}
