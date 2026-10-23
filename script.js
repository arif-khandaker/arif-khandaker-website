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
  portrait: "author.jpg",

  // WhatsApp বোতামে চাপলে যে বার্তা লেখা থাকবে
  generalMessage: "শুভেচ্ছা! আমি আপনার বই অর্ডার করতে / যোগাযোগ করতে চাই।",
};


/* ---------- ২. সোশ্যাল মিডিয়া ----------
   "" এর ভেতরে প্রোফাইলের পুরো লিংক দিন (https:// সহ)।
   লিংক খালি থাকলে আইকনটি দেখাবে না। */
const SOCIAL = [
  { type: "facebook",  label: "ফেসবুক পেইজ",     url: "https://www.facebook.com/share/1K8DX3NsqR/" },
  { type: "facebook",  label: "ফেসবুক প্রোফাইল", url: "https://www.facebook.com/share/1DYMifbJHT/" },
  { type: "youtube",   label: "ইউটিউব",          url: "https://www.youtube.com/@thoughtsofarif-w1c" },
  { type: "instagram", label: "ইনস্টাগ্রাম",       url: "https://www.instagram.com/khandakerarif892/" },
]


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
   summary: বইয়ের পরিচিতি নিজে লিখুন।
   slug: বইয়ের নিজস্ব লিংকের নাম (ইংরেজি অক্ষরে)। লিংক হবে authorarifkhandaker.com/#book-<slug>
   excerpt: "একটু পড়ে দেখুন" বোতামের লেখা। প্রতিটি অনুচ্ছেদ "" এর ভেতরে, কমা দিয়ে আলাদা:
            excerpt: ["প্রথম অনুচ্ছেদ।", "দ্বিতীয় অনুচ্ছেদ।"],
            এটি না লিখলে বোতামটি দেখাবে না। */
