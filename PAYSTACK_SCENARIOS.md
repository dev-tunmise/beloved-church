# Paystack Integration - Common Scenarios & Solutions

## 📚 Table of Contents
1. [First Time Setup](#first-time-setup)
2. [Testing Scenarios](#testing-scenarios)
3. [Production Deployment](#production-deployment)
4. [Common Issues](#common-issues)
5. [Customization Recipes](#customization-recipes)
6. [Advanced Features](#advanced-features)

---

## 🚀 First Time Setup

### Scenario: I just cloned the project and want to test Paystack

**Steps:**
```bash
# 1. Install dependencies
pnpm install

# 2. Install Paystack package
pnpm add react-paystack

# 3. Create environment file
copy .env.example .env.local

# 4. Edit .env.local and add your test key
# NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_key_here

# 5. Start development server
pnpm dev

# 6. Visit http://localhost:3000/giving
# 7. Test with card: 4084 0840 8408 4081
```

---

## 🧪 Testing Scenarios

### Scenario 1: Test a Successful Donation

1. Go to `/giving`
2. Fill in:
   - Email: `test@example.com`
   - Amount: `5000`
   - Type: Tithe
3. Click "Give ₦5,000 - Secure Payment"
4. Use test card:
   - Card: `4084 0840 8408 4081`
   - CVV: `408`
   - Expiry: `12/25`
   - PIN: `0000`
   - OTP: `123456`
5. ✅ Should redirect to success page

### Scenario 2: Test a Product Purchase with WhatsApp

1. Go to `/tdgi`
2. Click "Buy Now with Paystack" on any product
3. Enter email: `customer@example.com`
4. Click "Proceed to Payment"
5. Use test card (same as above)
6. ✅ Should open WhatsApp with pre-filled message

### Scenario 3: Test a Failed Payment

1. Go to `/giving`
2. Fill in details
3. Click payment button
4. Use failed card: `4084 0840 8408 4040`
5. ❌ Payment should fail
6. Modal closes, user can retry

### Scenario 4: Test Payment Cancellation

1. Start any payment flow
2. When Paystack modal opens, click the "X" to close
3. ✅ Modal should close gracefully
4. User returns to form

---

## 🌐 Production Deployment

### Scenario: Deploy to Vercel

**Steps:**

1. **Get Live Paystack Key**
   ```
   - Login to Paystack Dashboard
   - Go to Settings → API Keys
   - Copy your Live Public Key (pk_live_...)
   - Keep it secure!
   ```

2. **Add to Vercel**
   ```
   - Go to Vercel project dashboard
   - Settings → Environment Variables
   - Add: NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
   - Value: pk_live_your_live_key
   - Save
   ```

3. **Deploy**
   ```bash
   git push origin main
   # Or trigger manual deploy in Vercel
   ```

4. **Test Live Payment**
   ```
   - Visit your production URL
   - Make a small test donation (₦100)
   - Use real card
   - Verify in Paystack dashboard
   ```

### Scenario: Deploy to Netlify

**Steps:**

1. **Add Environment Variable**
   ```
   - Go to Site settings
   - Build & deploy → Environment
   - Add: NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
   - Value: pk_live_your_live_key
   - Save
   ```

2. **Deploy**
   ```bash
   git push origin main
   ```

3. **Verify**
   ```
   - Check deployment logs
   - Visit site
   - Test payment
   ```

---

## 🐛 Common Issues

### Issue 1: "Paystack is not properly configured"

**Symptoms:**
- Alert shows when clicking payment button
- Payment modal doesn't open

**Solutions:**
```bash
# 1. Check if .env.local exists
ls .env.local

# 2. Check if key is correct format
# Should start with pk_test_ or pk_live_

# 3. Restart dev server
# Press Ctrl+C in terminal
pnpm dev

# 4. Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

### Issue 2: "Cannot find module 'react-paystack'"

**Solution:**
```bash
# Install the package
pnpm add react-paystack

# If using npm
npm install react-paystack

# Restart dev server
pnpm dev
```

### Issue 3: Payment Modal Not Opening

**Solutions:**

1. **Check Browser Console**
   ```
   - Press F12
   - Go to Console tab
   - Look for error messages
   ```

2. **Check Public Key**
   ```javascript
   // In browser console, type:
   console.log(process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY);
   // Should show your key
   ```

3. **Check Email Validation**
   ```
   - Ensure email field is filled
   - Email must contain @
   ```

4. **Check Amount**
   ```
   - Amount must be greater than 0
   - Amount must be a valid number
   ```

### Issue 4: WhatsApp Redirect Not Working

**Solutions:**

1. **Check WhatsApp Number in Config**
   ```typescript
   // File: src/lib/paystack-config.ts
   whatsappNumber: '2347069609892', // No + sign, no spaces
   ```

2. **Test WhatsApp Link Manually**
   ```
   https://wa.me/2347069609892?text=Test
   # Should open WhatsApp
   ```

3. **Check Browser Pop-up Blocker**
   ```
   - Allow pop-ups for your site
   - Try in different browser
   ```

### Issue 5: Success Page Shows Wrong Amount

**Solution:**
```typescript
// Check URL parameters
// Should be: /giving/success?reference=XXX&type=tithe&amount=5000

// In src/app/giving/success/page.tsx
// Verify parseFloat is working correctly
const numAmount = parseFloat(amount);
```

---

## 🎨 Customization Recipes

### Recipe 1: Change Product Prices

**File:** `src/app/tdgi/page.tsx`

```typescript
const products = [
  {
    id: 1,
    name: "Favour Soap",
    price: 7500, // Change from 5000 to 7500
    // ... other fields
  },
  // Update other products...
];
```

### Recipe 2: Add New Product

**File:** `src/app/tdgi/page.tsx`

```typescript
const products = [
  // ... existing products
  {
    id: 7, // New ID
    name: "Divine Perfume",
    purpose: "For divine attraction and favor",
    scripture: "2 Corinthians 2:15",
    scriptureText: "For we are to God the pleasing aroma of Christ...",
    image: "/images/divine-perfume.jpg",
    category: "Perfumes",
    price: 10000, // Set price
  },
];
```

### Recipe 3: Change WhatsApp Number

**File:** `src/lib/paystack-config.ts`

```typescript
export const PAYSTACK_CONFIG = {
  // ...
  whatsappNumber: '2348012345678', // Your new number (no + sign)
  // ...
};
```

### Recipe 4: Customize WhatsApp Message

**File:** `src/hooks/usePaystackProduct.ts`

```typescript
const redirectToWhatsApp = useCallback((
  productName: string,
  amount: number,
  reference: string
) => {
  // Customize this message
  const message = `
🎉 Payment Successful!

Product: ${productName}
Amount: ₦${amount.toLocaleString()}
Reference: ${reference}

I would like to arrange delivery. Thank you!
  `.trim();
  
  const whatsappUrl = generateWhatsAppLink(message);
  window.open(whatsappUrl, '_blank');
}, []);
```

### Recipe 5: Add More Giving Types

**File:** `src/app/giving/page.tsx`

```typescript
// Add new type to state
const [givingType, setGivingType] = useState<
  'tithe' | 'offering' | 'missions' | 'building' | 'youth' // Add 'youth'
>("tithe");

// Add new button in the form
<button
  type="button"
  onClick={() => setGivingType("youth")}
  className={/* ... */}
>
  <YouthIcon size={32} />
  <div className="font-bold text-lg">Youth Ministry</div>
</button>
```

### Recipe 6: Change Success Page Redirect Time

**File:** `src/hooks/usePaystackDonation.ts`

```typescript
// Add automatic redirect after 5 seconds
const handleSuccess = (response: DonationResponse) => {
  console.log('Payment successful:', response);
  onSuccess(response);
  
  // Add this:
  setTimeout(() => {
    window.location.href = '/';
  }, 5000); // 5 seconds
};
```

### Recipe 7: Add Product Quantity Selection

**File:** `src/app/tdgi/page.tsx`

```typescript
// In ProductPurchaseModal, add:
const [quantity, setQuantity] = useState(1);

// Add to form:
<div>
  <label>Quantity</label>
  <input
    type="number"
    min="1"
    value={quantity}
    onChange={(e) => setQuantity(parseInt(e.target.value))}
  />
</div>

// Update price display:
<p className="text-3xl font-bold text-gold">
  ₦{(product.price * quantity).toLocaleString()}
</p>

// Update payment:
onPurchase(email, name, phone, quantity);
```

---

## 🚀 Advanced Features

### Feature 1: Add Transaction History Page

**Create:** `src/app/transactions/page.tsx`

```typescript
'use client';

export default function TransactionsPage() {
  // Fetch transactions from Paystack API
  // Display in a table
  // Add filters and search
}
```

### Feature 2: Add Subscription/Recurring Payments

**Update:** `src/hooks/usePaystackDonation.ts`

```typescript
// Add subscription options
if (config.frequency === 'monthly') {
  paystackConfig.plan = 'MONTHLY_PLAN_CODE'; // From Paystack dashboard
}
```

### Feature 3: Add Payment Verification

**Create:** `src/app/api/verify-payment/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const reference = request.nextUrl.searchParams.get('reference');
  
  // Verify with Paystack API using secret key
  const response = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );
  
  const data = await response.json();
  return NextResponse.json(data);
}
```

### Feature 4: Add Webhook Handler

**Create:** `src/app/api/paystack-webhook/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
    .update(body)
    .digest('hex');
  
  if (hash === request.headers.get('x-paystack-signature')) {
    const event = JSON.parse(body);
    
    // Handle different events
    switch (event.event) {
      case 'charge.success':
        // Save to database
        break;
      case 'transfer.success':
        // Update settlement status
        break;
    }
    
    return NextResponse.json({ received: true });
  }
  
  return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
}
```

### Feature 5: Add Analytics Dashboard

**Create:** `src/app/admin/analytics/page.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalDonations: 0,
    totalProducts: 0,
    thisMonth: 0,
  });
  
  // Fetch from Paystack API
  // Display charts and graphs
  // Show top donors, popular products, etc.
  
  return (
    <div>
      {/* Dashboard UI */}
    </div>
  );
}
```

---

## 📊 Monitoring & Maintenance

### Check Payment Status

**Paystack Dashboard:**
```
1. Login to dashboard.paystack.com
2. Go to Transactions
3. Filter by date, status, amount
4. View customer details
5. Issue refunds if needed
```

### Monthly Reconciliation

```
1. Export transactions from Paystack
2. Match with bank settlements
3. Generate reports
4. Update accounting records
```

### Monitor Errors

**Check Logs:**
```
- Paystack Dashboard → Events → Logs
- Your hosting platform logs (Vercel/Netlify)
- Browser console for frontend errors
```

---

## 🔄 Updates & Upgrades

### Update React Paystack Package

```bash
# Check current version
pnpm list react-paystack

