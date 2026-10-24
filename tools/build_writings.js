/* লেখার আলাদা পাতা বানানোর স্ক্রিপ্ট।
   script.js-এর WRITINGS থেকে প্রতিটি লেখার জন্য lekha/<slug>/index.html বানায় এবং sitemap.xml হালনাগাদ করে।
   চালাতে: node tools/build_writings.js
   নতুন লেখা যোগ করলে WRITINGS-এ slug: "ইংরেজি-অক্ষরে-নাম" দিন, তারপর এটি চালান। */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "script.js"), "utf8");
const a = src.indexOf("const WRITINGS = [");
const b = src.indexOf("\n];", a) + 3;
const WRITINGS = new Function(src.slice(a, b).replace("const WRITINGS =", "return"))();
const POEM_TYPES = (src.match(/const POEM_TYPES = (\[[^\]]*\])/) || [])[1];
const poemTypes = POEM_TYPES ? new Function("return " + POEM_TYPES)() : ["কবিতা"];
const isPoem = (w) => poemTypes.includes(w.type);
const AUTHOR = "আরিফ খন্দকার";
const SITE = "https://authorarifkhandaker.com";
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const items = WRITINGS.filter((w) => w.slug);

function body(w) {
  if (isPoem(w)) {
    const stanzas = [];
    let cur = [];
    w.body.forEach((l) => { if (!l.trim()) { if (cur.length) stanzas.push(cur); cur = []; } else cur.push(l); });
    if (cur.length) stanzas.push(cur);
    return `<div class="poem">${stanzas.map((s) => `<p>${s.map(esc).join("<br>")}</p>`).join("")}</div>`;
  }
  return `<div class="prose">${w.body.filter((p) => p.trim()).map((p) => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`).join("")}</div>`;
}

function desc(w) {
  const t = (w.excerpt || w.body.find((l) => l.trim()) || "").replace(/\s+/g, " ").trim();
  return (t.length > 150 ? t.slice(0, 147).replace(/\s+\S*$/, "") + "…" : t);
}

items.forEach((w) => {
  const url = `${SITE}/lekha/${w.slug}/`;
  const others = items.filter((x) => x !== w);
  const d = desc(w);
  const ld = { "@context": "https://schema.org", "@type": isPoem(w) ? "Poem" : "ShortStory", name: w.title, headline: w.title, inLanguage: "bn", url, description: d, genre: w.type, author: { "@type": "Person", name: AUTHOR, alternateName: "Arif Khandaker", url: SITE + "/" }, isPartOf: { "@type": "WebSite", name: AUTHOR, url: SITE + "/" } };
  const html = `<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(w.title)} — ${w.type} | ${AUTHOR} (Arif Khandaker)</title>
