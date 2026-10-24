<div align="center">

# 💰 WealthWise

### AI-Powered Financial Advisory & Education Platform

**A bilingual (English + Arabic / Egyptian) financial companion — investments, budgeting, and learning.**

[![Production Status](https://img.shields.io/badge/Status-Production%20Live-brightgreen?style=for-the-badge&logo=vercel)](https://wealthwise-frontend-kappa.vercel.app)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/AmjadIbrahim1/wealthwise-frontend)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth%20%2B%20DB%20%2B%20API-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&logo=github)](https://github.com/AmjadIbrahim1/wealthwise-frontend)

🌐 **Live Site:** [wealthwise-frontend-kappa.vercel.app](https://wealthwise-frontend-kappa.vercel.app)
📦 **Repository:** [github.com/AmjadIbrahim1/wealthwise-frontend](https://github.com/AmjadIbrahim1/wealthwise-frontend)
🎬 **Demo Video:** [YouTube](https://www.youtube.com/watch?v=yNrLCCiV_XQ)

</div>

---

## 📑 Table of Contents

- [Overview](#overview)
- [✨ Key Features](#-key-features)
- [🏛 Architecture](#-architecture)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🔐 Authentication](#-authentication)
- [🔌 Backend API — Supabase Edge Functions](#-backend-api--supabase-edge-functions)
- [🏭 Production Deployment](#-production-deployment)
- [✅ Production Readiness Checklist](#-production-readiness-checklist)
- [📁 Project Structure](#-project-structure)
- [🔒 Security Notes](#-security-notes)
- [🗺 Roadmap](#-roadmap)
- [👥 Team](#-team)
- [🙏 Acknowledgments](#-acknowledgments)

---

## Overview

**WealthWise** is an AI-powered financial advisory and education platform built for Arabic and Egyptian users, delivering a fully bilingual experience — every English term is mirrored with its Arabic translation inline.

### The Problem

Individuals struggle with complex financial planning and investment decisions. Traditional finance apps offer either basic rule-based insights or rely on slow AI models, resulting in delayed advice and missed opportunities.

### Our Solution

WealthWise delivers instant, personalized, data-backed financial guidance:

- 📊 **Real Egyptian market data** — EGX stocks, Egyptian banks and funds, fixed deposits
- 🎓 **Financial education** — curated Arabic YouTube learning tracks
- 💬 **AI financial assistant** — bilingual chatbot "Amjad"
- 🧾 **Expense tracking** — benchmarking against category averages
- 🎯 **Personalized recommendations** — mutual funds, FDs and stocks matched to risk profile

---

## ✨ Key Features

| Feature | Description | Route |
|---|---|---|
| 🔐 **Secure Auth** | Email/password + Google OAuth via Supabase | `/` |
| 📈 **Live Market Dashboard** | EGX stock cards with live-style pricing | `/home` |
| 🎓 **Learning Center** | Embedded Arabic financial education videos | `/home` |
| 🧾 **Expense Tracker** | Personal vs. benchmark expense comparison chart | `/expensedate` |
| 💬 **AI Chatbot** | Bilingual financial guidance assistant "Amjad" | `/chatbot` |
| 🎯 **Mutual Fund Recommendations** | Personalized MF suggestions from risk profile | `/personal-MF` |
| 🏦 **FD Recommendations** | Personalized fixed-deposit suggestions | `/fd-recommendations` |
| 📤 **Statement Upload** | Upload bank statements to Supabase Storage | `/fileupload` |
| 👤 **Profile & Onboarding** | Guided financial onboarding form | `/foam` |

**UX highlights:** fully responsive mobile-first design, rich animations with Framer Motion, Arabic-friendly typography, and inline English↔Arabic translations everywhere.

---

## 🏛 Architecture

**100% Supabase-native backend** — no separate server to host or pay for.

```
┌────────────────────────────────────────────────────────────────────┐
│  Browser                                                           │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  React 18 SPA (CRA) — Tailwind CSS — Framer Motion           │  │
│  │  src/api.js → functions/v1/api?endpoint=...                  │  │
│  └──────────────┬───────────────────────────────┬───────────────┘  │
└─────────────────┼───────────────────────────────┼──────────────────┘
   Supabase JS auth (JWT)            fetch + user JWT (Authorization)
                  ▼                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  Supabase (project: wealthwise, eu-central-1)                       │
│  ┌───────────────────────┐   ┌──────────────────────────────────┐  │
│  │  Edge Function: api   │──▶│  Postgres (service role)         │  │
│  │  (Deno, all routes)   │   │  • profiles (onboarding+count)   │  │
│  │  signup/login/find*   │   │  • RLS: users read own row       │  │
│  │  recommendations      │   │  • storage: statements bucket    │  │
│  │  chatbot / upload     │   │    (private uploads)             │  │
│  └───────────────────────┘   └──────────────────────────────────┘  │
│  Auth (email + Google OAuth, JWT verification built-in)             │
└─────────────────────────────────────────────────────────────────────┘
```

> **How it works:** the frontend sends its **Supabase JWT** to one Edge Function (`/functions/v1/api?endpoint=...`). The function verifies the JWT, then works with the database using the **service role** key that never leaves Supabase.

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Frontend framework | React.js (Create React App) | 18.3 |
| Styling | Tailwind CSS + custom gradients | 3.4 |
| Animations | Framer Motion | 11.x |
| UI icons | lucide-react, react-icons, Font Awesome | — |
| Charts | Recharts | — |
| Routing | React Router DOM | 6.28 |
| Auth & Database | Supabase (Auth + Postgres + RLS) | supabase-js 2.49 |
| **Backend API** | **Supabase Edge Functions (Deno)** | single `api` function |
| File storage | Supabase Storage — private `statements` bucket | — |
| HTTP client | Fetch wrapper (`src/api.js`) | — |
| Sessions | Supabase JWT + cookie fallback | — |
| Bot protection | Google reCAPTCHA v2 (invisible) | 3.1 |
| Toasts | React Toastify | 10.x |
| Hosting | Vercel (static + CI build) | — |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm (or yarn)
- A **Supabase** project with the `api` Edge Function deployed (free tier is enough)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AmjadIbrahim1/wealthwise-frontend.git
cd wealthwise-frontend

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# then edit .env with your Supabase URL + anon key

# 4. Run the development server
npm start
```

The app launches at **http://localhost:3000**.

### Environment Variables

Create `.env` in the project root:

| Variable | Required | Description | Status in Production |
|---|---|---|---|
| `REACT_APP_SUPABASE_URL` | ✅ Always | Supabase project URL | ✅ Set on Vercel |
| `REACT_APP_SUPABASE_ANON_KEY` | ✅ Always | Supabase anon/publishable key | ✅ Set on Vercel |
| `REACT_APP_SITEKEY` | Optional | Google reCAPTCHA site key | ✅ Set on Vercel |

That's it — **no backend URL, no secrets**. Everything else lives inside Supabase.

> ⚠️ **CRA rule:** Only `REACT_APP_*` variables are exposed to the browser. The service-role key and DB credentials stay server-side in Supabase.

### Build & Test

```bash
npm run build         # production build
CI=true npm run build # fail on any ESLint warning — same as Vercel
npm test              # run test suite
```

---

## 🔐 Authentication

Authentication is fully handled by **Supabase Auth**:

- **Email & password** signup/login with email-confirmation support
- **Google OAuth** popup flow
- **Password reset** via email

Login flow:

```
Sign in with Supabase ✅
  → POST /functions/v1/api?endpoint=login   (JWT verified by the function)
  → { token } — stored as sessionToken cookie (8h)
  → GET  ...?endpoint=findemail&email=...
  → count === 0 ? /foam (onboarding) : /home (returning user)
```

The Edge Function verifies every request's JWT and derives the user's email from it — users can only touch **their own** row in `profiles`.

### Production email routing (important for Vercel deploys)

Supabase links in confirmation/recovery emails default to the project's **Site URL**. For production to work end-to-end:

1. In **Supabase → Authentication → URL Configuration**, set **Site URL** to `https://wealthwise-frontend-kappa.vercel.app`
2. Keep `http://localhost:3000/**` in the **Redirect URLs** allow list for local development (the Vercel domain is already allow-listed)
3. Signup calls `signUp(...)` with `emailRedirectTo: window.location.origin`, so confirmation links always return users to the domain they signed up on (Vercel in production, localhost in dev)

---

## 🔌 Backend API — Supabase Edge Functions

One function, `api`, routes every endpoint via `?endpoint=<name>`:

| Endpoint | Method | Purpose |
|---|---|---|
| `signup` | POST | Upsert profile row after signup |
| `login` | POST | Issue session token for cookie |
| `findmail` | GET | Pre-login user check |
| `findemail` | GET | New vs. returning user routing + navbar profile |
| `submitdata` | POST | Onboarding form → `profiles.form_data` |
| `updatecount` | POST | Increment onboarding count |
| `recommend-mutual-funds` | POST | MF recommendations → `{ groqRecommendation }` |
| `fdrecommendations` | POST | FD recommendations → `{ groqRecommendation }` |
| `chatbot4` | POST | Bilingual financial chatbot → `{ answer }` |
| `upload` | POST | Multipart CSV → `statements` bucket |

**Database tables:**

- `public.profiles` — `email` (PK), `name`, `phone`, `profile`, `count`, `form_data` (jsonb), `created_at`
  - **RLS enabled:** users can only SELECT their own row
- `storage.statements` — private bucket for uploaded statements

**Deploying the function locally:**

```bash
supabase functions deploy api --project-ref gheeanugjsiuxkegkhxx
```

---

## 🏭 Production Deployment

### Current Production Stack

| Piece | Service | URL |
|---|---|---|
| Frontend | Vercel — auto-deploy on push to `main` | https://wealthwise-frontend-kappa.vercel.app |
| Auth + DB + API | Supabase — project `wealthwise`, region `eu-central-1` | Edge Function: `/functions/v1/api` |
| Storage | Supabase Storage — bucket `statements` (private) | — |

### Deploying Changes

The Vercel project is connected to GitHub — every push to `main` triggers a production build.

```bash
git add . && git commit -m "feat: my change" && git push origin main
# Frontend auto-deploys
# Edge function changes: supabase functions deploy api
```

> ⚠️ **CI behavior:** Vercel builds with `CI=true`, so **any ESLint warning fails the build**. Keep the code lint-clean: run `npx eslint "src/**/*.{js,jsx}"` before pushing.

---

## ✅ Production Readiness Checklist

Status of each production component:

| # | Item | Status | Notes |
|---|---|---|---|
| 1 | Frontend build + deploy | ✅ Done | Auto-deploy from GitHub to Vercel |
| 2 | ESLint/CI clean | ✅ Done | 0 errors, 0 warnings |
| 3 | Supabase project | ✅ Live | `wealthwise`, eu-central-1 |
| 4 | Supabase env vars on Vercel | ✅ Set | URL + anon key + reCAPTCHA key (all environments) |
| 5 | Backend (Edge Function `api`) | ✅ Deployed | All 10 endpoints inside Supabase |
| 6 | DB schema + RLS (`profiles`) | ✅ Done | Users read only their own row |
| 7 | Storage bucket (`statements`) | ✅ Done | Private — uploads via the function |
| 8 | Google OAuth provider | ✅ Done | Google Cloud credentials configured in Supabase |
| 9 | Email/password signup & login | ✅ Ready | Confirmation email redirects to the app origin |
| 10 | Auth URL Configuration (Site URL) | ⚙️ Configure in dashboard | Set Site URL to the Vercel domain (Auth → URL Configuration); localhost is the default |
| 11 | Email deliverability / custom SMTP | ⚙️ Recommended | Built-in Supabase SMTP is best-effort and rate-limited — add custom SMTP (Auth → SMTP) for reliable confirmation emails |
| 12 | Custom domain | ⏳ Optional | Add via Vercel dashboard |

---

## 📁 Project Structure

```
wealthwise-frontend/
├── public/
│   ├── index.html            # HTML shell, reCAPTCHA script, CDNs
│   └── manifest.json         # PWA manifest
├── supabase/
│   └── functions/
│       └── api/
│           └── index.ts      # The whole backend: 10 endpoints
├── src/
│   ├── index.js              # React root + Router
│   ├── App.js                # Routes + auth state listener
│   ├── api.js                # Edge Function fetch client
│   ├── supabase.js           # Supabase client init
│   ├── App.css / index.css   # Base styles + Tailwind directives
│   ├── setupTests.js         # Jest/dom test setup
│   └── components/
│       ├── login.js          # Signup / login / reset / Google OAuth
│       ├── navbar.js         # Top navigation + profile menu
│       ├── Home.js           # EGX dashboard + learning videos
│       ├── ChatBot.js        # AI assistant "Amjad"
│       ├── Psinfo.js         # Multi-step onboarding form
│       ├── ExpenseDate.js    # Expense form
│       ├── ExpenseComparison.js # Benchmark chart
│       ├── personalMF.js     # Mutual fund recommendations
│       ├── personalFD.js     # Fixed deposit recommendations
│       ├── FileUpload.js     # Statement upload
│       ├── AssetAllocationChart.js # Portfolio pie chart
│       └── PageNotFound.js   # 404 page
├── .env.example              # Env template
├── tailwind.config.js        # Tailwind + brand colors
└── package.json              # Scripts + dependencies
```

**Brand colors:** `#339933` (Egyptian green) and `#F7DF1E` (gold), configured in `tailwind.config.js` as `primary`/`secondary`.

---

## 🔒 Security Notes

- ✅ The **anon key is public by design** — the Edge Function verifies the caller's JWT on every request.
- ✅ The **service role key never reaches the browser** — it lives only in Supabase's function runtime.
- ✅ **RLS on `profiles`** — users can only read their own row.
- ✅ Uploads go to a **private storage bucket** through the function only.
- ✅ Session cookie is `Secure` + `SameSite=Strict`, 8-hour expiry.
- 🔜 Harden further: add rate limiting via Supabase WAF, rotate keys regularly.

---

## 🗺 Roadmap

- 🌍 Multi-language support beyond EN/AR
- 📱 Native mobile app — React Native
- 🔔 Smart notifications for market moves
- 📊 Real EGX live data integration
- 🤖 Deeper AI advisory with LLMs
- 🎓 Certification tracks for education modules
- 🎮 Gamified savings challenges

---

## 👥 Team

### Amjad Team

| Member | Role |
|---|---|
| **Amjad** | Founder, Full-Stack Developer, Product Design |

> Built with determination in Egypt 🇪🇬.

---

## 🙏 Acknowledgments

- [Supabase](https://supabase.com) — auth, database, Edge Functions & storage
- [Vercel](https://vercel.com) — hosting & CI
- [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/) — the frontend toolkit
- Arabic financial-education creators on YouTube whose free lessons power the Learning Center
- Everyone who believes financial literacy should be accessible in Arabic

---

<div align="center">

**WealthWise** — *Smart money decisions, in your language.*

Made with 💚 in Egypt 🇪🇬

</div>
