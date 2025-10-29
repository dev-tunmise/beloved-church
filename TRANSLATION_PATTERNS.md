# Translation Patterns & Quick Reference

This guide provides copy-paste patterns for quickly adding translations to your pages.

## Pattern 1: Converting a Server Component

**BEFORE:**
```tsx
export default function MyPage() {
  return <div>Hardcoded Text</div>;
}
```

**AFTER:**
```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyPage() {
  const t = await getTranslations('mypage');
  return <div>{t('key')}</div>;
}
```

## Pattern 2: Converting a Client Component

**BEFORE:**
```tsx
export default function MyPage() {
  return <div>Hardcoded Text</div>;
}
```

**AFTER:**
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyPage() {
  const t = useTranslations('mypage');
  return <div>{t('key')}</div>;
}
```

## Pattern 3: Rich Text with Styled Elements

When you need to style part of the text:

**In JSON:**
```json
"title": "Welcome to {churchName}"
```

**In component:**
```tsx
{t.rich('title', {
  churchName: (chunks) => <span className="text-gold">{chunks}</span>
})}
```

## Pattern 4: Multiple Translation Namespaces

```tsx
const t = useTranslations('contact');
const tForm = useTranslations('contact.form');
const tInfo = useTranslations('contact.info');

// Use them:
<h1>{t('title')}</h1>
<label>{tForm('name')}</label>
<p>{tInfo('address')}</p>
```

## Pattern 5: Common Replacements

### Navigation
- `"Home"` → `{t('nav.home')}`
- `"About"` → `{t('nav.about')}`
- `"Contact"` → `{t('nav.contact')}`

### Buttons
- `"Learn More"` → `{t('common.learnMore')}`
- `"Read More"` → `{t('common.readMore')}`
- `"Submit"` → `{t('common.submit')}`

### Form fields
```tsx
// BEFORE
<input placeholder="Enter your name" />