const BOOKS = [
  {
    title: "অকূলপাথার",
    slug: "akulpathar",
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
    slug: "ekhane-tabij-bikri-hoy",
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
    slug: "boro-bhai",
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
    slug: "rojonigandha-resort",
    synopsis: [
      "মানুষ আসলে অনেকটা রূপকথার মতনই, মানুষের জীবনটাও রূপকথার গল্পের মতনই। কিন্তু মানুষ বুঝতে পারে না, মানুষ জানে না রূপকথার মতন সে নিজেও কতটা রহস্যময়।",
      "রহস্যময় বলেই মানুষ তার মুখের আড়ালে মুখোশ লুকিয়ে রাখে আর মুখোশের আড়ালে রাখে মুখ। যার দরুন মুখ আর মুখোশের কোন পার্থক্য খুঁজে পাওয়া যায় না, চেনা যায় না, পরিচিত মানুষটাকেও তখন বড্ড বেশি অপরিচিত মনে হয়।",
      "যে মানুষটার সাথে মানুষ দিনের পর দিন একই ছাদের নিচে থেকে আসছে, যে মানুষটার সাথে মানুষ তার জীবনের অনেক অনেক কথা বলে আসছে অথচ সেই মানুষটাকে মুহূর্তের মধ্যেই মনে হয় অদেখা, অজানা, অপাঠ্য। মনে হয় সে মানুষটার কিছুই দেখা হয়নি, সেই মানুষটার সম্পর্কে কিছুই জানা হয়নি, মানুষটার ভেতর-বাহির, মন, চোখ কিছুই পড়া হয়নি। অথচ সেই মানুষটা পাশেই আছে বহুকাল ধরে।",
    ],
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
    slug: "asman-jominer-upakhyan",
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
    slug: "ajmeri",
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
    slug: "chandramallika",
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
    slug: "bedona-ronger-bari",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "অনিন্দ্য প্রকাশ",
    price: "৯০০ টাকা",
    pages: "৪৮২",
    summary: "[বইটির সংক্ষিপ্ত পরিচিতি — ২ থেকে ৪ লাইন।]",
    cover: "3712.jpg",
  },
  {
    title: "বনলতা সেন এখানে আছেন",
    slug: "banalata-sen",
    genre: "থ্রিলার উপন্যাস",
    year: "",
    publisher: "আহমদ পাবলিশিং হাউজ",
    price: "৬০০ টাকা",
    summary: "",
    cover: "banalata-sen.jpg",
  },
  {
    title: "অজাত",
    slug: "ajat",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "অনিন্দ্য প্রকাশ",
    price: "৮০০ টাকা",
    pages: "৪০০",
    summary: "",
    cover: "ajat.jpg",
  },
  {
    title: "চৌকাঠ",
    slug: "choukath",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "অয়ন প্রকাশন",
    price: "৮০০ টাকা",
    pages: "৪৫০",
    summary: "",
    cover: "choukath.jpg",
  },
  {
    title: "ঊনমানুষ",
    slug: "unamanush",
    genre: "থ্রিলার উপন্যাস",
    year: "",
    publisher: "অনিন্দ্য প্রকাশ",
    price: "৮০০ টাকা",
    summary: "",
    cover: "unamanush.jpg",
  },
  {
    title: "মুখ কিংবা মুখোশ",
    slug: "mukh-kingba-mukhosh",
    genre: "থ্রিলার উপন্যাস",
    year: "",
    publisher: "কলি প্রকাশনী",
    price: "৫৫০ টাকা",
    summary: "",
    cover: "mukh-kingba-mukhosh.jpg",
  },
  {
    title: "একদিন",
    slug: "ekdin",
    genre: "থ্রিলার উপন্যাস",
    year: "",
    publisher: "অনন্যা প্রকাশনী",
    price: "৫০০ টাকা",
    summary: "",
    cover: "ekdin.jpg",
  },
  {
    title: "গুলশান",
    slug: "gulshan",
    genre: "থ্রিলার উপন্যাস",
    year: "",
    publisher: "অনিন্দ্য প্রকাশ",
    price: "৮০০ টাকা",
    summary: "",
    cover: "gulshan.jpg",
  },
  {
    title: "নীরা",
    slug: "nira",
    genre: "রোমান্টিক উপন্যাস",
    year: "",
    publisher: "অনিন্দ্য প্রকাশ",
    price: "৮০০ টাকা",
    summary: "",
    cover: "nira.jpg",
  },
  {
    title: "ডুববো বলে ডুবছি জলে",
    slug: "dubbo-bole",
    genre: "কাব্যগ্রন্থ",
    year: "বইমেলা ২০২৫",
    publisher: "জলধি",
    price: "২৫০ টাকা",
    summary: "",
    cover: "dubbo-bole.jpg",
  },
  {
    title: "দাফন",
    slug: "dafon",
    genre: "হরর থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "অনুজ প্রকাশন",
    price: "৭৫০ টাকা",
    pages: "৪৫০",
    summary: "",
    cover: "dafon.jpg",
  },
  {
    title: "ফাল্গুনী লেন",
    slug: "falguni-lane",
    genre: "থ্রিলার উপন্যাস",
    year: "বইমেলা ২০২৫",
    publisher: "অয়ন প্রকাশন",
    price: "৭০০ টাকা",
    pages: "৪৫০",
    summary: "",
    cover: "falguni-lane.jpg",
  },
  {
    title: "ও মন তোমাকে দেখাবো আমার চোখের শ্রাবণ",
    slug: "o-mon-tomake",
    genre: "কাব্যগ্রন্থ",
    year: "বইমেলা ২০২২",
    publisher: "শোভা প্রকাশ",
    price: "৪০০ টাকা",
    summary: "",
    cover: "o-mon-tomake.jpg",
  },
  {
    title: "কৃষ্ণচূড়া তোমাকে দিলাম",
    slug: "krishnachura",
    genre: "রোমান্টিক উপন্যাস",
    year: "বইমেলা ২০২১",
    publisher: "অনন্যা প্রকাশনী",
    price: "৪০০ টাকা",
    summary: "",
    cover: "krishnachura.jpg",
  },
  {
    title: "গঙ্গাযমুনা",
    slug: "gangajamuna",
    genre: "উপন্যাস",
    year: "বইমেলা ২০২১",
    publisher: "শোভা প্রকাশ",
    price: "৫৬০ টাকা",
    summary: "",
    cover: "gangajamuna.jpg",
  },
  {
    title: "ষোলো আনা",
    slug: "sholo-ana",
    genre: "উপন্যাস",
    year: "বইমেলা ২০২২",
    publisher: "অনন্যা প্রকাশনী",
    price: "৩০০ টাকা",
    summary: "",
    cover: "sholo-ana.jpg",
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
  { title: "একদিন", genre: "থ্রিলার উপন্যাস", ebook: false },
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
  { title: "নীরা", genre: "রোমান্টিক উপন্যাস", ebook: false },
  { title: "গুলশান", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "ঊনমানুষ", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "বেদনা রঙের বাড়ি", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "ডুববো বলে ডুবছি জলে", genre: "কাব্যগ্রন্থ", ebook: false },
  { title: "দাফন", genre: "হরর থ্রিলার উপন্যাস", ebook: false },
  { title: "মুখ কিংবা মুখোশ", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "বনলতা সেন এখানে আছেন", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "ফাল্গুনী লেন", genre: "থ্রিলার উপন্যাস", ebook: false },
  { title: "চৌকাঠ", genre: "থ্রিলার উপন্যাস", ebook: false },
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
    title: "বিশাখা",
    date: "",
    excerpt: "বিশাখা নতুন শাড়ি পরেছে। তাকে চমৎকার লাগছে। রাজকন্যার মতন। কপালে ছোট একটা টিপও পরেছে। শাড়ির রঙের সাথে টিপের রঙটার কি অদ্ভুত মিল! শাড়িটা পাতা রঙের। টিপটাও। তাকে পাতার মতনই দেখাচ্ছে। মনে হচ্ছে পৃথিবীর অদ্ভুত সুন্দর পাতাটা আমার সামনে দাঁড়িয়ে আছে।",
    body: [
      "বিশাখা নতুন শাড়ি পরেছে। তাকে চমৎকার লাগছে। রাজকন্যার মতন। কপালে ছোট একটা টিপও পরেছে। শাড়ির রঙের সাথে টিপের রঙটার কি অদ্ভুত মিল! শাড়িটা পাতা রঙের। টিপটাও। তাকে পাতার মতনই দেখাচ্ছে। মনে হচ্ছে পৃথিবীর অদ্ভুত সুন্দর পাতাটা আমার সামনে দাঁড়িয়ে আছে।",
      "বিশাখা তেমন শাড়ি-টাড়ি পরে না। সে থ্রি-পিছই বেশি পরে। আজ কি মনে করে শাড়ি পরলো কে জানে! তার এই একটাই শাড়ি। খুব যত্ন করে সে এই শাড়িটাকে। এই শাড়িটা বুঝি তার খুব পছন্দের। কেনো এতো পছন্দের তা কখনো জানা হয় নি! জানলে হয়তো তাকে শাড়িতে আর এতো সুন্দর লাগবে না।",
      "জগতের কিছু কিছু বিষয় অজানা কারণেই সুন্দর। জানা হয়ে উঠলে হয়তো সুন্দর লাগতো না। বিশাখা শাড়ি পরে কোথায় যায় কে জানে! তাও দিনেদুপুরে নয়। সন্ধ্যা করে। আমাকে কখনো বলেও যায় না কোথায় যায়! আমি জানতে চেয়েছিলাম কয়েকবার কিন্তু সে বলে না।",
      "জানতে চেয়ে মনে হলো বিশাখা বলতে স্বাচ্ছন্দ্যবোধ করে না। তাই আমিও আর জানতে চাই না। মানুষের অন্তত এটুকু স্বাধীনতার প্রয়োজন। তার মনের ইচ্ছেটাকে যদি সে মেলে ধরতে না পারে তাহলে আর স্বাধীনতা রইলো কই! আমি বিশাখাকে স্বাধীনতা দিতে চাই। আমার ভালো লাগে।",
      "বিশাখা যখন তার মনের ইচ্ছেটাকে মেলে ধরে তখন তাকে আমার পাখির মতো লাগে। মনে হয় আমি এই পাখিটাকে পুষছি অনেকদিন ধরে। আমার ভালো লাগে কিন্তু খারাপও লাগে যখন বিশাখা শাড়ি পরে একা একা কোথাও যায়। আমাকে কখনো নিয়ে যেতে চায় না। সে বলেও না।",
      "আমার খুব ইচ্ছে হয় বিশাখার হাতটা ধরে সন্ধ্যায় ল্যাম্পপোস্টের আলোতে করে হাঁটতে। কিন্তু সে আমার সাথে সন্ধ্যা করে কখনো বের হয় না। বিশাখার সাথে আমার বিয়ে হয়েছে খুব বেশিদিন হয় নি। সবেমাত্র ছ'মাস। এই ছ'মাসেই তাকে খুব আপন করে নিয়েছি। তাকে পর করতে পারবো না কখনো।",
      "কিন্তু বিশাখা আমার বউ। এটা ভেবে মাঝেমধ্যে আমি খুব অবাক হই। আমার কাছে মনে হয় এটা কোনো স্বপ্ন। মনে হয় বিশাখা আমার বউ নয়। মনে হয় এতো সুন্দর নিষ্পাপ একটি মেয়ে আমার বউ হতে পারে না। বিশাখাকে যত দেখি তত অবাক হই। চোখের পলক পড়তে চায় না তাকে দেখা শুরু করলে।",
      "বিয়ের পর বিশাখার মুখে তেমন হাসি দেখি নি। আমার খুব ইচ্ছে হয় তার হাসিমুখ দেখতে। এই মেয়েটাকে জানি হাসলে কত সুন্দর দেখায়! বিয়ের পরপরই তার মন খারাপ। মন খারাপ করে সে বারান্দায় বসে থাকে নাহয় বিছানায় শুয়ে থাকে নাহয় ভালো কিছু রান্না করে। বিশাখার রান্নার হাত ভালো।",
      "রান্না করাটা তার একটা শখ। তার রান্নার হাত খুব ভালো। প্রত্যেক মাসের শেষ সপ্তাহে সে নতুন নতুন রেসিপি তৈরি করে। যার নাম আমারও জানা নেই, বিশাখারও না। কিন্তু রান্না করলেও বিশাখা নিজে খায় না। সব আমার সামনে এনে হাজির করে। আমি জানি বিশাখা আমাকে কতটা পছন্দ করে!",
      "পছন্দ না করে কোনো উপায়ও নেই। যাকে সে বিয়ে করছে, যার সাথে সংসার করবে তাকে তো পছন্দ করবেই। একদিন রাত করে বিশাখা আলু দিয়ে, চিকেন দিয়ে, ময়দা দিয়ে আর মাশরুম দিয়ে কি যেন এক রেসিপি বানিয়েছে! দারুণ লেগেছে খেতে। মুখে লেগেই আছে। স্বাদ অমৃত।",
      "রান্না করে সে শুধু আমাকেই খাওয়ায় না। বাটিতে করে বাইরে নিয়ে যায় যখন সন্ধ্যা করে শাড়ি পরে বের হয় তখন। আমার খুব কৌতূহল জাগে, সে খাবার নিয়ে বাইরে কোথায় যায়! বিয়ের পরপরই এই কৌতূহল তৈরি হয়। সময় বাড়ার সাথে সাথে আমার কৌতূহল বাড়ছেই শুধু।",
      "আমি একদিন লুকিয়ে বিশাখার সাথে বের হই। তার পিছন পিছন হাঁটতে থাকি। ইচ্ছে সে কোথায় যায় দেখার! সন্ধ্যাবেলা। ল্যাম্পপোস্টের আলোয় সারা শহর হলুদ হয়ে আছে। মনে হয় প্রতিদিন সন্ধ্যায় শহরের গায়ে হলুদ হয়। বিশাখা হাঁটছে। আমিও হাঁটছি তার সাথে। তার পিছনে।",
      "তার এই হাঁটার মাঝে বেদনা আছে। নিখুঁত বেদনা। আমি বুঝতে পারছি। সে যতবার পা ফেলছে ততবাই যেন বেদনার সুর বেজে উঠছে। বিশাখা হাঁটতে হাঁটতে কবরের সামনে চলে এলো। যে কবরটায় তার বাবাকে কবর দেওয়া হয়েছে সে কবরটায়। বিশাখা কবরের ভেতর ঢুকলো। আমিও ঢুকলাম।",
      "আমি দূর থেকে দাঁড়িয়ে দেখতে পেলাম বিশাখা তার বাবার কবরের পাশে বসলো। বসে বিড়বিড় করে কাঁদো কাঁদো গলায় বলতে লাগলো, 'বাবা তুমি আমার রান্না করা নাম না জানা রেসিপিগুলো পছন্দ করতে! দেখো আমি আজ তোমার জন্য আরেকটা রেসিপি নিয়ে এসেছি রান্না করে। খাবে না বাবা!'",
      "বলে সে বাটি থেকে রেসিপিটা বের করে। বের করে নিজের মুখে দেয় আর বাবার কবরের পাশেও রাখে। এতেই যেন বিশাখার মনে হয় তার বাবা খাচ্ছে। আর বলে, 'বাবা তোমার দেওয়া শাড়িটা শুধু তোমার কাছে আসার সময়ই পরি। তোমার কাছ থেকে চলে গিয়ে খুব যত্ন করে রেখে দেই। একটা দাগও লাগতে দেই না। আমাকে কি আর কোনো শাড়ি কিনে দিবে না বাবা?'",
      "বিশাখা কাঁদে। জগতে বাবার চেয়ে প্রিয় তার আর কেউ ছিলো না। মাকে তো সে কখনোই দেখে নি। বিশাখা জানেও না মা দেখতে কেমন ছিলো! বিশাখার বাবা ওপারে চলে যায় তার বিয়ের ঠিক পরদিনই। এই শাড়িটা বিশাখাকে বাবা তার বিয়ের ঠিক দু'দিন আগেই কিনে দিয়েছিলো। এই শাড়িটা বাবা যত টাকা দিয়েই কিনুক না কেনো তার কাছে শাড়িটার দাম কোটি টাকা।",
      "বিশাখার কাছে তার স্বামী থাকলেও তার কাছে কেনো জানি মনে হয় তার কেউ নেই। এই জগতে সে একা। নিঃসঙ্গ। কিন্তু বিশাখা জানে বাবা যে জগতে আছে সে জগতে যাওয়ার পর বিশাখা আর একা থাকবে না, নিঃসঙ্গ থাকবে না। বিশাখা বাবাকে বলেও মাঝে মাঝে, 'বাবা আমি আসার আগে আবার আমার জন্য একটা শাড়ি কিনে রেখো কিন্তু!'",
    ],
  },
  {
    type: "কবিতা",
    title: "ফের দেখা হলে",
    date: "",
    excerpt: "",
    body: [
      "ফের দেখা হলে",
      "ফিরিয়ে নেবো চোখ,",
      "ফের দেখা হলে",
      "ফিরিয়ে দেবো শোক।",
      "",
      "ফের দেখা হলে",
      "গুটিয়ে নেবো আবদার,",
      "ফের দেখা হলে",
      "অভিযোগ তুলে ধরবো আবার।",
      "",
      "ফের দেখা হলে",
      "সুদে আসলে বুঝে নেবো ফাগুন,",
      "ফের দেখা হলে",
      "জলের মধ্যে পুনরায় জ্বালাবো আগুন।",
      "",
      "ফের দেখা হলে",
      "কথার মধ্যে এঁকে নেবো ব্যথা,",
      "ফের দেখা হলে",
      "তোমার ঠোঁটে দেবো আমার ঠোঁটের নীরবতা।",
    ],
  },
];


