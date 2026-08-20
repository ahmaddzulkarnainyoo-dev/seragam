document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");

    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const nama = document.getElementById("nama").value;
            const produk = document.getElementById("produk").value;
            const jumlah = document.getElementById("jumlah").value;
            const randomCode = "KNF-2026-" + Math.floor(100 + Math.random() * 900);

            alert(`Terima kasih, ${nama}! Pesanan ${produk} (${jumlah} pcs) berhasil dikirim.\n\nKode Pesanan Anda adalah: ${randomCode}\nSimpan kode ini untuk mengecek status pesanan.`);
            
            // Redirect ke halaman cek status dengan membawa contoh simulasi
            window.location.href = "status.html";
        });
    }
});

function cekStatus() {
    const kode = document.getElementById("kodeResi").value.trim();
    const hasilDiv = document.getElementById("hasilStatus");
    
    if (kode === "") {
        alert("Silakan masukkan kode pesanan terlebih dahulu!");
        return;
    }

    // Simulasi data status berdasarkan input
    hasilDiv.style.display = "block";
    document.getElementById("resProduk").innerText = "Kemeja PDL Lapangan";
    document.getElementById("resJumlah").innerText = "24 Pcs";
    document.getElementById("resStatus").innerText = "Sedang Menunggu / Proses Penjahitan";
}