/* =========================================================
   আরিফ খন্দকার — লেখক পোর্টফোলিও
   ---------------------------------------------------------
   ✏️  সম্পাদনার জায়গা: নিচের ১ থেকে ৭ নম্বর অংশ।
       [বন্ধনীর ভেতরের লেখা] আপনার আসল তথ্য দিয়ে বদলান।
       উদ্ধৃতি চিহ্ন " " এবং লাইনের শেষের কমা , মুছবেন না।
   ========================================================= */


/* ---------- ১. সাইট সেটিংস ---------- */
const SITE = {
  authorName: "আরিফ খন্দকার",

  // WhatsApp নম্বর — দেশের কোডসহ, +, স্পেস বা ড্যাশ ছাড়া
  whatsappNumber: "8801823818887",

  // ইমেইল ঠিকানা
  email: "arifkhandaker896@gmail.com",

  // লেখকের ছবি — GitHub-এ আপলোড করা ছবির ফাইলের নাম
  portrait: "5283-2.png",

  // WhatsApp বোতামে চাপলে যে বার্তা লেখা থাকবে
  generalMessage: "শুভেচ্ছা! আমি আপনার বই অর্ডার করতে / যোগাযোগ করতে চাই।",
};


/* ---------- ২. সোশ্যাল মিডিয়া ----------
   "" এর ভেতরে প্রোফাইলের পুরো লিংক দিন (https:// সহ)।
   লিংক খালি থাকলে আইকনটি দেখাবে না। */
const SOCIAL = [
  { type: "facebook",  label: "Facebook",  url: "" },
  { type: "instagram", label: "Instagram", url: "" },
  { type: "youtube",   label: "YouTube",   url: "" },
  { type: "goodreads", label: "Goodreads", url: "" },
];


/* ---------- ৩. জীবনীর সময়রেখা ----------
   প্রয়োজনমতো লাইন যোগ বা মুছুন। আগের বছরগুলোর তথ্য ওপরে যোগ করুন। */
const TIMELINE = [
  { year: "[সাল]", text: "[প্রথম বই প্রকাশ — বইয়ের নাম]" },
  { year: "২০২৫", text: "বইমেলায় পাঁচটি বই: রজনীগন্ধা রিসোর্ট, আসমান জমিনের উপাখ্যান, আজমেরী, চন্দ্রমল্লিকা ও বেদনা রঙের বাড়ি।" },
  { year: "২০২৬", text: "বইমেলায় তিনটি বই: অকূলপাথার, এখানে তাবিজ বিক্রি হয় ও বড়ো ভাই।" },
];


/* ---------- ৪. প্রকাশিত বই (প্রচ্ছদসহ) ----------
   প্রথম বইটি বড় করে আলাদাভাবে দেখাবে।
   cover: প্রচ্ছদের ছবির লিংক, অথবা GitHub-এ আপলোড করা ফাইলের নাম। খালি "" রাখলে নকশা করা প্রচ্ছদ দেখাবে।
   summary: বইয়ের পরিচিতি নিজে লিখুন। */