// AFTER
<input placeholder={t('form.namePlaceholder')} />
```

## Quick Checklist for Each Page

For EACH page you update:

1. ✅ Add import at top:
   - Client component: `'use client';` + `import { useTranslations } from 'next-intl';`
   - Server component: `import { getTranslations } from 'next-intl/server';`

2. ✅ Get translation function:
   - Client: `const t = useTranslations('pagename');`
   - Server: `const t = await getTranslations('pagename');`

3. ✅ Find ALL hardcoded text strings

4. ✅ Replace each with `t('key')`

5. ✅ Test language switcher

6. ✅ Done!

## Example: Sermons Page Quick Update

In `src/app/sermons/page.tsx`:

**Step 1:** Add at top:
```tsx
'use client';
import { useTranslations } from 'next-intl';
```

**Step 2:** Inside component:
```tsx
const t = useTranslations('sermons');
const tHero = useTranslations('sermons.hero');
const tLive = useTranslations('sermons.liveStream');
const tCategories = useTranslations('sermons.categories');
```

**Step 3:** Replace all hardcoded text:
- `"Watch & Learn"` → `{tHero('badge')}`
- `"Sermons & Messages"` → `{tHero.rich('title', { messages: (c) => <span className="text-gold">{c}</span> })}`
- `"Live Worship Service"` → `{tLive('title')}`
- `"Join us every Sunday at 10:00 AM (GMT)"` → `{tLive('schedule')}`
- `"LIVE NOW"` → `{tLive('liveNow')}`
- `"Subscribe on YouTube"` → `{tLive('subscribe')}`
- `"All Messages"` → `{tCategories('all')}`
- `"Sermons"` → `{tCategories('sermon')}`
- `"Prophetic"` → `{tCategories('prophetic')}`
- `"Testimonies"` → `{tCategories('testimony')}`

## Example: Contact Page Quick Update

In `src/app/contact/page.tsx`:

**Replacements:**
- `"Get In Touch"` → `{tHero('badge')}`
- `"Contact Us"` → `{tHero.rich('title', { us: (c) => <span className="text-gold">{c}</span> })}`
- `"Your Name *"` → `{tForm('nameRequired')}`
- `"Email Address *"` → `{tForm('emailRequired')}`
- `"john@example.com"` → `{tForm('emailPlaceholder')}`
- `"Send Message"` → `{tForm('send')}`
- `"Visit Us"` → `{tInfo('visitUs')}`
- `"Call Us"` → `{tInfo('callUs')}`
- `"Email Us"` → `{tInfo('emailUs')}`
- `"Service Times"` → `{tInfo('serviceTimes')}`

## Example: Giving Page Quick Update

In `src/app/giving/page.tsx`:

Already `'use client'`, just add:
```tsx
const t = useTranslations('giving');
const tHero = useTranslations('giving.hero');
const tPartnership = useTranslations('giving.partnership');
const tForm = useTranslations('giving.form');
```

**Replacements:**
- `"Give Back"` → `{tHero('badge')}`
- `"Give Generously"` → `{tHero.rich('title', { generously: (c) => <span className="text-gold">{c}</span> })}`
- `"Join Us"` → `{tPartnership('badge')}`
- `"Become a Partner"` → `{tPartnership.rich('title', { partner: (c) => <span className="text-gold">{c}</span> })}`
- `"Amount"` → `{tForm('amount')}`
- `"Proceed to Donate"` → `{tForm('donate')}`
- `"Processing..."` → `{tForm('processing')}`
- `"One Time"` → `{tForm('oneTime')}`
- `"Monthly"` → `{tForm('monthly')}`

## Example: TDGI Page Quick Update

In `src/app/tdgi/page.tsx`:

```tsx
const t = useTranslations('tdgi');
const tHero = useTranslations('tdgi.hero');
const tAbout = useTranslations('tdgi.about');
const tProducts = useTranslations('tdgi.products');
const tOrder = useTranslations('tdgi.orderSection');
```

**Replacements:**
- `"Faith-Based Products"` → `{tHero('badge')}`
- `"TDGI Anointed Products"` → `{tHero.rich('title', { anointed: (c) => <span className="text-gold">{c}</span> })}`
- `"Purpose"`  → `{tProducts('purpose')}`
- `"Scripture"` → `{tProducts('scripture')}`
- `"Price"` → `{tProducts('price')}`
- `"Order Now"` → `{tProducts('orderNow')}`
- `"Order via WhatsApp"` → `{tOrder('whatsapp')}`
- `"Order via Email"` → `{tOrder('email')}`

## Example: Blog Page Quick Update

In `src/app/blog/page.tsx`:

```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('blog');
  const tHero = useTranslations('blog.hero');
  
  return (
    // Replace all hardcoded text...
  );
}
```

## Pro Tips

### 1. Search and Replace
Use your editor's find/replace feature:
- Find: `"Hardcoded Text"`
- Replace: `{t('key')}`

### 2. Keep Consistency
Use the same translation key structure across all pages:
- Hero sections: `pagename.hero.*`
- Forms: `pagename.form.*`
- Info sections: `pagename.info.*`

### 3. Test Frequently
After each section update, test the language switcher to ensure it works.

### 4. Don't Miss Hidden Text
Check for text in:
- Button labels
- Input placeholders
- Alt text
- ARIA labels
- Meta descriptions (if any)
- Error messages
- Success messages

## Common Mistakes to Avoid

❌ **DON'T:** Leave hardcoded strings
```tsx
<button>Submit</button>
```

✅ **DO:** Use translations
```tsx
<button>{t('common.submit')}</button>
```

❌ **DON'T:** Concatenate translated strings
```tsx
{t('welcome')} + " " + t('user')}
```

✅ **DO:** Use single translation with interpolation
```json
"welcomeUser": "Welcome {userName}"
```

❌ **DON'T:** Forget to import useTranslations
```tsx
export default function Page() {
  const t = useTranslations('page'); // Error!
}
```

✅ **DO:** Add the import and 'use client' directive
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('page'); // Works!
}
```

## Testing Checklist

After completing all updates:

- [ ] Homepage - Switch between all 4 languages
- [ ] About page - Switch between all 4 languages
- [ ] Sermons page - Switch between all 4 languages
- [ ] Contact page - Switch between all 4 languages
- [ ] Giving page - Switch between all 4 languages
- [ ] TDGI page - Switch between all 4 languages
- [ ] Blog page - Switch between all 4 languages
- [ ] Navigation - All links translate
- [ ] Footer - All text translates
- [ ] Forms - All labels and placeholders translate
- [ ] Buttons - All button text translates
- [ ] No hardcoded English text remains anywhere

## Done!

Once all checks pass, your site will have complete multilingual support that switches instantly without page refresh! 🎉
