# Quick Reference - Paystack Integration

## 🔑 Get Your Paystack Key

1. Visit: https://dashboard.paystack.com
2. Go to: Settings → API Keys & Webhooks
3. Copy your **Public Key**

## 📦 Install Package

```bash
pnpm add react-paystack
```

## 🔐 Add Environment Variable

Create `.env.local` in project root:

```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_key_here
```

## 🧪 Test Card Details

**Successful Payment:**
- Card Number: `4084 0840 8408 4081`
- CVV: `408`
- Expiry: Any future date (e.g., 12/25)
- PIN: `0000`
- OTP: `123456`

## 🛠 Update Product Prices

Edit `src/app/tdgi/page.tsx`:

```typescript
const products = [
  {
    id: 1,
    name: "Favour Soap",
    price: 5000, // ← Change this
    // ...
  },
];
```

## 📱 Update WhatsApp Number

Edit `src/lib/paystack-config.ts`:

```typescript
whatsappNumber: '2347069609892', // ← Change this (no + sign)
```

## 🎯 Pages Updated

1. **Giving Page:** `/giving` - Accept donations
2. **TDGI Products:** `/tdgi` - Sell products
3. **Success Page:** `/giving/success` - After donation

## ✅ Quick Test

1. Run: `pnpm dev`
2. Visit: http://localhost:3000/giving
3. Enter email and amount
4. Click "Give" button
5. Use test card above

## 🚀 Go Live Checklist

- [ ] Install `react-paystack`
- [ ] Add Paystack key to `.env.local`
- [ ] Test with test card
- [ ] Update product prices
- [ ] Verify WhatsApp redirect
- [ ] Add live key to production environment
- [ ] Test in production

## 📞 Need Help?

- Paystack Docs: https://paystack.com/docs
- Test Payments: https://paystack.com/docs/payments/test-payments

---

**Remember:** Test with `pk_test_` keys first, then switch to `pk_live_` for production!
