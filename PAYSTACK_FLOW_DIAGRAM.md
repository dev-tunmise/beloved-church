# Paystack Integration Flow Diagram

## 🎁 GIVING PAGE FLOW

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER JOURNEY                            │
└─────────────────────────────────────────────────────────────────┘

1. User visits /giving
   ↓
2. Fills in form:
   ├─ Email (required)
   ├─ Name (optional)
   ├─ Phone (optional)
   ├─ Amount
   ├─ Giving Type (Tithe/Offering/Missions/Building)
   └─ Frequency (One-time/Monthly)
   ↓
3. Clicks "Give ₦X,XXX - Secure Payment" button
   ↓
4. Paystack modal opens
   ↓
5. User enters card details
   ↓
6. Payment processed by Paystack
   ↓
7. ✅ SUCCESS → Redirect to /giving/success
   │  ├─ Shows transaction reference
   │  ├─ Shows amount paid
   │  ├─ Shows giving type
   │  └─ Email receipt sent automatically
   │
   OR
   │
   ❌ FAILED/CANCELLED → Modal closes
      └─ User returns to form (can retry)

┌─────────────────────────────────────────────────────────────────┐
│                      TECHNICAL FLOW                             │
└─────────────────────────────────────────────────────────────────┘

giving/page.tsx
   ↓ imports
usePaystackDonation hook
   ↓ uses
PaystackDonationButton component
   ↓ triggers
initializePayment()
   ↓ calls Paystack API with
   ├─ Public Key (from env)
   ├─ Amount (in kobo)
   ├─ Email
   ├─ Metadata (giving type, frequency, etc.)
   └─ Success/Close callbacks
   ↓ on success
redirectToSuccess()
   ↓ navigates to
/giving/success?reference=XXX&type=tithe&amount=5000
```

---

## 🛍️ TDGI PRODUCTS PAGE FLOW

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER JOURNEY                            │
└─────────────────────────────────────────────────────────────────┘

1. User visits /tdgi
   ↓
2. Browses products
   ↓
3. Clicks "Buy Now with Paystack" on a product
   ↓
4. Purchase modal opens
   ├─ Shows product name & price
   ├─ Email field (required)
   ├─ Name field (optional)
   └─ Phone field (optional)
   ↓
5. User fills in email and clicks "Proceed to Payment"
   ↓
6. Paystack modal opens
   ↓
7. User enters card details
   ↓
8. Payment processed by Paystack
   ↓
9. ✅ SUCCESS → Redirect to WhatsApp
   │  ├─ Opens WhatsApp in new tab
   │  ├─ Pre-filled message with:
   │  │  ├─ Product name
   │  │  ├─ Amount paid
   │  │  └─ Payment reference
   │  └─ User continues conversation with church admin
   │
   OR
   │
   ❌ FAILED/CANCELLED → Modal closes
      └─ User can retry or use "Order via WhatsApp" button

┌─────────────────────────────────────────────────────────────────┐
│                      TECHNICAL FLOW                             │
└─────────────────────────────────────────────────────────────────┘

tdgi/page.tsx
   ↓ imports
usePaystackProduct hook
   ↓ uses
PaystackProductButton component
   ↓ opens
ProductPurchaseModal
   ↓ triggers
processPaymentWithWhatsApp()
   ↓ calls
initializePayment()
   ↓ calls Paystack API with
   ├─ Public Key (from env)
   ├─ Amount (in kobo)
   ├─ Email
   ├─ Metadata (product name, id, category, etc.)
   └─ Success/Close callbacks
   ↓ on success
redirectToWhatsApp()
   ↓ opens
https://wa.me/2347069609892?text=[payment confirmation message]
```

---

## 🔄 ALTERNATIVE FLOWS

### If Paystack Not Configured:
```
User clicks "Buy Now with Paystack"
   ↓
System checks: isPaystackConfigured()
   ↓ if FALSE
Alert: "Payment system not configured"
   ↓
Automatically opens WhatsApp (fallback)
   └─ User can place order via WhatsApp directly
```

