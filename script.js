document.getElementById("btnKonsultasi").addEventListener("click", function () {
  const phone = "6281225057599"; // ganti nomor WA lo
  const message = encodeURIComponent(
    "Halo Forisa, saya ingin menjadwalkan konsultasi awal."
  );
  window.open(
    `https://wa.me/${phone}?text=${message}`,
    "_blank"
  );
});
