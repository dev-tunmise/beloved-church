# 📋 Vercel Deployment Checklist

Use this checklist to ensure smooth deployment to Vercel.

## ✅ Pre-Deployment Setup (Complete!)

- [x] **next.config.js** created and configured
- [x] **vercel.json** deployment configuration added
- [x] **.nvmrc** Node version specified (20)
- [x] **.env.local** local environment file created
- [x] **.gitignore** properly configured
- [x] **Build tested** locally (or ready to test)
- [x] **Documentation** created (DEPLOY.md, VERCEL_DEPLOYMENT_GUIDE.md)

## 📤 GitHub Push (Do This First)

- [ ] Commit all changes
  ```bash
  git add .
  git commit -m "Prepare site for Vercel deployment"
  ```
- [ ] Push to GitHub
  ```bash
  git push origin main
  ```
- [ ] Verify all files are on GitHub repository

## 🌐 Vercel Account Setup

- [ ] Create Vercel account at https://vercel.com
- [ ] Connect GitHub account to Vercel
- [ ] Authorize Vercel to access your repositories

## 🚀 Vercel Deployment

- [ ] Click "Add New Project" in Vercel dashboard
- [ ] Select `beloved-church` repository
- [ ] Verify Next.js is auto-detected
- [ ] Configure environment variables (see below)
- [ ] Click "Deploy"
- [ ] Wait for build to complete (2-3 minutes)
- [ ] Test deployment on preview URL

## 🔐 Environment Variables (Required)

Add these in Vercel Dashboard → Settings → Environment Variables:

### For Testing/Development:
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_test_...`
- [ ] `STRIPE_SECRET_KEY` = `sk_test_...`
- [ ] `NEXT_PUBLIC_SITE_URL` = Your Vercel preview URL
- [ ] `NEXT_PUBLIC_SITE_NAME` = `Beloved Church`
- [ ] `NEXT_PUBLIC_CHURCH_EMAIL` = Your church email
- [ ] `NEXT_PUBLIC_CHURCH_PHONE` = Your phone number
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` = WhatsApp with country code

