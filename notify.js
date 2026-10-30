/* অ্যাডমিনের জন্য: নতুন অর্ডার ও যাচাইয়ের অপেক্ষায় থাকা রিভিউ হলে সাইটে বার্তা।
   সাধারণ দর্শকের ফোনে কিছুই লোড হয় না: শুধু যে ব্রাউজারে /reviews-admin/ দিয়ে একবার ঢোকা হয়েছে, সেখানেই চলে। */
(function () {
  var on = false;
  try { on = localStorage.getItem("ak_admin") === "1"; } catch (e) {}
  if (!on || !window.AK_FIREBASE) return;
  var BN = "০১২৩৪৫৬৭৮৯", bn = function (s) { return String(s).replace(/\d/g, function (d) { return BN[d]; }); };
  var ORDERS_ADMIN = "https://wwwboijunction.com/admin/";
  (async function () {
    try {
      var B = "https://www.gstatic.com/firebasejs/10.12.2/";
      var m = await Promise.all([import(B + "firebase-app.js"), import(B + "firebase-auth.js"), import(B + "firebase-firestore.js")]);
      var app = m[0].initializeApp(window.AK_FIREBASE), au = m[1].getAuth(app), db = m[2].getFirestore(app), fs = m[2];
      var bar = null, subs = [], N = { orders: 0, reviews: 0 }, W = { orders: "", reviews: "" }, last = -1;
      function render() {
        if (!bar) {
          bar = document.createElement("div");
          bar.className = "ak-alert"; bar.setAttribute("role", "status");
          document.body.appendChild(bar);
        }
        var total = N.orders + N.reviews;
        bar.hidden = total === 0;
        bar.textContent = "";
        if (!total) { document.title = document.title.replace(/^\([^)]*\)\s*/, ""); return; }
        function line(n, text, href, who) {
          if (!n) return;
          var a = document.createElement("a");
          a.href = href;
          a.textContent = "🔔 " + bn(n) + "টি " + text + (who ? " · সর্বশেষ: " + who : "") + " — দেখুন →";
          bar.appendChild(a);
        }
        line(N.orders, "নতুন অর্ডার এসেছে", ORDERS_ADMIN, W.orders);
        line(N.reviews, "নতুন রিভিউ যাচাইয়ের অপেক্ষায়", "/reviews-admin/", W.reviews);
        if (last >= 0 && total > last) { try { navigator.vibrate && navigator.vibrate([200, 100, 200]); } catch (e) {} }
        last = total;
        document.title = "(" + bn(total) + ") " + document.title.replace(/^\([^)]*\)\s*/, "");
      }
      function watch(key, col, status) {
        return fs.onSnapshot(
          fs.query(fs.collection(db, col), fs.where("status", "==", status), fs.limit(100)),
          function (snap) {
            var newest = null, t = -1;
            snap.docs.forEach(function (d) { var x = d.data(), ms = x.createdAt && x.createdAt.toMillis ? x.createdAt.toMillis() : 0; if (ms >= t) { t = ms; newest = x; } });
            N[key] = snap.size; W[key] = newest && newest.name ? String(newest.name).slice(0, 24) : "";
            render();
          },
          function () {}
        );
      }
      m[1].onAuthStateChanged(au, async function (u) {
        subs.forEach(function (f) { f(); }); subs = [];
        if (!u) return;
        var ok = false;
        try { ok = (await fs.getDoc(fs.doc(db, "admins", u.uid))).exists(); } catch (e) {}
        if (!ok) return;
        subs.push(watch("orders", "orders", "new"));
        subs.push(watch("reviews", "reviews", "pending"));
      });
    } catch (e) {}
  })();
})();
