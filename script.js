document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnKonsultasi");

  if (!btn) return;

  btn.addEventListener("click", function () {
    const phone = "6281225047599"; // nomor WA lo
    const message = encodeURIComponent(
      "Halo Forisa, saya ingin menjadwalkan konsultasi awal."
    );

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    );
  });
});