### For Production (When Ready to Go Live):
- [ ] Update `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to `pk_live_...`
- [ ] Update `STRIPE_SECRET_KEY` to `sk_live_...`
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your custom domain

## 🧪 Testing Phase (Preview Deployment)

- [ ] Visit your Vercel preview URL
- [ ] Test all pages load correctly:
  - [ ] Homepage (/)
  - [ ] About (/about)
  - [ ] Blog (/blog)
  - [ ] Individual blog posts
  - [ ] Sermons (/sermons)
  - [ ] Giving (/giving)
  - [ ] Contact (/contact)
  - [ ] Shop (/shop)
- [ ] Test on mobile device
- [ ] Test dark mode toggle
- [ ] Test WhatsApp button
- [ ] Test Stripe integration (with test card: 4242 4242 4242 4242)
- [ ] Check all images load
- [ ] Verify sermon videos play
- [ ] Test navigation menu

## 🌍 Domain Setup (Optional - For Custom Domain)

### Step 1: Buy Domain
- [ ] Purchase domain from:
  - Namecheap (recommended): https://namecheap.com
  - Google Domains: https://domains.google
  - Bluehost: https://bluehost.com
  - Other registrar
- [ ] Choose domain name (e.g., belovedchurch.org)
- [ ] Enable WHOIS privacy protection

### Step 2: Connect to Vercel
- [ ] Go to Vercel Dashboard → Domains
- [ ] Click "Add Domain"
- [ ] Enter your custom domain
- [ ] Follow DNS configuration instructions

### Step 3: Configure DNS
Choose one option:

#### Option A: Direct to Vercel
- [ ] Add A record: `@` → `76.76.21.21`
- [ ] Add CNAME: `www` → `cname.vercel-dns.com`

#### Option B: Through Cloudflare (Recommended for better performance)
- [ ] Create free Cloudflare account
- [ ] Add domain to Cloudflare
- [ ] Update nameservers at registrar to Cloudflare's
- [ ] In Cloudflare DNS:
  - [ ] Add CNAME: `@` → `cname.vercel-dns.com` (Proxy OFF initially)
  - [ ] Add CNAME: `www` → `cname.vercel-dns.com` (Proxy OFF initially)
- [ ] Wait for Vercel to verify domain
- [ ] Enable Cloudflare proxy (turn to orange cloud)

### Step 4: Update Environment Variables
- [ ] In Vercel, update `NEXT_PUBLIC_SITE_URL` to your custom domain
- [ ] Redeploy site for changes to take effect

### Step 5: Wait for DNS Propagation
- [ ] Wait 2-24 hours for DNS to propagate worldwide
- [ ] Check status at https://dnschecker.org
- [ ] Test your custom domain

## 🎉 Going Live (Production)

### Pre-Launch Checklist:
- [ ] All testing completed successfully
- [ ] Stripe keys changed to production (`pk_live_...`, `sk_live_...`)
- [ ] Custom domain connected and working
- [ ] SSL certificate active (automatic with Vercel)
- [ ] All content reviewed and approved
- [ ] Contact information verified
- [ ] Social media links updated
- [ ] Terms of service and privacy policy added (if needed)

### Launch Day:
- [ ] Final deployment to production
- [ ] Test giving/payment flow with real card
- [ ] Announce website to congregation
- [ ] Share on social media
- [ ] Update church materials with new URL
- [ ] Send email to church members

## 📊 Post-Launch Monitoring

### Week 1:
- [ ] Monitor Vercel analytics
- [ ] Check for any errors in Vercel logs
- [ ] Verify payments are processing correctly
- [ ] Respond to any user feedback
- [ ] Monitor page load speeds

### Ongoing:
- [ ] Set up weekly content updates (blog posts, sermons)
- [ ] Monitor Stripe dashboard for donations
- [ ] Review analytics monthly
- [ ] Keep dependencies updated
- [ ] Backup important content

## 🔧 Troubleshooting

If something goes wrong:

### Build Fails
- [ ] Check Vercel build logs
- [ ] Verify all dependencies in package.json
- [ ] Ensure environment variables are set
- [ ] Test build locally: `npm run build`

### Environment Variables Not Working
- [ ] Verify variables are set in Vercel dashboard
- [ ] Check variable names (case-sensitive)
- [ ] Ensure `NEXT_PUBLIC_` prefix for client-side vars
- [ ] Redeploy after adding/changing variables

### Domain Not Working
- [ ] Verify DNS records are correct
- [ ] Check DNS propagation status
- [ ] Ensure domain is added in Vercel
- [ ] Wait 24-48 hours for full propagation
- [ ] Clear browser cache

### Payments Not Working
- [ ] Verify Stripe keys are correct
- [ ] Check test vs. production keys
- [ ] Review Stripe dashboard for errors
- [ ] Check browser console for JavaScript errors
- [ ] Ensure HTTPS is enabled (automatic with Vercel)

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Stripe Docs:** https://stripe.com/docs
- **Cloudflare Docs:** https://developers.cloudflare.com

- **Project Guides:**
  - [DEPLOY.md](./DEPLOY.md) - Quick deployment guide
  - [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) - Detailed guide
  - [PAYMENT_SETUP_GUIDE.md](./PAYMENT_SETUP_GUIDE.md) - Stripe setup
  - [CHURCH_ADMIN_GUIDE.md](./CHURCH_ADMIN_GUIDE.md) - Content management

## ✨ Success Indicators

You'll know deployment is successful when:
- ✅ Site loads at preview URL or custom domain
- ✅ All pages are accessible
- ✅ Images and videos display correctly
- ✅ Giving page accepts test payments
- ✅ Mobile version looks good
- ✅ No errors in browser console
- ✅ SSL certificate shows as secure (padlock icon)

## 🎊 Congratulations!

Once all items are checked, your church website is live and ready to serve your congregation online!

---

**Questions or issues?** Review the detailed guides or contact Vercel support.
