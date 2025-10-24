# 🚀 Deploy to Vercel - Quick Start

Your site is now ready for Vercel deployment! Follow these simple steps:

## Step 1: Push to GitHub (if not already done)

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 2: Deploy to Vercel

### Option A: One-Click Deploy (Easiest)

Click this button to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dev-tunmise/beloved-church)

### Option B: Manual Deploy (Recommended)

1. Go to https://vercel.com/login
2. Sign in with GitHub
3. Click "Add New Project"
4. Select `beloved-church` repository
5. Vercel auto-detects Next.js ✅
6. **Before clicking Deploy**, add Environment Variables:

#### Required Environment Variables:

| Variable Name | Value | Where to Get |
|--------------|-------|--------------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_...` | [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys) |
| `STRIPE_SECRET_KEY` | `sk_test_...` | [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys) |
| `NEXT_PUBLIC_SITE_URL` | `https://your-app.vercel.app` | Will be your Vercel URL |
| `NEXT_PUBLIC_SITE_NAME` | `Beloved Church` | Your church name |
| `NEXT_PUBLIC_CHURCH_EMAIL` | `info@belovedchurch.org` | Your church email |
| `NEXT_PUBLIC_CHURCH_PHONE` | `+1-555-123-4567` | Your church phone |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `+1234567890` | WhatsApp number (with country code) |

7. Click **"Deploy"**
8. Wait 2-3 minutes ⏱️
9. Your site is live! 🎉

## Step 3: Get Your Free Preview URL

After deployment, Vercel gives you:
- **Preview URL:** `https://beloved-church.vercel.app`
- **Deployments:** Every push creates a new preview
- **Automatic HTTPS:** SSL certificate included ✅

## Step 4: Add Custom Domain (Optional - Do this later)

### Buying a Domain:
- **Namecheap** (recommended): $8-12/year - https://namecheap.com
- **Google Domains**: $12/year - https://domains.google
- **Bluehost**: $12-15/year - https://bluehost.com

### Connecting Your Domain to Vercel:

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `belovedchurch.org`)

2. **In Your Domain Registrar (Namecheap, etc.):**
   - Add these DNS records:

   **For root domain (belovedchurch.org):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait 24-48 hours** for DNS propagation (usually faster)

### Using Cloudflare (Optional - Better Performance):

1. Add domain to Cloudflare (free)
2. Point nameservers from registrar to Cloudflare
3. In Cloudflare DNS:
   ```
   Type: CNAME
   Name: @
   Target: cname.vercel-dns.com
   Proxy: OFF (gray cloud)
   ```
4. After Vercel verifies domain, turn Cloudflare proxy ON (orange cloud)

## Step 5: Staging Environment (Before Going Live)

**Create a development branch:**
```bash
git checkout -b staging
git push origin staging
```

Vercel automatically creates: `https://beloved-church-git-staging.vercel.app`

Use this for testing before production!

## Step 6: Production Checklist

Before going live with real payments:

- [ ] Change Stripe keys from test (`pk_test_...`) to live (`pk_live_...`)
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your custom domain
- [ ] Test all pages on mobile and desktop
- [ ] Test giving/payment flow with real card
- [ ] Verify contact forms work
- [ ] Check WhatsApp button links correctly
- [ ] Test sermon video playback

## 🎯 Your Deployment Status

- [x] ✅ `next.config.js` created
- [x] ✅ `vercel.json` configured
- [x] ✅ `.env.local` set up
- [x] ✅ `.nvmrc` added (Node 20)
- [x] ✅ Build tested locally
- [ ] ⏳ Pushed to GitHub
- [ ] ⏳ Deployed to Vercel
- [ ] ⏳ Environment variables added
- [ ] ⏳ Custom domain connected

## 🔧 Common Issues & Solutions

### Build Fails
**Problem:** Deployment fails with build errors  
**Solution:** 
1. Check Vercel build logs
2. Ensure all environment variables are set
3. Run `pnpm run build` locally first

### Environment Variables Not Working
**Problem:** Stripe keys or site URL undefined  
**Solution:**
1. Verify variables are in Vercel dashboard
2. Variables starting with `NEXT_PUBLIC_` are client-side
3. Redeploy after adding variables

### Images Not Loading
**Problem:** Sermon thumbnails or images broken  
**Solution:** 
- Check `next.config.js` has correct image domains
- YouTube images should work automatically

### Custom Domain Not Working
**Problem:** Domain shows "domain not found"  
**Solution:**
1. Wait 24-48 hours for DNS propagation
2. Check DNS records are correct
3. Use https://dnschecker.org to verify

## 📊 What You Get with Vercel

### Free Tier (Hobby):
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Preview deployments for every PR
- ✅ Built-in analytics
- ✅ Edge network (fast globally)

### Pro Tier ($20/month):
- Everything in Free, plus:
- ✅ 1TB bandwidth
- ✅ Team collaboration
- ✅ Password protection
- ✅ Advanced analytics
- ✅ Priority support

**Start with Free tier!** Upgrade later if needed.

## 🆘 Need Help?

1. **Vercel Docs:** https://vercel.com/docs
2. **Vercel Support:** https://vercel.com/support
3. **Full Guide:** See `VERCEL_DEPLOYMENT_GUIDE.md` in this repo

## 🎉 That's It!

Your church website is production-ready. Deploy and start sharing the good news online! 🙏

---

**Next Steps After Deployment:**
1. Share preview URL with church leadership for feedback
2. Set up Stripe in production mode when ready to accept donations
3. Connect custom domain for professional look
4. Promote website to congregation!
