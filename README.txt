BSO PKM CENTER - FILE ANIMASI

Isi folder:
- style.css: stylesheet lengkap dengan animasi, berdasarkan kode yang dibagikan di chat.
- script.js: animasi muncul ketika elemen masuk ke layar saat scroll.

Cara memasang:
1. Backup style.css lama.
2. Ganti style.css dengan file style.css dari paket ini.
3. Simpan script.js di folder yang sama dengan index.html.
4. Tambahkan baris berikut tepat sebelum </body> di index.html:
   <script src="script.js"></script>
5. Pastikan index.html memanggil style.css:
   <link rel="stylesheet" href="style.css">
6. Refresh browser. Jika perlu, tekan Ctrl + F5.

Catatan:
- Selector yang sudah ada di HTML diasumsikan sesuai dengan stylesheet yang diberikan.
- Animasi struktur dan program menggunakan class .person-card dan .program-card.
