# Cloudflare Pages Deployment Guide

## Changes Made

The project has been configured for deployment to Cloudflare Pages with the following changes:

### 1. Next.js Configuration (`next.config.js`)
- Changed `output` from `'standalone'` to `'export'` for static site generation
- Set `images.unoptimized: true` (Cloudflare Pages doesn't support Next.js image optimization in static export mode)
- Removed `async headers()` (not compatible with static export)

### 2. Package Configuration (`package.json`)
- Added `cf-build` script: `npm install --legacy-peer-deps && npm run build`
- This handles the peer dependency conflicts during deployment

### 3. Cloudflare-specific Files
- Created `public/_headers` for security headers
- Created `public/_redirects` for SPA routing support

### 4. NPM Configuration (`.npmrc`)
- Already has `legacy-peer-deps=true` to handle React 19 RC dependency conflicts

## Cloudflare Pages Settings

Configure your Cloudflare Pages project with these settings:

### Build Settings
- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run cf-build`
- **Build output directory**: `out`

### Environment Variables
Make sure to add these in Cloudflare Pages dashboard:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_CHURCH_EMAIL`
- `NEXT_PUBLIC_CHURCH_PHONE`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

## Deployment Steps

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Configure for Cloudflare Pages deployment"
   git push
   ```

2. **In Cloudflare Pages Dashboard:**
   - Go to your project settings
   - Update Build command to: `npm run cf-build`
   - Update Build output directory to: `out`
   - Add all environment variables
   - Trigger a new deployment

## Important Notes

### Static Export Limitations
Since we're using static export (`output: 'export'`), be aware of these limitations:
- ❌ No API routes (no `/api/*` endpoints)
- ❌ No server-side rendering (SSR)
- ❌ No incremental static regeneration (ISR)
- ❌ No Image Optimization API
- ✅ All pages pre-rendered at build time
- ✅ Fast, CDN-cached static files
- ✅ Perfect for content-heavy sites

### If You Need Server-Side Features

If your app needs SSR, API routes, or other server-side features, you'll need to use **@cloudflare/next-on-pages** instead. This is more complex but supports full Next.js features. Let me know if you need this approach.

## Troubleshooting

### Dependency Errors
If you still get dependency errors, try:
1. Delete `node_modules` and `package-lock.json` locally
2. Run `npm install --legacy-peer-deps`
3. Commit the new `package-lock.json`
4. Push and redeploy

### Build Errors
- Check Cloudflare Pages logs for specific errors
- Ensure all environment variables are set correctly
- Verify Node.js version matches (currently using Node 20.19.2)

## Testing Locally

Before deploying, test the static export locally:

```bash
npm install --legacy-peer-deps
npm run build
```

This will create an `out` directory with your static site. You can test it with:

```bash
npx serve out
```

## Alternative: Vercel Deployment

If you prefer, this project is already configured for Vercel which handles Next.js better. Just connect your GitHub repo to Vercel and it will work with the current setup.
