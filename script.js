/* =========================================================
   আরিফ খন্দকার — ওয়েবসাইট স্ক্রিপ্ট
   ---------------------------------------------------------
   ✏️  সম্পাদনার জায়গা: নিচের ১ থেকে ৬ নম্বর অংশে আপনার তথ্য বসান।
       [বন্ধনীর ভেতরের লেখা] গুলো আপনার আসল তথ্য দিয়ে বদলান।
       উদ্ধৃতি চিহ্ন " " ও লাইনের শেষের কমা , যেন মুছে না যায়।
   ========================================================= */


/* ---------- ১. সাইট সেটিংস ---------- */
const SITE = {
  // দেশের কোডসহ WhatsApp নম্বর — +, স্পেস বা ড্যাশ ছাড়া। (বাংলাদেশ হলে 880 দিয়ে শুরু)
  whatsappNumber: "8801XXXXXXXXX",
  authorName: "আরিফ খন্দকার",
  // ভাসমান বোতাম ও যোগাযোগ অংশের WhatsApp বার্তা
  generalMessage: "শুভেচ্ছা! আমি আপনার বই অর্ডার করতে / যোগাযোগ করতে চাই।",
};


/* ---------- ২. সোশ্যাল মিডিয়া ----------
   "#" এর জায়গায় আপনার প্রোফাইলের পুরো লিংক দিন।
   কোনোটি দরকার না হলে পুরো লাইনটি মুছে দিন।
   type হতে পারে: facebook, instagram, youtube, email, whatsapp */
const SOCIAL = [
  { type: "facebook",  label: "Facebook",  url: "#" },
  { type: "instagram", label: "Instagram", url: "#" },
  { type: "youtube",   label: "YouTube",   url: "#" },
  { type: "email",     label: "ইমেইল",     url: "mailto:your-email@example.com" },
  { type: "whatsapp",  label: "WhatsApp",  url: "whatsapp" }, // এটি নিজে থেকেই উপরের নম্বর ব্যবহার করবে
];


/* ---------- ৩. বই ----------
   নতুন বই যোগ করতে { ... }, একটি পুরো ব্লক কপি করে নিচে বসান।
   cover: প্রচ্ছদের ছবি GitHub-এ আপলোড করে তার নাম দিন (যেমন "book-1.jpg")।
          খালি "" রাখলে সাদা-কালো নকশার প্রচ্ছদ দেখাবে। */
const BOOKS = [
  {
    title: "[বইয়ের নাম ১]",
    genre: "[ধরন — যেমন উপন্যাস / গল্পগ্রন্থ / কাব্যগ্রন্থ]",
    year: "[প্রকাশকাল]",
    publisher: "[প্রকাশনীর নাম]",
    price: "[মূল্য]",
    summary: "[বইটির ২–৩ লাইনের সংক্ষিপ্ত পরিচিতি এখানে লিখুন।]",
    cover: "",
  },
  {
    title: "[বইয়ের নাম ২]",
    genre: "[ধরন]",
    year: "[প্রকাশকাল]",
    publisher: "[প্রকাশনীর নাম]",
    price: "[মূল্য]",
    summary: "[বইটির ২–৩ লাইনের সংক্ষিপ্ত পরিচিতি এখানে লিখুন।]",
    cover: "",
  },
  {
    title: "[বইয়ের নাম ৩]",
    genre: "[ধরন]",
    year: "[প্রকাশকাল]",
    publisher: "[প্রকাশনীর নাম]",
    price: "[মূল্য]",
    summary: "[বইটির ২–৩ লাইনের সংক্ষিপ্ত পরিচিতি এখানে লিখুন।]",
    cover: "",
  },
  {
    title: "[বইয়ের নাম ৪]",
    genre: "[ধরন]",
    year: "[প্রকাশকাল]",
    publisher: "[প্রকাশনীর নাম]",
    price: "[মূল্য]",
    summary: "[বইটির ২–৩ লাইনের সংক্ষিপ্ত পরিচিতি এখানে লিখুন।]",
    cover: "",
  },
];


/* ---------- ৪. গল্প ----------
   body: প্রতিটি অনুচ্ছেদ আলাদা " " এর ভেতরে, কমা দিয়ে আলাদা করুন। */
