# Beloved New Beginning Ministries - Church Website

A modern, full-featured church website built with Next.js 15, featuring blog posts, sermons, online giving, contact forms, and anointed products.

## ✨ Features

- 📝 **Blog System** - Share updates and articles with your congregation
- 🎥 **Sermon Archive** - Embed and organize YouTube sermon videos
- 💰 **Online Giving** - Integrated Stripe payment processing
- 📱 **Responsive Design** - Beautiful on all devices
- 🌙 **Dark Mode** - Theme switcher for user preference
- 📧 **Contact Forms** - Easy communication with church members
- 💬 **WhatsApp Integration** - Direct messaging button
- 🏪 **Church Shop** - Sell books, merchandise, or resources

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm package manager
- Stripe account (for payments)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/dev-tunmise/beloved-church.git
cd beloved-church

# Install dependencies
pnpm install

# Copy environment variables
copy .env.example .env.local

# Edit .env.local with your actual values
# Get Stripe keys from: https://dashboard.stripe.com/test/apikeys

# Run development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

### Deploy to Vercel (Recommended)

Your site is production-ready! See **[DEPLOY.md](./DEPLOY.md)** for step-by-step instructions.

Quick deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dev-tunmise/beloved-church)

### What's Included for Vercel:
- ✅ `next.config.js` - Optimized configuration
- ✅ `vercel.json` - Deployment settings
- ✅ `.nvmrc` - Node version specification
- ✅ Automatic HTTPS and CDN
- ✅ Preview deployments for every push

## 📖 Documentation

- **[DEPLOY.md](./DEPLOY.md)** - Quick deployment guide
- **[VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)** - Comprehensive deployment documentation
- **[PAYMENT_SETUP_GUIDE.md](./PAYMENT_SETUP_GUIDE.md)** - Configure Stripe payments
- **[SERMON_SETUP_GUIDE.md](./SERMON_SETUP_GUIDE.md)** - Add and manage sermons
- **[CHURCH_ADMIN_GUIDE.md](./CHURCH_ADMIN_GUIDE.md)** - Admin guide for church staff
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Technical overview

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Payments:** Stripe
- **Content:** Markdown (via remark)
- **Video:** YouTube embeds (react-player)
- **Deployment:** Vercel

## 📁 Project Structure

```
beloved-church/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog listing
│   │   ├── sermons/      # Sermons page
│   │   ├── giving/       # Online giving
│   │   ├── contact/      # Contact form
│   │   ├── shop/         # Church shop
│   │   └── _components/  # Reusable components
│   ├── lib/              # Utilities and helpers
│   └── interfaces/       # TypeScript interfaces
├── public/               # Static assets
├── _posts/               # Blog posts (Markdown)
├── .env.local           # Environment variables (create from .env.example)
├── next.config.js       # Next.js configuration
└── vercel.json          # Vercel deployment config
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` with these values:

```env
# Stripe (required for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Beloved Church

# Contact Information
NEXT_PUBLIC_CHURCH_EMAIL=info@belovedchurch.org
NEXT_PUBLIC_CHURCH_PHONE=+1-555-123-4567
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

See `.env.example` for all available options.

## 📝 Adding Content

### Blog Posts
1. Create a new `.md` file in `_posts/`
2. Add frontmatter (title, date, excerpt, etc.)
3. Write content in Markdown
4. Post appears automatically on `/blog`

### Sermons
1. Upload sermon to YouTube
2. Update `src/app/sermons/page.tsx`
3. Add sermon object with YouTube URL
4. Thumbnail auto-generated from YouTube

## 🎨 Customization

### Colors & Branding
Edit `src/app/globals.css` and `tailwind.config.ts`

### Navigation
Update `src/app/_components/navigation.tsx`

### Footer
Modify `src/app/_components/footer.tsx`

### Content
All page content is in `src/app/[page]/page.tsx` files

## 📱 Features in Detail

### Online Giving
- Stripe Checkout integration
- Secure payment processing
- Multiple payment methods
- Receipt generation

### Sermon Management
- YouTube video embeds
- Automatic thumbnails
- Organized by date
- Searchable archive

### Blog System
- Markdown-based posts
- SEO-friendly
- Category support
- RSS feed ready

### Contact Form
- Email integration ready
- Form validation
- WhatsApp quick contact

## 🚢 Going to Production

See **[DEPLOY.md](./DEPLOY.md)** for the complete checklist:

1. ✅ Site is Vercel-ready
2. Get Stripe production keys
3. Deploy to Vercel
4. Add environment variables
5. Connect custom domain
6. Test all features
7. Go live! 🎉

## 💰 Hosting Costs

- **Vercel:** Free (hobby) or $20/month (pro)
- **Domain:** $10-15/year
- **Stripe:** Free (2.9% + $0.30 per transaction)
- **Total:** Can start completely free!

## 🆘 Support & Help

- **Deployment Issues:** See [DEPLOY.md](./DEPLOY.md)
- **Payment Setup:** See [PAYMENT_SETUP_GUIDE.md](./PAYMENT_SETUP_GUIDE.md)
- **General Questions:** See [CHURCH_ADMIN_GUIDE.md](./CHURCH_ADMIN_GUIDE.md)

## 📄 License

This project is based on the Next.js blog starter example and is customized for church use.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org) by Vercel
- [Tailwind CSS](https://tailwindcss.com)
- [Stripe](https://stripe.com)
- [React Player](https://github.com/cookpete/react-player)

---

**Ready to deploy?** See [DEPLOY.md](./DEPLOY.md) to get started! 🚀


Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example blog-starter blog-starter-app
```

```bash
yarn create next-app --example blog-starter blog-starter-app
```

```bash
pnpm create next-app --example blog-starter blog-starter-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
