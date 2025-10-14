# Vercel Deployment Guide for Beloved Church Website

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- GitHub account with this repository
- Vercel account (sign up at https://vercel.com)
- Stripe account for payment processing

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)
1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `dev-tunmise/beloved-church`
4. Vercel will auto-detect Next.js settings
5. Configure Environment Variables (see below)
6. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### 3. Environment Variables Setup

**IMPORTANT:** Add these in Vercel Dashboard → Project Settings → Environment Variables

#### Required for All Environments:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (or pk_live_... for production)
STRIPE_SECRET_KEY=sk_test_... (or sk_live_... for production)
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=Beloved Church
NEXT_PUBLIC_CHURCH_EMAIL=info@belovedchurch.org
NEXT_PUBLIC_CHURCH_PHONE=+1-555-123-4567
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

#### Optional:
```
YOUTUBE_API_KEY=your_youtube_api_key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/belovedchurch
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/belovedchurch
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/belovedchurch
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxxxxxxx
```

### 4. Custom Domain Setup

#### Using Vercel (Recommended)
1. In Vercel Dashboard → Project → Settings → Domains
2. Add your domain (e.g., `belovedchurch.org`)
3. Follow Vercel's DNS instructions
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain

#### Using Cloudflare + Vercel
1. Buy domain from any registrar (Namecheap, Google Domains, Bluehost, etc.)
2. Add domain to Cloudflare
3. In Cloudflare DNS, add CNAME record:
   - Name: `@` (or `www`)
   - Target: `cname.vercel-dns.com`
   - Proxy status: DNS only (gray cloud)
4. In Vercel, add the custom domain
5. Enable Cloudflare proxy (orange cloud) after SSL is active

### 5. Staging/Preview Environment

Vercel automatically creates preview deployments for:
- Every pull request
- Every branch push

**Access preview URLs:**
- Main branch: `beloved-church.vercel.app`
- PR/Branch: `beloved-church-git-branch-name.vercel.app`

**Create a staging subdomain:**
1. Add `staging.yourdomain.com` in Vercel Domains
2. Point to a specific branch (e.g., `develop`)
3. Use separate Stripe test keys for staging

### 6. Production Checklist

Before going live:
- [ ] Update Stripe keys to production keys (`pk_live_...`, `sk_live_...`)
- [ ] Update `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Test all payment flows
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test contact forms and WhatsApp integration
- [ ] Set up Stripe webhooks (if using API routes)
- [ ] Enable Vercel Analytics (optional)
- [ ] Set up monitoring and error tracking

### 7. Continuous Deployment

Vercel automatically deploys when you:
1. Push to `main` branch → Production deployment
2. Create PR → Preview deployment
3. Push to other branches → Branch deployment

### 8. Build & Performance Optimization

Your site is configured with:
- ✅ Standalone output for faster cold starts
- ✅ SWC minification for smaller bundle sizes
- ✅ Image optimization for YouTube thumbnails
- ✅ Security headers
- ✅ React strict mode

### 9. Monitoring Your Site

**Vercel Dashboard provides:**
- Real-time logs
- Build analytics
- Performance metrics
- Deployment history

**Access logs:**
Vercel Dashboard → Project → Deployments → Click deployment → Logs

### 10. Troubleshooting

#### Build fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set

#### Environment variables not working
- Make sure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables

#### Images not loading
- Check `next.config.js` image domains
- Verify image paths are correct

#### Stripe not working
- Confirm keys are correct (test vs production)
- Check browser console for errors
- Verify NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is set

## 📱 Quick Commands Reference

```bash
# Local development
npm run dev

# Build locally to test
npm run build
npm start

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Pull environment variables from Vercel
vercel env pull

# View logs
vercel logs
```

## 🌐 Recommended Hosting Stack

**Current Setup:**
- **Frontend/Backend:** Vercel (Next.js)
- **Domain:** Buy from Namecheap/Google Domains/Bluehost
- **DNS/CDN:** Cloudflare (optional, for extra security/caching)
- **Payments:** Stripe
- **Email:** (Set up with your domain provider)

## 💰 Cost Estimate

- **Vercel:** Free for hobby projects, $20/month for Pro
- **Domain:** $10-15/year
- **Cloudflare:** Free (paid plans available)
- **Stripe:** Free (2.9% + $0.30 per transaction)

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Stripe Docs: https://stripe.com/docs

## 📧 Support

For issues with this deployment, contact your developer or create an issue in the GitHub repository.
