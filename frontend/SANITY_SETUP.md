# Sanity CMS Setup & Configuration Guide for ACWA

This document provides a step-by-step guide to setting up, configuring, and connecting Sanity CMS with the ACWA website.

---

## 1. Quick Overview

The ACWA website features an embedded **Sanity Studio** accessible directly at `/studio` on your domain (e.g., `http://localhost:3000/studio` in local development).

When no Sanity project is connected (i.e. `NEXT_PUBLIC_SANITY_PROJECT_ID` is empty), the website automatically runs in **fallback mode**, serving rich local mock data from `lib/sanity/mockData.js`.

---

## 2. Setting Up a Free Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage) and create a free Sanity account if you don't already have one.
2. Click **Create new project**.
3. Name your project (e.g. `ACWA Website`).
4. Select **production** as your dataset name.

---

## 3. Configuring Environment Variables

Create or update `.env.local` inside the `frontend/` directory with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your_read_token_here
```

> **Where to find your Project ID:**
> - In your Sanity dashboard at [manage.sanity.io](https://manage.sanity.io), your 8-character Project ID is displayed at the top of your project page.

---

## 4. Configuring CORS Origins in Sanity Dashboard

To allow Sanity Studio and your frontend to communicate with Sanity's API:

1. Open [sanity.io/manage](https://sanity.io/manage) and select your project.
2. Go to **API** > **CORS Origins**.
3. Click **Add CORS Origin**.
4. Add `http://localhost:3000` (Allow credentials: **Yes**).
5. When deploying to production (e.g. Vercel / Netlify / custom domain), add your production URL (e.g., `https://acwa.org` or `https://your-domain.vercel.app`) with credentials allowed.

---

## 5. Using Sanity Studio

1. Start your local dev server:
   ```bash
   cd frontend
   npm run dev
   ```
2. Navigate to `http://localhost:3000/studio`.
3. Log in with your Sanity account credentials.
4. You will see three main content sections in the sidebar:
   - **Core Content**: Programs & Projects, Stories & News Articles, Community Events
   - **Community & Social Proof**: Impact Records & Metrics, Team Members, Testimonials, Partners & Sponsors
   - **Site Settings**: Organization contact info and branding settings

---

## 6. Schema Definitions

The schemas are defined in `frontend/sanity/schemas/`:

| Schema Type | Purpose | Main Fields |
| :--- | :--- | :--- |
| `program` | ACWA's 5 core pillars | Title, Slug, Category, Short Description, Detailed Description (BlockContent), Hero Image, Gallery, Activities |
| `story` | News articles & stories | Title, Slug, Excerpt, Body (BlockContent), Featured Image, Gallery, Category, Author, SEO Settings |
| `impact` | Quantifiable impact metrics | Title, Number Metric, Unit/Label, Description, Year, Verified Status |
| `teamMember` | Team & leadership profiles | Name, Role, Biography, Photo, Email, LinkedIn, Display Order |
| `testimonial` | Beneficiary & partner quotes | Quote, Name, Role, Organization, Photo, Associated Program |
| `event` | Community workshops & events | Title, Slug, Description (BlockContent), Date, Location, Image, Registration URL |
| `partner` | Sponsors & partner orgs | Name, Logo, Website URL, Description, Featured Status |
| `siteSettings` | Global org info | Organization Name, Logo, Contact Email, Address |

---

## 7. Useful CLI Commands

- Deploy schemas or deploy standalone Studio:
  ```bash
  npx sanity@latest deploy
  ```
- Test GROQ queries locally using Vision Tool inside the studio at `http://localhost:3000/studio/vision`.

---

## 8. Rendering Rich Text (PortableText)

Use the built-in `PortableText` component (`components/ui/PortableText.js`):

```jsx
import PortableText from '@/components/ui/PortableText';

<PortableText value={story.body} />
```
It handles headings, quotes, lists, bold/italics, embedded Sanity images, and plain string fallback automatically.
