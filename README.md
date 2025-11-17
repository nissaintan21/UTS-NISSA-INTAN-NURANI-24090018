# NISSA INTAN NURANI (24090018)
## Link
- **GitHub Repository:** [Klik di sini](https://github.com/nissaintan21/UTS-NISSA-INTAN-NURANI-24090018)  
- **GitHub Pages:** [Klik di sini](https://nissaintan21.github.io/UTS-NISSA-INTAN-NURANI-24090018/)

## Fungsi Tiap Halaman
### 1. Halaman Login (`login.html`)
**Fungsi:**  
Tempat pengguna memasukkan **email** dan **password** untuk masuk ke web.
**Validasi:**  
- Email dan password **tidak boleh kosong**.  
- Password **hanya `24090018`** yang diterima; password lain otomatis ditolak.  
- Jika valid, menyimpan email di **sessionStorage** dan mengarahkan ke **dashboard.html**.


### 2. Halaman Dashboard (`dashboard.html`)
**Fungsi:**  
Menampilkan ringkasan data:  
- **Total produk** (`totalProducts`)  
- **Total penjualan** (`totalSales`)  
- **Total pendapatan** (`totalRevenue`)  
Terdapat tombol **“View Products”** untuk menuju halaman **products.html**.

### 3. Halaman Products (`products.html`)
**Fungsi:**  
Menampilkan **tabel daftar produk** beserta **harga** dan **stok**.
**Fitur:**  
- **Edit produk:** klik icon edit → muncul alert nama produk (saat ini belum update data).  
- **Hapus produk:** klik icon delete → hapus produk dari array dan render ulang tabel.
