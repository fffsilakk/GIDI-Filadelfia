# GIDI Filadelfia

Situs web Gereja Injili di Indonesia (GIDI) Jemaat Filadelfia, Sere, Sentani, Kabupaten Jayapura.
Dibangun dengan Vue 3, Vite, Vue Router, dan Tailwind CSS v4.

## Menjalankan

```bash
npm install
npm run dev      # mode pengembangan, http://localhost:5173
npm run build    # hasil produksi di folder dist/
npm run preview  # mencoba hasil build
```

## Struktur folder

```
src/
  data/            ← SEMUA isi situs ada di sini (ubah teks/jadwal tanpa menyentuh tampilan)
    site.js        nama gereja, alamat, email, telepon, media sosial, menu navigasi
    gereja.js      sejarah, visi-misi, nilai, pengakuan iman, pengurus, statistik, galeri
    kegiatan.js    jadwal mingguan, kegiatan rutin, event tahunan
    renungan.js    renungan harian, ayat pilihan, khotbah, artikel, kata hamba Tuhan
  components/
    layout/        header, footer, kepala halaman, tombol kembali ke atas
    ui/            komponen kecil yang dipakai ulang (judul bagian, modal, monogram, motif gelombang)
    home/ tentang/ kegiatan/ renungan/ kontak/   bagian-bagian tiap halaman
  composables/     logika bersama (tema gelap, hitung angka, ibadah berikutnya, kunci scroll)
  directives/      v-reveal: animasi muncul saat digulir
  views/           halaman (Beranda, Tentang, Sejarah, Pengurus, Kegiatan, Renungan, Kontak, 404)
  router/          daftar alamat halaman
  assets/main.css  warna, huruf, tombol, dan animasi global
public/
  images/          foto (sudah dikompres)
  video/hero.mp4   video latar beranda
  logo/gidi.png
```

## Mengubah isi

- **Jadwal ibadah**: `src/data/kegiatan.js`, array `jadwal`. Item dengan `rutin: true` juga tampil
  di bagian "Kegiatan rutin" dan di beranda. Kotak "Ibadah berikutnya" di beranda dihitung otomatis
  dari jadwal ini dengan zona waktu WIT.
- **Renungan harian**: `src/data/renungan.js`, objek `renunganHarian`. Kuncinya nomor bulan
  (0 = Januari … 11 = Desember).
- **Video khotbah**: isi kolom `video` dengan tautan YouTube; tombol "Tonton" muncul otomatis.
- **Pengurus**: `src/data/gereja.js`, array `pengurus`. Nama kosong tampil sebagai "Nama menyusul".
- **Telepon/WhatsApp**: `src/data/site.js`.

## Warna & huruf

Warna diambil dari logo GIDI dan Danau Sentani (lihat `src/assets/main.css`):
biru danau `#14305A`, biru langit `#8CC4E6`, kuning GIDI `#F2C230`, merah salib `#C62828`.
Huruf judul Bricolage Grotesque, huruf teks Plus Jakarta Sans (dipasang lokal lewat Fontsource).

## Kontak

Situs ini statis (tanpa server), jadi halaman Kontak memakai tautan langsung ke email, WhatsApp,
telepon, dan media sosial. Semua alamatnya diatur di `src/data/site.js`.

## Deploy

Karena memakai `createWebHistory`, server perlu mengarahkan semua alamat ke `index.html`.
File `public/_redirects` untuk Cloudflare Pages / Netlify sudah disertakan:

```
/*  /index.html  200
```
