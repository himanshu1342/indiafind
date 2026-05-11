# 🇮🇳 IndiaFind — India's Complete Business Directory

A full-stack directory site for all Indian cities and categories.
Built with React + Vite + PocketBase. Hosted free on Netlify + Fly.io.

---

## 🗂️ Project Structure

```
indiafind/
├── src/
│   ├── components/     → Navbar, Footer, ListingCard
│   ├── pages/          → Home, Search, ListingDetail, BrowsePages, SubmitListing
│   ├── hooks/          → useListings (PocketBase + mock fallback)
│   ├── data/           → staticData.js (cities, categories, mock listings)
│   └── lib/            → pb.js (PocketBase client)
├── pocketbase/
│   ├── Dockerfile      → For Fly.io deployment
│   └── fly.toml        → Fly.io config
├── netlify.toml        → Netlify SPA redirect config
└── .env.example        → Environment variable template
```

---

## 🚀 Step-by-Step Deploy Guide

### STEP 1 — Push to GitHub

1. Go to github.com → New Repository → name it `indiafind`
2. On your computer, run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/indiafind.git
git push -u origin main
```

---

### STEP 2 — Deploy Frontend on Netlify (free)

1. Go to netlify.com → Sign up with GitHub
2. Click "Add new site" → "Import an existing project"
3. Choose your GitHub repo `indiafind`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click Deploy — your site is live at `yoursite.netlify.app`!

---

### STEP 3 — Deploy PocketBase on Fly.io (free, no card needed)

1. Sign up at fly.io with your email
2. Install Fly CLI:
```bash
# On Linux/Mac
curl -L https://fly.io/install.sh | sh

# On Windows (PowerShell)
iwr https://fly.io/install.ps1 -useb | iex
```

3. Login:
```bash
fly auth login
```

4. Deploy PocketBase:
```bash
cd pocketbase
fly launch --name indiafind-pb --region sin
fly volumes create pb_data --size 1 --region sin
fly deploy
```

5. Your PocketBase is live at: `https://indiafind-pb.fly.dev`

---

### STEP 4 — Set up PocketBase Collections

1. Open `https://indiafind-pb.fly.dev/_/` in your browser
2. Create your admin account
3. Create these collections:

**cities** collection:
- name (text, required)
- state (text)
- slug (text, required, unique)
- listing_count (number)

**categories** collection:
- name (text, required)
- slug (text, required, unique)
- icon (text)

**listings** collection:
- name (text, required)
- slug (text)
- category (relation → categories)
- city (relation → cities)
- area (text)
- address (text)
- phone (text)
- email (email)
- website (url)
- description (editor)
- tags (json)
- lat (number)
- lng (number)
- status (select: pending, active, rejected) — default: pending
- is_premium (bool) — default: false
- avg_rating (number) — default: 0
- review_count (number) — default: 0

**reviews** collection:
- listing_id (relation → listings)
- rating (number, 1-5)
- comment (text)
- reviewer_name (text)

4. Set API rules for listings:
   - List/View rule: `status = "active"`
   - Create rule: `` (empty — anyone can submit)
   - Update/Delete rule: `@request.auth.id != ""` (admin only)

---

### STEP 5 — Connect Frontend to PocketBase

1. In Netlify dashboard → Site settings → Environment variables
2. Add: `VITE_POCKETBASE_URL` = `https://indiafind-pb.fly.dev`
3. Trigger a redeploy — your frontend now talks to PocketBase!

---

### STEP 6 — Apply for Google AdSense

1. Go to adsense.google.com
2. Add your Netlify URL
3. Replace the `ad-box` divs in the code with real AdSense snippet
4. Start earning!

---

## 💰 Revenue Plan

| Month | Action | Expected Revenue |
|-------|--------|-----------------|
| 1-2 | Launch, get indexed on Google | ₹0 (building traffic) |
| 3-4 | AdSense approved, 10k visits/mo | ₹1,000–3,000/mo |
| 5-6 | 50k visits/mo | ₹5,000–15,000/mo |
| 7+ | Premium listings + 1L+ visits | ₹20,000+/mo |

---

## 🛡️ Security

- PocketBase API rules prevent unauthorized writes
- All new listings require admin approval (status: pending)
- Cloudflare (free) for DDoS protection — add your domain there
- No raw SQL — PocketBase handles all queries safely

---

## 📞 Support

Built with ❤️ using Claude AI.