# Update to latest
pnpm update react-paystack

# Or specific version
pnpm add react-paystack@latest
```

### Switch from Test to Live Mode

```bash
# Update .env.local
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_live_your_live_key

# Restart server
pnpm dev
```

### Roll Back to Previous Version

```bash
# Check git history
git log

# Revert to previous commit
git revert <commit-hash>

# Or restore specific file
git checkout <commit-hash> -- src/app/giving/page.tsx
```

---

## 🎓 Best Practices

1. **Always Test First**
   - Use test keys in development
   - Test all payment flows
   - Try different scenarios

2. **Keep Keys Secure**
   - Never commit `.env.local` to git
   - Use environment variables
   - Rotate keys periodically

3. **Monitor Transactions**
   - Check Paystack dashboard daily
   - Set up email notifications
   - Review failed payments

4. **Provide Support**
   - Add contact info on payment pages
   - Respond to WhatsApp messages promptly
   - Help customers with payment issues

5. **Keep Updated**
   - Update packages regularly
   - Check Paystack changelog
   - Review security advisories

---

## ✅ Quick Checks

**Before Every Deployment:**
- [ ] Test keys removed
- [ ] Live keys configured
- [ ] All tests passing
- [ ] Payment flows working
- [ ] WhatsApp redirect working
- [ ] Success pages loading
- [ ] Mobile responsive
- [ ] Email receipts received
- [ ] Paystack dashboard showing transactions
- [ ] Bank settlements configured

---

**Need more help?** Check the other documentation files:
- `PAYSTACK_SETUP_GUIDE.md` - Detailed setup
- `PAYSTACK_QUICK_REFERENCE.md` - Quick commands
- `PAYSTACK_FLOW_DIAGRAM.md` - Visual flows
- `PAYSTACK_INTEGRATION_SUMMARY.md` - Complete overview
