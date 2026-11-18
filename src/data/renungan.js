/** Renungan, khotbah, dan artikel. */

export const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

/** Kunci = indeks bulan (0 = Januari). Tambahkan bulan lain dengan pola yang sama. */
export const renunganHarian = {
  0: [
    { tanggal: 1, judul: "Awali tahun dengan pengharapan", ayat: "Yeremia 29:11", isi: "Tuhan memberikan masa depan penuh harapan. Jangan takut melangkah di tahun yang baru." },
    { tanggal: 2, judul: "Berjalan bersama Tuhan", ayat: "Mazmur 23:1", isi: "Tuhan adalah gembala yang setia, yang menyertai setiap langkah hidup kita." },
  ],
  1: [
    { tanggal: 1, judul: "Kesabaran dalam proses", ayat: "Yakobus 1:4", isi: "Proses membentuk karakter. Sabarlah dalam setiap ujian hidup." },
  ],
  2: [
    { tanggal: 1, judul: "Tetap setia", ayat: "Wahyu 2:10", isi: "Hendaklah engkau setia sampai mati, dan Aku akan mengaruniakan kepadamu mahkota kehidupan." },
    { tanggal: 2, judul: "Doa yang tidak putus", ayat: "1 Tesalonika 5:17", isi: "Berdoalah tanpa henti dalam segala keadaan." },
    { tanggal: 3, judul: "Kasih yang menyembuhkan", ayat: "1 Petrus 4:8", isi: "Kasih menutupi banyak sekali dosa. Mari belajar mengampuni dengan kasih." },
  ],
  3: [
    { tanggal: 1, judul: "Kebangkitan yang mengubah", ayat: "Roma 6:4", isi: "Sama seperti Kristus dibangkitkan, kita pun hidup dalam hidup yang baru." },
    { tanggal: 2, judul: "Hidup dalam terang", ayat: "Efesus 5:8", isi: "Hiduplah sebagai anak-anak terang, karena terang hanya berbuahkan kebaikan, keadilan, dan kebenaran." },
    { tanggal: 3, judul: "Pengharapan di tengah kesulitan", ayat: "Roma 5:3-4", isi: "Kesengsaraan menimbulkan ketekunan, ketekunan menimbulkan tahan uji, dan tahan uji menimbulkan pengharapan." },
    { tanggal: 4, judul: "Iman yang bertumbuh", ayat: "2 Petrus 3:18", isi: "Bertumbuhlah dalam kasih karunia dan dalam pengenalan akan Tuhan Yesus Kristus." },
    { tanggal: 5, judul: "Diberkati untuk menjadi berkat", ayat: "Kejadian 12:2", isi: "Aku akan memberkati engkau, dan engkau akan menjadi berkat." },
  ],
};

/** Ayat pilihan yang tampil di beranda. */
export const ayatPilihan = [
  {
    judul: "Kasih yang tidak pernah gagal",
    kutipan: "Kasih itu sabar; kasih itu murah hati; ia tidak cemburu. Ia tidak memegahkan diri dan tidak sombong.",
    ayat: "1 Korintus 13:4",
    gambar: "/images/salib-terang.jpg",
  },
  {
    judul: "Mengandalkan Tuhan di tengah badai",
    kutipan: "Tenanglah! Aku ini, jangan takut!",
    ayat: "Markus 6:50",
    gambar: "/images/salib-langit.jpg",
  },
  {
    judul: "Bersyukur dalam segala hal",
    kutipan: "Mengucap syukurlah dalam segala hal, sebab itulah yang dikehendaki Allah di dalam Kristus Yesus bagi kamu.",
    ayat: "1 Tesalonika 5:18",
    gambar: "/images/salib-atap.jpg",
  },
];

/**
 * Khotbah mingguan. Isi `video` dengan tautan YouTube asli;
 * tombol "Tonton" hanya muncul kalau tautannya sudah ada.
 */
