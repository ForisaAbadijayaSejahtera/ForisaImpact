function showSection(id) {
  const sections = document.querySelectorAll(".page-section");

  sections.forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (!target) {
    console.error("Section tidak ditemukan:", id);
    return;
  }

  target.classList.add("active");
}

// default page
document.addEventListener("DOMContentLoaded", function () {
  showSection("about");
});
