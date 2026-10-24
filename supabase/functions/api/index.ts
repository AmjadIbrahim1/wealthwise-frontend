// WealthWise API — single Supabase Edge Function (the whole backend, inside Supabase)
// Routes via ?endpoint=<name>. Uses the service role key internally; callers pass
// their Supabase JWT (or the anon key for pre-login checks) in Authorization.
//
// Endpoints (matches what the React frontend consumes):
//   POST signup                  { email, name, phone, profile? }      -> { status }
//   POST login                   (authenticated bearer)               -> { token }
//   GET  findmail                ?email                               -> { message } | { user }
//   GET  findemail               ?email                               -> { user: {..., count} }
//   POST submitdata              { formData }                         -> { status }
//   POST updatecount             { email }                            -> { status }
//   POST recommend-mutual-funds  { user_age, user_risk_appetite, ... }-> { groqRecommendation }
//   POST fdrecommendations       { age, amount, termYears }           -> { groqRecommendation }
//   POST chatbot4                { question }                         -> { answer }
//   POST upload                  multipart/form-data (file)           -> { message }

import { createClient } from "npm:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const admin = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// Extract the authenticated user's email from the bearer token (null for anon).
async function bearerEmail(req: Request): Promise<string | null> {
  const token = (req.headers.get("Authorization") ?? "")
    .replace(/^Bearer\s+/i, "")
    .trim();
  if (!token || token === ANON_KEY) return null;
  const { data, error } = await admin.auth.getUser(token);
  if (error || !data.user?.email) return null;
  return data.user.email.toLowerCase();
}

function param(req: Request, key: string): string {
  return new URL(req.url).searchParams.get(key) ?? "";
}

// ---------------------------------------------------------------------------
// Static reference data (illustrative Egyptian market figures)
// ---------------------------------------------------------------------------

const MF_FUNDS = {
  conservative: [
    {
      name: "AlAhly Money Market Fund (صندوق الأهلي للمoney ماركت)",
      note: "Low risk, daily liquidity (مخاطرة منخفضة وسيولة يومية)",
      annual: "≈ 17%",
      min: 500,
    },
    {
      name: "CI Capital Fixed Income Fund (صندوق سي آي كابيتال للدخل الثابت)",
      note: "Stable returns via T-bonds and deposits (عوائد مستقرة من أذون وخزانة وودائع)",
      annual: "≈ 20%",
      min: 1000,
    },
  ],
  moderate: [
    {
      name: "AlAhly Balanced Fund (صندوق الأهلي المتوازن)",
      note: "Mix of stocks and bonds (مزيج من الأسهم والسندات)",
      annual: "≈ 22%",
      min: 1000,
    },
    {
      name: "Beltone Fixed Income Fund (صندوق بيلتون للدخل الثابت)",
      note: "Income with moderate growth (دخل مع نمو متوسط)",
      annual: "≈ 20%",
      min: 1000,
    },
    {
      name: "AlAhly Equity Fund (صندوق الأهلي للأسهم)",
      note: "Partial equity exposure for growth (جزء أسهم للنمو)",
      annual: "≈ 26%",
      min: 1000,
    },
  ],
  aggressive: [
    {
      name: "CI Capital Equity Fund (صندوق سي آي كابيتال للأسهم)",
      note: "High growth, higher volatility (نمو عالي مع تذبذب أعلى)",
      annual: "≈ 28%",
      min: 5000,
    },
    {
      name: "Beltone Equity Fund (صندوق بيلتون للأسهم)",
      note: "Aggressive EGX exposure (تعرض طموح لبورصة مصر)",
      annual: "≈ 27%",
      min: 1000,
    },
    {
      name: "AlAhly Balanced Fund (صندوق الأهلي المتوازن)",
      note: "Balance the volatility (وازن التذبذب)",
      annual: "≈ 22%",
      min: 1000,
    },
  ],
};

const FD_BANKS = [
  { bank: "National Bank of Egypt - NBE (البنك الأهلي المصري)", rate1y: 17.0, rate3y: 16.0, min: 1000 },
  { bank: "Banque Misr (بنك مصر)", rate1y: 17.0, rate3y: 16.0, min: 1000 },
  { bank: "Al Rajhi Bank Egypt (مصرف الراجحي مصر)", rate1y: 16.5, rate3y: 15.5, min: 1000 },
  { bank: "QNB Alahli (بنك قطر الوطني الأهلي)", rate1y: 15.5, rate3y: 15.0, min: 5000 },
  { bank: "CIB (بنك مصر الدولي)", rate1y: 14.5, rate3y: 14.0, min: 10000 },
];

// ---------------------------------------------------------------------------
// Recommendation engines (rule-based, bilingual)
// ---------------------------------------------------------------------------

