document.getElementById("form-khach-hang").addEventListener("submit", async function(e) {
  e.preventDefault();
  
  const ten = document.getElementById("ten").value.trim();
  const sdt = document.getElementById("sdt").value.trim();
  const ghichu = document.getElementById("ghichu").value.trim();

  if (!ten || !sdt) {
    alert("Vui lòng nhập đầy đủ họ tên và số điện thoại.");
    return;
  }

  try {
    await db.collection("khachhang").add({
      ten: ten,
      sdt: sdt,
      ghichu: ghichu,
      ngayTao: new Date().toISOString()
    });
    alert("Đã lưu khách hàng thành công!");
    document.getElementById("form-khach-hang").reset();
  } catch (error) {
    console.error("Lỗi khi lưu:", error);
    alert("Có lỗi xảy ra. Vui lòng thử lại.");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formThemKhach");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const ten = document.getElementById("ten").value;
    const sdt = document.getElementById("sdt").value;

    db.collection("khachhang").add({
      ten: ten,
      sdt: sdt,
      ngaytao: new Date()
    }).then(() => {
      alert("Thêm khách hàng thành công!");
      form.reset();
    }).catch((error) => {
      alert("Lỗi khi thêm: " + error.message);
    });
  });
});

