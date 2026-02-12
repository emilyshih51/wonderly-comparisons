# Wonderly Comparison Pages

Dynamic comparison pages powered by Sanity CMS.

## Quick Setup (5 minutes)

### Step 1: Install Dependencies

Open Terminal, navigate to this folder, and run:

```bash
cd wonderly-comparisons
npm install
```

### Step 2: Add Your Sanity Credentials

1. Copy the example env file:
```bash
cp .env.local.example .env.local
```

2. Open `.env.local` and add your Sanity details:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

**How to find your Project ID:**
- Go to [sanity.io/manage](https://sanity.io/manage)
- Click on your project (Wonderly)
- The Project ID is shown at the top (something like `abc123xy`)

### Step 3: Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

---

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   CLAY                    SANITY                 NEXT.JS    │
│   (enriches data)    →    (stores data)     →    (displays) │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

1. **Clay** enriches competitor data and pushes it to Sanity via HTTP API
2. **Sanity** stores the competitor info (pricing, features, FAQs, etc.)
3. **Next.js** fetches from Sanity and renders beautiful comparison pages

---

## Page URLs

Once you add competitors in Sanity, pages are automatically created:

- `/` - Homepage listing all comparisons
- `/compare/pipedrive` - Wonderly vs Pipedrive
- `/compare/hubspot` - Wonderly vs HubSpot
- `/compare/[any-slug]` - Any competitor you add!

---

## Deploying to Production

### Option 1: Vercel (Recommended - Free)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" → Select your repo
4. Add your environment variables (SANITY_PROJECT_ID, SANITY_DATASET)
5. Click "Deploy"

You'll get a URL like `wonderly-comparisons.vercel.app`

### Option 2: Netlify

Similar process - connect your repo and add env variables.

---

## Clay HTTP Request Setup

To push data from Clay to Sanity, use these settings in Clay's HTTP Request action:

**Method:** `POST`

**URL:**
```
https://YOUR_PROJECT_ID.api.sanity.io/v2021-06-07/data/mutate/production
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_SANITY_API_TOKEN
```

**How to get your API Token:**
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Click your project → API → Tokens
3. Click "Add API token"
4. Name it "Clay" and give it "Editor" permissions
5. Copy the token (you won't see it again!)

---

## Customization

### Change Colors
Edit `styles/globals.css` - look for `.wonderly-gradient` and `.wonderly-text`

### Add/Remove Sections
Edit `pages/compare/[slug].js` - add or remove `<TableSection>` components

### Change Layout
Edit individual components in the `components/` folder

---

## Need Help?

- Check that your Sanity Studio is running (`npm run dev` in your Sanity folder)
- Make sure you've added at least one competitor in Sanity Studio
- Verify your `.env.local` has the correct Project ID

---

Built with 💜 for Wonderly