function recommendMutualFunds(body: Record<string, unknown>): string {
  const age = parseInt(String(body.user_age ?? "0"), 10) || 0;
  const income = parseInt(String(body.user_income ?? "0"), 10) || 0;
  const savings = parseInt(String(body.user_savings ?? "0"), 10) || 0;
  const amount = parseInt(String(body.user_investment_amount ?? "0"), 10) || 0;
  const risk = String(body.user_risk_appetite ?? "").toLowerCase();

  let bucket: keyof typeof MF_FUNDS = "moderate";
  if (/conserv|low|محافظ|منخفض/.test(risk)) bucket = "conservative";
  else if (/aggress|high|طموح|عالي|جسور/.test(risk)) bucket = "aggressive";
  if (age && age < 30 && bucket === "conservative") bucket = "moderate";

  const funds = MF_FUNDS[bucket]
    .filter((f) => amount === 0 || amount >= f.min)
    .slice(0, 3);
  const picks = funds.length ? funds : MF_FUNDS[bucket];

  const split =
    bucket === "conservative"
      ? "70% money market + 30% fixed income (70% مoney ماركت + 30% دخل ثابت)"
      : bucket === "moderate"
      ? "50% balanced + 30% fixed income + 20% equity (50% متوازن + 30% دخل ثابت + 20% أسهم)"
      : "60% equity + 40% balanced (60% أسهم + 40% متوازن)";

  const lines: string[] = [
    "**Your Mutual Fund Picks (صناديق الاستثمار المناسبة ليك)**",
    "",
    ...picks.flatMap((f, i) => [
      `${i + 1}. **${f.name}**`,
      `   - Annual return (العائد السنوي): ${f.annual} — ${f.note}`,
      `   - Minimum investment (أقل استثمار): ${f.min.toLocaleString("en-US")} EGP (ج.م)`,
      "",
    ]),
    "**Suggested Portfolio Split (توزيع المحفظة المقترح)**",
    split,
    "",
    "**Why this fits you (ليه مناسب ليك)**",
    `- Age (السن): ${age || "—"} • Risk appetite (تحمّل المخاطرة): ${body.user_risk_appetite || "moderate (متوسط)"}`,
    `- Monthly income (الدخل الشهري): ${income ? income.toLocaleString("en-US") + " EGP (ج.م)" : "—"}`,
    `- Savings available (المدخرات): ${savings ? savings.toLocaleString("en-US") + " EGP (ج.م)" : "—"}`,
    `- Amount to invest (مبلغ الاستثمار): ${amount ? amount.toLocaleString("en-US") + " EGP (ج.م)" : "—"}`,
    "",
    "**Action plan (خطة التنفيذ)**",
    "1. Start with the minimum and invest monthly (ابدأ بأقل مبلغ واستثمر شهرياً)",
    "2. Keep an emergency fund of 3–6 months before increasing risk (سيّب صندوق طوارئ 3–6 شهور قبل ما تزود المخاطرة)",
    "3. Review performance every 6 months (راجع الأداء كل 6 شهور)",
    "",
    "*Figures are indicative and not guaranteed advice (الأرقام تقريبية وليست ضماناً للعائد).*",
  ];
  return lines.join("\n");
}

function recommendFD(body: Record<string, unknown>): string {
  const age = parseInt(String(body.age ?? "0"), 10) || 0;
  const amount = parseInt(String(body.amount ?? "0"), 10) || 0;
  const term = Math.max(1, parseInt(String(body.termYears ?? "1"), 10) || 1);

  const eligible = FD_BANKS.filter((b) => amount === 0 || amount >= b.min).slice(0, 3);
  const picks = eligible.length ? eligible : FD_BANKS.slice(0, 2);

  const lines: string[] = [
    "**Top Fixed Deposit Picks (أفضل ودائع ثابتة ليك)**",
    "",
    ...picks.flatMap((b, i) => {
      const rate = term >= 3 ? b.rate3y : b.rate1y;
      const interest = amount ? Math.round((amount * rate * term) / 100) : 0;
      return [
        `${i + 1}. **${b.bank}**`,
        `   - Annual rate (العائد السنوي): ${rate}% for ${term} year(s) (سنة)`,
        amount
          ? `   - Indicative profit (الربح التقديري): ${interest.toLocaleString("en-US")} EGP (ج.م)`
          : `   - Minimum (أقل مبلغ): ${b.min.toLocaleString("en-US")} EGP (ج.م)`,
        "",
      ];
    }),
    "**Notes (ملاحظات مهمة)**",
    `- Your inputs (بياناتك): age (السن) ${age || "—"} • amount (المبلغ) ${amount.toLocaleString("en-US")} EGP (ج.م) • term (المدة) ${term} year(s) (سنة)`,
    "- Rates are indicative and change with CBE policy (الأسعار تقريبية وبتتغير مع سياسات البنك المركزي)",
    "- Interest is subject to 20% withholding tax after the exemption limit (العائد بيخضع لضريبة 20% بعد حد الإعفاء)",
    "- Ask the bank about early-withdrawal penalties (اسأل البنك عن غرامات السحب المبكر)",
  ];
  return lines.join("\n");
}

