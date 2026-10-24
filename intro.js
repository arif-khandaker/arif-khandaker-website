/* শুরুর ভাসমান পোস্টার: একটার পর একটা বই, ক্রস দিয়ে বন্ধ, "অর্ডার করুন কার্টে" দিলে বই কার্টে যায়।
   বইয়ের ক্রম বদলাতে নিচের SLUGS লাইন বদলান। প্রতিটি বইয়ের সময় (মিলিসেকেন্ড): DURATION */
(function () {
  var root = document.documentElement;
  var el = document.getElementById("ak-intro");
  if (!el || !root.classList.contains("ak-intro-on") || typeof BOOKS === "undefined") return;
  window.__akIntro = true;

  var SLUGS = ["ekhane-tabij-bikri-hoy", "akulpathar", "boro-bhai", "rojonigandha-resort", "ajat",
               "bedona-ronger-bari", "dafon", "chandramallika", "banalata-sen"];
  var DURATION = 4800;

  var books = SLUGS.map(function (s) { return bookBySlug(s); }).filter(function (b) { return b && b.cover; });
  if (!books.length) { root.classList.remove("ak-intro-on"); return; }

  var stage = document.getElementById("ak-intro-stage");
  var meta = document.getElementById("ak-intro-meta");
  var tag = document.getElementById("ak-intro-tag");
  var glow = document.getElementById("ak-intro-glow");
  var drift = document.getElementById("ak-intro-drift");
  var ticksBox = document.getElementById("ak-intro-ticks");
  var cta = document.getElementById("ak-intro-cta");
  var closeBtn = document.getElementById("ak-intro-close");
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cur = -1, timer = null, closed = false, slides = [], colors = [];

  /* লেখাটি শব্দে শব্দে */
  var words = tag.textContent.trim().split(/\s+/);
  tag.setAttribute("aria-label", tag.textContent.trim());
  tag.innerHTML = words.map(function (w, i) { return '<span class="w" style="--i:' + i + '">' + w + (i < words.length - 1 ? " " : "") + "</span>"; }).join("");

  /* স্লাইড ও টিক */
  books.forEach(function (b, i) {
    var s = document.createElement("div");
    s.className = "ak-slide";
    var p = document.createElement("div");
    p.className = "ak-poster";
    var img = new Image();
    img.alt = b.title + " — আরিফ খন্দকার";
    img.decoding = "async";
    img.onload = function () {
      if (img.naturalWidth) p.style.setProperty("--ar", img.naturalWidth / img.naturalHeight);
      try {
        var c = document.createElement("canvas"); c.width = c.height = 8;
        var x = c.getContext("2d"); x.drawImage(img, 0, 0, 8, 8);
        var d = x.getImageData(0, 0, 8, 8).data, r = 0, g = 0, bl = 0, n = 0;
        for (var k = 0; k < d.length; k += 4) { r += d[k]; g += d[k + 1]; bl += d[k + 2]; n++; }
        r = Math.round(r / n); g = Math.round(g / n); bl = Math.round(bl / n);
        var m = Math.max(r, g, bl, 1), f = Math.min(2.2, 170 / m);
        colors[i] = [Math.min(255, Math.round(r * f)), Math.min(255, Math.round(g * f)), Math.min(255, Math.round(bl * f))];
        if (cur === i) paint(i);
      } catch (e) {}
    };
    img.src = b.cover;
    p.appendChild(img); s.appendChild(p); stage.appendChild(s);
    slides.push(s);

    var t = document.createElement("button");
    t.type = "button"; t.setAttribute("aria-label", b.title);
    t.innerHTML = "<i></i>";
    t.addEventListener("click", function () { go(i); });
    ticksBox.appendChild(t);
  });
  var ticks = ticksBox.children;

  function paint(i) {
    var c = colors[i] || [201, 164, 92];
    var rgb = c.join(",");
    glow.style.background = "radial-gradient(62% 52% at 50% 46%,rgba(" + rgb + ",.42),rgba(8,7,6,0) 72%)";
    slides[i].style.setProperty("--glow", "rgba(" + rgb + ",.5)");
  }

  function show(i) {
    var b = books[i], prev = cur;
    cur = i;
    if (prev >= 0 && prev !== i) {
      var o = slides[prev];
      o.classList.remove("is-on"); o.classList.add("is-out");
      setTimeout(function () { o.classList.remove("is-out"); }, 1300);
    }
    paint(i);
    slides[i].classList.remove("is-out");
    void slides[i].offsetWidth;
    slides[i].classList.add("is-on");
    /* নাম ও দাম */
    meta.classList.add("is-fade");
    setTimeout(function () {
      var price = canBuy(b) ? " · " + taka(priceOf(b)) : "";
      meta.innerHTML = "<strong></strong><span></span>";
      meta.firstChild.textContent = b.title;
      meta.lastChild.textContent = (b.genre ? b.genre + " · " : "") + "লেখকের স্বাক্ষরসহ" + price;
      meta.classList.remove("is-fade");
    }, prev < 0 ? 0 : 450);
    /* ওপরের লেখা আবার ধীরে ধীরে আসবে-যাবে */
    tag.classList.remove("run"); void tag.offsetWidth; tag.classList.add("run");
    /* টিক */
    for (var k = 0; k < ticks.length; k++) {
      ticks[k].className = k < i ? "is-done" : "";
    }
    void ticksBox.offsetWidth;
    ticks[i].style.setProperty("--dur", DURATION + "ms");
    ticks[i].className = "is-cur";
    /* পরের ছবি আগেই লোড */
    var nx = books[(i + 1) % books.length]; if (nx) { var pre = new Image(); pre.src = nx.cover; }
  }

  function go(i) {
    if (closed) return;
    clearTimeout(timer);
    show((i + books.length) % books.length);
    timer = setTimeout(function () { go(cur + 1); }, DURATION);
  }

  function close(afterClose) {
    if (closed) return;
    closed = true;
    clearTimeout(timer);
    try { sessionStorage.setItem("ak-intro-seen", "1"); } catch (e) {}
    el.classList.add("is-leaving");
    document.removeEventListener("keydown", onKey);
    setTimeout(function () {
      root.classList.remove("ak-intro-on");
      el.hidden = true;
      el.remove();
      if (typeof afterClose === "function") afterClose();
    }, 560);
  }
  function onKey(e) { if (e.key === "Escape") close(); }

  closeBtn.addEventListener("click", function () { close(); });
  document.addEventListener("keydown", onKey);
  cta.addEventListener("click", function () {
    var b = books[cur];
    close(function () { if (b && canBuy(b)) { addToCart(b.slug); openCart(); } });
  });

  /* ব্যাকগ্রাউন্ডে ধীরে ওঠা ছোট ছোট কভার */
  function startDrift() {
    if (reduce) return;
    var small = window.innerWidth < 600;
    books.forEach(function (b, i) {
      var im = new Image();
      im.alt = ""; im.src = b.cover;
      var w = (small ? 56 : 80) + (i * 37 % 40);
      im.style.cssText = "--w:" + w + "px;--x:" + ((i * 11.7 + 4) % 88) + "%;--t:" + (24 + (i * 5) % 14) + "s;--dl:-" + (i * 3.1).toFixed(1) +
        "s;--sx:" + ((i % 2 ? 1 : -1) * (20 + i * 4)) + "px;--r0:" + (-8 + i * 2) + "deg;--r1:" + (9 - i * 2) + "deg";
      drift.appendChild(im);
    });
  }

  /* প্রথম ছবি আসার পর শুরু */
  el.hidden = false;
  var first = new Image(), started = false;
  function begin() {
    if (started) return; started = true;
    el.classList.add("is-ready");
    go(0);
    setTimeout(startDrift, 600);
    try { closeBtn.focus({ preventScroll: true }); } catch (e) {}
  }
  first.onload = first.onerror = begin;
  first.src = books[0].cover;
  setTimeout(begin, 2500);
})();
