# SEO Implementation Verification Checklist

## Pre-Handover Verification Guide for TechPotli Digital Website

### 📋 Quick Verification Methods

#### 1. **Check Meta Tags on Each Page**

**Method 1: Browser DevTools**
1. Open any page on your website
2. Right-click → "Inspect" or press `F12`
3. Go to the `<head>` section
4. Look for:
   - `<title>` tag
   - `<meta name="description">`
   - `<meta name="robots">`
   - `<meta name="googlebot">`
   - `<meta name="author">`
   - `<meta name="language">`
   - `<meta name="keywords">`
   - `<link rel="canonical">`

**Method 2: View Page Source**
1. Open any page
2. Right-click → "View Page Source" or `Ctrl+U`
3. Search for "title", "description", "canonical", "robots"

**Method 3: Online SEO Tools**
- Use: https://www.seoreviewtools.com/meta-tags-checker/
- Or: https://smallseotools.com/meta-tags-analyzer/

---

### 2. **Verify Google Tag Manager**

**Check in Browser:**
1. Open any page
2. Press `F12` → Go to "Console" tab
3. Type: `dataLayer` and press Enter
4. You should see GTM dataLayer object

**Check in Network Tab:**
1. `F12` → "Network" tab
2. Refresh page
3. Search for "gtm.js"
4. Should see request to: `https://www.googletagmanager.com/gtm.js?id=GTM-K79WJLLQ`

**Check in Page Source:**
- Search for "GTM-K79WJLLQ" - should appear twice (script + noscript)

---

### 3. **Verify Canonical URLs**

**For Each Page:**
1. View page source
2. Search for: `rel="canonical"`
3. Verify URL matches the current page URL exactly

**Expected Canonical URLs:**
- Home: `https://www.techpotlidigital.com/`
- About: `https://www.techpotlidigital.com/about`
- Services: `https://www.techpotlidigital.com/services`
- Live Projects: `https://www.techpotlidigital.com/live-projects`
- Blog: `https://www.techpotlidigital.com/blog`
- Packages: `https://www.techpotlidigital.com/packages`

**Service Pages:**
- `/services/website-design-development`
- `/services/seo-services`
- `/services/social-media-marketing`
- `/services/google-meta-ads`
- `/services/branding-creative-design`
- `/services/domain-hosting-support`
- `/services/full-stack-development`
- `/services/custom-software-development`
- `/services/crm-development`
- `/services/it-services`

**Package Pages:**
- `/packages/website-services`
- `/packages/website-leads`
- `/packages/ecommerce`
- `/packages/social-seo`
- `/packages/one-time-setup`
- `/packages/full-stack-website-services`
- `/packages/full-stack`

---

### 4. **Verify Schema Markup (Homepage Only)**

**Check Homepage:**
1. Go to homepage
2. View page source
3. Search for: `application/ld+json`
4. Should find Organization schema with:
   - name: "Techpotli Digital"
   - contactPoint with phone numbers
   - sameAs with social media links

**Validate Schema:**
- Use: https://validator.schema.org/
- Or: https://search.google.com/test/rich-results

---

### 5. **Verify Open Graph Tags (Homepage Only)**

**Check Homepage:**
1. View page source
2. Search for: `property="og:`
3. Should find:
   - `og:title`
   - `og:description`
   - `og:type`
   - `og:url`
   - `og:site_name`
   - `og:image`

**Test OG Tags:**
- Use: https://www.opengraph.xyz/
- Or: https://developers.facebook.com/tools/debug/

---

### 6. **Verify Twitter Cards (Homepage Only)**

**Check Homepage:**
1. View page source
2. Search for: `name="twitter:`
3. Should find:
   - `twitter:card`
   - `twitter:title`
   - `twitter:description`
   - `twitter:image`

**Test Twitter Cards:**
- Use: https://cards-dev.twitter.com/validator

---

### 7. **Verify Sitemap**

