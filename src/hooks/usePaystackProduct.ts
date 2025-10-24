'use client';

import { useCallback } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { 
  PAYSTACK_CONFIG, 
  formatAmountForPaystack,
  generateWhatsAppLink,
  isPaystackConfigured 
} from '@/lib/paystack-config';

export interface ProductConfig {
  productName: string;
  productId: string | number;
  price: number;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  category?: string;
}

export interface ProductPaymentResponse {
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  message: string;
  trxref: string;
}

/**
 * Custom hook for handling Paystack product payments
 * Manages product purchases with Paystack and WhatsApp redirect after successful payment
 */
export function usePaystackProduct() {
  /**
   * Initialize Paystack payment for product purchase
   */
  const initializePayment = useCallback((
    config: ProductConfig,
    onSuccess: (response: ProductPaymentResponse) => void,
    onClose: () => void
  ) => {
    // Check if Paystack is properly configured
    if (!isPaystackConfigured()) {
      alert('Paystack is not properly configured. Please contact the administrator.');
      console.error('Invalid Paystack configuration');
      return null;
    }

    // Validate price
    if (!config.price || config.price <= 0) {
      alert('Invalid product price');
      return null;
    }

    // Validate email
    if (!config.email || !config.email.includes('@')) {
      alert('Please enter a valid email address');
      return null;
    }

    // Generate unique reference
    const reference = `PROD-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    // Prepare Paystack configuration
    const paystackConfig = {
      email: config.email,
      amount: formatAmountForPaystack(config.price),
      publicKey: PAYSTACK_CONFIG.publicKey,
      reference,
      metadata: {
        custom_fields: [
          {
            display_name: 'Product Name',
            variable_name: 'product_name',
            value: config.productName,
          },
          {
            display_name: 'Product ID',
            variable_name: 'product_id',
            value: config.productId.toString(),
          },
          {
            display_name: 'Business',
            variable_name: 'business',
            value: PAYSTACK_CONFIG.metadata.businessName,
          },
          ...(config.category ? [{
            display_name: 'Category',
            variable_name: 'category',
            value: config.category,
          }] : []),
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
      onSuccess: (response: ProductPaymentResponse) => {
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
   * Redirect to WhatsApp with payment confirmation message
   */
  const redirectToWhatsApp = useCallback((
    productName: string,
    amount: number,
    reference: string
  ) => {
    const message = `✅ Payment Confirmed!\n\nProduct: ${productName}\nAmount: ₦${amount.toLocaleString()}\nReference: ${reference}\n\nThank you for your purchase from TDGI Enterprise. How would you like us to proceed with your order?`;
    
    const whatsappUrl = generateWhatsAppLink(message);
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  }, []);

  /**
   * Helper to handle complete payment flow with WhatsApp redirect
   */
  const processPaymentWithWhatsApp = useCallback((
    config: ProductConfig
  ) => {
    const handleSuccess = (response: ProductPaymentResponse) => {
      // Show success message
      alert(`Payment successful! Redirecting to WhatsApp...`);
      
      // Redirect to WhatsApp with confirmation
      redirectToWhatsApp(config.productName, config.price, response.reference);
    };

    const handleClose = () => {
      console.log('Payment modal closed');
    };

    // Initialize payment
    initializePayment(config, handleSuccess, handleClose);
  }, [initializePayment, redirectToWhatsApp]);

  return {
    initializePayment,
    redirectToWhatsApp,
    processPaymentWithWhatsApp,
    isConfigured: isPaystackConfigured(),
  };
}
