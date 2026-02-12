document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".page-section");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = this.dataset.target;

      sections.forEach(sec => sec.classList.remove("active"));

      document.getElementById(target).classList.add("active");
    });
  });

  const btn = document.getElementById("btnKonsultasi");

  if (btn) {
    btn.addEventListener("click", function () {
      const phone = "6281225047599";
      const message = encodeURIComponent(
        "Halo Forisa, saya ingin menjadwalkan konsultasi awal."
      );
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
  }

});
