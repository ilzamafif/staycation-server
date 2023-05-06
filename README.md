Berikut adalah dokumentasi markdown untuk repository staycation-server:

# Staycation Server

Staycation Server adalah proyek sisi server untuk aplikasi web yang menyediakan layanan terkait sewa liburan jangka pendek. Proyek ini ditulis menggunakan Node.js dan menggunakan kerangka kerja Express.

## Persyaratan

Untuk menjalankan proyek ini, Anda membutuhkan:

- Node.js (versi 10 ke atas)
- MySQL atau MariaDB

## Instalasi

1. Clone repository ini:

   ```
   git clone https://github.com/ilzamafif/staycation-server.git
   ```

2. Masuk ke direktori repository dan install dependensi:

   ```
   cd staycation-server
   npm install
   ```

3. Buat file `.env` berdasarkan contoh `.env.example` dan atur konfigurasi database Anda.

4. Jalankan migrasi database:

   ```
   npx sequelize-cli db:migrate
   ```

5. Jalankan server:

   ```
   npm start
   ```

6. Server akan berjalan di http://localhost:5000

## API Endpoint

Berikut adalah daftar endpoint API yang tersedia di proyek ini:

| Endpoint          | HTTP Method | Deskripsi                                |
| ----------------- | ----------- | ---------------------------------------- |
| `/api/v1/items`   | GET         | Menampilkan daftar item                   |
| `/api/v1/items`   | POST        | Menambahkan item baru                      |
| `/api/v1/items/:id` | GET         | Menampilkan detail item berdasarkan ID    |
| `/api/v1/items/:id` | PUT         | Memperbarui item berdasarkan ID            |
| `/api/v1/items/:id` | DELETE      | Menghapus item berdasarkan ID              |
| `/api/v1/orders`  | GET         | Menampilkan daftar order                   |
| `/api/v1/orders`  | POST        | Menambahkan order baru                      |
| `/api/v1/orders/:id` | GET         | Menampilkan detail order berdasarkan ID    |
| `/api/v1/orders/:id` | PUT         | Memperbarui order berdasarkan ID            |
| `/api/v1/orders/:id` | DELETE      | Menghapus order berdasarkan ID              |

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti panduan berikut:

1. Fork repository ini.

2. Buat branch baru dengan fitur atau perbaikan yang ingin Anda tambahkan:

   ```
   git checkout -b fitur-baru
   ```

3. Lakukan perubahan pada kode dan buat commit:

   ```
   git add .
   git commit -m "pesan commit"
   ```

4. Push branch Anda ke repository Anda:

   ```
   git push origin fitur-baru
   ```

5. Buat pull request dari branch Anda ke branch `master` pada repository utama.

6. Kami akan meninjau permintaan pull Anda secepat mungkin.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Silakan lihat [LICENSE](LICENSE) untuk detail lebih lanjut.