/* ---------- ৬. ছবি ----------
   src: ছবির ফাইলের নাম, যেমন "photo-1.jpg" (GitHub-এ আপলোড করার পর)।
   caption: ছবির নিচের বিবরণ। */
const GALLERY = [
  { src: "gallery-6.jpg", caption: "শহরের বারান্দায়, গোধূলিবেলায়" },
  { src: "gallery-1.jpg", caption: "লেখার টেবিলে, গভীর রাতে" },
  { src: "gallery-4.jpg", caption: "ঢাকা এফএম ৯০.৪-এর স্টুডিওতে" },
  { src: "gallery-5.jpg", caption: "বইমেলায় পাঠকদের সঙ্গে" },
  { src: "gallery-3.jpg", caption: "এক তাকে নিজের লেখা বইয়ের সারি" },
  { src: "gallery-2.jpg", caption: "পিপলস রেডিও ৯১.৬ এফএম-এর স্টুডিওতে" },
];


/* ---------- ৭. কবিতার ধরনের নাম ----------
   এই নামের লেখাগুলো কবিতার মতো (পঙ্‌ক্তি ধরে) দেখাবে। */
const POEM_TYPES = ["কবিতা"];


/* =========================================================
   ⚙️  নিচের কোড পরিবর্তনের প্রয়োজন নেই
   ========================================================= */

document.documentElement.classList.add("js");