### Fallback WhatsApp Option:
```
Every product has two buttons:
   ├─ "Buy Now with Paystack" (primary)
   └─ "Order via WhatsApp" (fallback - always available)

User can choose to skip Paystack and order directly via WhatsApp
```

---

## 📊 DATA FLOW

### Giving Page - Data Sent to Paystack:
```javascript
{
  email: "user@example.com",
  amount: 500000, // ₦5,000 in kobo (₦5,000 × 100)
  reference: "DON-1234567890-abc123",
  metadata: {
    custom_fields: [
      { display_name: "Giving Type", value: "tithe" },
      { display_name: "Frequency", value: "one-time" },
      { display_name: "Church", value: "BELOVED New Beginning Ministries" },
      { display_name: "First Name", value: "John" },
      { display_name: "Last Name", value: "Doe" },
      { display_name: "Phone", value: "+234..." }
    ]
  }
}
```

### TDGI Page - Data Sent to Paystack:
```javascript
{
  email: "customer@example.com",
  amount: 500000, // ₦5,000 in kobo
  reference: "PROD-1234567890-xyz789",
  metadata: {
    custom_fields: [
      { display_name: "Product Name", value: "Favour Soap" },
      { display_name: "Product ID", value: "1" },
      { display_name: "Business", value: "TDGI Enterprise" },
      { display_name: "Category", value: "Soaps" },
      { display_name: "First Name", value: "Jane" },
      { display_name: "Last Name", value: "Smith" },
      { display_name: "Phone", value: "+234..." }
    ]
  }
}
```

---

## 🔐 SECURITY FLOW

```
┌─────────────────────────────────────────────────────────────────┐
│                    SECURITY LAYERS                              │
└─────────────────────────────────────────────────────────────────┘

Frontend (Your Website)
   ├─ Public Key only (safe to expose)
   ├─ No secret keys in code
   └─ Amount validation
      ↓ HTTPS
Paystack Payment Gateway
   ├─ SSL Encryption
   ├─ PCI-DSS Compliance
   ├─ Card data handling
   ├─ Fraud detection
   └─ 3D Secure authentication
      ↓ Secure Connection
Bank / Card Network
   ├─ Transaction authorization
   └─ Fund settlement
      ↓
Your Bank Account
   └─ Automatic settlements

┌─────────────────────────────────────────────────────────────────┐
│                    WHAT'S STORED WHERE                          │
└─────────────────────────────────────────────────────────────────┘

Your Website:
   ├─ Public key (environment variable)
   └─ Basic transaction metadata

Paystack Dashboard:
   ├─ Complete transaction history
   ├─ Customer emails
   ├─ Payment amounts
   ├─ Transaction references
   └─ Custom metadata

Your Server:
   └─ Nothing! (All handled by Paystack)

Customer's Email:
   └─ Receipt from Paystack
```

---

## 🎯 SUCCESS CRITERIA

### Giving Page Success:
```
✅ Payment completed
   ↓
✅ User sees success page
   ↓
✅ Email receipt sent
   ↓
✅ Transaction visible in Paystack dashboard
   ↓
✅ Funds will be settled to church bank account
```

### TDGI Page Success:
```
✅ Payment completed
   ↓
✅ WhatsApp opens with pre-filled message
   ↓
✅ Email receipt sent to customer
   ↓
✅ Church admin receives WhatsApp message
   ↓
✅ Transaction visible in Paystack dashboard
   ↓
✅ Funds will be settled to church bank account
   ↓
✅ Admin can fulfill order via WhatsApp chat
```

---

## 📱 MOBILE vs DESKTOP FLOW

### Desktop:
```
User clicks button → Paystack modal opens → User pays → Success action
```

### Mobile:
```
User clicks button → Redirects to Paystack mobile page → User pays → Redirects back → Success action
```

Both flows are handled automatically by Paystack! 🎉

---

## 🔄 WEBHOOK FLOW (Optional - Not Yet Implemented)

For advanced use cases, you can add webhooks:

```
Paystack processes payment
   ↓ sends webhook to
Your Backend API (if implemented)
   ↓ verifies transaction
   ↓ stores in database
   ↓ triggers email
   └─ updates order status
```

This is optional - Paystack already sends email receipts! 📧