const BOOKS = [
  {
    title: "অকূলপাথার",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৬",
    publisher: "অনিন্দ্য প্রকাশ",
    price: "১৪০০ টাকা",
    pages: "৬৭৪",
    summary: "[বইটির সংক্ষিপ্ত পরিচিতি — ২ থেকে ৪ লাইন।]",
    cover: "3797-4.jpg",
  },
  {
    title: "এখানে তাবিজ বিক্রি হয়",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৬",
    publisher: "অনিন্দ্য প্রকাশ",
    price: "১৪০০ টাকা",
    pages: "৬১২",
    summary: "[বইটির সংক্ষিপ্ত পরিচিতি — ২ থেকে ৪ লাইন।]",
    cover: "8448.jpg",
  },
  {
    title: "বড়ো ভাই",
    genre: "উপন্যাস",
    year: "বইমেলা ২০২৬",
    publisher: "ছায়া প্রকাশন",
    price: "১২০০ টাকা",
    pages: "৬৫৬",
    summary: "[বইটির সংক্ষিপ্ত পরিচিতি — ২ থেকে ৪ লাইন।]",
    cover: "3818.jpg",
  },
  {
    title: "রজনীগন্ধা রিসোর্ট",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "বইবাজার প্রকাশনী",
    price: "১২০০ টাকা",
    pages: "৭০৪",
    summary: "[বইটির সংক্ষিপ্ত পরিচিতি — ২ থেকে ৪ লাইন।]",
    cover: "3997.jpg",
  },
  {
    title: "আসমান জমিনের উপাখ্যান",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "মনন প্রকাশ",
    price: "১২০০ টাকা",
    pages: "৭২০",
    summary: "[বইটির সংক্ষিপ্ত পরিচিতি — ২ থেকে ৪ লাইন।]",
    cover: "3662.jpg",
  },
  {
    title: "আজমেরী",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "মনন প্রকাশ",
    price: "৯০০ টাকা",
    pages: "৫০০",
    summary: "[বইটির সংক্ষিপ্ত পরিচিতি — ২ থেকে ৪ লাইন।]",
    cover: "3953.jpg",
  },
  {
    title: "চন্দ্রমল্লিকা",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "বর্ষাদুপুর প্রকাশনী",
    price: "১০০০ টাকা",
    pages: "৬৮২",
    summary: "[বইটির সংক্ষিপ্ত পরিচিতি — ২ থেকে ৪ লাইন।]",
    cover: "3843.jpg",
  },
  {
    title: "বেদনা রঙের বাড়ি",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "অনিন্দ্য প্রকাশ",
    price: "৯০০ টাকা",
    pages: "৪৮২",
    summary: "[বইটির সংক্ষিপ্ত পরিচিতি — ২ থেকে ৪ লাইন।]",
    cover: "3712.jpg",
  },
];


/* ---------- ৪ক. সম্পূর্ণ গ্রন্থতালিকা ----------
   ebook: true লিখলে বইটি "ইবুক" হিসেবে দেখাবে।
   নতুন বই যোগ করতে একটি লাইন কপি করে নাম ও ধরন বদলান। */
const BOOK_LIST = [
  { title: "মেঘমালা", genre: "কাব্যগ্রন্থ", ebook: false },
  { title: "সন্ধ্যাবেলায় বৃষ্টি", genre: "কাব্যগ্রন্থ", ebook: false },
  { title: "চাঁদমুখী", genre: "উপন্যাস", ebook: false },
  { title: "যে শহরে তুমি নেই", genre: "উপন্যাস", ebook: false },
  { title: "হাজার বসন্ত তোমার অপেক্ষায়", genre: "উপন্যাস", ebook: false },
  { title: "অর্ধেক প্রেম অর্ধেক বিরহ", genre: "উপন্যাস", ebook: false },
  { title: "পৃথিবীর জন্য ভালোবাসা", genre: "সায়েন্স ফিকশন", ebook: false },
  { title: "বালুচরের বালিকা", genre: "উপন্যাস", ebook: false },
  { title: "কাজলবউ", genre: "উপন্যাস", ebook: false },
  { title: "রোকসানা", genre: "উপন্যাস", ebook: false },
  { title: "জনমভর", genre: "উপন্যাস", ebook: false },
  { title: "আকাশ দেখার নিমন্ত্রণে", genre: "উপন্যাস", ebook: false },
  { title: "রাজেশ্বরী", genre: "উপন্যাস", ebook: false },
  { title: "চামেলী কটেজ", genre: "উপন্যাস", ebook: false },
  { title: "বনলতা এক্সপ্রেস", genre: "উপন্যাস", ebook: false },
  { title: "ষোলো আনা", genre: "উপন্যাস", ebook: false },
  { title: "কৃষ্ণচূড়া তোমাকে দিলাম", genre: "উপন্যাস", ebook: false },
  { title: "তুমি এসেছিলে পূর্ণিমা সন্ধ্যায়", genre: "উপন্যাস", ebook: false },
  { title: "একদিন", genre: "উপন্যাস", ebook: false },
  { title: "অরু এখন কারাগারে", genre: "উপন্যাস", ebook: false },
  { title: "নীল মানুষ", genre: "উপন্যাস", ebook: false },
  { title: "অশ্বারোহী", genre: "উপন্যাস", ebook: false },
  { title: "নাগরদোলা", genre: "উপন্যাস", ebook: false },
  { title: "নগরে নরক", genre: "উপন্যাস", ebook: false },
  { title: "রাজপাট", genre: "উপন্যাস", ebook: false },
  { title: "রাজধানী", genre: "উপন্যাস", ebook: false },
  { title: "গঙ্গাযমুনা", genre: "উপন্যাস", ebook: false },
  { title: "ও মন তোমাকে দেখাবো আমার চোখের শ্রাবণ", genre: "কাব্যগ্রন্থ", ebook: false },
  { title: "তিলোত্তমা", genre: "উপন্যাস", ebook: false },
  { title: "আজমেরী", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "আসমান জমিনের উপাখ্যান", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "রজনীগন্ধা রিসোর্ট", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "চন্দ্রমল্লিকা", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "অজাত", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "নীরা", genre: "উপন্যাস", ebook: false },
  { title: "গুলশান", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "ঊনমানুষ", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "বেদনা রঙের বাড়ি", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "ডুববো বলে ডুবছি জলে", genre: "কাব্যগ্রন্থ", ebook: false },
  { title: "দাফন", genre: "হরর থ্রিলার উপন্যাস", ebook: false },
  { title: "মুখ কিংবা মুখোশ", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "বনলতা সেন এখানে আছেন", genre: "উপন্যাস", ebook: false },
  { title: "ফাল্গুনী লেন", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "চৌকাঠ", genre: "উপন্যাস", ebook: false },
  { title: "বড়ো ভাই", genre: "উপন্যাস", ebook: false },
  { title: "অকূলপাথার", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "এখানে তাবিজ বিক্রি হয়", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "এই শহরে শিউলি ফোটে", genre: "উপন্যাস", ebook: true },
  { title: "সেদিন বৃষ্টি হলো", genre: "উপন্যাস", ebook: true },
  { title: "তপন বাগচীর একদিন", genre: "গল্পগ্রন্থ", ebook: true },
  { title: "লাবনী", genre: "উপন্যাস", ebook: true },
  { title: "হলুদ ফুলের খোঁপা", genre: "উপন্যাস", ebook: true },
  { title: "এক দুপুরের নির্জনতায়", genre: "উপন্যাস", ebook: true },
  { title: "বৃষ্টি তোমাকে দিলাম", genre: "উপন্যাস", ebook: true },
  { title: "সেদিন চৈত্রমাস", genre: "উপন্যাস", ebook: true },
  { title: "যে নদী ফেরে না", genre: "গল্পগ্রন্থ", ebook: true },
];