/* কবিতার সোনালি পাতা ও আলো-ছায়ার খেলা */
const LIGHTPLAY = '<div class="lightplay" aria-hidden="true"><span class="lp-light"></span><span class="lp-shade"></span><span class="lp-rays"></span></div>';
(function () {
  const st = document.createElement("style");
  st.textContent = `
    .writing.is-gold{background:radial-gradient(ellipse at 18% 8%,rgba(255,248,220,.55),transparent 55%),linear-gradient(155deg,#f2d98e 0%,#ddb55a 55%,#c8973c 100%);border-color:#b8862e;color:#111;box-shadow:0 24px 44px -28px rgba(90,60,5,.6)}
    .writing.is-gold::before{background:#111}
    .writing.is-gold::after{content:"";position:absolute;inset:8px;border:1px solid rgba(17,17,17,.22);pointer-events:none}
    .writing.is-gold .writing-type{color:#3b2a08}
    .writing.is-gold h3{color:#0c0c0c}
    .writing.is-gold .writing-excerpt{color:#1a1407;text-align:center;font-family:var(--font-display);font-size:18px}
    .writing.is-gold .writing-foot{border-top-color:rgba(17,17,17,.22);color:#3b2a08}
    .writing.is-gold .text-link{color:#0c0c0c;border-bottom-color:#0c0c0c}
    .modal.is-gold .modal-panel{background:radial-gradient(ellipse at 15% 0%,rgba(255,250,228,.6),transparent 50%),linear-gradient(170deg,#f3dc95 0%,#e0bb62 55%,#cf9f45 100%);color:#0e0e0e;border-top:3px solid #0e0e0e}
    .modal.is-gold .modal-kicker{color:#3b2a08;text-align:center}
    .modal.is-gold .modal-title{color:#0c0c0c;text-align:center;padding:0 30px;font-size:clamp(34px,6vw,50px)}
    .modal.is-gold .modal-meta{color:#3b2a08;text-align:center;border-bottom-color:rgba(17,17,17,.25)}
    .modal.is-gold .modal-close{color:#0e0e0e}
    .modal.is-gold .modal-body{white-space:normal}
    .poem-text{white-space:pre-line;text-align:center;font-family:var(--font-display);font-size:clamp(19px,2.6vw,23px);line-height:2;color:#0c0c0c}
    .modal.is-gold .modal-body{position:relative}
    .poem-text{position:relative;z-index:1}
    .writing.is-gold>*:not(.lightplay){position:relative;z-index:1}
    .lightplay{position:absolute;inset:-12px -48px;z-index:0;overflow:hidden;pointer-events:none;
      -webkit-mask-image:linear-gradient(90deg,#000 0%,#000 16%,transparent 38%,transparent 62%,#000 84%,#000 100%),linear-gradient(180deg,transparent 0%,#000 14%,#000 86%,transparent 100%);
      mask-image:linear-gradient(90deg,#000 0%,#000 16%,transparent 38%,transparent 62%,#000 84%,#000 100%),linear-gradient(180deg,transparent 0%,#000 14%,#000 86%,transparent 100%);
      -webkit-mask-composite:source-in;mask-composite:intersect}
    .writing .lightplay{inset:0;margin:0}
    @media (max-width:540px){.lightplay{inset:-10px -22px;-webkit-mask-image:linear-gradient(90deg,#000 0%,transparent 30%,transparent 70%,#000 100%),linear-gradient(180deg,transparent 0%,#000 10%,#000 90%,transparent 100%);mask-image:linear-gradient(90deg,#000 0%,transparent 30%,transparent 70%,#000 100%),linear-gradient(180deg,transparent 0%,#000 10%,#000 90%,transparent 100%)}}
    .lightplay span{position:absolute;inset:-15% -30%;pointer-events:none}
    .lp-light{background:
      radial-gradient(circle at 24% 18%,rgba(255,252,232,.95),transparent 9%),
      radial-gradient(circle at 30% 52%,rgba(255,247,215,.85),transparent 8%),
      radial-gradient(circle at 22% 82%,rgba(255,250,225,.9),transparent 9%),
      radial-gradient(circle at 76% 28%,rgba(255,244,205,.85),transparent 8%),
      radial-gradient(circle at 72% 64%,rgba(255,248,220,.9),transparent 9%),
      radial-gradient(circle at 78% 90%,rgba(255,248,220,.7),transparent 7%);
      mix-blend-mode:soft-light;animation:lp-drift 11s ease-in-out infinite alternate}
    .lp-shade{background:
      radial-gradient(ellipse at 27% 34%,rgba(35,22,0,.55),transparent 9%),
      radial-gradient(ellipse at 20% 66%,rgba(35,22,0,.5),transparent 8%),
      radial-gradient(ellipse at 74% 46%,rgba(35,22,0,.5),transparent 9%),
      radial-gradient(ellipse at 80% 78%,rgba(35,22,0,.45),transparent 8%),
      radial-gradient(ellipse at 76% 12%,rgba(35,22,0,.4),transparent 7%);
      mix-blend-mode:multiply;animation:lp-drift2 13s ease-in-out infinite alternate}
    .lp-rays{inset:-20% -60%;background:repeating-linear-gradient(115deg,transparent 0 38px,rgba(255,250,228,.35) 46px,transparent 60px 96px);
      mix-blend-mode:overlay;animation:lp-sweep 9s linear infinite}
    @keyframes lp-drift{0%{transform:translate(-6%,-4%) rotate(-4deg) scale(1)}50%{transform:translate(4%,3%) rotate(3deg) scale(1.08)}100%{transform:translate(8%,-3%) rotate(-2deg) scale(.96)}}
    @keyframes lp-drift2{0%{transform:translate(7%,3%) scale(1.05)}50%{transform:translate(-3%,-4%) scale(.95)}100%{transform:translate(-8%,4%) scale(1.1)}}
    @keyframes lp-sweep{0%{transform:translateX(-12%)}100%{transform:translateX(12%)}}
    @media (prefers-reduced-motion:reduce){.lightplay span{animation:none}}
  `;
  document.head.appendChild(st);
})();

/* ছবির অংশের সাজানো (বাঁয়ে লম্বা ছবি, ডানে চারটি) */
(function () {
  const st = document.createElement("style");
  st.id = "gallery-layout-style";
  st.textContent =
    ".gallery-grid{grid-template-columns:repeat(3,minmax(0,1fr))}" +
    ".gallery-item,.gallery-item:nth-child(6n + 1),.gallery-item:nth-child(6n + 5){grid-row:auto;grid-column:auto;aspect-ratio:1/1}" +
    ".gallery-item:nth-child(1){grid-column:span 2;grid-row:span 2;aspect-ratio:auto}" +
    ".gallery-item:nth-child(2) img{object-position:50% 38%}" +
    ".gallery-item:nth-child(4) img{object-position:72% 50%}" +
    "@media (max-width:860px){.gallery-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.gallery-item:nth-child(6){grid-column:span 2;aspect-ratio:2/1}}" +
    ".writing.is-paper{background:radial-gradient(ellipse at 20% 10%,rgba(255,255,255,.45),transparent 55%),linear-gradient(160deg,#f9e8ad 0%,#f2d47c 100%);border-color:#d4ac4f;color:#141414;box-shadow:0 22px 40px -28px rgba(80,55,10,.55)}" +
    ".writing.is-paper::before{background:#141414}" +
    ".writing.is-paper::after{content:\"\";position:absolute;inset:8px;border:1px solid rgba(20,20,20,.18);pointer-events:none}" +
    ".writing.is-paper .writing-type{color:#7a5410}.writing.is-paper h3{color:#111}.writing.is-paper .writing-excerpt{color:#2b2416}" +
    ".writing.is-paper .writing-foot{border-top-color:rgba(20,20,20,.18);color:#5a4520}.writing.is-paper .text-link{color:#111;border-bottom-color:#111}" +
    ".writing-grid.single{grid-template-columns:1fr}.writing-grid.single .writing{max-width:780px;width:100%;margin:0 auto;padding:52px 48px 40px}" +
    ".writing-grid.single .writing h3{font-size:clamp(32px,5vw,46px)}.writing-grid.single .writing-excerpt{font-size:18px;line-height:2}" +
    ".modal.is-paper .modal-panel{background:radial-gradient(ellipse at 15% 0%,rgba(255,255,255,.5),transparent 50%),linear-gradient(170deg,#f9e9b0 0%,#f1d27a 100%);color:#141414;border-top:3px solid #141414}" +
    ".modal.is-paper .modal-kicker{color:#7a5410}.modal.is-paper .modal-title{color:#0e0e0e;font-size:clamp(34px,6vw,48px)}" +
    ".modal.is-paper .modal-meta{color:#5a4520;border-bottom-color:rgba(20,20,20,.2)}.modal.is-paper .modal-close{color:#141414}" +
    ".modal.is-paper .modal-body{color:#141414;font-size:19px;line-height:2.05}.modal.is-paper .modal-body p{margin-bottom:1.15em}" +
    ".modal.is-paper .modal-body p:first-child::first-letter{float:left;font-family:var(--font-display);font-size:3.6em;line-height:.9;padding:8px 10px 0 0;color:#0e0e0e}" +
    ".modal.is-paper .modal-body::after{content:\"◆  ◆  ◆\";display:block;text-align:center;margin-top:30px;color:#7a5410;font-size:10px;letter-spacing:.5em}" +
    "@media (max-width:540px){.writing-grid.single .writing{padding:40px 24px 30px}.modal.is-paper .modal-body{font-size:17.5px}}" +
    ".social-box{margin-top:34px;padding:30px 28px 18px;background:var(--ink);border:1px solid var(--gold);color:var(--ivory)}" +
    ".social-box-title{display:flex;align-items:center;gap:12px;font-family:var(--font-display);font-size:24px;color:var(--gold-soft);margin:0 0 10px}" +
    ".social-box-title svg{width:30px;height:30px;color:var(--gold)}" +
    ".social-box ul{list-style:none;margin:0;padding:0}" +
    ".social-box li a{display:flex;align-items:center;gap:16px;padding:16px 4px;border-bottom:1px solid var(--line-dark);text-decoration:none;color:#d9d2c4;transition:color .3s,padding .3s}" +
    ".social-box li:last-child a{border-bottom:0}" +
    ".social-box li a:hover{color:var(--gold-soft);padding-left:10px}" +
    ".sb-icon{width:40px;height:40px;flex-shrink:0;display:grid;place-items:center;border:1px solid var(--line-dark);border-radius:50%;color:var(--gold)}" +
    ".sb-icon svg{width:19px;height:19px}" +
    ".sb-label{flex:1;font-size:17px}.sb-arrow{color:var(--gold);font-size:16px}" +
    ".social-dark{justify-content:center}.social-dark a{border-radius:50%;width:48px;height:48px}" +
    "@media (max-width:400px){.social-dark{gap:8px}.social-dark a{width:44px;height:44px}}" +
    "@media (hover:none){.gallery-caption{opacity:1;transform:none;font-size:12px;line-height:1.45;padding:28px 10px 8px}}";
  document.head.appendChild(st);
})();

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