const STORIES = [
  {
    title: "[গল্পের নাম ১]",
    date: "[প্রকাশের তারিখ]",
    excerpt: "[গল্পের প্রথম কয়েকটি লাইন বা সংক্ষিপ্ত ভূমিকা।]",
    body: [
      "[গল্পের প্রথম অনুচ্ছেদ।]",
      "[গল্পের দ্বিতীয় অনুচ্ছেদ।]",
      "[গল্পের তৃতীয় অনুচ্ছেদ — প্রয়োজনমতো আরও যোগ করুন।]",
    ],
  },
  {
    title: "[গল্পের নাম ২]",
    date: "[প্রকাশের তারিখ]",
    excerpt: "[গল্পের প্রথম কয়েকটি লাইন বা সংক্ষিপ্ত ভূমিকা।]",
    body: [
      "[গল্পের প্রথম অনুচ্ছেদ।]",
      "[গল্পের দ্বিতীয় অনুচ্ছেদ।]",
    ],
  },
  {
    title: "[গল্পের নাম ৩]",
    date: "[প্রকাশের তারিখ]",
    excerpt: "[গল্পের প্রথম কয়েকটি লাইন বা সংক্ষিপ্ত ভূমিকা।]",
    body: [
      "[গল্পের প্রথম অনুচ্ছেদ।]",
      "[গল্পের দ্বিতীয় অনুচ্ছেদ।]",
    ],
  },
];


/* ---------- ৫. কবিতা ----------
   lines: প্রতিটি পঙ্‌ক্তি আলাদা " " এর ভেতরে। স্তবকের মাঝে ফাঁকা লাইন চাইলে "" দিন। */
const POEMS = [
  {
    title: "[কবিতার নাম ১]",
    lines: [
      "[প্রথম পঙ্‌ক্তি]",
      "[দ্বিতীয় পঙ্‌ক্তি]",
      "[তৃতীয় পঙ্‌ক্তি]",
      "[চতুর্থ পঙ্‌ক্তি]",
      "",
      "[দ্বিতীয় স্তবকের প্রথম পঙ্‌ক্তি]",
      "[দ্বিতীয় স্তবকের দ্বিতীয় পঙ্‌ক্তি]",
    ],
  },
  {
    title: "[কবিতার নাম ২]",
    lines: [
      "[প্রথম পঙ্‌ক্তি]",
      "[দ্বিতীয় পঙ্‌ক্তি]",
      "[তৃতীয় পঙ্‌ক্তি]",
      "[চতুর্থ পঙ্‌ক্তি]",
    ],
  },
  {
    title: "[কবিতার নাম ৩]",
    lines: [
      "[প্রথম পঙ্‌ক্তি]",
      "[দ্বিতীয় পঙ্‌ক্তি]",
      "[তৃতীয় পঙ্‌ক্তি]",
      "[চতুর্থ পঙ্‌ক্তি]",
    ],
  },
];


/* ---------- ৬. ব্লগ ---------- */
const BLOG = [
  {
    title: "[ব্লগ পোস্টের শিরোনাম ১]",
    date: "[তারিখ]",
    excerpt: "[পোস্টের এক-দুই লাইনের সারসংক্ষেপ।]",
    body: [
      "[পোস্টের প্রথম অনুচ্ছেদ।]",
      "[পোস্টের দ্বিতীয় অনুচ্ছেদ।]",
    ],
  },
  {
    title: "[ব্লগ পোস্টের শিরোনাম ২]",
    date: "[তারিখ]",
    excerpt: "[পোস্টের এক-দুই লাইনের সারসংক্ষেপ।]",
    body: [
      "[পোস্টের প্রথম অনুচ্ছেদ।]",
    ],
  },
  {
    title: "[ব্লগ পোস্টের শিরোনাম ৩]",
    date: "[তারিখ]",
    excerpt: "[পোস্টের এক-দুই লাইনের সারসংক্ষেপ।]",
    body: [
      "[পোস্টের প্রথম অনুচ্ছেদ।]",
    ],
  },
];


/* =========================================================
   ⚙️  নিচের কোড পরিবর্তনের প্রয়োজন নেই
   ========================================================= */

document.documentElement.classList.add("js");

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const toBn = (value) => String(value).replace(/\d/g, (d) => BN_DIGITS[d]);

const esc = (str = "") =>
  String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- WhatsApp ---------- */
const waNumber = String(SITE.whatsappNumber).replace(/\D/g, "");
const waReady = /^\d{8,15}$/.test(waNumber) && !/X/i.test(SITE.whatsappNumber);

function waLink(message) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

function bookOrderMessage(book) {
  return (
    `শুভেচ্ছা! আমি ${SITE.authorName}-এর লেখা "${book.title}" বইটি অর্ডার করতে চাই।\n\n` +
    `নাম:\nঠিকানা:\nমোবাইল নম্বর:\nকপির সংখ্যা: ১`
  );
}

/* ---------- আইকন ---------- */
const ICONS = {
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3.5h2V21h3.5v-8.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.8l5.1-1.3A9.7 9.7 0 1 0 12 2.2zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 1.9 4.5 4.5 0 0 0 1 2.4 10.2 10.2 0 0 0 3.9 3.4c1.4.6 2 .7 2.7.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.1-.1z"/></svg>',
};