/* ---------- ৫. নির্বাচিত লেখা ----------
   type: লেখার ধরন — যেমন "গল্প", "কবিতা", "প্রবন্ধ"। এই নাম দিয়েই উপরে বাছাইয়ের বোতাম তৈরি হবে।
   body: প্রতিটি অনুচ্ছেদ আলাদা " " এর ভেতরে।
   কবিতার ক্ষেত্রে প্রতিটি পঙ্‌ক্তি আলাদা " " এ দিন; স্তবকের মাঝে ফাঁকা লাইনের জন্য "" দিন। */
const WRITINGS = [
  {
    type: "গল্প",
    title: "[লেখার শিরোনাম]",
    date: "[প্রকাশের তারিখ বা স্থান]",
    excerpt: "[লেখার প্রথম কয়েকটি লাইন বা সংক্ষিপ্ত ভূমিকা।]",
    body: [
      "[প্রথম অনুচ্ছেদ।]",
      "[দ্বিতীয় অনুচ্ছেদ।]",
    ],
  },
  {
    type: "গল্প",
    title: "[লেখার শিরোনাম]",
    date: "[প্রকাশের তারিখ বা স্থান]",
    excerpt: "[লেখার প্রথম কয়েকটি লাইন বা সংক্ষিপ্ত ভূমিকা।]",
    body: [
      "[প্রথম অনুচ্ছেদ।]",
    ],
  },
  {
    type: "কবিতা",
    title: "[কবিতার শিরোনাম]",
    date: "[প্রকাশের তারিখ বা স্থান]",
    excerpt: "",
    body: [
      "[প্রথম পঙ্‌ক্তি]",
      "[দ্বিতীয় পঙ্‌ক্তি]",
      "[তৃতীয় পঙ্‌ক্তি]",
      "",
      "[দ্বিতীয় স্তবকের প্রথম পঙ্‌ক্তি]",
    ],
  },
  {
    type: "প্রবন্ধ",
    title: "[লেখার শিরোনাম]",
    date: "[প্রকাশের তারিখ বা স্থান]",
    excerpt: "[লেখার সংক্ষিপ্ত সারাংশ।]",
    body: [
      "[প্রথম অনুচ্ছেদ।]",
    ],
  },
];