const bookLink = (b) => b && b.slug ? `${location.origin}${location.pathname}#book-${b.slug}` : "";
const hasSample = (b) => Array.isArray(b.excerpt) && b.excerpt.some(isFilled);

function bookOrderMessage(book) {
  const link = bookLink(book);
  return (
    `শুভেচ্ছা! আমি ${SITE.authorName}-এর লেখা "${book.title}" বইটি অর্ডার করতে চাই।\n` +
    (link ? `বইয়ের লিংক: ${link}\n` : "") + `\n` +
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
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>',
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

  /* যোগাযোগ অংশে নামসহ সামাজিক মাধ্যমের বাক্স */
  const links = SOCIAL.filter((s) => s.url);
  const info = $(".contact-info");
  if (info && links.length && !$(".social-box", info)) {
    const box = document.createElement("div");
    box.className = "social-box";
    box.innerHTML =
      `<p class="social-box-title">${ICONS.globe} সামাজিক মাধ্যম</p>` +
      `<ul>${links.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">` +
        `<span class="sb-icon">${ICONS[s.type] || ICONS.link}</span><span class="sb-label">${esc(s.label)}</span>` +
        `<span class="sb-arrow" aria-hidden="true">↗</span></a></li>`).join("")}</ul>`;
    const old = $("[data-social]", info);
    if (old) old.replaceWith(box); else info.appendChild(box);
  }
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
const hasSynopsis = (b) => Array.isArray(b.synopsis) && b.synopsis.some(isFilled);
const synopsisButton = (i) => hasSynopsis(BOOKS[i])
  ? `<button type="button" class="synopsis-box" data-open="synopsis" data-index="${i}"><span class="syn-label"><i class="syn-dot"></i>সারসংক্ষেপ</span><span class="syn-go">পড়ুন ›</span></button>` : "";
const sampleButton = (i) => hasSample(BOOKS[i])
  ? `<button class="btn btn-outline-gold" data-open="sample" data-index="${i}">একটু পড়ে দেখুন</button>` : "";

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
        ${cartButton(0) ? cartButton(0) + waOutline(0) : orderButton(0)}
        ${sampleButton(0)}
      </div>
      ${synopsisButton(0)}
    </div>`;

  grid.innerHTML = BOOKS.slice(1).map((book, n) => {
    const i = n + 1;
    return `
    <article class="book reveal" id="book-${esc(book.slug || "n" + i)}">
      <button class="book-cover" data-open="book" data-index="${i}" aria-label="${esc(book.title)} — বিস্তারিত">
        ${coverMarkup(book)}
      </button>
      <p class="book-genre">${esc(book.genre)}</p>
      <h3 class="book-title">${esc(book.title)}</h3>
      <p class="book-meta">${[book.publisher, book.year].filter(isFilled).map(esc).concat(isFilled(book.price) ? [`<span class="price">${esc(book.price)}</span>`] : []).join(" · ")}</p>
      <div class="book-actions">
        ${cartButton(i) || orderButton(i, "অর্ডার করুন")}
        ${sampleButton(i)}
        <button class="btn btn-outline-gold" data-open="book" data-index="${i}">বিস্তারিত</button>
      </div>
      ${synopsisButton(i)}
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

  grid.classList.toggle("single", WRITINGS.length === 1);
  grid.innerHTML = WRITINGS.length
    ? WRITINGS.map((w, i) => `
      <article class="writing reveal${isPoem(w) ? " is-gold" : " is-paper"}" data-type="${esc(w.type)}">
        <p class="writing-type">${esc(w.type)}</p>
        <h3>${esc(w.title)}</h3>
        <p class="writing-excerpt${isPoem(w) ? " is-poem" : ""}">${writingPreview(w)}</p>
        ${isPoem(w) ? LIGHTPLAY : ""}
        <div class="writing-foot">
          <span>${esc(w.date || SITE.authorName)}</span>
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
      <p>এখানে তালিকাভুক্ত ${toBn(BOOK_LIST.length)}টি বই · যেকোনো বইয়ের পাশের <em>অর্ডার</em> লেখায় চাপুন</p>
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

function openModal({ kicker = "", title = "", meta = "", bodyHtml = "", poem = false, image = false, paper = false, gold = false, actionsHtml = "" }) {
  modal.classList.remove("is-cart");
  modal.classList.toggle("is-paper", paper);
  modal.classList.toggle("is-gold", gold);
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
  clearBookHash();
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

function setBookHash(b) {
  if (!b || !b.slug) return;
  try { history.replaceState(null, "", `${location.pathname}${location.search}#book-${b.slug}`); } catch (e) {}
}
function clearBookHash() {
  if (!location.hash.startsWith("#book-")) return;
  try { history.replaceState(null, "", `${location.pathname}${location.search}`); } catch (e) {}
}
const copyLinkButton = (b) => b && b.slug
  ? `<button class="btn btn-outline-gold" data-copy-link="${esc(b.slug)}">লিংক কপি করুন</button>` : "";
function openFromHash() {
  const m = location.hash.match(/^#book-(.+)$/);
  if (!m) return;
  const i = BOOKS.findIndex((b) => b.slug === decodeURIComponent(m[1]));
  if (i < 0) return;
  const card = document.getElementById(`book-${BOOKS[i].slug}`);
  if (card) card.scrollIntoView({ block: "center" });
  openItem("book", i);
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
      actionsHtml: (cartButton(index) ? cartButton(index) + waOutline(index) : orderButton(index, "WhatsApp-এ অর্ডার করুন")) + sampleButton(index) + copyLinkButton(b) + synopsisButton(index),
    });
    setBookHash(b);
  } else if (type === "synopsis") {
    const b = BOOKS[index];
    if (!b || !hasSynopsis(b)) return;
    openModal({
      kicker: "সারসংক্ষেপ",
      paper: true,
      title: b.title,
      meta: SITE.authorName,
      bodyHtml: `<div class="sample-text">${paragraphs(b.synopsis.filter(isFilled))}</div>` + `<p class="sample-end">… পুরো গল্প জানতে বইটি সংগ্রহ করুন।</p>`,
      actionsHtml: (cartButton(index) ? cartButton(index) + waOutline(index) : orderButton(index, "WhatsApp-এ অর্ডার করুন")) + copyLinkButton(b),
    });
    setBookHash(b);
  } else if (type === "sample") {
    const b = BOOKS[index];
    if (!b || !hasSample(b)) return;
    openModal({
      kicker: "একটু পড়ে দেখুন",
      paper: true,
      title: b.title,
      meta: SITE.authorName,
      bodyHtml: `<div class="sample-text">${paragraphs(b.excerpt.filter(isFilled))}</div>` + `<p class="sample-end">… পুরোটা পড়তে বইটি অর্ডার করুন।</p>`,
      actionsHtml: (cartButton(index) ? cartButton(index) + waOutline(index) : orderButton(index, "WhatsApp-এ অর্ডার করুন")) + copyLinkButton(b),
    });
    setBookHash(b);
  } else if (type === "writing") {
    const w = WRITINGS[index];
    if (!w) return;
    openModal({
      kicker: w.type,
      paper: !isPoem(w),
      gold: isPoem(w),
      title: w.title,
      meta: w.date || SITE.authorName,
      bodyHtml: isPoem(w) ? `<div class="poem-text">${esc(w.body.join("\n"))}</div>` + LIGHTPLAY : paragraphs(w.body),
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

/* =========================================================
   কার্ট ও অর্ডার
   ---------------------------------------------------------
   পাঠক বই কার্টে রাখেন → নাম, ঠিকানা, ফোন দেন → পেমেন্ট নম্বর দেখেন
   → সব তথ্য একটি বার্তা হয়ে আপনার WhatsApp-এ যায়।
   পেমেন্ট নম্বর ও মাধ্যম বদলাতে নিচের PAY অংশ সম্পাদনা করুন।
   ========================================================= */
const PAY = {
  number: "01823818887",
  methods: ["বিকাশ", "নগদ", "রকেট"],
  note: "বিকাশে “সেন্ড মানি” করুন",
};

const bnToNum = (str) => Number(String(str).replace(/[০-৯]/g, (d) => BN_DIGITS.indexOf(d)).replace(/[^\d]/g, "")) || 0;
const priceOf = (b) => (b && isFilled(b.price) ? bnToNum(b.price) : 0);
const canBuy = (b) => Boolean(b && b.slug && priceOf(b) > 0);
const taka = (n) => `${toBn(Number(n).toLocaleString("en-US"))} টাকা`;
const bookBySlug = (slug) => BOOKS.find((b) => b.slug === slug);
const CART_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2.2l2.1 10.2a1.5 1.5 0 0 0 1.5 1.2h7.9a1.5 1.5 0 0 0 1.5-1.1L20 8H6.3"/><circle cx="9.5" cy="19.2" r="1.3"/><circle cx="16.5" cy="19.2" r="1.3"/></svg>';

const cartButton = (i, label = "কার্টে যোগ করুন") => canBuy(BOOKS[i])
  ? `<button class="btn btn-gold" data-cart-add="${esc(BOOKS[i].slug)}">${CART_ICON} ${label}</button>` : "";
const waOutline = (i) =>
  `<a href="#" class="btn btn-outline-gold" data-wa="book" data-index="${i}">${ICONS.whatsapp} WhatsApp-এ জিজ্ঞাসা</a>`;

const CART_KEY = "ak-cart-v1";
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]")
    .filter((x) => x && canBuy(bookBySlug(x.slug)) && x.qty > 0)
    .map((x) => ({ slug: x.slug, qty: Math.min(10, Math.floor(x.qty)) }));
} catch (e) { cart = []; }
const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {} };
const cartCount = () => cart.reduce((n, x) => n + x.qty, 0);
const cartTotal = () => cart.reduce((n, x) => n + priceOf(bookBySlug(x.slug)) * x.qty, 0);

let cartStep = "cart";
const cartForm = { name: "", phone: "", address: "", area: "ঢাকার ভেতরে", note: "", method: PAY.methods[0], trx: "" };

/* ভাসমান কার্ট বোতাম */
const fab = document.createElement("button");
fab.className = "cart-fab";
fab.type = "button";
fab.setAttribute("data-cart-open", "");
fab.hidden = true;
document.body.appendChild(fab);
function updateFab(bump) {
  const n = cartCount();
  fab.hidden = n === 0;
  fab.innerHTML = `${CART_ICON}<span class="cart-fab-label">কার্ট</span><span class="cart-fab-count">${toBn(n)}</span>`;
  fab.setAttribute("aria-label", `কার্ট দেখুন, ${toBn(n)}টি বই`);
  if (bump) { fab.classList.remove("bump"); void fab.offsetWidth; fab.classList.add("bump"); }
}

function addToCart(slug) {
  const b = bookBySlug(slug);
  if (!canBuy(b)) return;
  const row = cart.find((x) => x.slug === slug);
  if (row) row.qty = Math.min(10, row.qty + 1); else cart.push({ slug, qty: 1 });
  saveCart(); updateFab(true);
  toast(`“${b.title}” কার্টে যোগ হয়েছে`);
}

function cartOrderMessage() {
  const lines = cart.map((x, n) => {
    const b = bookBySlug(x.slug);
    return `${toBn(n + 1)}। "${b.title}" × ${toBn(x.qty)} = ${taka(priceOf(b) * x.qty)}\n   লিংক: ${bookLink(b)}`;
  });
  return [
    `শুভেচ্ছা! আমি ${SITE.authorName}-এর বই অর্ডার করতে চাই।`,
    "",
    "অর্ডার:",
    ...lines,
    "",
    `বইয়ের মোট দাম: ${taka(cartTotal())}`,
    "ডেলিভারি খরচ: আলাদা (দয়া করে জানাবেন)",
    "",
    `নাম: ${cartForm.name.trim()}`,
    `মোবাইল: ${cartForm.phone.trim()}`,
    `ঠিকানা: ${cartForm.address.trim()}`,
    `এলাকা: ${cartForm.area}`,
    `পেমেন্ট মাধ্যম: ${cartForm.method}`,
    `লেনদেন আইডি (TrxID): ${cartForm.trx.trim() || "এখনো পেমেন্ট করিনি"}`,
    ...(cartForm.note.trim() ? [`নোট: ${cartForm.note.trim()}`] : []),
  ].join("\n");
}

function renderCart() {
  const body = $("#modal-body");
  const actions = $("#modal-actions");
  const kicker = $("#modal-kicker");
  const title = $("#modal-title");
  const meta = $("#modal-meta");
  const total = cartTotal();

  if (!cart.length) {
    kicker.textContent = "আপনার কার্ট";
    title.textContent = "কার্ট খালি";
    meta.textContent = "";
    body.innerHTML = `<p>পছন্দের বইয়ের <strong>কার্টে যোগ করুন</strong> বোতামে চাপুন।</p>`;
    actions.innerHTML = `<button class="btn btn-gold" data-close>বই দেখুন</button>`;
    return;
  }

  if (cartStep === "cart") {
    kicker.textContent = "ধাপ ১ / ৩";
    title.textContent = "আপনার কার্ট";
    meta.textContent = `${toBn(cartCount())}টি বই`;
    body.innerHTML = `
      <ul class="cart-list">
        ${cart.map((x) => {
          const b = bookBySlug(x.slug);
          return `<li class="cart-row">
            <span class="cart-thumb">${b.cover ? `<img src="${esc(b.cover)}" alt="">` : ""}</span>
            <span class="cart-info"><strong>${esc(b.title)}</strong><em>${taka(priceOf(b))}</em></span>
            <span class="cart-qty">
              <button type="button" data-cart-act="dec" data-slug="${esc(x.slug)}" aria-label="কমান">−</button>
              <span>${toBn(x.qty)}</span>
              <button type="button" data-cart-act="inc" data-slug="${esc(x.slug)}" aria-label="বাড়ান">+</button>
            </span>
            <button type="button" class="cart-remove" data-cart-act="rm" data-slug="${esc(x.slug)}" aria-label="মুছুন">×</button>
          </li>`;
        }).join("")}
      </ul>
      <p class="cart-total"><span>বইয়ের মোট দাম</span><strong>${taka(total)}</strong></p>
      <p class="cart-note">ডেলিভারি খরচ আলাদা। ঠিকানা অনুযায়ী অর্ডারের পর WhatsApp-এ জানানো হবে।</p>`;
    actions.innerHTML =
      `<button class="btn btn-gold" data-cart-act="to-info">অর্ডারের তথ্য দিন →</button>` +
      `<button class="btn btn-outline-gold" data-close>আরও বই দেখুন</button>`;
  } else if (cartStep === "info") {
    kicker.textContent = "ধাপ ২ / ৩";
    title.textContent = "আপনার তথ্য";
    meta.textContent = `বইয়ের মোট দাম ${taka(total)}`;
    body.innerHTML = `
      <div class="cart-form">
        <label>আপনার নাম<input id="cf-name" autocomplete="name" value="${esc(cartForm.name)}" placeholder="পুরো নাম"></label>
        <label>মোবাইল নম্বর<input id="cf-phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(cartForm.phone)}" placeholder="01XXXXXXXXX"></label>
        <label>পুরো ঠিকানা<textarea id="cf-address" rows="3" autocomplete="street-address" placeholder="বাড়ি/রোড, এলাকা, থানা, জেলা">${esc(cartForm.address)}</textarea></label>
        <fieldset>
          <legend>ডেলিভারি কোথায়?</legend>
          ${["ঢাকার ভেতরে", "ঢাকার বাইরে"].map((a) => `<label class="cart-radio"><input type="radio" name="cf-area" value="${a}"${cartForm.area === a ? " checked" : ""}> ${a}</label>`).join("")}
        </fieldset>
        <label>কিছু জানাতে চান? (ঐচ্ছিক)<input id="cf-note" value="${esc(cartForm.note)}" placeholder="যেমন: অটোগ্রাফে কার নাম লিখবেন"></label>
      </div>`;
    actions.innerHTML =
      `<button class="btn btn-gold" data-cart-act="to-pay">পেমেন্টে যান →</button>` +
      `<button class="btn btn-outline-gold" data-cart-act="to-cart">← কার্টে ফিরুন</button>`;
  } else {
    kicker.textContent = "ধাপ ৩ / ৩";
    title.textContent = "পেমেন্ট ও অর্ডার";
    meta.textContent = `বইয়ের মোট দাম ${taka(total)}`;
    body.innerHTML = `
      <div class="pay-box">
        <p class="pay-label">${esc(PAY.methods.join(" · "))} — একই নম্বর</p>
        <p class="pay-number">${esc(PAY.number)}</p>
        <button type="button" class="btn btn-outline-gold pay-copy" data-cart-act="copy-num">নম্বর কপি করুন</button>
        <p class="pay-hint">${esc(PAY.note)}।</p>
      </div>
      <div class="cart-form">
        <fieldset>
          <legend>কোন মাধ্যমে পাঠাবেন?</legend>
          ${PAY.methods.map((m) => `<label class="cart-radio"><input type="radio" name="cf-method" value="${m}"${cartForm.method === m ? " checked" : ""}> ${m}</label>`).join("")}
        </fieldset>
        <label>লেনদেন আইডি (TrxID) <small>— টাকা পাঠানোর পর লিখুন</small><input id="cf-trx" autocapitalize="characters" value="${esc(cartForm.trx)}" placeholder="যেমন: 9AB3C4D5EF"></label>
      </div>
      <p class="cart-note">ডেলিভারি খরচ বইয়ের দামের সাথে যোগ হবে। এখনো টাকা না পাঠালেও অর্ডার পাঠাতে পারেন; WhatsApp-এ মোট অঙ্ক জানিয়ে দেওয়া হবে।</p>`;
    actions.innerHTML =
      `<button class="btn btn-gold" data-cart-act="send">${ICONS.whatsapp} WhatsApp-এ অর্ডার পাঠান</button>` +
      `<button class="btn btn-outline-gold" data-cart-act="to-info">← তথ্য বদলান</button>`;
  }
}

function openCart() {
  if (!cart.length) cartStep = "cart";
  openModal({ kicker: "আপনার কার্ট", title: "কার্ট", meta: "", bodyHtml: "", actionsHtml: "" });
  modal.classList.add("is-cart");
  renderCart();
}

const bnDigitsToLatin = (str) => String(str).replace(/[০-৯]/g, (d) => BN_DIGITS.indexOf(d));
function validPhone(v) {
  const d = bnDigitsToLatin(v).replace(/[^\d]/g, "").replace(/^88/, "");
  return /^01[3-9]\d{8}$/.test(d);
}

function cartAction(act, slug) {
  const row = cart.find((x) => x.slug === slug);
  if (act === "inc" && row) row.qty = Math.min(10, row.qty + 1);
  else if (act === "dec" && row) row.qty = Math.max(1, row.qty - 1);
  else if (act === "rm" && row) cart = cart.filter((x) => x.slug !== slug);
  else if (act === "to-cart") cartStep = "cart";
  else if (act === "to-info") cartStep = "info";
  else if (act === "to-pay") {
    if (cartForm.name.trim().length < 2) return toast("আপনার নাম লিখুন");
    if (!validPhone(cartForm.phone)) return toast("সঠিক মোবাইল নম্বর লিখুন (যেমন 01XXXXXXXXX)");
    if (cartForm.address.trim().length < 8) return toast("পুরো ঠিকানা লিখুন");
    cartStep = "pay";
  } else if (act === "copy-num") {
    const done = () => toast("নম্বর কপি হয়েছে");
    const fb = () => { const t = document.createElement("textarea"); t.value = PAY.number; t.style.position = "fixed"; t.style.opacity = "0"; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); done(); } catch (e) { toast(PAY.number); } t.remove(); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(PAY.number).then(done, fb); else fb();
    return;
  } else if (act === "send") {
    if (!cart.length) return;
    if (openWhatsApp(cartOrderMessage())) {
      cart = []; saveCart(); updateFab(); cartStep = "cart";
      closeModal();
      toast("ধন্যবাদ! WhatsApp-এ অর্ডার পাঠিয়ে দিন");
    }
    return;
  }
  saveCart(); updateFab(); renderCart();
}

document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-cart-add]");
  if (add) { e.preventDefault(); addToCart(add.dataset.cartAdd); return; }
  if (e.target.closest("[data-cart-open]")) { openCart(); return; }
  const act = e.target.closest("[data-cart-act]");
  if (act) { e.preventDefault(); cartAction(act.dataset.cartAct, act.dataset.slug); }
});

