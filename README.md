<div align="center">

# 💰 WealthWise — الحكمة المالية

### AI-Powered Financial Advisory & Education Platform (منصة الاستشارات والتعليم المالية الذكية)

**Bilingual English + Arabic (Egyptian) financial companion — investments, budgeting, and learning (رفيقك المالي ثنائي اللغة — استثمار وميزانية وتعليم مالي).**

[![Production Status](https://img.shields.io/badge/Status-Production%20Live-brightgreen?style=for-the-badge&logo=vercel)](https://wealthwise-frontend-kappa.vercel.app)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/AmjadIbrahim1/wealthwise-frontend)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth%20%2B%20DB%20%2B%20API-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&logo=github)](https://github.com/AmjadIbrahim1/wealthwise-frontend)

🌐 **Live Site (الموقع المباشر):** [wealthwise-frontend-kappa.vercel.app](https://wealthwise-frontend-kappa.vercel.app)
📦 **Repository (الريبو):** [github.com/AmjadIbrahim1/wealthwise-frontend](https://github.com/AmjadIbrahim1/wealthwise-frontend)
🎬 **Demo Video (فيديو العرض):** [YouTube](https://www.youtube.com/watch?v=yNrLCCiV_XQ)

</div>

---

## 📑 Table of Contents (جدول المحتويات)

- [Overview (نظرة عامة)](#overview-نظرة-عامة)
- [✨ Key Features (المميزات الرئيسية)](#-key-features-المميزات-الرئيسية)
- [🏛 Architecture (البنية المعمارية)](#-architecture-البنية-المعمارية)
- [🛠 Tech Stack (التقنيات المستخدمة)](#-tech-stack-التقنيات-المستخدمة)
- [🚀 Getting Started (البداية السريعة)](#-getting-started-البداية-السريعة)
- [🔐 Authentication (المصادقة)](#-authentication-المصادقة)
- [🔌 Backend API — Supabase Edge Functions (الواجهة الخلفية)](#-backend-api--supabase-edge-functionsالواجهة-الخلفية)
- [🏭 Production Deployment (نشر الإنتاج)](#-production-deployment-نشر-الإنتاج)
- [✅ Production Readiness Checklist (قائمة جاهزية الإنتاج)](#-production-readiness-checklist-قائمة-جاهزية-الإنتاج)
- [📁 Project Structure (هيكل المشروع)](#-project-structure-هيكل-المشروع)
- [🔒 Security Notes (ملاحظات الأمان)](#-security-notes-ملاحظات-الأمان)
- [🗺 Roadmap (خارطة الطريق)](#-roadmap-خارطة-الطريق)
- [👥 Team (الفريق)](#-team-الفريق)
- [🙏 Acknowledgments (الشكر والتقدير)](#-acknowledgments-الشكر-والتقدير)

---

## Overview (نظرة عامة)

**WealthWise (ويث وايز)** is an AI-powered financial advisory and education platform built for Arabic and Egyptian users, delivering a fully bilingual experience — every English term is mirrored with its Arabic translation inline (منصة استشارات وتعليم مالية مدعومة بالذكاء الاصطناعي، تجربة كاملة بالإنجليزي والمصري).

### The Problem (المشكلة)

Individuals struggle with complex financial planning and investment decisions (الناس بتعاني من تعقيد التخطيط المالي وقرارات الاستثمار). Traditional finance apps offer either basic rule-based insights or rely on slow AI models, resulting in delayed advice and missed opportunities (التطبيقات التقليدية إما نصائح بسيطة أو نماذج ذكاء اصطناعي بطيئة — فبتأخر النصايح وتضيع الفرص).

### Our Solution (الحل)

WealthWise delivers instant, personalized, data-backed financial guidance (ويث وايز بتدي إرشاد مالي فوري ومخصص مبني على بيانات):

- 📊 **Real Egyptian market data (بيانات السوق المصري)** — EGX stocks (أسهم البورصة المصرية), Egyptian banks and funds (مصارف وصناديق مصرية), fixed deposits (ودائع ثابتة)
- 🎓 **Financial education (تعليم مالي)** — curated Arabic YouTube learning tracks (دروس يوتيوب عربية منتقاة)
- 💬 **AI financial assistant (مساعد مالي ذكي)** — bilingual chatbot "Amjad" (شات بوت ثنائي اللغة)
- 🧾 **Expense tracking (تتبع المصروفات)** — benchmarking against category averages (مقارنة بمتوسط المصاريف)
- 🎯 **Personalized recommendations (توصيات مخصصة)** — mutual funds, FDs and stocks matched to risk profile (صناديق وودائع وأهم حسب ملف المخاطرة)

---

## ✨ Key Features (المميزات الرئيسية)

| Feature (الميزة) | Description (الوصف) | Route (المسار) |
|---|---|---|
| 🔐 **Secure Auth (مصادقة آمنة)** | Email/password + Google OAuth via Supabase (بريد وكلمة مرور + جوجل عبر Supabase) | `/` |
| 📈 **Live Market Dashboard (لوحة السوق)** | EGX stock cards with live-style pricing (بطاقات أسهم بأسعار محدثة) | `/home` |
| 🎓 **Learning Center (مركز التعلم)** | Embedded Arabic financial education videos (دروس مالية عربية مدمجة) | `/home` |
| 🧾 **Expense Tracker (متتبع المصروفات)** | Personal vs. benchmark expense comparison chart (مقارنة مصروفاتك بالمتوسط) | `/expensedate` |
| 💬 **AI Chatbot (الشات بوت)** | Bilingual financial guidance assistant "Amjad" (مساعد مالي ثنائي اللغة) | `/chatbot` |
| 🎯 **Mutual Fund Recommendations (توصيات الصناديق)** | Personalized MF suggestions from risk profile (اقتراحات صناديق حسب المخاطرة) | `/personal-MF` |
| 🏦 **FD Recommendations (توصيات الودائع)** | Personalized fixed-deposit suggestions (اقتراحات ودائع ثابتة مخصصة) | `/fd-recommendations` |
| 📤 **Statement Upload (رفع الكشوف)** | Upload bank statements to Supabase Storage (رفع كشوفات بنكية لتخزين Supabase) | `/fileupload` |
| 👤 **Profile & Onboarding (الملف الشخصي)** | Guided financial onboarding form (استبيان مالي موجّه للجديد) | `/foam` |

**UX highlights (لمسات تجربة المستخدم):** fully responsive mobile-first design (تصميم للموبايل أولاً), rich animations with Framer Motion (أنيميشن Framer Motion), Arabic-friendly typography (خطوط عربية), and inline English↔Arabic translations everywhere (ترجمة فورية لكل مصطلح).

---

## 🏛 Architecture (البنية المعمارية)

**100% Supabase-native backend (باك إند كامل داخل Supabase)** — no separate server to host or pay for (مفيش سيرفر تاني تفتحه أو تدفع له).

```
┌────────────────────────────────────────────────────────────────────┐
│  Browser (المتصفح)                                                  │
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
│  │  chatbot4 / upload    │   │    (private uploads)             │  │
│  └───────────────────────┘   └──────────────────────────────────┘  │
│  Auth (email + Google OAuth, JWT verification built-in)             │
└─────────────────────────────────────────────────────────────────────┘
```

> **How it works (إزاي شغال):** the frontend sends its **Supabase JWT** to one Edge Function (`/functions/v1/api?endpoint=...`). The function verifies the JWT, then works with the database using the **service role** key that never leaves Supabase (الواجهة بتبعت توكن Supabase لدالة واحدة، الدالة بتأكد من الهوية وبتشتغل على الداتابيس بمفتاح خدمة مش بيخرج من Supabase أبداً).

---

## 🛠 Tech Stack (التقنيات المستخدمة)

| Layer (الطبقة) | Technology (التقنية) | Version |
|---|---|---|
| Frontend framework (الواجهة) | React.js (Create React App) | 18.3 |
| Styling (الالتنسيق) | Tailwind CSS + custom gradients | 3.4 |
| Animations (الأنيميشن) | Framer Motion | 11.x |
| UI icons (الأيقونات) | lucide-react, react-icons, Font Awesome | — |
| Charts (الرسوم البيانية) | Recharts | — |
| Routing (التوجيه) | React Router DOM | 6.28 |
| Auth & Database (الحساب والقاعدة) | Supabase (Auth + Postgres + RLS) | supabase-js 2.49 |
| **Backend API (الباك إند)** | **Supabase Edge Functions (Deno)** | single `api` function |
| File storage (تخزين الملفات) | Supabase Storage — private `statements` bucket | — |
| HTTP client (طلبات HTTP) | Fetch wrapper (`src/api.js`) | — |
| Sessions (الجلسات) | Supabase JWT + cookie fallback | — |
| Bot protection (حماية الروبوت) | Google reCAPTCHA v2 (invisible) | 3.1 |
| Toasts (الإشعارات) | React Toastify | 10.x |
| Hosting (الاستضافة) | Vercel (static + CI build) | — |

---

## 🚀 Getting Started (البداية السريعة)

### Prerequisites (المتطلبات)

- **Node.js** 18+ and npm (or yarn)
- A **Supabase** project with the `api` Edge Function deployed (free tier is enough) (مشروع Supabase بدالة `api` متاحة)

### Installation (التثبيت)

```bash
# 1. Clone the repository (نزّل الريبو)
git clone https://github.com/AmjadIbrahim1/wealthwise-frontend.git
cd wealthwise-frontend

# 2. Install dependencies (نزّل الاعتماديات)
npm install

# 3. Configure environment variables (اضبط متغيرات البيئة)
cp .env.example .env
# then edit .env with your Supabase URL + anon key (بعدين املا بيانات Supabase)

# 4. Run the development server (شغّل سيرفر التطوير)
npm start
```

The app launches at **http://localhost:3000** (التطبيق هيفتح على http://localhost:3000).

### Environment Variables (متغيّرات البيئة)

Create `.env` in the project root (انشئ ملف `.env` في جذر المشروع):

| Variable (المتغيّر) | Required (مطلوب؟) | Description (الوصف) | Status in Production |
|---|---|---|---|
| `REACT_APP_SUPABASE_URL` | ✅ Always | Supabase project URL (رابط مشروع Supabase) | ✅ Set on Vercel |
| `REACT_APP_SUPABASE_ANON_KEY` | ✅ Always | Supabase anon/publishable key (المفتاح العام) | ✅ Set on Vercel |
| `REACT_APP_SITEKEY` | Optional | Google reCAPTCHA site key (مفتاح reCAPTCHA) | Optional |

That's it — **no backend URL, no secrets** (بس كده — مفيش رابط باكند ومفيش أسرار). Everything else lives inside Supabase (كل حاجة تانية جوه Supabase).

> ⚠️ **CRA rule (قاعدة CRA):** Only `REACT_APP_*` variables are exposed to the browser (متغيّرات `REACT_APP_*` بس اللي بتروح للمتصفح). The service-role key and DB credentials stay server-side in Supabase (مفاتيح الخدمة بتفضل جوه Supabase).

### Build & Test (البناء والاختبار)

```bash
npm run build         # production build (بناء الإنتاج)
CI=true npm run build # fail on any ESLint warning — same as Vercel (نفس شروط Vercel)
npm test              # run test suite (تشغيل الاختبارات)
```

---

## 🔐 Authentication (المصادقة)

Authentication is fully handled by **Supabase Auth (المصادقة كلها عبر Supabase Auth)**:

- **Email & password** signup/login with email-confirmation support (تسجيل ودخول بالبريد مع دعم تأكيد البريد)
- **Google OAuth** popup flow (تسجيل دخول جوجل)
- **Password reset** via email (استعادة كلمة المرور بالبريد)

Login flow (تدفق الدخول):

```
Sign in with Supabase ✅
  → POST /functions/v1/api?endpoint=login   (JWT verified by the function)
  → { token } — stored as sessionToken cookie (8h)
  → GET  ...?endpoint=findemail&email=...
  → count === 0 ? /foam (onboarding) : /home (returning user)
```

The Edge Function verifies every request's JWT and derives the user's email from it — users can only touch **their own** row in `profiles` (الدالة بتحقق التوكن وبتستخدم إيميل المستخدم نفسه — المستخدم مش هيوصل لبيانات حد تاني بسبب RLS كمان).

---

## 🔌 Backend API — Supabase Edge Functions (الواجهة الخلفية)

One function, `api`, routes every endpoint via `?endpoint=<name>` (دالة واحدة بتوزع على كل النقاط):

| Endpoint | Method | Purpose (الغرض) |
|---|---|---|
| `signup` | POST | Upsert profile row after signup (إنشاء سجل المستخدم) |
| `login` | POST | Issue session token for cookie (إصدار توكن الجلسة) |
| `findmail` | GET | Pre-login user check (فحص المستخدم قبل الدخول) |
| `findemail` | GET | New vs. returning user routing + navbar profile (تحديد مسار المستخدم والملف) |
| `submitdata` | POST | Onboarding form → `profiles.form_data` (حفظ استبيان البداية) |
| `updatecount` | POST | Increment onboarding count (زيادة عدّاد الاستبيان) |
| `recommend-mutual-funds` | POST | MF recommendations → `{ groqRecommendation }` (توصيات الصناديق) |
| `fdrecommendations` | POST | FD recommendations → `{ groqRecommendation }` (توصيات الودائع) |
| `chatbot4` | POST | Bilingual financial chatbot → `{ answer }` (الشات بوت المالي) |
| `upload` | POST | Multipart CSV → `statements` bucket (رفع ملف CSV) |

**Database tables (جداول الداتابيس):**

- `public.profiles` — `email` (PK), `name`, `phone`, `profile`, `count`, `form_data` (jsonb), `created_at`
  - **RLS enabled:** users can only SELECT their own row (active RLS: كل مستخدم يشوف سجله هو بس)
- `storage.statements` — private bucket for uploaded statements (بكت خاص للكشوفات المرفوعة)

**Deploying the function locally (نشر الدالة محلياً):**

```bash
supabase functions deploy api --project-ref gheeanugjsiuxkegkhxx
```

---

## 🏭 Production Deployment (نشر الإنتاج)

### Current Production Stack (stack الإنتاج الحالي)

| Piece (الجزء) | Service (الخدمة) | URL |
|---|---|---|
| Frontend (الواجهة) | Vercel — auto-deploy on push to `main` | https://wealthwise-frontend-kappa.vercel.app |
| Auth + DB + API (الحساب والقاعدة والواجهة) | Supabase — project `wealthwise`, region `eu-central-1` | Edge Function: `/functions/v1/api` |
| Storage (التخزين) | Supabase Storage — bucket `statements` (private) | — |

### Deploying Changes (نشر التغييرات)

The Vercel project is connected to GitHub — every push to `main` triggers a production build (مشروع Vercel متصل بجيت هب — أي push على `main` بيبني الإنتاج أوتوماتيك).

```bash
git add . && git commit -m "feat: my change" && git push origin main
# Frontend auto-deploys (الواجهة تتنشر أوتوماتيك)
# Edge function changes: supabase functions deploy api (تغيّرات الدالة: اعمل deploy للدالة)
```

> ⚠️ **CI behavior (سلوك الـ CI):** Vercel builds with `CI=true`, so **any ESLint warning fails the build** (أي تحذير ESLint بيرفض البناء). Keep the code lint-clean: run `npx eslint "src/**/*.{js,jsx}"` before pushing (شغّل فحص الـ lint قبل كل push).

---

## ✅ Production Readiness Checklist (قائمة جاهزية الإنتاج)

Status of each production component (حالة كل مكوّن في الإنتاج):

| # | Item (البند) | Status (الحالة) | Notes (ملاحظات) |
|---|---|---|---|
| 1 | Frontend build + deploy (بناء ونشر الواجهة) | ✅ Done | Auto-deploy from GitHub to Vercel |
| 2 | ESLint/CI clean (نظافة البناء) | ✅ Done | 0 errors, 0 warnings |
| 3 | Supabase project (مشروع Supabase) | ✅ Live | `wealthwise`, eu-central-1 |
| 4 | Supabase env vars on Vercel | ✅ Set | URL + anon key (all environments) |
| 5 | Backend (Edge Function `api`) | ✅ Deployed | All 10 endpoints inside Supabase |
| 6 | DB schema + RLS (`profiles`) | ✅ Done | Users read only their own row |
| 7 | Storage bucket (`statements`) | ✅ Done | Private — uploads via the function |
| 8 | Email/password signup & login | ✅ Ready | Works with Supabase Auth |
| 9 | Google OAuth provider (مزود جوجل) | ⏳ Optional | Needs Google Cloud Client ID + Secret in Supabase |
| 10 | Email confirmations config (إعداد تأكيد البريد) | ⏳ Decide | On (default) or off in Supabase dashboard |
| 11 | Custom domain (دومين مخصص) | ⏳ Optional | Add via Vercel dashboard |

---

## 📁 Project Structure (هيكل المشروع)

```
wealthwise-frontend/
├── public/
│   ├── index.html            # HTML shell, reCAPTCHA script, CDNs (القالب الأساسي)
│   └── manifest.json         # PWA manifest (بيانات التطبيق)
├── supabase/
│   └── functions/
│       └── api/
│           └── index.ts      # The whole backend: 10 endpoints (الباك إند كله: ١٠ نقاط)
├── src/
│   ├── index.js              # React root + Router (جذر React والراوتر)
│   ├── App.js                # Routes + auth state listener (المسارات وحالة المصادقة)
│   ├── api.js                # Edge Function fetch client (عميل استدعاء الدالة)
│   ├── supabase.js           # Supabase client init (إعداد عميل Supabase)
│   ├── App.css / index.css   # Base styles + Tailwind directives (التنسيقات الأساسية)
│   ├── setupTests.js         # Jest/dom test setup (إعداد الاختبارات)
│   └── components/
│       ├── login.js          # Signup / login / reset / Google OAuth (الدخول والتسجيل)
│       ├── navbar.js         # Top navigation + profile menu (الشريط العلوي)
│       ├── Home.js           # EGX dashboard + learning videos (لوحة السوق والدروس)
│       ├── ChatBot.js        # AI assistant "Amjad" (المساعد الذكي)
│       ├── Psinfo.js         # Multi-step onboarding form (استبيان البداية)
│       ├── ExpenseDate.js    # Expense form (نموذج المصروفات)
│       ├── ExpenseComparison.js # Benchmark chart (رسم المقارنة)
│       ├── personalMF.js     # Mutual fund recommendations (توصيات الصناديق)
│       ├── personalFD.js     # Fixed deposit recommendations (توصيات الودائع)
│       ├── FileUpload.js     # Statement upload (رفع الكشوفات)
│       ├── AssetAllocationChart.js # Portfolio pie chart (توزيع المحفظة)
│       └── PageNotFound.js   # 404 page (صفحة غير موجودة)
├── .env.example              # Env template (نموذج متغيرات البيئة)
├── tailwind.config.js        # Tailwind + brand colors (إعدادات Tailwind)
└── package.json              # Scripts + dependencies (السكربتات والاعتماديات)
```

**Brand colors (ألوان الهوية):** `#339933` (Egyptian green — أخضر مصري) and `#F7DF1E` (gold — ذهبي), configured in `tailwind.config.js` as `primary`/`secondary`.

---

## 🔒 Security Notes (ملاحظات الأمان)

- ✅ The **anon key is public by design** (المفتاح العام مفتوح بطبيعته) — the Edge Function verifies the caller's JWT on every request (الدالة بتحقق توكن المستخدم في كل طلب).
- ✅ The **service role key never reaches the browser** — it lives only in Supabase's function runtime (مفتاح الخدمة مش بيخرج من Supabase أبداً).
- ✅ **RLS on `profiles`** — users can only read their own row (كل مستخدم يشوف سجله هو بس).
- ✅ Uploads go to a **private storage bucket** through the function only (الرفع في بكت خاص عن طريق الدالة بس).
- ✅ Session cookie is `Secure` + `SameSite=Strict`, 8-hour expiry (كوكيز الجلسة آمنة ومدة ٨ ساعات).
- 🔜 Harden further: add rate limiting via Supabase WAF (أضف حد للطلبات عبر WAF), rotate keys regularly (بدّل المفاتيح دورياً).

---

## 🗺 Roadmap (خارطة الطريق)

- 🌍 Multi-language support beyond EN/AR (دعم لغات تانية غير الإنجليزي والعربية)
- 📱 Native mobile app — React Native (تطبيق موبايل أصلي)
- 🔔 Smart notifications for market moves (إشعارات ذكية لتغيرات السوق)
- 📊 Real EGX live data integration (ربط بيانات البورصة المصرية الحية)
- 🤖 Deeper AI advisory with LLMs (استشارات أعمق بالذكاء الاصطناعي)
- 🎓 Certification tracks for education modules (مسارات شهادات تعليمية)
- 🎮 Gamified savings challenges (تحديات ادخار ملعّبة)

---

## 👥 Team (الفريق)

### Amjad Team (فريق أمجد)

| Member (العضو) | Role (الدور) |
|---|---|
| **Amjad (أمجد)** | Founder, Full-Stack Developer, Product Design (مؤسس، مطور شامل، تصميم منتج) |

> Built with determination in Egypt (اتبنى بشغف في مصر 🇪🇬).

---

## 🙏 Acknowledgments (الشكر والتقدير)

- [Supabase](https://supabase.com) — auth, database, Edge Functions & storage (المصادقة والقواعد والدوال والتخزين)
- [Vercel](https://vercel.com) — hosting & CI (الاستضافة والبناء التلقائي)
- [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/) — the frontend toolkit
- Arabic financial-education creators on YouTube (صنّاع المحتوى المالي العربي على يوتيوب) whose free lessons power the Learning Center (دروسهم بتغذّي مركز التعلم)
- Everyone who believes financial literacy should be accessible in Arabic (كل من يؤمن أن الوعي المالي يجب أن يكون متاحاً بالعربية)

---

<div align="center">

**WealthWise (ويث وايز)** — *Smart money decisions, in your language (قرارات مالية ذكية، بلغتك).*

Made with 💚 in Egypt 🇪🇬

</div>