/* ---------- রেন্ডার: সোশ্যাল ---------- */
function renderSocial() {
  const html = SOCIAL.map((s) => {
    const isWa = s.type === "whatsapp" || s.url === "whatsapp";
    const href = isWa ? "#" : s.url;
    const external = /^https?:/i.test(href) ? ' target="_blank" rel="noopener"' : "";
    const waAttr = isWa ? ' data-wa="general"' : "";
    return `<a href="${esc(href)}"${external}${waAttr} aria-label="${esc(s.label)}" title="${esc(s.label)}">${ICONS[s.type] || ICONS.email}</a>`;
  }).join("");
  $$("[data-social]").forEach((el) => (el.innerHTML = html));
}

/* ---------- রেন্ডার: বই ---------- */
function coverMarkup(book) {
  if (book.cover) {
    return `<img src="${esc(book.cover)}" alt="${esc(book.title)} বইয়ের প্রচ্ছদ" loading="lazy">`;
  }
  return `
    <span class="cover-design" aria-hidden="true">
      <span class="cover-top">বই</span>
      <span class="cover-title">${esc(book.title)}</span>
      <span><span class="cover-rule" style="display:block"></span><span class="cover-author">${esc(SITE.authorName)}</span></span>
    </span>`;
}

function renderBooks() {
  const grid = $("#book-grid");
  if (!grid) return;
  grid.innerHTML = BOOKS.map((b, i) => `
    <article class="book reveal">
      <button class="book-cover" data-open="book" data-index="${i}" aria-label="${esc(b.title)} — বিস্তারিত দেখুন">
        ${coverMarkup(b)}
      </button>
      <p class="book-genre">${esc(b.genre)}</p>
      <h3 class="book-title">${esc(b.title)}</h3>
      <p class="book-summary">${esc(b.summary)}</p>
      <div class="book-meta">
        <span>${esc(b.publisher)} · ${esc(b.year)}</span>
        <span class="price">${esc(b.price)}</span>
      </div>
      <div class="book-actions">
        <a href="#" class="btn btn-dark" data-wa="book" data-index="${i}">${ICONS.whatsapp} WhatsApp-এ অর্ডার</a>
        <button class="btn btn-outline" data-open="book" data-index="${i}">বিস্তারিত</button>
      </div>
    </article>`).join("");
}

/* ---------- রেন্ডার: গল্প ---------- */
function renderStories() {
  const grid = $("#story-grid");
  if (!grid) return;
  grid.innerHTML = STORIES.map((s, i) => `
    <article class="story reveal">
      <span class="story-index">${toBn(String(i + 1).padStart(2, "0"))}</span>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.excerpt)}</p>
      <button class="text-link" data-open="story" data-index="${i}">পুরো গল্প পড়ুন →</button>
    </article>`).join("");
}

/* ---------- রেন্ডার: কবিতা ---------- */
function renderPoems() {
  const grid = $("#poem-grid");
  if (!grid) return;
  grid.innerHTML = POEMS.map((p, i) => {
    const preview = p.lines.filter((l) => l.trim() !== "").slice(0, 4).map(esc).join("<br>");
    return `
    <article class="poem reveal">
      <h3>${esc(p.title)}</h3>
      <p class="poem-lines">${preview}</p>
      <button class="text-link" data-open="poem" data-index="${i}">পুরো কবিতা পড়ুন →</button>
    </article>`;
  }).join("");
}

/* ---------- রেন্ডার: ব্লগ ---------- */
function renderBlog() {
  const list = $("#blog-list");
  if (!list) return;
  list.innerHTML = BLOG.map((p, i) => `
    <article class="post reveal">
      <span class="post-date">${esc(p.date)}</span>
      <div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.excerpt)}</p>
      </div>
      <button class="post-arrow" data-open="post" data-index="${i}" aria-label="${esc(p.title)} — পড়ুন">→</button>
    </article>`).join("");
}

/* ---------- মডাল ---------- */
const modal = $("#modal");
let lastFocus = null;

function openModal({ kicker = "", title = "", meta = "", bodyHtml = "", poem = false, actionsHtml = "" }) {
  $("#modal-kicker").textContent = kicker;
  $("#modal-title").textContent = title;
  $("#modal-meta").textContent = meta;
  const body = $("#modal-body");
  body.innerHTML = bodyHtml;
  body.classList.toggle("is-poem", poem);
  $("#modal-actions").innerHTML = actionsHtml;

  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => {
    modal.classList.add("open");
    $(".modal-panel", modal).scrollTop = 0;
    $(".modal-close", modal).focus({ preventScroll: true });
  });
}

