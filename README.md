# Natraj Electronics Static Website

Premium, fast, mobile-first static website for **Natraj Electronics**. It uses HTML5, CSS3 and vanilla JavaScript only, so it is suitable for free GitHub Pages hosting.

## Architecture & Visual Direction

- **Pages:** `index.html`, `products.html`, `services.html`, `b2b.html`, `owner.html`, `contact.html`.
- **Data model:** business details in `js/config.js`, products in `js/products.js`, services/trust/B2B lists in `js/services.js`.
- **Design:** deep navy technology aesthetic, electric blue/cyan accents, premium cards, subtle circuit/grid motion, clear CTAs and mobile bottom navigation.
- **SEO:** page titles, descriptions, Open Graph/Twitter metadata, LocalBusiness/ElectronicsStore JSON-LD placeholders, robots and sitemap files.
- **No backend:** B2B/contact forms generate WhatsApp text if configured, otherwise use a `mailto:` fallback.

## Editing Business Details

Update one file:

```js
// js/config.js
const BUSINESS_CONFIG = {
  phone: "",
  whatsapp: "",
  email: "",
  address: "[ADDRESS PLACEHOLDER]",
  ownerName: "[OWNER NAME]"
};
```

Keep placeholders until exact details are verified. Do not add unverified claims such as dealership status, awards, years in business, brands, prices, certifications or customer counts.

## Editing Products

Open `js/products.js` and add/edit objects in the `PRODUCTS` array. Categories and filters are generated automatically.

## Editing Services

Open `js/services.js` and edit the `SERVICES`, `TRUST_ITEMS`, and `B2B_ITEMS` arrays.

## GitHub Pages Deployment

### Step 1
Create a GitHub repository.

### Step 2
Upload or push all project files to the repository root.

### Step 3
Go to: **Repository → Settings → Pages**.

### Step 4
Select: **Deploy from branch → main → root**.

### Step 5
Click **Save**. GitHub will provide a Pages URL after deployment.

## Custom Domain Later

In GitHub Pages settings, add your domain under **Custom domain**, create the required DNS records with your domain provider, then enable HTTPS after DNS verifies.

## GitHub Pages Compatibility Notes

- Paths are relative, not root-absolute, so the site works under repository subpaths.
- No server-side runtime, database, or paid service is required.
- If you later use a form service, replace the static submit handler in `js/main.js` or connect a provider endpoint as documented in `js/contact.js`.

## Quality Checklist

- Open `index.html` locally in a browser or serve the folder with a static file server.
- Check all top navigation and mobile bottom navigation links.
- Add real phone/WhatsApp/email before launch so CTAs go to the business.
- Replace SVG product placeholders with real optimized WebP/JPG images when available.
- Update canonical base URL and sitemap URLs after the final GitHub Pages URL or custom domain is known.
