// Kết nối Firebase Web SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Cấu hình Firebase cho web app của bạn
const firebaseConfig = {
  apiKey: "AIzaSyD4kBnKUES4hKcXDMC9hw3w22TlC6z-umk",
  authDomain: "sq-gibhup.firebaseapp.com",
  projectId: "sq-gibhup",
  storageBucket: "sq-gibhup.appspot.com",
  messagingSenderId: "5000802843931",
  appId: "1:5000802843931:web:738f3d48091961ab4bf7be"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore
const db = getFirestore(app);

// Xuất `db` để các file khác có thể dùng
export { db };
