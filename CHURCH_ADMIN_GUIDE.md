# Beloved Church Website

Welcome to the Beloved Church website! This is a modern, feature-rich church website built with Next.js, featuring a beautiful royal purple, gold, and white theme.

## 🌟 Features

### Core Pages
1. **Home Page** - Main landing page with upcoming events and quick links
2. **About Us** - Vision, mission, values, and leadership information
3. **Sermons** - Live streaming, past sermons, prophetic moments, and testimonies
4. **Blog** - Regular updates and articles (with CMS)
5. **Natural Herbs Shop** - E-commerce store for herbal products
6. **Giving** - Multiple giving options with secure payment integration
7. **Contact** - Contact form and church information

### Special Features
- ✅ **WhatsApp Chat Integration** - Floating WhatsApp button for direct messaging
- ✅ **YouTube & Facebook Integration** - Embedded video content
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Theme Customization** - Royal purple, gold, and white color scheme
- ✅ **Dark Mode Support** - Theme switcher included
- ✅ **Blog CMS** - Easy-to-update blog system using markdown files
- ✅ **E-commerce Ready** - Shop with cart and checkout functionality
- 🔄 **Multi-language Support** - Ready for translation integration

## 📁 Project Structure

```
src/
├── app/
│   ├── _components/       # Reusable components
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   ├── whatsapp-button.tsx
│   │   └── ...
│   ├── about/            # About Us page
│   ├── blog/             # Blog listing page
│   ├── checkout/         # Checkout page
│   ├── contact/          # Contact page
│   ├── giving/           # Giving page
│   ├── sermons/          # Sermons page
│   ├── shop/             # Shop page
│   └── posts/[slug]/     # Individual blog posts
├── interfaces/           # TypeScript interfaces
├── lib/                 # Utility functions
└── _posts/              # Blog posts (Markdown files)
```

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd beloved-church
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm run build
pnpm start
```

## 📝 How to Update Content

### Adding Blog Posts

1. Navigate to the `_posts` folder
2. Create a new markdown file (e.g., `my-new-post.md`)
3. Use this format:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description of your post"
coverImage: "/assets/blog/your-image.jpg"
date: "2024-01-15"
author:
  name: Pastor Name
  picture: "/assets/blog/authors/pastor.jpeg"
---

Your post content goes here...
```

### Updating Sermons

Edit `src/app/sermons/page.tsx`:
- Update the `sermons` array with new sermon data
- Add YouTube video IDs
- Update categories (sermon, prophetic, testimony)

### Updating Shop Products

Edit `src/app/shop/page.tsx`:
- Update the `products` array with new product information
- Add product images to `public/assets/products/`
- Update pricing and descriptions

### Customizing Contact Information

Update the following files:
- `src/app/_components/footer.tsx` - Footer contact info
- `src/app/_components/whatsapp-button.tsx` - WhatsApp phone number
- `src/app/contact/page.tsx` - Contact page details

## 🎨 Customizing Colors

The theme uses these main colors (defined in `tailwind.config.ts`):
- **Royal Purple**: `#6B46C1`
- **Gold**: `#D4AF37`
- **Light Purple**: `#9F7AEA`
- **Dark Purple**: `#553C9A`

To change colors, edit `tailwind.config.ts`:

```typescript
colors: {
  'royal-purple': '#6B46C1',
  'gold': '#D4AF37',
  // Add or modify colors here
}
```

## 💳 Payment Integration Setup

### For Giving Page

1. Sign up for a payment processor account (Stripe recommended)
2. Install Stripe:
```bash
pnpm add @stripe/stripe-js stripe
```

3. Add your Stripe keys to `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key_here
STRIPE_SECRET_KEY=your_secret_key_here
```

4. Update `src/app/giving/page.tsx` with Stripe integration

### For Shop Checkout

Similar setup as above, but update `src/app/checkout/page.tsx`

## 📺 YouTube Integration

### Setting Up Live Stream

1. Get your YouTube channel ID
2. Update `src/app/sermons/page.tsx`:
```tsx
src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
```

### Adding Past Sermons

Update the sermons array with your YouTube video IDs:
```tsx
{
  id: 1,
  title: "Sermon Title",
  videoId: "YOUR_VIDEO_ID", // From YouTube URL
  // ...
}
```

## 🌍 Multi-Language Support

To add language translation:

1. Install next-intl (already in package.json):
```bash
pnpm add next-intl
```

2. Create language files in `messages/` folder:
```
messages/
├── en.json
├── es.json
├── fr.json
```

3. Configure i18n in your app (documentation: https://next-intl-docs.vercel.app/)

## 📱 Social Media Links

Update social media links in:
- `src/app/_components/footer.tsx`
- `src/app/contact/page.tsx`

Replace placeholder URLs with your actual social media profiles.

## 🔧 Configuration Files

### Environment Variables

Create `.env.local` file:
```
# Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Other API Keys
YOUTUBE_API_KEY=your_key_here
```

### Site Metadata

Update `src/lib/constants.ts` for site-wide settings.

## 📦 Dependencies

Main dependencies:
- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **react-player** - Video playback
- **stripe** - Payment processing (to be configured)

## 🆘 Support & Troubleshooting

### Common Issues

1. **Build errors**: Run `pnpm install`
2. **Styling not working**: Ensure Tailwind is properly configured
3. **Images not loading**: Check file paths in `public/` folder

### Getting Help

For technical support, contact your web developer or visit:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Documentation: https://react.dev

## 📄 License

This project is proprietary and belongs to Beloved Church.

## 🙏 Credits

Built with love for Beloved Church
May this website bring glory to God and reach many souls for Christ!

---

**For Admin Training or Questions:**
Contact: [Your Developer Contact Info]
