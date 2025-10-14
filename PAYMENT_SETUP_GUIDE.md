# Payment Integration Guide for Beloved Church

This guide will help you set up payment processing for both the Giving page and the Natural Herbs Shop.

## Option 1: Stripe Integration (Recommended)

Stripe is the most popular and reliable payment processor with great features and security.

### Step 1: Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Click "Start now" to create a free account
3. Complete the registration process
4. Verify your email and business details

### Step 2: Get Your API Keys

1. Log in to your Stripe Dashboard
2. Click "Developers" in the left menu
3. Click "API keys"
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for testing)
   - **Secret key** (starts with `sk_test_` for testing)
5. Copy these keys

### Step 3: Add Keys to Your Project

1. Create a file called `.env.local` in your project root
2. Add your keys:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

### Step 4: Install Stripe Libraries

The libraries are already in package.json. Just run:
```bash
npm install --legacy-peer-deps
```

### Step 5: Update the Giving Page

Replace the payment section in `src/app/giving/page.tsx`:

```tsx
'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function GivingForm({ amount, givingType }: { amount: string; givingType: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) return;
    
    setLoading(true);

    try {
      // Call your backend to create a payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: parseFloat(amount) * 100, // Convert to cents
          type: givingType 
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm the payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (error) {
        alert('Payment failed: ' + error.message);
      } else if (paymentIntent.status === 'succeeded') {
        alert('Thank you for your generous gift!');
        // Clear form or redirect
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-4 rounded-lg mb-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-gold text-white py-4 rounded-lg font-bold"
      >
        {loading ? 'Processing...' : `Give $${amount}`}
      </button>
    </form>
  );
}

// Wrap your form with Elements provider
<Elements stripe={stripePromise}>
  <GivingForm amount={amount} givingType={givingType} />
</Elements>
```

### Step 6: Create Backend API Route

Create `src/app/api/create-payment-intent/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  try {
    const { amount, type } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: 'usd',
      metadata: {
        type: type, // tithe, offering, missions, etc.
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
```

### Step 7: Test Your Integration

1. Use test card numbers from Stripe:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - Any future expiry date and any CVC

2. Make a test payment
3. Check your Stripe Dashboard to see the payment

### Step 8: Go Live

1. Complete your Stripe account verification
2. Switch to live API keys (they start with `pk_live_` and `sk_live_`)
3. Update your `.env.local` file with live keys
4. Test with real payments (small amounts first!)

## Option 2: PayPal Integration

If you prefer PayPal:

### Step 1: Create PayPal Business Account

1. Go to [https://www.paypal.com/businessmanage/account/aboutBusiness](https://www.paypal.com/businessmanage/account/aboutBusiness)
2. Create a business account
3. Complete verification

### Step 2: Get Client ID

1. Go to [https://developer.paypal.com](https://developer.paypal.com)
2. Log in with your PayPal account
3. Go to "My Apps & Credentials"
4. Create a new app
5. Copy your Client ID

### Step 3: Install PayPal SDK

```bash
npm install @paypal/react-paypal-js
```

### Step 4: Implement PayPal Button

```tsx
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

<PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID! }}>
  <PayPalButtons
    createOrder={(data, actions) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: amount,
          },
        }],
      });
    }}
    onApprove={(data, actions) => {
      return actions.order!.capture().then((details) => {
        alert('Thank you for your donation!');
      });
    }}
  />
</PayPalScriptProvider>
```

## Option 3: Multiple Payment Options

You can offer both Stripe and PayPal:

```tsx
<div className="space-y-4">
  <button onClick={() => setPaymentMethod('stripe')}>
    Pay with Card
  </button>
  <button onClick={() => setPaymentMethod('paypal')}>
    Pay with PayPal
  </button>
</div>

{paymentMethod === 'stripe' && <StripePayment />}
{paymentMethod === 'paypal' && <PayPalPayment />}
```

## Security Best Practices

1. ✅ **Never expose secret keys** - Keep them in `.env.local` (not in git)
2. ✅ **Use HTTPS in production** - SSL certificate required
3. ✅ **Validate amounts on backend** - Don't trust client-side values
4. ✅ **Log all transactions** - Keep records for accounting
5. ✅ **Send email confirmations** - Receipt for donors
6. ✅ **Comply with regulations** - PCI DSS for card processing

## Testing Checklist

- [ ] Test successful payment
- [ ] Test declined payment
- [ ] Test different amounts
- [ ] Test all giving types
- [ ] Verify Stripe/PayPal dashboard shows payment
- [ ] Test on mobile devices
- [ ] Test email confirmations
- [ ] Test error handling

## Going Live Checklist

- [ ] Switch to live API keys
- [ ] Test with real small amount
- [ ] Set up webhook for payment confirmations
- [ ] Configure email notifications
- [ ] Set up accounting integration
- [ ] Train staff on refund process
- [ ] Add privacy policy for payments
- [ ] Add terms and conditions

## Support Resources

### Stripe
- Documentation: https://stripe.com/docs
- Support: https://support.stripe.com
- Test cards: https://stripe.com/docs/testing

### PayPal
- Documentation: https://developer.paypal.com/docs
- Support: https://www.paypal.com/us/business/contact-us

## Need Help?

Contact your web developer or:
1. Check Stripe/PayPal documentation
2. Join developer communities
3. Hire a payment integration specialist

---

**Remember**: Start with test mode, verify everything works, then switch to live mode!

God bless your ministry! 🙏
