/* বাং / EN ভাষা বদল। মূল বাংলা লেখা DOM থেকেই সংরক্ষিত থাকে; শুধু নিচের তালিকার অংশ ইংরেজি হয়। */
(function () {
  var EN = [
    ["#site-nav a[href='#intro']", "About"], ["#site-nav a[href='#biography']", "Biography"], ["#site-nav a[href='#books']", "Books"],
    ["#site-nav a[data-filter='গল্প']", "Stories"], ["#site-nav a[data-filter='কবিতা']", "Poems"], ["#site-nav a[href='#gallery']", "Gallery"], ["#site-nav a[href='#contact']", "Contact"],
    [".hdr-cta", "Buy books"],
    ["[data-i=eyebrow]", "Poet &amp; Novelist"],
    ["[data-i=tagline]", "From the soft light of poetry to the dark alleys of thrillers, from the long road of the novel to the unknown skies of science fiction — stories speak for people."],
    ["[data-i=btn_books]", "Published books"], ["[data-i=btn_contact]", "Get in touch"],
    ["[data-i=badge_new]", "New"], ["[data-i=card_sub]", "Thriller novel · BDT 1,400"], ["[data-i=card_order]", "Order"],
    [".stats .stat:nth-child(1) .stat-label", "Published books"],
    [".stats .stat:nth-child(2) .stat-label", "Books at one book fair<br><small>2025</small>"],
    [".stats .stat:nth-child(4) .stat-label", "First piece published"],
    ["#intro .section-eyebrow", "01 — About the author"], ["#intro .section-head h2", "About the writer"],
    ["#intro .facts div:nth-child(1) dt", "Profile"], ["#intro .facts div:nth-child(1) dd", "Poet &amp; novelist"],
    ["#intro .facts div:nth-child(2) dt", "Born"], ["#intro .facts div:nth-child(2) dd", "23 August, Narsingdi"],
    ["#intro .facts div:nth-child(3) dt", "Writes"], ["#intro .facts div:nth-child(3) dd", "Poetry, short stories, novels, thrillers, science fiction"],
    ["#intro .facts div:nth-child(4) dt", "Books"], ["#intro .facts div:nth-child(4) dd", "61"],
    ["#biography .section-eyebrow", "02 — Biography"], ["#biography .section-head h2", "Life &amp; literary journey"],
    ["#books .section-eyebrow", "03 — Books"], ["#books .section-head h2", "Boi Junction — The books"],
    ["#writings .section-eyebrow", "04 — Selected writings"], ["#writings .section-head h2", "Read"],
    ["#gallery .section-eyebrow", "05 — Gallery"], ["#gallery .section-head h2", "Photographs"],
    ["#contact .section-eyebrow", "06 — Contact"], ["#contact .section-head h2", "Let’s talk"],
    [".footer-quote", "“People don’t tell stories; stories tell people’s tales.”"],
    [".footer-bottom p:first-child", "© 2026 Arif Khandaker. All rights reserved."],
    [".to-top", "Back to top ↑"]
  ];
  var saved = [];
  function q(sel) { try { return document.querySelector(sel); } catch (e) { return null; } }
  function apply(lang) {
    if (!saved.length) EN.forEach(function (p) { var el = q(p[0]); if (el) saved.push([el, el.innerHTML, p[1]]); });
    saved.forEach(function (s) { s[0].innerHTML = lang === "en" ? s[2] : s[1]; });
    document.documentElement.lang = lang === "en" ? "en" : "bn";
    document.querySelectorAll(".lang button").forEach(function (b) { b.classList.toggle("on", b.dataset.lang === lang); });
    try { localStorage.setItem("ak-lang", lang); } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".lang button"); if (b) apply(b.dataset.lang);
  });
  var want = "bn";
  try { want = new URLSearchParams(location.search).get("lang") || localStorage.getItem("ak-lang") || "bn"; } catch (e) {}
  if (want === "en") apply("en");
})();
