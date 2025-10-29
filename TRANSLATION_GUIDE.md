# 🌍 Multi-Language Translation Guide

## Overview
Your website now supports **4 languages**:
- 🇬🇧 **English** (en)
- 🇫🇷 **French** (Français) (fr)
- 🇪🇸 **Spanish** (Español) (es)
- 🇳🇬 **Yoruba** (Yorùbá) (yo)

## How It Works

### For Website Visitors
1. **Language Switcher**: A language selector appears in the navigation menu (both desktop and mobile)
2. **Automatic URLs**: When users select a language, the URL changes to include the language code:
   - English: `/en/`
   - French: `/fr/`
   - Spanish: `/es/`
   - Yoruba: `/yo/`
3. **Persistent Selection**: The selected language persists as users navigate through the site

### For Developers

#### Translation Files Location
All translations are stored in: `messages/[language].json`
- `messages/en.json` - English
- `messages/fr.json` - French
- `messages/es.json` - Spanish
- `messages/yo.json` - Yoruba

#### Current Translated Sections
✅ Navigation menu
✅ Home page content
✅ Giving page
✅ Sermons page
✅ Blog page
✅ Contact page
✅ Footer
✅ Common UI elements

## Adding Translations to Pages

### Step 1: Import the translation hook
```tsx
import { useTranslations } from 'next-intl';
```

### Step 2: Use translations in your component
```tsx
export default function MyPage() {
  const t = useTranslations('sectionName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Step 3: Add translations to JSON files
In `messages/en.json`:
```json
{
  "sectionName": {
    "title": "My Page Title",
    "description": "My page description"
  }
}
```

## Updating Existing Pages

### Before (Hardcoded Text):
```tsx
export default function Page() {
  return (
    <h1>Welcome to Our Church</h1>
  );
}
```

### After (Translated):
```tsx
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('home');
  
  return (
    <h1>{t('welcome')}</h1>
  );
}
```

## Page Structure Required

All pages must now be inside the `src/app/[locale]/` folder:

```
src/app/[locale]/
  ├── page.tsx          # Home page
  ├── layout.tsx        # Layout with translations provider
  ├── about/
  │   └── page.tsx
  ├── giving/
  │   └── page.tsx
  ├── sermons/
  │   └── page.tsx
  └── ... (other pages)
```

## Adding a New Language

1. **Create translation file**: `messages/new-locale.json`
2. **Update i18n config**: Edit `src/i18n.ts`
   ```ts
   export const locales = ['en', 'fr', 'es', 'yo', 'new-locale'] as const;
   ```
3. **Update language switcher**: Edit `src/app/_components/language-switcher.tsx`
   ```ts
   const languageNames: Record<string, string> = {
     // ... existing
     'new-locale': 'Language Name',
   };
   
   const languageFlags: Record<string, string> = {
     // ... existing
     'new-locale': '🏳️',
   };
   ```

## Translation Best Practices

### ✅ DO:
- Use translation keys that describe the content: `t('hero.title')` not `t('text1')`
- Group related translations under sections: `home`, `giving`, `contact`, etc.
- Keep translations consistent across all language files
- Use placeholders for dynamic content: `"Welcome {name}"`

### ❌ DON'T:
- Hardcode text directly in components
- Translate technical terms or brand names
- Mix translated and untranslated content

## Testing Translations

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Visit different language URLs**:
   - http://localhost:3000/en
   - http://localhost:3000/fr
   - http://localhost:3000/es
   - http://localhost:3000/yo

3. **Use the language switcher** in the navigation menu

## Common Translation Patterns

### Simple Text
```json
{
  "title": "Welcome"
}
```
```tsx
<h1>{t('title')}</h1>
```

### With Variables
```json
{
  "greeting": "Hello {name}"
}
```
```tsx
<p>{t('greeting', { name: 'John' })}</p>
```

### Rich Text (HTML)
```json
{
  "description": "Click <link>here</link> to continue"
}
```
```tsx
<p>{t.rich('description', {
  link: (chunks) => <a href="/url">{chunks}</a>
})}</p>
```

### Pluralization
```json
{
  "items": {
    "zero": "No items",
    "one": "{count} item",
    "other": "{count} items"
  }
}
```
```tsx
<p>{t('items', { count: 5 })}</p>
```

## Troubleshooting

### Issue: Translation not showing
**Solution**: Check that:
1. Translation key exists in all language JSON files
2. You're using the correct translation section name
3. The page is inside `[locale]` folder

### Issue: Language switcher not appearing
**Solution**: 
1. Ensure `<LanguageSwitcher />` is in Navigation component
2. Check that the component is imported correctly

### Issue: 404 error on page load
**Solution**:
1. Make sure middleware is configured correctly
2. Check that pages are in `src/app/[locale]/` folder
3. Verify `next.config.js` has no conflicting settings

## File Structure Summary

```
beloved-church/
├── messages/                   # Translation files
│   ├── en.json                # English
│   ├── fr.json                # French
│   ├── es.json                # Spanish
│   └── yo.json                # Yoruba
├── src/
│   ├── i18n.ts                # i18n configuration
│   ├── middleware.ts          # Language routing
│   └── app/
│       ├── [locale]/          # Language-specific routes
│       │   ├── layout.tsx     # With NextIntlClientProvider
│       │   └── page.tsx       # Home page
│       └── _components/
│           └── language-switcher.tsx  # Language selector UI
```

## Support

For questions or issues with translations:
1. Check this guide
2. Review the example in `TRANSLATION_EXAMPLE.tsx`
3. Refer to [next-intl documentation](https://next-intl-docs.vercel.app/)

---

**Note**: All existing pages need to be moved to `src/app/[locale]/` folder and updated to use translations for the multi-language feature to work correctly.
