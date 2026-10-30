/* অর্ডার সংরক্ষণ (Firestore)। ব্যর্থ হলেও অর্ডার ইমেইল/WhatsApp-এ ঠিকই যায়: এটি চুপচাপ অতিরিক্ত কাজ। */
(function () {
  var REF_RE = /^AK-[0-9]{6}-[0-9A-Z]{4}$/;
  var cache = null;
  function backend() {
    if (cache) return cache;
    cache = (async function () {
      var cfg = window.AK_FIREBASE; if (!cfg) return null;
      var B = "https://www.gstatic.com/firebasejs/10.12.2/";
      var m = await Promise.all([import(B + "firebase-app.js"), import(B + "firebase-firestore.js")]);
      var a = m[0].getApps().length ? m[0].getApp() : m[0].initializeApp(cfg);
      return { fs: m[1], db: m[1].getFirestore(a) };
    })().catch(function () { cache = null; return null; });
    return cache;
  }
  window.akSaveOrder = async function (snap, method) {
    try {
      if (!snap || !REF_RE.test(snap.ref || "")) return;
      var b = await backend(); if (!b) return;
      var fs = b.fs, db = b.db;
      var items = (snap.items || []).slice(0, 30).map(function (x) {
        return { slug: String(x.slug || "").slice(0, 80), title: String(x.title || "").slice(0, 120), qty: Math.max(1, Math.min(99, x.qty | 0 || 1)), price: Math.max(0, Math.round(x.price || 0)) };
      });
      if (!items.length) return;
      await fs.setDoc(fs.doc(db, "orders", snap.ref), {
        ref: snap.ref, name: String(snap.name || "").slice(0, 80), phone: String(snap.phone || "").slice(0, 20),
        address: String(snap.address || "").slice(0, 400), area: String(snap.area || "").slice(0, 30),
        items: items, total: Math.max(0, Math.round(snap.total || 0)), method: method === "whatsapp" ? "whatsapp" : "site",
        status: "new", createdAt: fs.serverTimestamp()
      });
      await fs.setDoc(fs.doc(db, "orderStatus", snap.ref), { status: "new", updatedAt: fs.serverTimestamp() });
    } catch (e) { /* চুপচাপ */ }
  };
})();
