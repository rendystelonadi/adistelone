document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nama = document.getElementById('nama').value;
    
    if (nama.trim() === '') {
        alert('Nama tidak boleh kosong');
    } else {
        alert('Terima kasih Anda Mungkin Adalah Pemilik Produk, ' + nama + '! Form telah disubmit.');
        // Anda bisa tambahkan aksi lainnya setelah validasi berhasil di sini
    }
});