export const khotbah = [
  {
    judul: "Kekuatan iman dalam kehidupan sehari-hari",
    pengkhotbah: "Gloria",
    tanggal: "Minggu, 31 Maret 2025",
    ringkasan: "Iman yang teguh menolong kita menghadapi tantangan hidup dan memperkuat hubungan dengan Tuhan.",
    gambar: "/images/salib-atap.jpg",
    durasi: "45 menit",
    video: "",
  },
  {
    judul: "Kasih Tuhan yang tak berkesudahan",
    pengkhotbah: "Gloria",
    tanggal: "Minggu, 24 Maret 2025",
    ringkasan: "Dalam segala keadaan kasih Tuhan selalu menyertai. Khotbah ini menguatkan hati dan iman kita.",
    gambar: "/images/salib-pasir.jpg",
    durasi: "45 menit",
    video: "",
  },
  {
    judul: "Hidup dalam terang Firman Tuhan",
    pengkhotbah: "Gloria",
    tanggal: "Minggu, 17 Maret 2025",
    ringkasan: "Firman Tuhan adalah pelita bagi kaki kita. Mari belajar hidup di dalam terang-Nya.",
    gambar: "/images/salib-senja.jpg",
    durasi: "45 menit",
    video: "",
  },
];

export const artikel = [
  {
    judul: "Kekuatan doa dalam kehidupan sehari-hari",
    tanggal: "1 April 2025",
    kategori: "Doa",
    ringkasan: "Doa bukan hanya permintaan kepada Tuhan, tetapi cara membangun hubungan yang lebih dalam dengan-Nya.",
    gambar: "/images/renungan-doa.jpg",
  },
  {
    judul: "Menghadapi tantangan dengan iman",
    tanggal: "28 Maret 2025",
    kategori: "Penguatan",
    ringkasan: "Setiap orang menghadapi tantangan, tetapi iman kepada Tuhan memberikan kekuatan untuk tetap berdiri.",
    gambar: "/images/salib-langit.jpg",
  },
  {
    judul: "Kasih yang mengubahkan",
    tanggal: "25 Maret 2025",
    kategori: "Kasih",
    ringkasan: "Kasih Tuhan tidak terbatas dan mampu mengubahkan hati yang hancur menjadi penuh harapan.",
    gambar: "/images/salib-terang.jpg",
  },
  {
    judul: "Hidup yang dipimpin Roh",
    tanggal: "20 Maret 2025",
    kategori: "Roh Kudus",
    ringkasan: "Hidup yang dipimpin Roh Kudus adalah hidup yang penuh damai, kuasa, dan tuntunan setiap hari.",
    gambar: "/images/doa-tangan.jpg",
  },
];

/** Kutipan singkat dari hamba Tuhan. Ganti nama & isi sesuai pelayan di jemaat. */
export const kataHamba = [
  {
    judul: "Kekuatan doa dalam setiap langkah",
    isi: "Doa bukan hanya kata-kata, tetapi napas rohani yang menghubungkan kita dengan Sang Pencipta.",
    penulis: "Pdt. Samuel Yohanes",
    tanggal: "5 April 2025",
  },
  {
    judul: "Mengampuni seperti Kristus",
    isi: "Pengampunan adalah dasar kasih. Kristus telah mengampuni kita; mari kita melakukan hal yang sama.",
    penulis: "Pdt. Lydia Marpaung",
    tanggal: "6 April 2025",
  },
  {
    judul: "Iman di tengah badai",
    isi: "Tuhan tidak pernah meninggalkan kita dalam badai. Justru di sana iman kita diuji dan dikuatkan.",
    penulis: "Pdt. Jonathan Sihombing",
    tanggal: "8 April 2025",
  },
  {
    judul: "Hidup yang berbuah",
    isi: "Hidup orang percaya seharusnya menghasilkan buah yang nyata. Buah Roh membawa terang bagi dunia.",
    penulis: "Pdt. Debora Rantung",
    tanggal: "9 April 2025",
  },
  {
    judul: "Kasih yang mengubahkan",
    isi: "Kasih Kristus tidak hanya mengampuni, tetapi mengubah hati yang keras menjadi lembut dan penuh belas kasihan.",
    penulis: "Pdt. Daniel Simanjuntak",
    tanggal: "10 April 2025",
  },
];