/* ---------- ৬. ছবি ----------
   src: ছবির ফাইলের নাম, যেমন "photo-1.jpg" (GitHub-এ আপলোড করার পর)।
   caption: ছবির নিচের বিবরণ। */
const GALLERY = [
  { src: "", caption: "[ছবির বিবরণ]" },
  { src: "", caption: "[ছবির বিবরণ]" },
  { src: "", caption: "[ছবির বিবরণ]" },
  { src: "", caption: "[ছবির বিবরণ]" },
  { src: "", caption: "[ছবির বিবরণ]" },
  { src: "", caption: "[ছবির বিবরণ]" },
];


/* ---------- ৭. কবিতার ধরনের নাম ----------
   এই নামের লেখাগুলো কবিতার মতো (পঙ্‌ক্তি ধরে) দেখাবে। */
const POEM_TYPES = ["কবিতা"];


/* =========================================================
   ⚙️  নিচের কোড পরিবর্তনের প্রয়োজন নেই
   ========================================================= */

document.documentElement.classList.add("js");

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const toBn = (value) => String(value).replace(/\d/g, (d) => BN_DIGITS[d]);

const esc = (str = "") =>
  String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const isPoem = (w) => POEM_TYPES.includes(w.type);
const isFilled = (t) => Boolean(t) && !/^\[.*\]$/.test(String(t).trim());

/* ---------- WhatsApp ও ইমেইল ---------- */
const waNumber = String(SITE.whatsappNumber).replace(/\D/g, "");
const waReady = /^\d{8,15}$/.test(waNumber) && !/x/i.test(SITE.whatsappNumber);
const emailReady = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(SITE.email);

