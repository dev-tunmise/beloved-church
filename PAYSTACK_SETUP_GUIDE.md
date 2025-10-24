# Paystack Integration Setup Guide

This guide will help you complete the Paystack integration for your church website.

## 🎯 Overview

The Paystack integration has been set up for:
1. **Giving Page** - Accept donations, tithes, offerings, missions, and building fund contributions
2. **TDGI Products Page** - Sell faith-based products with automatic WhatsApp redirect after payment

## 📋 Prerequisites

Before you begin, make sure you have:
- A Paystack account (sign up at https://paystack.com)
- Your Paystack Public Key
- Node.js and pnpm installed

## 🚀 Setup Steps

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
pnpm add react-paystack
```

Or if you prefer npm:

```bash
npm install react-paystack
```

### Step 2: Get Your Paystack Public Key

1. Log in to your Paystack Dashboard: https://dashboard.paystack.com
2. Navigate to **Settings** → **API Keys & Webhooks**
3. Copy your **Public Key**
   - For testing: Use the **Test Public Key** (starts with `pk_test_`)
   - For production: Use the **Live Public Key** (starts with `pk_live_`)

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in the root of your project:

```bash
# Create the file
copy .env.example .env.local
```

2. Open `.env.local` and add your Paystack public key:

```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_actual_key_here
```

**Important:** 
- Never commit `.env.local` to version control
- The `.env.local` file is already in `.gitignore`
- Use test keys for development and live keys for production

### Step 4: Update Product Prices (Optional)

The TDGI products currently have placeholder prices. Update them in:

**File:** `src/app/tdgi/page.tsx`

```typescript
const products = [
  {
    id: 1,
    name: "Favour Soap",
    price: 5000, // ← Update this price in Naira
    // ... other fields
  },
  // ... update prices for all products
];
```

### Step 5: Test the Integration

1. Start your development server:

```bash
pnpm dev
```

2. Test the **Giving Page**:
   - Navigate to `/giving`
   - Fill in the email and amount
   - Click "Give" button
   - Complete test payment using Paystack test card:
     - Card: `4084 0840 8408 4081`
     - CVV: `408`
     - Expiry: Any future date
     - PIN: `0000`
     - OTP: `123456`

3. Test the **TDGI Products Page**:
   - Navigate to `/tdgi`
   - Click "Buy Now with Paystack" on any product
   - Enter your email
   - Complete test payment
   - You should be redirected to WhatsApp with payment confirmation

### Step 6: Deploy to Production

When ready for production:

1. Update your environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Replace test public key with live public key
3. Test thoroughly before going live

**For Vercel:**
- Go to your project settings → Environment Variables
- Add: `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` with your live key
- Redeploy

## 🎨 What Was Integrated

### 1. Configuration Files
- ✅ `src/lib/paystack-config.ts` - Central configuration for Paystack
- ✅ `.env.example` - Environment variables template

### 2. Custom Hooks
- ✅ `src/hooks/usePaystackDonation.ts` - Handle donation payments
- ✅ `src/hooks/usePaystackProduct.ts` - Handle product purchases with WhatsApp redirect

### 3. UI Components
- ✅ `src/app/_components/paystack-button.tsx` - Reusable payment buttons
- ✅ `src/app/giving/success/page.tsx` - Donation success page

### 4. Updated Pages
- ✅ `src/app/giving/page.tsx` - Now accepts Paystack payments
- ✅ `src/app/tdgi/page.tsx` - Product purchases with Paystack + WhatsApp flow

## 💡 How It Works

### Giving Page Flow:
1. User fills in email, amount, and giving type
2. Clicks "Give" button
3. Paystack payment modal opens
4. After successful payment → Redirected to success page
5. Email receipt sent automatically by Paystack

### TDGI Products Page Flow:
1. User clicks "Buy Now with Paystack" on a product
2. Modal opens asking for email and optional details
3. Clicks "Proceed to Payment"
4. Paystack payment modal opens
5. After successful payment → Redirected to WhatsApp with:
   - Product name
   - Amount paid
   - Payment reference
6. Church admin receives order via WhatsApp

## 🔒 Security Features

- ✅ SSL-encrypted payments via Paystack
- ✅ PCI-DSS compliant
- ✅ Public key only (no secret keys in frontend)
- ✅ Transaction verification on Paystack's servers
- ✅ Automatic fraud detection by Paystack

## 📱 Payment Methods Supported

Paystack supports:
- Debit/Credit Cards (Visa, Mastercard, Verve)
- Bank Accounts
- USSD
- Bank Transfer
- Mobile Money
- QR Code

## 🛠 Customization Options

### Update WhatsApp Number
Edit `src/lib/paystack-config.ts`:
```typescript
whatsappNumber: '2347069609892', // Change this
```

### Update Product Prices
Edit `src/app/tdgi/page.tsx`:
```typescript
const products = [
  { id: 1, name: "Product", price: 10000 }, // Update prices
];
```

### Customize Success Page
Edit `src/app/giving/success/page.tsx`

### Add More Product Categories
Edit the products array in `src/app/tdgi/page.tsx`

## 🐛 Troubleshooting

### Issue: "Paystack is not properly configured"
**Solution:** Make sure your `.env.local` file has the correct public key and restart your dev server.

### Issue: Payment modal not opening
**Solution:** 
1. Check browser console for errors
2. Ensure `react-paystack` package is installed
3. Verify public key format (should start with `pk_test_` or `pk_live_`)

### Issue: Products showing "N/A" price
**Solution:** Update the price field in the products array

### Issue: WhatsApp redirect not working
**Solution:** Check that the WhatsApp number in config is correct (without + sign)

## 📊 Testing Cards

Use these test cards in test mode:

**Successful Transaction:**
- Card: `4084 0840 8408 4081`
- CVV: `408`
- Expiry: Any future date
- PIN: `0000`
- OTP: `123456`

**Insufficient Funds:**
- Card: `5060 6666 6666 6666 666`

**Failed Transaction:**
- Card: `4084 0840 8408 4040`

More test cards: https://paystack.com/docs/payments/test-payments

## 📞 Support

- Paystack Docs: https://paystack.com/docs
- Paystack Support: support@paystack.com
- React Paystack: https://github.com/ifeoluwa-josh/react-paystack

## ✅ Final Checklist

Before going live:
- [ ] Installed `react-paystack` package
- [ ] Created `.env.local` with Paystack public key
- [ ] Tested donation flow
- [ ] Tested product purchase flow
- [ ] Updated product prices
- [ ] Verified WhatsApp redirect works
- [ ] Tested with Paystack test cards
- [ ] Configured production environment variables
- [ ] Switched to live Paystack public key for production

---

## 🎉 You're All Set!

Once you complete these steps, your website will be able to:
- ✅ Accept online donations via Paystack
- ✅ Sell products with instant payment
- ✅ Automatically redirect buyers to WhatsApp
- ✅ Send email receipts to donors/buyers
- ✅ Track all transactions in Paystack dashboard

**Remember:** Always test thoroughly with test keys before switching to live keys!