**Check Sitemap:**
1. Go to: `https://www.techpotlidigital.com/sitemap.xml`
2. Should see XML with all pages listed
3. Verify all important pages are included

**Validate Sitemap:**
- Use: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Or: Google Search Console → Sitemaps

---

### 8. **Verify Social Media Links in Footer**

**Check Footer:**
1. Scroll to bottom of any page
2. Verify social media icons are visible
3. Click each icon and verify links:
   - Facebook: `https://www.facebook.com/profile.php?id=61584717418829`
   - Instagram: `https://www.instagram.com/techpotlidigitalofficial/`
   - Pinterest: `https://www.pinterest.com/TechpotliDigital/`
   - YouTube: `https://www.youtube.com/@TechPotliDigital`

---

### 9. **Verify Favicon**

**Check:**
1. View page source
2. Search for: `rel="icon"`
3. Should find: `<link rel="icon" href="/favicon.ico" type="image/x-icon">`
4. Check browser tab - should show favicon

---

## 📝 Page-by-Page Verification Checklist

### Homepage (`/`)
- [ ] Title: "Best Digital Marketing Company in Delhi | Website Design Services | SEO, SMO, PPC"
- [ ] Description matches requirements
- [ ] OG tags present (6 tags)
- [ ] Twitter cards present (4 tags)
- [ ] Schema markup present
- [ ] Canonical: `https://www.techpotlidigital.com/`
- [ ] GTM code present
- [ ] Favicon present

### About Page (`/about`)
- [ ] Title: "Digital Marketing Services in Delhi for Web Development Company in Delhi"
- [ ] Description matches requirements
- [ ] Canonical: `https://www.techpotlidigital.com/about`
- [ ] No OG tags (only homepage has them)
- [ ] No Twitter cards (only homepage has them)

### Services Page (`/services`)
- [ ] Title: "Affordable Digital Marketing Services India | Complete Growth Solutions"
- [ ] Description matches requirements
- [ ] Canonical: `https://www.techpotlidigital.com/services`

### Live Projects Page (`/live-projects`)
- [ ] Title: "Digital Marketing Projects & Case Studies | Best Website & SEO Results in India"
- [ ] Description matches requirements
- [ ] Canonical: `https://www.techpotlidigital.com/live-projects`

### Blog Page (`/blog`)
- [ ] Title and description present
- [ ] Canonical: `https://www.techpotlidigital.com/blog`

### Packages Page (`/packages`)
- [ ] Title and description present
- [ ] Canonical: `https://www.techpotlidigital.com/packages`

### Service Pages (Check each `/services/[slug]`)
- [ ] Website Design & Development - Title and description correct
- [ ] SEO Services - Title and description correct
- [ ] Social Media Marketing - Title and description correct
- [ ] Google & Meta Ads - Title and description correct
- [ ] Branding & Creative Design - Title and description correct
- [ ] Domain, Hosting & Support - Title and description correct
- [ ] Full Stack Development - Title and description correct
- [ ] Custom Software Development - Title and description correct
- [ ] CRM Development - Title and description correct
- [ ] IT Services - Title and description correct
- [ ] Each has correct canonical URL

### Package Pages (Check each `/packages/[slug]`)
- [ ] Website Services - Title and description correct
- [ ] Website + Leads - Title and description correct
- [ ] E-Commerce - Title and description correct
- [ ] Social + SEO + GMB - Title and description correct
- [ ] One-Time Setup - Title and description correct
- [ ] Full Stack Website Services - Title and description correct
- [ ] Full Stack - Title and description correct
- [ ] Each has correct canonical URL

### Legal Pages
- [ ] Terms & Conditions - Metadata and canonical present
- [ ] Privacy Policy - Metadata and canonical present
- [ ] Shipping Policy - Metadata and canonical present
- [ ] Refund & Return Policy - Metadata and canonical present
- [ ] Disclaimer - Metadata and canonical present

---

## 🔍 Global SEO Tags (Check on ANY page)