const waLink = (message) => `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

function bookOrderMessage(book) {
  return (
    `শুভেচ্ছা! আমি ${SITE.authorName}-এর লেখা "${book.title}" বইটি অর্ডার করতে চাই।\n\n` +
    `নাম:\nঠিকানা:\nমোবাইল নম্বর:\nকপির সংখ্যা: ১`
  );
}

function openWhatsApp(message) {
  if (!waReady) {
    toast("WhatsApp নম্বর এখনো যোগ করা হয়নি");
    return false;
  }
  window.open(waLink(message), "_blank", "noopener");
  return true;
}

/* ---------- আইকন ---------- */
const ICONS = {
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3.5h2V21h3.5v-8.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg>',
  goodreads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.8l5.1-1.3A9.7 9.7 0 1 0 12 2.2zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 1.9 4.5 4.5 0 0 0 1 2.4 10.2 10.2 0 0 0 3.9 3.4c1.4.6 2 .7 2.7.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.1-.1z"/></svg>',
  photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="9" cy="10" r="1.8"/><path d="m3.5 17 5-4.5 4 3.5 3-2.5 5 4"/></svg>',
};

/* ---------- রেন্ডার: ছবি ও যোগাযোগ ---------- */
function renderPortrait() {
  const frame = $("[data-portrait]");
  if (frame && SITE.portrait) {
    frame.innerHTML = `<img src="${esc(SITE.portrait)}" alt="${esc(SITE.authorName)}" loading="lazy">`;
  }
}

function renderContact() {
  $$("[data-email]").forEach((a) => {
    if (emailReady) {
      a.href = `mailto:${SITE.email}`;
      a.textContent = SITE.email;
    }
  });

  const icons = [];
  SOCIAL.forEach((s) => {
    if (!s.url) return;
    icons.push(`<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${ICONS[s.type] || ICONS.link}</a>`);
  });
  if (emailReady) icons.push(`<a href="mailto:${esc(SITE.email)}" aria-label="ইমেইল" title="ইমেইল">${ICONS.email}</a>`);
  icons.push(`<a href="#" data-wa="general" aria-label="WhatsApp" title="WhatsApp">${ICONS.whatsapp}</a>`);

  $$("[data-social]").forEach((el) => (el.innerHTML = icons.join("")));
}

/* ---------- রেন্ডার: সময়রেখা ---------- */
function renderTimeline() {
  const list = $("#timeline");
  if (!list) return;
  list.innerHTML = TIMELINE.map((t) => `
    <li>
      <span class="timeline-year">${esc(toBn(t.year))}</span>
      <p class="timeline-text">${esc(t.text)}</p>
    </li>`).join("");
}

/* ---------- রেন্ডার: বই ---------- */
function coverMarkup(book) {
  if (book.cover) {
    return `<img src="${esc(book.cover)}" alt="${esc(book.title)} — প্রচ্ছদ" loading="lazy">`;
  }
  return `
    <span class="cover-design" aria-hidden="true">
      <span class="cover-ornament">◆ ◆ ◆</span>
      <span class="cover-title">${esc(book.title)}</span>
      <span class="cover-author">${esc(SITE.authorName)}</span>
    </span>`;
}

const orderButton = (i, label = "WhatsApp-এ অর্ডার") =>
  `<a href="#" class="btn btn-gold" data-wa="book" data-index="${i}">${ICONS.whatsapp} ${label}</a>`;

function renderBooks() {
  const featured = $("#featured-book");
  const grid = $("#book-grid");
  if (!featured || !grid || !BOOKS.length) return;

  const b = BOOKS[0];
  featured.innerHTML = `
    <div class="reveal">
      <button class="book-cover" data-open="book" data-index="0" aria-label="${esc(b.title)} — বিস্তারিত">
        ${coverMarkup(b)}
      </button>
    </div>
    <div class="reveal">
      <span class="featured-label">নির্বাচিত বই</span>
      <h3>${esc(b.title)}</h3>
      <p class="featured-genre">${esc(b.genre)}</p>
      ${isFilled(b.summary) ? `<p class="featured-summary">${esc(b.summary)}</p>` : ""}
      <dl class="book-details">
        <div><dt>প্রকাশনী</dt><dd>${esc(b.publisher)}</dd></div>
        <div><dt>প্রকাশকাল</dt><dd>${esc(b.year)}</dd></div>
        <div><dt>মূল্য</dt><dd>${esc(b.price)}</dd></div>
        ${b.pages ? `<div><dt>পৃষ্ঠা</dt><dd>${esc(b.pages)}</dd></div>` : ""}
      </dl>
      <div class="book-actions">
        ${orderButton(0)}
      </div>
    </div>`;

  grid.innerHTML = BOOKS.slice(1).map((book, n) => {
    const i = n + 1;
    return `
    <article class="book reveal">
      <button class="book-cover" data-open="book" data-index="${i}" aria-label="${esc(book.title)} — বিস্তারিত">
        ${coverMarkup(book)}
      </button>
      <p class="book-genre">${esc(book.genre)}</p>
      <h3 class="book-title">${esc(book.title)}</h3>
      <p class="book-meta">${esc(book.publisher)} · ${esc(book.year)} · <span class="price">${esc(book.price)}</span></p>
      <div class="book-actions">
        ${orderButton(i, "অর্ডার করুন")}
        <button class="btn btn-outline-gold" data-open="book" data-index="${i}">বিস্তারিত</button>
      </div>
    </article>`;
  }).join("");
}

/* ---------- রেন্ডার: নির্বাচিত লেখা ---------- */
function writingPreview(w) {
  if (isPoem(w)) {
    return w.body.filter((l) => l.trim()).slice(0, 4).map(esc).join("<br>");
  }
  return esc(w.excerpt || (w.body[0] || ""));
}

function renderWritings() {
  const grid = $("#writing-grid");
  const filters = $("#filters");
  if (!grid) return;

  grid.innerHTML = WRITINGS.length
    ? WRITINGS.map((w, i) => `
      <article class="writing reveal" data-type="${esc(w.type)}">
        <p class="writing-type">${esc(w.type)}</p>
        <h3>${esc(w.title)}</h3>
        <p class="writing-excerpt${isPoem(w) ? " is-poem" : ""}">${writingPreview(w)}</p>
        <div class="writing-foot">
          <span>${esc(w.date)}</span>
          <button class="text-link" data-open="writing" data-index="${i}">পড়ুন →</button>
        </div>
      </article>`).join("")
    : `<p class="empty-note">শিগগিরই লেখা যোগ করা হবে।</p>`;

  const types = [...new Set(WRITINGS.map((w) => w.type))];
  if (!filters || types.length < 2) {
    if (filters) filters.remove();
    return;
  }
  filters.innerHTML = ["সব", ...types]
    .map((t, i) => `<button type="button" class="filter-btn" data-filter="${esc(t)}" aria-pressed="${i === 0}">${esc(t)}</button>`)
    .join("");
}

function applyFilter(type) {
  $$(".filter-btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === type)));
  $$(".writing").forEach((card) => {
    card.hidden = type !== "সব" && card.dataset.type !== type;
    if (!card.hidden) card.classList.add("is-visible");
  });
}

/* ---------- রেন্ডার: সম্পূর্ণ গ্রন্থতালিকা ---------- */
function renderCatalog() {
  const box = $("#catalog");
  $$("[data-book-count]").forEach((el) => (el.textContent = toBn(BOOK_LIST.length)));
  if (!box || !BOOK_LIST.length) return;

  const groups = {};
  BOOK_LIST.forEach((b) => {
    const key = b.ebook ? "ইবুক" : b.genre;
    (groups[key] = groups[key] || []).push(b);
  });
  const order = Object.keys(groups).sort((a, b) => (a === "ইবুক") - (b === "ইবুক"));

  box.innerHTML = `
    <div class="catalog-head">
      <h3>সম্পূর্ণ গ্রন্থতালিকা</h3>
      <p>মোট ${toBn(BOOK_LIST.length)}টি বই · যেকোনো বইয়ের পাশের <em>অর্ডার</em> লেখায় চাপুন</p>
    </div>
    <div class="catalog-groups">
      ${order.map((g) => `
        <section class="catalog-group">
          <h4>${esc(g)} <span>${toBn(groups[g].length)}</span></h4>
          <ol>
            ${groups[g].map((b) => `
              <li>
                <span class="catalog-title">${esc(b.title)}${b.ebook ? ` <small>${esc(b.genre)}</small>` : ""}</span>
                <a href="#" class="catalog-order" data-wa="title" data-title="${esc(b.title)}">অর্ডার</a>
              </li>`).join("")}
          </ol>
        </section>`).join("")}
    </div>`;
}

/* ---------- রেন্ডার: ছবি ---------- */
function renderGallery() {
  const grid = $("#gallery-grid");
  if (!grid) return;
  grid.innerHTML = GALLERY.map((g, i) => `
    <button class="gallery-item reveal" data-photo="${i}" aria-label="${esc(g.caption || "ছবি")}">
      ${g.src
        ? `<img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><span class="gallery-caption">${esc(g.caption)}</span>`
        : `<span class="gallery-empty">${ICONS.photo}<span>ছবি ${toBn(i + 1)}</span></span>`}
    </button>`).join("");
}

/* ---------- পপআপ ---------- */
const modal = $("#modal");
let lastFocus = null;

function openModal({ kicker = "", title = "", meta = "", bodyHtml = "", poem = false, image = false, actionsHtml = "" }) {
  $("#modal-kicker").textContent = kicker;
  $("#modal-title").textContent = title;
  $("#modal-meta").textContent = meta;
  const body = $("#modal-body");
  body.innerHTML = bodyHtml;
  body.classList.toggle("is-poem", poem);
  $("#modal-actions").innerHTML = actionsHtml;
  modal.classList.toggle("is-image", image);

  // ছবির ক্ষেত্রে শিরোনাম ছবির নিচে দেখাবে
  const titleEl = $("#modal-title");
  if (image) body.after(titleEl); else $("#modal-kicker").after(titleEl);

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
  if (modal.hidden) return;
  modal.classList.remove("open");
  document.body.classList.remove("no-scroll");
  setTimeout(() => { modal.hidden = true; }, 350);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

const paragraphs = (arr = []) => arr.map((t) => `<p>${esc(t)}</p>`).join("");

function openItem(type, index) {
  if (type === "book") {
    const b = BOOKS[index];
    if (!b) return;
    openModal({
      kicker: b.genre,
      title: b.title,
      meta: [b.publisher, b.year, b.pages && `${b.pages} পৃষ্ঠা`, b.price].filter(Boolean).join(" · "),
      bodyHtml: isFilled(b.summary) ? `<p>${esc(b.summary)}</p>` : "",
      actionsHtml: orderButton(index, "WhatsApp-এ অর্ডার করুন"),
    });
  } else if (type === "writing") {
    const w = WRITINGS[index];
    if (!w) return;
    openModal({
      kicker: w.type,
      title: w.title,
      meta: w.date,
      bodyHtml: isPoem(w) ? esc(w.body.join("\n")) : paragraphs(w.body),
      poem: isPoem(w),
    });
  }
}

function openPhoto(index) {
  const g = GALLERY[index];
  if (!g) return;
  if (!g.src) {
    toast("এই ছবিটি এখনো যোগ করা হয়নি");
    return;
  }
  openModal({
    title: g.caption,
    bodyHtml: `<img src="${esc(g.src)}" alt="${esc(g.caption)}">`,
    image: true,
  });
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

/* ---------- সব ক্লিক এক জায়গা থেকে ---------- */
document.addEventListener("click", (e) => {
  const wa = e.target.closest("[data-wa]");
  if (wa) {
    e.preventDefault();
    let msg = SITE.generalMessage;
    if (wa.dataset.wa === "book") msg = bookOrderMessage(BOOKS[+wa.dataset.index]);
    if (wa.dataset.wa === "title") msg = bookOrderMessage({ title: wa.dataset.title });
    openWhatsApp(msg);
    return;
  }

  const emailLink = e.target.closest("[data-email]");
  if (emailLink && !emailReady) {
    e.preventDefault();
    toast("ইমেইল ঠিকানা এখনো যোগ করা হয়নি");
    return;
  }

  const opener = e.target.closest("[data-open]");
  if (opener) {
    openItem(opener.dataset.open, +opener.dataset.index);
    return;
  }

  const photo = e.target.closest("[data-photo]");
  if (photo) {
    openPhoto(+photo.dataset.photo);
    return;
  }

  const filter = e.target.closest("[data-filter]");
  if (filter) {
    applyFilter(filter.dataset.filter);
    return;
  }

  if (e.target.closest("[data-close]")) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  closeModal();
  if (document.body.classList.contains("menu-open")) toggleMenu(false);
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

/* ---------- স্ক্রল করলে হেডার ---------- */
const header = $("#site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- চলতি সেকশন মেনুতে চিহ্নিত ---------- */
function watchSections() {
  if (!("IntersectionObserver" in window)) return;
  const links = $$(".site-nav a");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
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
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
}

/* ---------- যোগাযোগ ফর্ম (WhatsApp বা ইমেইলে পাঠায়) ---------- */
function setupForm() {
  const form = $("#contact-form");
  if (!form) return;
  const status = $("#form-status");
  let mode = "whatsapp";

  $$("[data-send]", form).forEach((btn) =>
    btn.addEventListener("click", () => { mode = btn.dataset.send; })
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.submitter && e.submitter.dataset.send) mode = e.submitter.dataset.send;

    const data = new FormData(form);
    const name = (data.get("name") || "").trim();
    const reply = (data.get("reply") || "").trim();
    const subject = data.get("subject");
    const message = (data.get("message") || "").trim();

    if (!name || !message) {
      status.textContent = "অনুগ্রহ করে নাম ও বার্তা লিখুন।";
      return;
    }

    const text =
      `বিষয়: ${subject}\n` +
      `নাম: ${name}\n` +
      (reply ? `যোগাযোগ: ${reply}\n` : "") +
      `\n${message}`;

    if (mode === "email") {
      if (!emailReady) {
        status.textContent = "ইমেইল ঠিকানা এখনো যোগ করা হয়নি — WhatsApp ব্যবহার করুন।";
        return;
      }
      window.location.href =
        `mailto:${SITE.email}?subject=${encodeURIComponent(subject + " — " + name)}&body=${encodeURIComponent(text)}`;
      status.textContent = "আপনার ইমেইল অ্যাপ খুলছে…";
    } else {
      if (openWhatsApp(text)) status.textContent = "WhatsApp খুলছে — সেখানে পাঠান বোতামে চাপুন।";
      else status.textContent = "WhatsApp নম্বর এখনো যোগ করা হয়নি।";
    }
  });
}

/* ---------- ছবি না এলে বিকল্প নকশা ---------- */
document.addEventListener("error", (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement)) return;
  const cover = img.closest(".book-cover");
  if (cover) {
    const title = img.getAttribute("alt").replace(" — প্রচ্ছদ", "");
    cover.innerHTML = coverMarkup({ title, cover: "" });
    return;
  }
  const portrait = img.closest("[data-portrait]");
  if (portrait) {
    portrait.innerHTML = '<div class="portrait-placeholder"><span>আ</span><small>লেখকের ছবি</small></div>';
    return;
  }
  const tile = img.closest(".gallery-item");
  if (tile) tile.innerHTML = `<span class="gallery-empty">${ICONS.photo}</span>`;
}, true);

/* ---------- চালু ---------- */
renderPortrait();
renderContact();
renderTimeline();
renderBooks();
renderCatalog();
renderWritings();
renderGallery();
revealOnScroll();
watchSections();
setupForm();
onScroll();

const yearEl = $("#year");
if (yearEl) yearEl.textContent = toBn(new Date().getFullYear());
