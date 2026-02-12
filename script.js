document.getElementById("waForm").addEventListener("submit",function(e){
e.preventDefault();
const pesan = "Halo Forisa Impact, saya ingin konsultasi.";
window.open("https://wa.me/62XXXXXXXXXX?text="+encodeURIComponent(pesan));
});