document.addEventListener("input", (e) => {
  const t = e.target;
  if (!modal.classList.contains("is-cart")) return;
  if (t.id === "cf-name") cartForm.name = t.value;
  else if (t.id === "cf-phone") cartForm.phone = t.value;
  else if (t.id === "cf-address") cartForm.address = t.value;
  else if (t.id === "cf-note") cartForm.note = t.value;
  else if (t.id === "cf-trx") cartForm.trx = t.value;
  else if (t.name === "cf-area") cartForm.area = t.value;
  else if (t.name === "cf-method") cartForm.method = t.value;
});

updateFab();


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

  const copy = e.target.closest("[data-copy-link]");
  if (copy) {
    const b = BOOKS.find((x) => x.slug === copy.dataset.copyLink);
    const link = bookLink(b);
    const done = () => toast("বইয়ের লিংক কপি হয়েছে");
    const fallback = () => {
      const t = document.createElement("textarea");
      t.value = link; t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); done(); } catch (err) { toast(link); }
      t.remove();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(done, fallback);
    else fallback();
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

/* বইয়ের নিজস্ব লিংক (#book-নাম) খুললে সেই বইয়ের পাতা খুলবে */
window.addEventListener("hashchange", openFromHash);
setTimeout(openFromHash, 400);

const yearEl = $("#year");
if (yearEl) yearEl.textContent = toBn(new Date().getFullYear());

