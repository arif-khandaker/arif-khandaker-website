/* রিভিউ ব্যবস্থার জন্য Firebase কনফিগ।
   Firebase-এ প্রজেক্ট খোলার পর "Web app" যোগ করলে যে firebaseConfig পাবেন, null-এর জায়গায় সেটা বসান।
   এই মানগুলো গোপন নয় (সব ওয়েবসাইটেই দেখা যায়); নিরাপত্তা আসে Firestore Rules থেকে।
   ঠিক এই চেহারার হবে:
   window.AK_FIREBASE = { apiKey: "...", authDomain: "...", projectId: "...", appId: "..." };  */
window.AK_FIREBASE = null;
