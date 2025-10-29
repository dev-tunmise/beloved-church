# Global Translation Implementation Guide

## Overview
This document explains how language translation has been implemented globally across your Next.js app using `next-intl`.

## Architecture

### 1. Translation Provider Setup
Your app already has `NextIntlClientProvider` wrapping the entire application in:
- **`src/app/layout.tsx`** - Root layout that wraps all pages with translation context
- **`src/app/[locale]/layout.tsx`** - Locale-specific layout (currently disabled in routing)

This means **every page and component** automatically has access to translations.

### 2. Translation Files
All translation strings are stored in the `messages/` directory:
- `messages/en.json` - English translations (complete)
- `messages/fr.json` - French translations (partial - needs completion)
- `messages/es.json` - Spanish translations (needs completion)
- `messages/yo.json` - Yoruba translations (needs completion)

### 3. Language Switching
The `LanguageSwitcher` component (in `src/app/_components/language-switcher.tsx`) allows users to:
- Switch between English, French, Spanish, and Yorùbá
- Updates all text instantly using cookies
- Persists the language selection across page loads

## How to Use Translations in Any Component

### Step 1: Import useTranslations
```typescript
'use client'; // Required for client components

import { useTranslations } from 'next-intl';
```

### Step 2: Initialize the hook
```typescript
export default function MyComponent() {
  const t = useTranslations('sectionName'); // e.g., 'about', 'sermons', 'blog'
  const tCommon = useTranslations('common'); // For common strings
  
  return (
    // Your JSX
  );
}
```

### Step 3: Replace hardcoded strings
**Before:**
```tsx
<h1>About Us</h1>
<p>Welcome to our church</p>
<button>Learn More</button>
```

**After:**
```tsx
<h1>{t('title')}</h1>
<p>{t('description')}</p>
<button>{tCommon('learnMore')}</button>
```

## Translation Key Structure

The translation files use a nested structure:

```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "sermons": "Sermons"
  },
  "about": {
    "hero": {
      "badge": "Our Story",
      "title": "About {beloved}",
      "beloved": "Beloved New Beginning"
    },
    "vision": {
      "title": "Our Vision",
      "description": "To be a beacon..."
    }
  }
}
```

## Completed Pages

### ✅ About Page (`src/app/about/page.tsx`)
- Converted to use `useTranslations('about')`
- All hero section text now translates
- Vision & Mission sections use translation keys
- Pattern established for other sections

### Status of Other Pages

#### 🔧 Needs Translation Updates:
1. **Sermons Page** (`src/app/sermons/page.tsx`)
   - Keys available in `en.json` under `"sermons"`
   - Needs conversion from hardcoded strings to `t('key')`

2. **Blog Page** (`src/app/blog/page.tsx`)
   - Keys available in `en.json` under `"blog"`
   - Needs conversion from hardcoded strings to `t('key')`

3. **Contact Page** (`src/app/contact/page.tsx`)
   - Keys available in `en.json` under `"contact"`
   - Needs conversion from hardcoded strings to `t('key')`

4. **TDGI Page** (`src/app/tdgi/page.tsx`)
   - Keys available in `en.json` under `"tdgi"`
   - Needs conversion from hardcoded strings to `t('key')`

5. **Giving/Checkout Pages**
   - Keys available in `en.json` under `"giving"`
   - Needs conversion from hardcoded strings to `t('key')`

6. **Shared Components**
   - Footer, Navigation, WhatsApp Button
   - Keys available under `"footer"`, `"nav"`, `"common"`

## Pattern for Converting Pages

### Example: Converting Sermons Page

**Step 1:** Add 'use client' directive and import
```typescript
'use client';

import { useTranslations } from 'next-intl';
```

**Step 2:** Initialize translations in component
```typescript
export default function SermonsPage() {
  const t = useTranslations('sermons');
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  
  // ... rest of component
}
```

**Step 3:** Replace each hardcoded string
```typescript
// Before:
<span className="...">Watch & Learn</span>
<h1>Sermons & Messages</h1>

// After:
<span className="...">{t('hero.badge')}</span>
<h1>{t('hero.title').replace('{messages}', t('hero.messages'))}</h1>
```

### For strings with dynamic values (interpolation):
```typescript
// In translation file:
"title": "Welcome, {name}!"

// In component:
<h1>{t('title', { name: userName })}</h1>
```

### For strings with HTML formatting:
```typescript
// If translation contains HTML or needs styling:
<div dangerouslySetInnerHTML={{__html: t('richText')}} />
```

## Adding New Translations

### To add a new translatable string:

1. **Add to `messages/en.json`:**
```json
{
  "mySection": {
    "newKey": "My new text"
  }
}
```

2. **Add translations to other language files:**
```json
// messages/fr.json
{
  "mySection": {
    "newKey": "Mon nouveau texte"
  }
}
```

3. **Use in component:**
```typescript
const t = useTranslations('mySection');
<p>{t('newKey')}</p>
```

## Testing Language Switching

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open the app in browser**

3. **Click the language switcher** (flag icon in navigation)

4. **Select a language** (e.g., French)

5. **Navigate to different pages** - all translated text should update instantly

6. **Refresh the page** - language selection should persist

## What Happens When Language Changes

1. User clicks language switcher
2. Cookie `NEXT_LOCALE` is set to new language code
3. Page reloads with new locale
4. Root layout reads cookie and loads appropriate messages file
5. All `useTranslations()` hooks automatically use new messages
6. **ALL text across entire site updates** - no manual refresh needed

## Completing the Implementation

### TODO: Update Remaining Pages

For each page that needs translation:

1. Make it a client component (`'use client'`)
2. Import and use `useTranslations`
3. Replace each hardcoded string with translation key
4. Test language switching

### TODO: Complete Translation Files

The following files need French, Spanish, and Yoruba translations added:

- `messages/fr.json` - Add complete translations for all sections
- `messages/es.json` - Add complete translations for all sections  
- `messages/yo.json` - Add complete translations for all sections

Use `messages/en.json` as the reference for structure.

## Benefits of This Approach

✅ **Global by default** - Translation provider wraps entire app
✅ **Instant updates** - Language changes update all pages immediately
✅ **Type-safe** - TypeScript can validate translation keys
✅ **Maintainable** - All strings in one place per language
✅ **SEO-friendly** - Supports multiple locales
✅ **Persistent** - User language choice saved in cookie

## Next Steps

1. **Complete About page translation** (partially done)
2. **Update all remaining pages** following the pattern above
3. **Translate all component strings** (Footer, Navigation, etc.)
4. **Add translations to fr.json, es.json, yo.json**
5. **Test thoroughly** by switching languages and checking all pages

## Quick Reference

### Common translation keys:
```typescript
t('title')           // Page title
t('subtitle')        // Page subtitle
t('description')     // Description text
t('hero.badge')      // Hero badge text
t('hero.title')      // Hero title
tCommon('learnMore') // Common "Learn More" button
tCommon('readMore')  // Common "Read More" button
tCommon('loading')   // Loading text
tNav('home')         // Navigation - Home
```

## Support

Translation files location: `c:\Users\user\Desktop\beloved-church\messages\`
- Edit these JSON files to update translations
- Structure must match across all language files
- Use `{variable}` for dynamic content

---

**Remember:** Once a page is converted to use translations, it will automatically work with ALL languages - you just need to ensure the translation keys exist in all language files!