/* =========================================================
   প্রিমিয়াম স্তর — চলন ও নতুন অংশ
   ========================================================= */
(function premium() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* প্রবেশের পর্দা: একবার দেখানোর পর এই সেশনে আর দেখাবে না */
  const pre = $("#preloader");
  if (pre) {
    let seen = false;
    try { seen = sessionStorage.getItem("ak-intro") === "1"; } catch (e) {}
    if (reduce || seen) pre.remove();
    else {
      document.body.classList.add("no-scroll");
      const finish = () => {
        pre.classList.add("done");
        document.body.classList.remove("no-scroll");
        try { sessionStorage.setItem("ak-intro", "1"); } catch (e) {}
        setTimeout(() => pre.remove(), 900);
      };
      setTimeout(finish, 1900);
      pre.addEventListener("click", finish);
    }
  }

  /* বইয়ের নামের চলমান ফিতা */
  const track = $("#marquee-track");
  if (track && typeof BOOK_LIST !== "undefined") {
    const names = BOOK_LIST.map((b) => `<span>${esc(b.title)}</span>`).join("");
    track.innerHTML = names + names;
  }

  /* সংখ্যা গুনে ওঠা */
  const counters = $$("[data-count]");
  const runCount = (el) => {
    const end = +el.dataset.count;
    const plain = el.dataset.plain === "1";
    const start = plain ? end - 30 : 0;
    const dur = 1600, t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const v = Math.round(start + (end - start) * (1 - Math.pow(1 - k, 3)));
      el.textContent = toBn(v);
      if (k < 1) requestAnimationFrame(step);
    };
    if (reduce) { el.textContent = toBn(end); return; }
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { runCount(e.target); io.unobserve(e.target); }
    }), { threshold: .6 });
    counters.forEach((c) => io.observe(c));
  } else counters.forEach(runCount);

  /* অগ্রগতি রেখা ও উপরে যাওয়ার বোতাম */
  const bar = $("#scroll-progress"), btn = $("#to-top-btn"), ring = $("#tt-bar");
  const onProgress = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    const k = h > 0 ? scrollY / h : 0;
    if (bar) bar.style.transform = `scaleX(${k})`;
    if (ring) ring.style.strokeDashoffset = String(132 * (1 - k));
    if (btn) btn.classList.toggle("show", scrollY > innerHeight * .8);
  };
  addEventListener("scroll", onProgress, { passive: true });
  onProgress();
  if (btn) btn.addEventListener("click", () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));

  /* হিরোতে সোনালি ধূলিকণা */
  const hero = $(".hero");
  if (hero && !reduce) {
    const c = document.createElement("canvas");
    c.className = "hero-dust";
    hero.insertBefore(c, hero.firstChild.nextSibling);
    const ctx = c.getContext("2d");
    let W, H, dots = [], running = true;
    const size = () => {
      const r = Math.min(devicePixelRatio || 1, 2);
      W = hero.clientWidth; H = hero.clientHeight;
      c.width = W * r; c.height = H * r; ctx.setTransform(r, 0, 0, r, 0, 0);
      const n = Math.round(Math.min(70, W / 16));
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.6 + .4, s: Math.random() * .25 + .05,
        a: Math.random() * .5 + .15, p: Math.random() * Math.PI * 2,
      }));
    };
    const draw = (t) => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (const d of dots) {
        d.y -= d.s; d.x += Math.sin(t / 2400 + d.p) * .15;
        if (d.y < -4) { d.y = H + 4; d.x = Math.random() * W; }
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226,201,143,${d.a * (.65 + .35 * Math.sin(t / 900 + d.p))})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    size(); addEventListener("resize", size);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => {
        const was = running; running = e.isIntersecting;
        if (running && !was) requestAnimationFrame(draw);
      }).observe(hero);
    }
    requestAnimationFrame(draw);

    /* হিরোর বড় অক্ষর স্ক্রলে ধীরে সরে */
    const glyph = $(".hero-glyph");
    if (glyph) addEventListener("scroll", () => {
      if (scrollY < innerHeight) glyph.style.transform = `translateY(${scrollY * .25}px)`;
    }, { passive: true });
  }

  /* কম্পিউটারে মাউসের আভা ও বইয়ে ত্রিমাত্রিক হেলানো */
  if (fine && !reduce) {
    const glow = $("#cursor-glow");
    addEventListener("mousemove", (e) => {
      document.body.classList.add("has-cursor");
      if (glow) glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, { passive: true });

    $$(".book-cover").forEach((card) => {
      const shine = document.createElement("span");
      shine.className = "shine";
      card.appendChild(shine);
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.transform = `perspective(900px) rotateY(${(x - .5) * 14}deg) rotateX(${(.5 - y) * 12}deg) translateY(-6px)`;
        card.style.setProperty("--sx", x * 100 + "%");
        card.style.setProperty("--sy", y * 100 + "%");
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }
})();


/* =========================================================
   ব্লু এডিশন — সব গল্প ও কবিতার পাতা গাঢ় বিষণ্ণ নীল, সাদা কালি
   ========================================================= */
(function blueEdition() {
  const st = document.createElement("style");
  st.textContent = `
    #writings{background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(120,150,200,.16),transparent 60%),radial-gradient(ellipse 60% 60% at 100% 100%,rgba(0,0,0,.35),transparent 60%),linear-gradient(180deg,#0e1d38 0%,#0a1529 100%);color:#e8edf6;position:relative}
    #writings h2{color:#f4f6fb}
    #writings .section-eyebrow{color:#9fb4d6}
    #writings .section-head h2::after{background:linear-gradient(90deg,#9fb4d6,transparent)}
    #writings .filter-btn{color:#c9d5ea;border-color:rgba(159,180,214,.35);background:transparent}
    #writings .filter-btn:hover{border-color:#c9d5ea}
    #writings .filter-btn[aria-pressed="true"]{background:#f1f4fa;color:#0e1d38;border-color:#f1f4fa}

    .writing.is-paper,.writing.is-gold{
      background:radial-gradient(ellipse at 18% 6%,rgba(160,190,235,.22),transparent 55%),radial-gradient(ellipse at 100% 100%,rgba(0,0,0,.35),transparent 60%),linear-gradient(160deg,#1a3360 0%,#13284d 50%,#0f2142 100%);
      border-color:rgba(159,180,214,.35);color:#f1f4fa;box-shadow:0 30px 60px -32px rgba(0,0,0,.8)}
    .writing.is-paper::before,.writing.is-gold::before{background:#dfe7f5}
    .writing.is-paper::after,.writing.is-gold::after{content:"";position:absolute;inset:8px;border:1px solid rgba(220,230,245,.18);pointer-events:none}
    .writing.is-paper .writing-type,.writing.is-gold .writing-type{color:#9fb4d6;letter-spacing:.06em}
    .writing.is-paper h3,.writing.is-gold h3{color:#ffffff}
    .writing.is-paper .writing-excerpt,.writing.is-gold .writing-excerpt{color:#dbe3f0}
    .writing.is-paper .writing-foot,.writing.is-gold .writing-foot{border-top-color:rgba(220,230,245,.18);color:#9fb4d6}
    .writing.is-paper .text-link,.writing.is-gold .text-link{color:#ffffff;border-bottom-color:#ffffff}
    .writing.is-paper .text-link:hover,.writing.is-gold .text-link:hover{color:#c9d5ea}
    .writing.is-paper:hover,.writing.is-gold:hover{border-color:rgba(200,215,240,.6)}

    .modal.is-paper .modal-backdrop,.modal.is-gold .modal-backdrop{background:rgba(5,10,22,.85)}
    .modal.is-paper .modal-panel,.modal.is-gold .modal-panel{
      background:radial-gradient(ellipse at 15% 0%,rgba(160,190,235,.22),transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(0,0,0,.4),transparent 55%),linear-gradient(175deg,#1a3360 0%,#13284d 45%,#0d1d3a 100%);
      color:#f1f4fa;border-top:3px solid #dfe7f5}
    .modal.is-paper .modal-kicker,.modal.is-gold .modal-kicker{color:#9fb4d6}
    .modal.is-paper .modal-title,.modal.is-gold .modal-title{color:#ffffff}
    .modal.is-paper .modal-meta,.modal.is-gold .modal-meta{color:#9fb4d6;border-bottom-color:rgba(220,230,245,.2)}
    .modal.is-paper .modal-close,.modal.is-gold .modal-close{color:#ffffff}
    .modal.is-paper .modal-body{color:#eef2f9}
    .modal.is-paper .modal-body p:first-child::first-letter{color:#ffffff}
    .modal.is-paper .modal-body::after{color:#9fb4d6}
    .poem-text{color:#f4f6fb}
    .lp-light{mix-blend-mode:screen;opacity:.35}
    .lp-shade{mix-blend-mode:multiply;opacity:.9}
    .lp-rays{mix-blend-mode:screen;opacity:.35}
    .modal.is-paper ::selection,.modal.is-gold ::selection,#writings ::selection{background:#dfe7f5;color:#0e1d38}
  `;
  document.head.appendChild(st);
})();
