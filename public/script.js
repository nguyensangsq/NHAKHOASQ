import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("form-khach-hang").addEventListener("submit", async function(e) {
  e.preventDefault();

  const ten = document.getElementById("ten").value.trim();
  const ngaysinh = document.getElementById("ngaysinh").value;
  const sdt = document.getElementById("sdt").value.trim();
  const sdt2 = document.getElementById("sdt2").value.trim();
  const diachi = document.getElementById("diachi").value.trim();
  const quocgia = document.getElementById("quocgia").value.trim();
  const ngaykham = document.getElementById("ngaykham").value;
  const nguon = document.getElementById("nguon").value;

  if (!ten || !sdt) {
    alert("Vui lòng nhập đầy đủ Họ tên và Số điện thoại.");
    return;
  }

  try {
    await addDoc(collection(db, "khachhang"), {
      ten,
      ngaysinh: ngaysinh || null,
      sdt,
      sdt2: sdt2 || null,
      diachi: diachi || null,
      quocgia: quocgia || null,
      ngaykham: ngaykham || null,
      nguon: nguon || null,
      ngayTao: new Date().toISOString()
    });

    alert("Đã lưu khách hàng thành công!");
    e.target.reset();
  } catch (error) {
    console.error("Lỗi khi lưu:", error);
    alert("Có lỗi xảy ra. Vui lòng thử lại.");
  }
});
