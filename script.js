document.getElementById("waForm").addEventListener("submit",function(e){
e.preventDefault();
const pesan = "Halo Forisa Impact, saya ingin konsultasi.";
window.open("https://wa.me/6281225047599?text="+encodeURIComponent(pesan));
});
