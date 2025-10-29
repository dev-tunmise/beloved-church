# Quick Translation Conversion Cheat Sheet

## For Any Page or Component

### 1. Add Required Imports
```typescript
'use client'; // Only for client components

import { useTranslations } from 'next-intl';
```

### 2. Initialize Translation Hooks
```typescript
export default function MyPage() {
  const t = useTranslations('mySection'); // Your page section
  const tCommon = useTranslations('common'); // Common strings
  const tNav = useTranslations('nav'); // Navigation items
  
  // ... rest of component
}
```

### 3. Replace Hardcoded Strings

| Before | After |
|--------|-------|
| `<h1>About Us</h1>` | `<h1>{t('title')}</h1>` |
| `<p>Welcome to our church</p>` | `<p>{t('description')}</p>` |
| `<button>Learn More</button>` | `<button>{tCommon('learnMore')}</button>` |
| `<Link href="/about">About</Link>` | `<Link href="/about">{tNav('about')}</Link>` |

### 4. Handle Dynamic Content

**With Variables:**
```typescript
// JSON: "greeting": "Hello, {name}!"
<p>{t('greeting', { name: userName })}</p>
```

**With Styled Parts:**
```typescript
// JSON: "title": "About {church}"
// JSON: "church": "Beloved New Beginning"
<h1>
  {t('title').split('{church}')[0]}
  <span className="highlight">{t('church')}</span>
</h1>
```

**With Numbers/Dates:**
```typescript
// JSON: "members": "We have {count} members"
<p>{t('members', { count: memberCount })}</p>
```

## Translation Key Structure

```json
{
  "sectionName": {
    "title": "Main Title",
    "subtitle": "Subtitle text",
    "hero": {
      "badge": "Badge Text",
      "title": "Hero Title",
      "subtitle": "Hero Subtitle"
    },
    "nested": {
      "deep": {
        "value": "Deeply nested value"
      }
    }
  }
}
```

**Access with:**
```typescript
const t = useTranslations('sectionName');

t('title')                    // "Main Title"
t('hero.badge')               // "Badge Text"
t('nested.deep.value')        // "Deeply nested value"
```

## Common Sections

### Navigation
```typescript
const tNav = useTranslations('nav');

tNav('home')      // Home
tNav('about')     // About
tNav('sermons')   // Sermons
tNav('blog')      // Blog
tNav('contact')   // Contact
tNav('giving')    // Giving
tNav('tdgi')      // TDGI
```

### Common Strings
```typescript
const tCommon = useTranslations('common');

tCommon('learnMore')   // Learn More
tCommon('readMore')    // Read More
tCommon('viewAll')     // View All
tCommon('loading')     // Loading...
tCommon('error')       // Something went wrong
tCommon('back')        // Back
tCommon('next')        // Next
tCommon('submit')      // Submit
```

### Footer
```typescript
const tFooter = useTranslations('footer');

tFooter('about')       // About Us
tFooter('aboutText')   // Description text
tFooter('quickLinks')  // Quick Links
tFooter('connect')     // Connect With Us
tFooter('copyright')   // Copyright text
```

## Page-Specific Examples

### About Page
```typescript
const t = useTranslations('about');

t('hero.badge')              // "Our Story"
t('hero.title')              // "About {beloved}"
t('hero.beloved')            // "Beloved New Beginning"
t('vision.title')            // "Our Vision"
t('mission.description')     // Mission text
t('coreValues.title')        // "Our Core Values"
t('leadership.title')        // "Our Leadership"
```

### Sermons Page
```typescript
const t = useTranslations('sermons');

t('hero.badge')              // "Watch & Learn"
t('hero.title')              // "Sermons & {messages}"
t('hero.messages')           // "Messages"
t('categories.all')          // "All Messages"
t('categories.sermon')       // "Sermons"
t('liveStream.title')        // "Live Worship Service"
```

### Blog Page
```typescript
const t = useTranslations('blog');

t('hero.badge')              // "Our Blog"
t('hero.title')              // "Articles & {insights}"
t('hero.insights')           // "Insights"
t('viewAll')                 // "View All Articles"
t('readMore')                // "Read More"
```

### Contact Page
```typescript
const t = useTranslations('contact');

t('hero.badge')              // "Get In Touch"
t('hero.title')              // "Contact {us}"
t('form.name')               // "Your Name"
t('form.email')              // "Your Email"
t('form.send')               // "Send Message"
t('info.visitUs')            // "Visit Us"
```

### TDGI Page
```typescript
const t = useTranslations('tdgi');

t('hero.badge')              // "Faith-Based Products"
t('hero.title')              // "TDGI {anointed} Products"
t('hero.anointed')           // "Anointed"
t('products.title')          // "Our Products"
t('orderSection.whatsapp')   // "Order via WhatsApp"
```

### Giving Page
```typescript
const t = useTranslations('giving');

t('hero.badge')              // "Give Back"
t('hero.title')              // "Give {generously}"
t('form.amount')             // "Amount"
t('form.name')               // "Full Name"
t('form.donate')             // "Proceed to Donate"
```

## Complete Page Template

```typescript
'use client';

import { useTranslations } from 'next-intl';
import Container from "@/app/_components/container";

export default function MyPage() {
  const t = useTranslations('myPage');
  const tCommon = useTranslations('common');
  
  return (
    <main>
      {/* Hero Section */}
      <section>
        <Container>
          <div>
            <span>{t('hero.badge')}</span>
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.subtitle')}</p>
            <button>{tCommon('learnMore')}</button>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section>
        <Container>
          <h2>{t('content.title')}</h2>
          <p>{t('content.description')}</p>
        </Container>
      </section>
    </main>
  );
}
```

## Testing Checklist

After converting a page:

- [ ] Page loads without errors
- [ ] All text displays correctly in English
- [ ] Switch to French - text updates
- [ ] Switch to Spanish - text updates
- [ ] Switch to Yoruba - text updates
- [ ] Refresh page - language persists
- [ ] Navigate to other pages - language persists
- [ ] Check mobile view
- [ ] Check all buttons/links work

## Troubleshooting

**Error: "useTranslations can only be used in Client Components"**
- Solution: Add `'use client';` at top of file

**Error: Missing translation key**
- Check spelling of key in translation file
- Ensure key exists in all language files
- Check nested structure matches

**Text not updating on language change**
- Verify component is using `useTranslations()` hook
- Check that translation keys exist in JSON file
- Clear browser cache and cookies

**Mixed languages appearing**
- Some components not converted yet
- Check all components use `t()` function
- Ensure no hardcoded strings remain

## Quick Wins

These are the easiest/fastest things to convert:

1. **Buttons:** `Learn More`, `Read More`, `View All`
   ```typescript
   <button>{tCommon('learnMore')}</button>
   ```

2. **Navigation items:** Already done! ✅

3. **Footer links:** Already done! ✅

4. **Hero badges:** Simple text replacement
   ```typescript
   <span>{t('hero.badge')}</span>
   ```

5. **Section titles:**
   ```typescript
   <h2>{t('section.title')}</h2>
   ```

---

**Remember:** The translation system is already working globally. You just need to replace hardcoded strings with `t()` function calls and ensure the keys exist in all language JSON files!