function closeModal() {
  modal.classList.remove("open");
  document.body.classList.remove("no-scroll");
  setTimeout(() => { modal.hidden = true; }, 300);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

const paragraphs = (arr = []) => arr.map((t) => `<p>${esc(t)}</p>`).join("");

function openItem(type, index) {
  if (type === "book") {
    const b = BOOKS[index];
    openModal({
      kicker: b.genre,
      title: b.title,
      meta: `${b.publisher} · ${b.year} · ${b.price}`,
      bodyHtml: `<p>${esc(b.summary)}</p>`,
      actionsHtml: `<a href="#" class="btn btn-dark" data-wa="book" data-index="${index}">${ICONS.whatsapp} WhatsApp-এ অর্ডার করুন</a>`,
    });
  } else if (type === "story") {
    const s = STORIES[index];
    openModal({ kicker: "গল্প", title: s.title, meta: s.date, bodyHtml: paragraphs(s.body) });
  } else if (type === "poem") {
    const p = POEMS[index];
    openModal({ kicker: "কবিতা", title: p.title, bodyHtml: esc(p.lines.join("\n")), poem: true });
  } else if (type === "post") {
    const p = BLOG[index];
    openModal({ kicker: "ব্লগ", title: p.title, meta: p.date, bodyHtml: paragraphs(p.body) });
  }
}

/* ---------- টোস্ট ---------- */
let toastTimer;
function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}

/* ---------- ক্লিক হ্যান্ডলার (এক জায়গা থেকে সব) ---------- */
document.addEventListener("click", (e) => {
  // WhatsApp বোতাম
  const wa = e.target.closest("[data-wa]");
  if (wa) {
    e.preventDefault();
    if (!waReady) {
      toast("WhatsApp নম্বর এখনো যোগ করা হয়নি (script.js ফাইলে যোগ করুন)");
      return;
    }
    const msg = wa.dataset.wa === "book" ? bookOrderMessage(BOOKS[+wa.dataset.index]) : SITE.generalMessage;
    window.open(waLink(msg), "_blank", "noopener");
    return;
  }

  // পড়ার পপআপ খোলা
  const opener = e.target.closest("[data-open]");
  if (opener) {
    openItem(opener.dataset.open, +opener.dataset.index);
    return;
  }

  // পপআপ বন্ধ
  if (e.target.closest("[data-close]")) {
    closeModal();
    return;
  }

  // খালি সোশ্যাল / ইমেইল লিংক
  const link = e.target.closest("a[href]");
  if (link) {
    const href = link.getAttribute("href");
    if (href === "#" || /example\.com/.test(href)) {
      e.preventDefault();
      toast("এই লিংকটি এখনো যোগ করা হয়নি");
    }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!modal.hidden) closeModal();
    if (document.body.classList.contains("menu-open")) toggleMenu(false);
  }
});

/* ---------- মোবাইল মেনু ---------- */
const menuBtn = $("#menu-toggle");

function toggleMenu(force) {
  const open = typeof force === "boolean" ? force : !document.body.classList.contains("menu-open");
  document.body.classList.toggle("menu-open", open);
  document.body.classList.toggle("no-scroll", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "মেনু বন্ধ করুন" : "মেনু খুলুন");
}

menuBtn.addEventListener("click", () => toggleMenu());
$$(".site-nav a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

/* ---------- স্ক্রল করলে হেডারের রং ---------- */
const header = $("#site-header");
function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > window.innerHeight * 0.6);
}
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- চলতি সেকশন মেনুতে চিহ্নিত করা ---------- */
function watchSections() {
  const links = $$(".site-nav a");
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => io.observe(s));
}

/* ---------- স্ক্রল অ্যানিমেশন ---------- */
function revealOnScroll() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
}

/* ---------- যোগাযোগ ফর্ম (Netlify Forms) ---------- */
function setupForm() {
  const form = $("#contact-form");
  if (!form) return;
  const status = $("#form-status");
  const button = $("button[type=submit]", form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    button.disabled = true;
    status.textContent = "পাঠানো হচ্ছে…";

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.textContent = "ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে। শিগগিরই উত্তর দেওয়া হবে।";
    } catch (err) {
      status.textContent = "দুঃখিত, বার্তা পাঠানো যায়নি। অনুগ্রহ করে ইমেইল বা WhatsApp-এ যোগাযোগ করুন।";
    } finally {
      button.disabled = false;
    }
  });
}

/* ---------- চালু করা ---------- */
renderSocial();
renderBooks();
renderStories();
renderPoems();
renderBlog();
revealOnScroll();
watchSections();
setupForm();
onScroll();

const yearEl = $("#year");
if (yearEl) yearEl.textContent = toBn(new Date().getFullYear());
