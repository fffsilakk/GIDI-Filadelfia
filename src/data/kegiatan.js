/**
 * Jadwal mingguan gereja (satu sumber data untuk beranda & halaman Kegiatan).
 * Semua waktu dalam WIT (Waktu Indonesia Timur).
 * `hariIndex` mengikuti Date.getDay(): 0 = Minggu … 6 = Sabtu.
 */
export const HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export const jadwal = [
  {
    nama: "Ibadah Minggu",
    hariIndex: 0,
    jam: "08.00 – 10.00",
    tempat: "Gedung utama",
    deskripsi:
      "Ibadah utama setiap minggu dengan pujian, Firman Tuhan, dan persekutuan jemaat, dilengkapi pelayanan penyembahan, khotbah, dan persembahan.",
    rutin: true,
  },
  {
    nama: "Sekolah Minggu",
    hariIndex: 0,
    jam: "10.30 – 12.00",
    tempat: "Ruang anak",
    deskripsi:
      "Pembelajaran Alkitab untuk anak-anak dengan cerita, permainan, dan kegiatan yang membangun karakter Kristiani.",
    rutin: true,
  },
  {
    nama: "Ibadah Sore",
    hariIndex: 0,
    jam: "17.00 – 18.30",
    tempat: "Gedung utama",
  },
  {
    nama: "Persekutuan Doa",
    hariIndex: 1,
    jam: "19.00 – 20.30",
    tempat: "Ruang doa",
    deskripsi:
      "Waktu berdoa bersama sebagai jemaat, mengangkat kebutuhan gereja, keluarga, dan bangsa dalam doa syafaat.",
    rutin: true,
  },
  {
    nama: "Kelompok Kecil",
    hariIndex: 2,
    jam: "19.00 – 21.00",
    tempat: "Rumah jemaat",
  },
  {
    nama: "Ibadah Kaum Ibu",
    hariIndex: 3,
    jam: "10.00 – 12.00",
    tempat: "Gedung utama",
    deskripsi:
      "Persekutuan dan pembinaan rohani kaum ibu: berbagi cerita, doa bersama, dan pengajaran praktis untuk kehidupan sehari-hari.",
    rutin: true,
  },
  {
    nama: "Ibadah Doa Malam",
    hariIndex: 3,
    jam: "19.00 – 20.30",
    tempat: "Ruang doa",
    deskripsi:
      "Ibadah doa di malam hari bagi jemaat yang rindu mencari wajah Tuhan dalam suasana yang khusyuk.",
    rutin: true,
  },
  {
    nama: "Latihan Pujian & Penyembahan",
    hariIndex: 4,
    jam: "19.00 – 21.00",
    tempat: "Gedung gereja",
  },
  {
    nama: "Ibadah Pemuda",
    hariIndex: 5,
    jam: "19.00 – 21.00",
    tempat: "Gedung gereja",
    deskripsi:
      "Ibadah generasi muda dengan pujian, diskusi Alkitab, dan persekutuan yang membangun persahabatan dalam Kristus.",
    rutin: true,
  },
];

export const kegiatanRutin = jadwal.filter((j) => j.rutin);

/** Event tahunan. `tanggalISO` dipakai untuk pengurutan dan label tanggal. */
export const events = [
  {
    nama: "Doa Bersama Awal Tahun",
    tanggalISO: "2025-01-01",
    tanggal: "1 Januari 2025",
    kategori: "Ibadah doa",
    gambar: "/images/doa-tangan.jpg",
    deskripsi:
      "Mengawali tahun baru dengan penyembahan dan menyerahkan seluruh tahun ke dalam tangan Tuhan.",
  },
  {
    nama: "Penginjilan Jalanan",
    tanggalISO: "2025-02-15",
    tanggal: "15 Februari 2025",
    kategori: "Penginjilan",
    gambar: "/images/doa-jemaat.jpg",
    deskripsi: "Turun ke jalan membagikan kabar baik dan membawa terang Kristus kepada sesama.",
  },
  {
    nama: "Pelayanan Sosial",
    tanggalISO: "2025-03-05",
    tanggal: "5 Maret 2025",
    kategori: "Sosial",
    gambar: "/images/alkitab-doa.jpg",
    deskripsi: "Membantu masyarakat sekitar sebagai wujud nyata kasih Kristus.",
  },
  {
    nama: "Paskah Bersama",
    tanggalISO: "2025-04-13",
    tanggal: "13 April 2025",
    kategori: "Perayaan",
    gambar: "/images/salib-senja.jpg",
    deskripsi:
      "Ibadah dan perayaan Paskah memperingati kebangkitan Yesus Kristus dengan sukacita dan penyembahan.",
  },
  {
    nama: "Seminar Keluarga",
    tanggalISO: "2025-05-10",
    tanggal: "10 Mei 2025",
    kategori: "Seminar",
    gambar: "/images/seminar.jpg",
    deskripsi:
      "Pembinaan keluarga Kristen tentang keharmonisan rumah tangga yang dibangun di atas Firman Tuhan.",
  },
  {
    nama: "Retreat Pemuda",
    tanggalISO: "2025-06-20",
    tanggal: "20 – 22 Juni 2025",
    kategori: "Pemuda",
    gambar: "/images/pemuda.jpg",
    deskripsi:
      "Retreat pemuda untuk memperdalam iman, membangun kebersamaan, dan penyegaran rohani di alam terbuka.",
  },
  {
    nama: "Festival Anak Sekolah Minggu",
    tanggalISO: "2025-07-08",
    tanggal: "8 Juli 2025",
    kategori: "Anak",
    gambar: "/images/sekolah-minggu.jpg",
    deskripsi:
      "Perayaan penuh sukacita bagi anak-anak Sekolah Minggu dengan permainan, pujian, dan kegiatan yang membangun iman.",
  },
  {
    nama: "Kebaktian Kebangunan Rohani (KKR)",
    tanggalISO: "2025-08-30",
    tanggal: "30 Agustus 2025",
    kategori: "KKR",
    gambar: "/images/kkr.jpg",
    deskripsi:
      "Kebaktian khusus untuk membangkitkan semangat rohani jemaat dan mengalami pemulihan oleh kuasa Roh Kudus.",
  },
  {
    nama: "Kebaktian Padang",
    tanggalISO: "2025-09-01",
    tanggal: "1 September 2025",
    kategori: "Ibadah",
    gambar: "/images/gedung-filadelfia.jpg",
    deskripsi: "Ibadah di alam terbuka, menikmati keindahan ciptaan Tuhan sambil menyembah bersama.",
  },
  {
    nama: "Perayaan Natal",
    tanggalISO: "2025-12-25",
    tanggal: "25 Desember 2025",
    kategori: "Perayaan",
    gambar: "/images/ibadah-umum.jpg",
    deskripsi:
      "Merayakan kelahiran Yesus Kristus bersama jemaat dan keluarga dengan pujian, penyalaan lilin, dan drama Natal.",
  },
];
