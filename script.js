document.addEventListener("DOMContentLoaded", function () {

  // ACCORDION
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.classList.toggle("active");
    });
  });

  // WHATSAPP
  const btn = document.getElementById("btnKonsultasi");

  if (btn) {
    btn.addEventListener("click", function () {
      const phone = "6281225047599";
      const message = encodeURIComponent(
        "Halo Forisa, saya ingin menjadwalkan konsultasi awal."
      );

      window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
      );
    });
  }

});
