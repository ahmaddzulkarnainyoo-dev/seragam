// ============================================================
// Konfigurasi Firebase & Inisialisasi Firestore
// Digunakan oleh: pemesanan.html, dashboard.html, status.html
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCkSRGtLMRRwCSLxn-K8eLaUsX7c-Rzh-Q",
  authDomain: "seragam-app-21dd8.firebaseapp.com",
  projectId: "seragam-app-21dd8",
  storageBucket: "seragam-app-21dd8.firebasestorage.app",
  messagingSenderId: "899315081045",
  appId: "1:899315081045:web:b228d6bf996795ce3c19dc",
  measurementId: "G-9BQZJW682Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);