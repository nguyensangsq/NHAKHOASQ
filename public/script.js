import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase.js";

const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-khach-hang");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const ten = document.getElementById("ten").value.trim();
    const sdt = document.getElementById("sdt").value.trim();
    const ghichu = document.getElementById("ghichu")?.value.trim() || "";

    if (!ten || !sdt) {
      alert("Vui lòng nhập đầy đủ họ tên và số điện thoại.");
      return;
    }

    try {
      await addDoc(collection(db, "khachhang"), {
        ten,
        sdt,
        ghichu,
        ngayTao: new Date()
      });
      alert("Đã thêm khách hàng thành công!");
      form.reset();
    } catch (error) {
      console.error("Lỗi khi thêm khách hàng:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  });
});