<meta name="description" content="${esc(d)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#0e0d0b">
<meta property="og:type" content="article">
<meta property="og:site_name" content="${AUTHOR}">
<meta property="og:locale" content="bn_BD">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(w.title)} — ${AUTHOR}">
<meta property="og:description" content="${esc(d)}">
<meta property="og:image" content="${SITE}/author.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.ico?v=2" sizes="any">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-H027R58T1E"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-H027R58T1E');</script>
<style>
@font-face{font-family:"AK Serif";src:url("/ak-serif.woff?v=3") format("woff");font-weight:400 500;font-display:swap}
@font-face{font-family:"AK Tiro";src:url("/ak-tiro.woff?v=3") format("woff");font-weight:400;font-display:swap}
@font-face{font-family:"AK Sans";src:url("/ak-sans.woff?v=3") format("woff");font-weight:300 600;font-display:swap}
*{box-sizing:border-box}
html{background:#0e0d0b}
body{margin:0;color:#ece6d8;font-family:"AK Sans","Noto Sans Bengali",sans-serif;line-height:1.7}
a{color:#e2c98f}
.top{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 22px;border-bottom:1px solid rgba(201,164,92,.22)}
.brand{text-decoration:none;color:#f7f3ea;font-family:"AK Tiro","AK Serif",serif;font-size:20px}
.brand small{display:block;font-family:"AK Sans",sans-serif;color:#c9a45c;font-size:11px;letter-spacing:.22em}
.top a.back{font-size:14px;text-decoration:none;border:1px solid rgba(201,164,92,.5);padding:8px 14px;border-radius:999px}
main{max-width:680px;margin:0 auto;padding:48px 22px 24px}
.kicker{color:#c9a45c;letter-spacing:.14em;font-size:14px;margin:0 0 10px}
h1{font-family:"AK Tiro","AK Serif",serif;font-weight:400;font-size:clamp(36px,8vw,56px);line-height:1.25;margin:0 0 6px;color:#fffdf8}
.by{color:#a59c8b;margin:0 0 36px;font-size:15px}
.prose p,.poem p{font-family:"AK Serif","Noto Serif Bengali",serif;font-size:19px;line-height:2.05;margin:0 0 1.15em}
.poem{text-align:center;font-family:"AK Tiro","AK Serif",serif}
.poem p{font-family:"AK Tiro","AK Serif",serif;font-size:21px;line-height:2.1;margin:0 0 1.6em}
.share{display:flex;flex-wrap:wrap;gap:10px;margin:36px 0 0;padding-top:24px;border-top:1px solid rgba(201,164,92,.22)}
.share a,.share button{font:inherit;font-size:15px;padding:10px 18px;border-radius:999px;border:1px solid rgba(201,164,92,.5);background:transparent;color:#e2c98f;cursor:pointer;text-decoration:none}
.share .gold{background:#c9a45c;color:#1a1508;border-color:#c9a45c}
.more{max-width:680px;margin:0 auto;padding:12px 22px 56px}
.more h2{font-family:"AK Tiro","AK Serif",serif;font-weight:400;font-size:22px;margin:32px 0 12px;color:#f7f3ea}
.more a.card{display:block;padding:16px 18px;border:1px solid rgba(201,164,92,.25);border-radius:10px;text-decoration:none;color:#ece6d8;margin-bottom:10px}
.more a.card span{display:block;color:#c9a45c;font-size:13px}
footer{padding:26px 22px;text-align:center;color:#a59c8b;font-size:13px;border-top:1px solid rgba(201,164,92,.22)}
</style>
</head>
<body>
<header class="top"><a class="brand" href="/">${AUTHOR}<small>ARIF KHANDAKER</small></a><a class="back" href="/#writings">← সব লেখা</a></header>
<main>
<p class="kicker">${esc(w.type)}</p>
<h1>${esc(w.title)}</h1>
<p class="by">${AUTHOR}${w.date ? " · " + esc(w.date) : ""}</p>
${body(w)}
<div class="share">
<button type="button" id="copy">লিংক কপি করুন</button>
<a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank" rel="noopener">ফেসবুকে শেয়ার</a>
<a class="gold" href="/?from=books#books">লেখকের বইগুলো দেখুন</a>
</div>
</main>
${others.length ? `<section class="more"><h2>আরও পড়ুন</h2>${others.map((x) => `<a class="card" href="/lekha/${x.slug}/"><span>${esc(x.type)}</span>${esc(x.title)}</a>`).join("")}</section>` : ""}
<footer>© ${AUTHOR}। সর্বস্বত্ব সংরক্ষিত। · <a href="/">authorarifkhandaker.com</a></footer>
<script>
document.getElementById("copy").addEventListener("click",function(){var b=this,u=location.href;function ok(){b.textContent="লিংক কপি হয়েছে ✓";setTimeout(function(){b.textContent="লিংক কপি করুন"},2200)}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(ok,function(){prompt("লিংক:",u)})}else{prompt("লিংক:",u)}});
</script>
</body>
</html>
`;
  const dir = path.join(root, "lekha", w.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log("পাতা তৈরি:", `lekha/${w.slug}/`);
});

/* sitemap.xml */
const urls = [SITE + "/", ...items.map((w) => `${SITE}/lekha/${w.slug}/`)];
fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);
console.log("sitemap.xml হালনাগাদ:", urls.length, "টি ঠিকানা");