function chatbotAnswer(question: string): string {
  const q = question.toLowerCase();

  if (/مرحبا|أهلا|اهلا|السلام|hello|hi\b|hey/.test(q)) {
    return "Hello! I'm Amjad, your financial assistant (أهلاً! أنا أمجد، مساعدك المالي). Ask me about investing, savings, budgeting or debt (اسألني عن الاستثمار أو الادخار أو الميزانية أو الديون).";
  }
  if (/استثمار|invest|أسهم|stocks|سهم|portfolio|محفظ/.test(q)) {
    return "**Investing (الاستثمار)**\n\n- Start with an emergency fund, then diversify (ابدأ بصندوق طوارئ وبعدين وزّع)\n- Index and balanced funds suit beginners (صناديق المؤشرات والمتوازنة مناسبة للمبتدئين)\n- In Egypt, check returns after inflation and tax (في مصر فصّل العائد بعد التضخم والضريبة)\n- Never invest money you need within a year (تحطش فلوس محتاجها خلال سنة)";
  }
  if (/ادخار|saving|مدخرات|emergency|طوارئ/.test(q)) {
    return "**Savings (الادخار)**\n- Aim for 3–6 months of expenses in an emergency fund (هدف 3–6 شهور مصروفات في صندوق طوارئ)\n- High-yield savings or money-market funds beat a current account (حسابات عالي العائد أو مoney ماركت أفضل من الحساب الجاري)\n- Automate a fixed amount every payday (ثبّت مبلغ تلقائي كل مرتب)";
  }
  if (/ميزانية|budget|مصروف/.test(q)) {
    return "**Budgeting (الميزانية)**\n- Use the 50/30/20 rule: needs / wants / savings (قاعدة 50/30/20: احتياجات / رغبات / ادخار)\n- Track spending in the Expense Tracker first (تابع مصاريفك في متتبع المصروفات الأول)\n- Cut one recurring subscription before anything drastic (اقطع اشتراك متكرر قبل أي خطوة كبيرة)";
  }
  if (/دين|debt|قرض|credit|تقسيط/.test(q)) {
    return "**Debt (الديون)**\n- Pay the highest-interest debt first (ابدأ بأعلى فائدة الأول)\n- Pay at least the minimum on every debt (ادفع الأدنى في كل الديون)\n- Avoid new consumer credit while repaying (تجنب أي قرض استهلاكي جديد وأنت بتسدد)";
  }
  if (/معاش|تقاعد|retire|pension/.test(q)) {
    return "**Retirement (المعاش)**\n- Start early — compound interest rewards time (ابدأ بدري، الفائدة المركبة بتكافئ الوقت)\n- Long-term balanced and equity funds fit 10+ year horizons (صناديق المتوازن والأسهم تناسب مدة 10+ سنين)\n- Recheck your plan every year (راجع خطتك كل سنة)";
  }
  if (/صندوق|mutual|fund|صناديق/.test(q)) {
    return "**Mutual funds (صناديق الاستثمار)**\n- Pick by risk appetite: conservative, moderate or aggressive (اختار حسب تحمّل المخاطرة)\n- Compare fees, not only returns (قارن العمولات مش العائد بس)\n- Visit Personalized MF for a pick built for your profile (ادخل صفحة توصيات الصناديق عشان توصية على مقاسك)";
  }
  if (/بورصة|egx|exchange|مؤشر/.test(q)) {
    return "**EGX (بورصة مصر)**\n- Diversify across banks, telecom and industrials (وزّع على بنوك واتصالات وصناعات)\n- Blue chips like COMI and TMGH are steadier (الأسهم الكبيرة زي كومي وطلعت مصطفى أثبت)\n- Check the Home dashboard for live-style prices (شوف اللوحة الرئيسية لأسعار محدثة)";
  }
  if (/تضخم|inflation|سعر الفائدة|interest rate/.test(q)) {
    return "**Inflation (التضخم)**\n- Cash loses value when inflation is high (الفلس بتفقد قيمتها مع التضخم)\n- T-bills, bonds and money-market funds help preserve value (أذون وسندات وصناديق مoney ماركت بتحافظ على القيمة)\n- Link returns to the CBE policy rate (اربط العائد بسعر البنك المركزي)";
  }
  if (/شكر|thanks|thank you|ممنون/.test(q)) {
    return "Anytime! Ask me anything about money anytime (على راسي في أي وقت اسألني عن أي حاجة تخص الفلوس).";
  }
  return "I can help with investing, savings, budgeting, debt, retirement and the EGX (أقدر أساعدك في الاستثمار والادخار والميزانية والديون والمعاش والبورصة). Which one do you want to explore (تحب نبدأ بأيه؟)";
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const endpoint = param(req, "endpoint");

  try {
    switch (endpoint) {
      case "signup": {
        const body = await req.json();
        const email = String(body.email ?? "").trim().toLowerCase();
        if (!email) return json({ message: "Email is required (البريد مطلوب)" }, 400);
        const row: Record<string, unknown> = { email };
        if (body.name !== undefined && body.name !== null && body.name !== "") row.name = body.name;
        if (body.phone !== undefined && body.phone !== null && body.phone !== "") row.phone = body.phone;
        if (body.profile !== undefined && body.profile !== null && body.profile !== "") row.profile = body.profile;
        const { error } = await admin.from("profiles").upsert(row, { onConflict: "email" });
        if (error) return json({ message: error.message }, 500);
        return json({ status: "success" });
      }

      case "login": {
        const email = await bearerEmail(req);
        if (!email) return json({ message: "Not authenticated (غير مسجل دخول)" }, 401);
        const { error } = await admin
          .from("profiles")
          .upsert({ email }, { onConflict: "email" });
        if (error) return json({ message: error.message }, 500);
        const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "").trim();
        return json({ token });
      }

      case "findmail": {
        const email = param(req, "email").trim().toLowerCase();
        if (!email) return json({ message: "Email is required (البريد مطلوب)" }, 400);
        const { data } = await admin.from("profiles").select("*").eq("email", email).maybeSingle();
        if (!data) return json({ message: "No user found with this email" });
        return json({ user: data });
      }

      case "findemail": {
        const email = param(req, "email").trim().toLowerCase();
        if (!email) return json({ message: "Email is required (البريد مطلوب)" }, 400);
        const { data } = await admin.from("profiles").select("*").eq("email", email).maybeSingle();
        return json({ user: data ?? { email, count: 0 } });
      }

      case "submitdata": {
        const body = await req.json();
        const formData = body.formData ?? {};
        const email =
          (await bearerEmail(req)) ??
          String(formData.email ?? "").trim().toLowerCase();
        if (!email) return json({ message: "Not authenticated (غير مسجل دخول)" }, 401);
        const { error } = await admin
          .from("profiles")
          .upsert({ email, form_data: formData }, { onConflict: "email" });
        if (error) return json({ message: error.message }, 500);
        return json({ status: "ok" });
      }

      case "updatecount": {
        const body = await req.json();
        const email =
          (await bearerEmail(req)) ??
          String(body.email ?? "").trim().toLowerCase();
        if (!email) return json({ message: "Not authenticated (غير مسجل دخول)" }, 401);
        const { data: row } = await admin
          .from("profiles")
          .select("count")
          .eq("email", email)
          .maybeSingle();
        const next = (row?.count ?? 0) + 1;
        const { error } = await admin
          .from("profiles")
          .upsert({ email, count: next }, { onConflict: "email" });
        if (error) return json({ message: error.message }, 500);
        return json({ status: "ok", count: next });
      }

      case "recommend-mutual-funds": {
        const body = await req.json();
        return json({ groqRecommendation: recommendMutualFunds(body) });
      }

      case "fdrecommendations": {
        const body = await req.json();
        return json({ groqRecommendation: recommendFD(body) });
      }

      case "chatbot4": {
        const body = await req.json();
        return json({ answer: chatbotAnswer(String(body.question ?? "")) });
      }

      case "upload": {
        const form = await req.formData();
        const file = form.get("file");
        if (!(file instanceof File)) {
          return json({ message: "No file received (مفيش ملف)" }, 400);
        }
        const email = (await bearerEmail(req)) ?? "anonymous";
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const path = `${email}/${Date.now()}-${safeName}`;
        const { error } = await admin.storage
          .from("statements")
          .upload(path, file, { contentType: file.type || "text/csv", upsert: false });
        if (error) return json({ message: error.message }, 400);
        return json({ message: "File uploaded successfully! (تم رفع الملف بنجاح!)" });
      }

      default:
        return json({ message: `Unknown endpoint: ${endpoint || "(none)"}` }, 404);
    }
  } catch (err) {
    console.error("API error:", err);
    return json({ message: err instanceof Error ? err.message : "Server error" }, 500);
  }
});