**Should be present on EVERY page:**
- [ ] `<meta name="robots" content="index, follow">` (via Next.js robots config)
- [ ] `<meta name="googlebot" content="index, follow">` (via Next.js robots config)
- [ ] `<meta name="author" content="TechPotli Digital">`
- [ ] `<meta name="language" content="English">`
- [ ] `<meta name="keywords" content="...">` (with all keywords)
- [ ] `<link rel="icon" href="/favicon.ico" type="image/x-icon">`
- [ ] GTM script in `<head>` or body
- [ ] GTM noscript in `<body>`

---

## 🛠️ Tools for Verification

### Online SEO Checkers:
1. **Meta Tags Checker:**
   - https://www.seoreviewtools.com/meta-tags-checker/
   - https://smallseotools.com/meta-tags-analyzer/

2. **Schema Validator:**
   - https://validator.schema.org/
   - https://search.google.com/test/rich-results

3. **OG Tags Tester:**
   - https://www.opengraph.xyz/
   - https://developers.facebook.com/tools/debug/

4. **Twitter Card Validator:**
   - https://cards-dev.twitter.com/validator

5. **Sitemap Validator:**
   - https://www.xml-sitemaps.com/validate-xml-sitemap.html

6. **GTM Debugger:**
   - Install Google Tag Assistant Chrome Extension
   - Or check in GTM Preview Mode

---

## 📊 Quick Test Script

Run this in browser console on each page to verify:

```javascript
// Check title
console.log('Title:', document.querySelector('title')?.textContent);

// Check description
console.log('Description:', document.querySelector('meta[name="description"]')?.content);

// Check canonical
console.log('Canonical:', document.querySelector('link[rel="canonical"]')?.href);

// Check GTM
console.log('GTM Present:', !!document.querySelector('script[src*="googletagmanager.com/gtm.js"]'));

// Check robots
console.log('Robots:', document.querySelector('meta[name="robots"]')?.content);

// Check author
console.log('Author:', document.querySelector('meta[name="author"]')?.content);
```

---

## ✅ Final Pre-Handover Checklist

- [ ] All pages have unique titles
- [ ] All pages have unique descriptions
- [ ] All pages have canonical URLs
- [ ] Homepage has OG tags (6 tags)
- [ ] Homepage has Twitter cards (4 tags)
- [ ] Homepage has schema markup
- [ ] GTM is working on all pages
- [ ] Global meta tags on all pages
- [ ] Favicon is visible
- [ ] Social media links in footer are correct
- [ ] Sitemap is accessible and complete
- [ ] No duplicate meta tags
- [ ] All service pages have correct metadata
- [ ] All package pages have correct metadata
- [ ] Legal pages have metadata

---

## 📧 Handover Notes for SEO Team

**GTM Container ID:** GTM-K79WJLLQ

**Schema Markup:** Only on homepage

**OG Tags:** Only on homepage

**Twitter Cards:** Only on homepage

**Canonical URLs:** All pages have unique canonical URLs

**Sitemap Location:** `https://www.techpotlidigital.com/sitemap.xml`

**Social Media Links:**
- Facebook: https://www.facebook.com/profile.php?id=61584717418829
- Instagram: https://www.instagram.com/techpotlidigitalofficial/
- Pinterest: https://www.pinterest.com/TechpotliDigital/
- YouTube: https://www.youtube.com/@TechPotliDigital

---

## 🚨 Common Issues to Watch For

1. **Missing Canonical URLs** - Check each page has unique canonical
2. **Duplicate Meta Tags** - Ensure no duplicates in head
3. **GTM Not Loading** - Check network tab for gtm.js request
4. **Schema Errors** - Validate on schema.org validator
5. **OG Image Not Loading** - Check image URL is accessible
6. **Missing Favicon** - Check favicon.ico exists in public folder

---

**Last Updated:** [Current Date]
**Verified By:** [Your Name]
**Status:** Ready for SEO Team Handover ✅

