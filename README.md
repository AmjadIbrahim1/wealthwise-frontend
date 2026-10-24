<div align="center">

# 💰 WealthWise — الحكمة المالية

### AI-Powered Financial Advisory & Education Platform (منصة الاستشارات والتعليم المالية الذكية)

**Bilingual English + Arabic (Egyptian) financial companion — investments, budgeting, and learning (رفيقك المالي ثنائي اللغة — استثمار وميزانية وتعليم مالي).**

[![Production Status](https://img.shields.io/badge/Status-Production%20Live-brightgreen?style=for-the-badge&logo=vercel)](https://wealthwise-frontend-kappa.vercel.app)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/AmjadIbrahim1/wealthwise-frontend)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth%20%26%20DB-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
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
- [🔌 Backend API (واجهة الـ API الخلفية)](#-backend-api-واجهة-الـ-api-الخلفية)
- [🏭 Production Deployment (نشر الإنتاج)](#-production-deployment-نشر-الإنتاج)
- [✅ Production Readiness Checklist (قائمة جاهزية الإنتاج)](#-production-readiness-checklist-قائمة-جاهزية-الإنتاج)
- [📁 Project Structure (هيكل المشروع)](#-project-structure-هيكل-المشروع)
- [🔒 Security Notes (ملاحظات الأمان)](#-security-notes-ملاحظات-الأمان)
- [🗺 Roadmap (خارطة الطريق)](#-roadmap-خارطة-الطريق)
- [👥 Team (الفريق)](#-team-الفريق)
- [🙏 Acknowledgments (ال acknowledgments)](#-acknowledgments-الشكر-والتقدير)

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
| 📤 **Statement Upload (رفع الكشوف)** | Upload bank statements for analysis (رفع كشوفات بنكية للتحليل) | `/fileupload` |
| 👤 **Profile & Onboarding (الملف الشخصي)** | Guided financial onboarding form (استبيان مالي موجّه للجديد) | `/foam` |

**UX highlights (لمسات تجربة المستخدم):** fully responsive mobile-first design (تصميم للموبايل أولاً), rich animations with Framer Motion (أنيميشن Framer Motion), Arabic-friendly typography (خطوط عربية), and inline English↔Arabic translations everywhere (ترجمة فورية لكل مصطلح).

---

## 🏛 Architecture (البنية المعمارية)

```
┌────────────────────────────────────────────────────────────────────┐
│  Browser (المتصفح)                                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  React 18 SPA (CRA) — Tailwind CSS — Framer Motion           │  │
│  │  Routes: / /home /foam /chatbot /expensedate /personal-MF ... │  │
│  └──────────────┬───────────────────────────────┬───────────────┘  │
└─────────────────┼───────────────────────────────┼──────────────────┘
                  │ Supabase JS (auth)            │ Axios (business API)
                  ▼                               ▼
┌─────────────────────────────┐   ┌──────────────────────────────────┐
│  Supabase (cloud)           │   │  Express.js Backend              │
│  • Auth (email + Google)    │   │  • signup / login (JWT session)  │
│  • Postgres DB              │   │  • findemail / findmail          │
│  • eu-central-1             │   │  • getAnalysis / getstocks       │
│  • Project: wealthwise      │   │  • recommend-mutual-funds        │
└─────────────────────────────┘   │  • fdrecommendations / upload    │
                                  │  • chatbot4 / submitdata         │
                                  └──────────────────────────────────┘
                                            ▲
                                  Hosted separately (Render/etc.)
```

> **Note (ملاحظة):** Authentication (signup/login) requires **both** Supabase (identity) and the Express backend (session token + user record) (المصادقة محتاجة Supabase للهوية والباكند لتوكن الجلسة وسجل المستخدم). Analytics & AI features are backend-powered entirely (ميزات التحليل والذكاء الاصطناعي كلها من الباكند).

---

## 🛠 Tech Stack (التقنيات المستخدمة)

| Layer (الطبقة) | Technology (التقنية) | Version |
|---|---|---|
| Frontend framework (الواجهة) | React.js (Create React App) | 18.3 |
| Styling (التنسيق) | Tailwind CSS + custom gradients | 3.4 |
| Animations (الأنيميشن) | Framer Motion | 11.x |
| UI icons (الأيقونات) | lucide-react, react-icons, Font Awesome | — |
| Charts (الرسوم البيانية) | Recharts | — |
| Routing (التوجيه) | React Router DOM | 6.28 |
| Auth & Database (الحساب والقاعدة) | Supabase (Auth + Postgres) | supabase-js 2.49 |
| HTTP client (طلبات HTTP) | Axios | 1.7 |
| Sessions (الجلسات) | Cookies (js-cookie) + backend JWT | — |
| Payload encryption (تشفير البيانات) | CryptoJS (AES) | 4.2 |
| Bot protection (حماية الروبوت) | Google reCAPTCHA v2 (invisible) | 3.1 |
| Toasts (الإشعارات) | React Toastify | 10.x |
| Hosting (الاستضافة) | Vercel (static + CI build) | — |
| Backend API (الباكند) | Express.js (separate service) | — |

---

## 🚀 Getting Started (البداية السريعة)

### Prerequisites (المتطلبات)

- **Node.js** 18+ and npm (or yarn)
- A **Supabase** project (free tier is enough) (مشروع Supabase مجاني يكفي)
- (Optional for full features) The **Express backend** deployed and reachable (الباكند متاح ومتعمله deploy)

### Installation (التثبيت)

```bash
# 1. Clone the repository (نزّل الريبو)
git clone https://github.com/AmjadIbrahim1/wealthwise-frontend.git
cd wealthwise-frontend

# 2. Install dependencies (نزّل الاعتماديات)
npm install

# 3. Configure environment variables (اضبط متغيرات البيئة)
cp .env.example .env
# then edit .env with your values (بعدين املا القيم في ملف .env)

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
| `REACT_APP_BACKEND_URL` | ✅ For auth & features | Express backend base URL ending with `/` (رابط الباكند ينتهي بـ `/`) | ⏳ Pending backend |
| `REACT_APP_SECRET` | ✅ With backend | AES secret shared with backend for login payload encryption (سر التشفير — نفس القيمة في الباكند) | ⏳ Pending backend |
| `REACT_APP_SITEKEY` | ✅ With reCAPTCHA | Google reCAPTCHA site key (مفتاح reCAPTCHA) | ⏳ Confirm key |

> ⚠️ **CRA rule (قاعدة CRA):** Only `REACT_APP_*` variables are exposed to the browser (متغيّرات `REACT_APP_*` بس اللي بتروح للمتصفح). Never put real secrets (DB passwords, service keys) here (متحطش أسرار حقيقية هنا أبداً) — those belong server-side (الأسرار الحقيقية في الباكند).

### Build & Test (البناء والاختبار)

```bash
npm run build        # production build (بناء الإنتاج)
CI=true npm run build # fail on any ESLint warning — same as Vercel (نفس شروط Vercel)
npm test             # run test suite (تشغيل الاختبارات)
```

---

## 🔐 Authentication (المصادقة)

WealthWise uses a **dual-layer auth model (نموذج مصادقة مزدوج)**:

1. **Supabase Auth (حساب Supabase)** — identity provider (مزود الهوية):
   - Email & password signup/login/signup (تسجيل ودخول بالبريد والباسورد)
   - Email confirmation flow (تأكيد البريد — configurable in Supabase dashboard)
   - Google OAuth popup flow (تسجيل دخول جوجل)
   - Password reset via email (استعادة كلمة المرور)
2. **Express backend session (جلسة الباكند)** — business layer (طبقة الأعمال):
   - `/signup` — create backend user record (إنشاء سجل المستخدم)
   - `/login` — issue signed session token → `sessionToken` cookie, 8h expiry (إصدار توكن جلسة مدته ٨ ساعات)
   - `/findemail` — first-run detection: new users land on onboarding `/foam`, returning users on `/home` (تحديد المستخدم الجديد)

**Auth flow (تدفق المصادقة):**

```
Login form → Supabase signInWithPassword ✅
           → Backend /login (AES-encrypted payload) → sessionToken cookie
           → Backend /findemail → /foam (new) or /home (returning)
```

---

## 🔌 Backend API (واجهة الـ API الخلفية)

The frontend consumes the following backend endpoints (الواجهة بتستخدم نقاط الـ API دي):

| Method | Endpoint | Used by (بيستخدمها فين) |
|---|---|---|
| POST | `/signup` | signup + Google OAuth (التسجيل وجوجل) |
| POST | `/login` | email login (دخول البريد) |
| GET | `/findmail` | pre-login user check (فحص المستخدم قبل الدخول) |
| GET | `/findemail` | route new vs. returning users (تحديد مسار المستخدم) |
| POST | `/submitdata` | onboarding form (استبيان البداية) |
| POST | `/updatecount` | onboarding counter (عدّاد الاستبيان) |
| POST | `/getAnalysis` | expense benchmarking (مقارنة المصروفات) |
| POST | `/getstocks` | portfolio stocks (أسهم المحفظة) |
| POST | `/portfolio-profit-loss` | P&L report (تقرير الأرباح) |
| POST | `/recommend-mutual-funds` | MF recommendations (توصيات الصناديق) |
| POST | `/fdrecommendations` | FD recommendations (توصيات الودائع) |
| POST | `/chatbot4` | AI chatbot replies (ردود الشات بوت) |
| POST | `/upload` | statement upload (رفع الكشوفات) |

> 🔑 **Session security (أمان الجلسة):** every backend call sends `Authorization: Bearer <sessionToken>` + `withCredentials: true` (كل طلب للباكند بيبعت توكن الجلسة). CORS on the backend must allow the Vercel origin (لازم الباكند يسمح بدومين Vercel).

---

## 🏭 Production Deployment (نشر الإنتاج)

### Current Production Stack (stack الإنتاج الحالي)

| Piece (الجزء) | Service (الخدمة) | URL |
|---|---|---|
| Frontend (الواجهة) | Vercel — auto-deploy on push to `main` | https://wealthwise-frontend-kappa.vercel.app |
| Auth + DB (الحساب والقاعدة) | Supabase — project `wealthwise`, region `eu-central-1` | https://supabase.com |
| Backend API (الباكند) | Separate Express service (deployment pending) | ⏳ |

### Deploying Changes (نشر التغييرات)

The Vercel project is connected to GitHub — every push to `main` triggers a production build (مشروع Vercel متصل بجيت هب — أي push على `main` بيبني الإنتاج أوتوماتيك).

```bash
git add . && git commit -m "feat: my change" && git push origin main
# Vercel builds automatically (Vercel هيبني أوتوماتيك)
# Then update env vars if needed via Vercel dashboard (و حدّث متغيرات البيئة لو لزم)
```

> ⚠️ **CI behavior (سلوك الـ CI):** Vercel builds with `CI=true`, so **any ESLint warning fails the build** (أي تحذير ESLint بيرفض البناء). Keep the code lint-clean: run `npx eslint "src/**/*.{js,jsx}"` before pushing (شغّل فحص الـ lint قبل كل push).

### Manual Deploy (نشر يدوي)

```bash
npm install -g vercel
vercel --prod
```

---

## ✅ Production Readiness Checklist (قائمة جاهزية الإنتاج)

Status of each production component (حالة كل مكوّن في الإنتاج):

| # | Item (البند) | Status (الحالة) | Notes (ملاحظات) |
|---|---|---|---|
| 1 | Frontend build + deploy (بناء ونشر الواجهة) | ✅ Done | Auto-deploy from GitHub to Vercel |
| 2 | ESLint/CI clean (نظافة البناء) | ✅ Done | 0 errors, 0 warnings |
| 3 | Supabase project (مشروع Supabase) | ✅ Live | `wealthwise`, eu-central-1 |
| 4 | Supabase env vars on Vercel | ✅ Set | URL + anon key (all environments) |
| 5 | Email/password signup & login | ⚙️ Ready | Works once backend is live (item 6) |
| 6 | **Express backend deployed** (نشر الباكند) | ⏳ **Needed** | Required for signup/login/analytics |
| 7 | `REACT_APP_BACKEND_URL` + `REACT_APP_SECRET` | ⏳ **Needed** | Set on Vercel once backend is live |
| 8 | Google OAuth provider (مزود جوجل) | ⏳ **Needed** | Google Cloud Client ID + Secret in Supabase |
| 9 | Email confirmations config (إعداد تأكيد البريد) | ⏳ Decide | On (default) or off in Supabase dashboard |
| 10 | reCAPTCHA site key (مفتاح reCAPTCHA) | ⏳ Confirm | Reuse current key or provide new one |
| 11 | Custom domain (دومين مخصص) | ⏳ Optional | Add via Vercel dashboard |

---

## 📁 Project Structure (هيكل المشروع)

```
wealthwise-frontend/
├── public/
│   ├── index.html            # HTML shell, reCAPTCHA script, CDNs (القالب الأساسي)
│   └── manifest.json         # PWA manifest (بيانات التطبيق)
├── src/
│   ├── index.js              # React root + Router (جذر React والراوتر)
│   ├── App.js                # Routes + auth state listener (المسارات وحالة المصادقة)
│   ├── App.css / index.css   # Base styles + Tailwind directives (التنسيقات الأساسية)
│   ├── supabase.js           # Supabase client init (إعداد عميل Supabase)
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

- ✅ The **anon key is public by design** (المفتاح العام مفتوح بطبيعته) — it only permits what Supabase RLS policies allow (بيسمح بس بالقواعد اللي محددة في RLS).
- ✅ Login payloads are **AES-encrypted** client-side with `REACT_APP_SECRET` before hitting the backend (بيانات الدخول بتتشفير قبل الباكند).
- ✅ Session cookie is `Secure` + `SameSite=Strict`, 8-hour expiry (كوكيز الجلسة آمنة ومدة ٨ ساعات).
- ✅ reCAPTCHA invisible mode protects auth forms (حماية reCAPTCHA لفورمات الحساب).
- 🔜 Harden further: enable **RLS on every table** (فعّل RLS على كل الجداول), rotate secrets regularly (بدّل الأسرار دورياً), and add rate limiting on the backend (أضف حد للطلبات في الباكند).

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

- [Supabase](https://supabase.com) — auth & database (المصادقة وقواعد البيانات)
- [Vercel](https://vercel.com) — hosting & CI (الاستضافة والبناء التلقائي)
- [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/) — the frontend toolkit
- Arabic financial-education creators on YouTube (صنّاع المحتوى المالي العربي على يوتيوب) whose free lessons power the Learning Center (دروسهم بتغذّي مركز التعلم)
- Everyone who believes financial literacy should be accessible in Arabic (كل من يؤمن أن الوعي المالي يجب أن يكون متاحاً بالعربية)

---

<div align="center">

**WealthWise (ويث وايز)** — *Smart money decisions, in your language (قرارات مالية ذكية، بلغتك).*

Made with 💚 in Egypt 🇪🇬

</div>
