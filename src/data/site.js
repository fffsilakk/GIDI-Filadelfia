/**
 * Informasi umum gereja. Ubah di sini, semua halaman ikut berubah.
 * Nomor telepon & WhatsApp masih contoh — ganti dengan nomor resmi.
 */
export const site = {
  name: "GIDI Filadelfia",
  fullName: "Gereja Injili di Indonesia (GIDI) Jemaat Filadelfia",
  place: "Sere, Sentani",
  tagline: "Menjalin kasih, melayani Tuhan, membangun iman.",
  foundedYear: 2022,
  pastor: "Pdt. Nanus Simbu, M.Th",

  address: {
    lines: ["CGV9+JC, Sentani Kota", "Kec. Sentani, Kabupaten Jayapura", "Papua, Indonesia"],
    short: "Sere, Sentani, Kabupaten Jayapura",
  },

  email: "gidifiladelfia@gmail.com",
  phone: { display: "0822-2777-000", href: "tel:+628222777000" },
  whatsapp: "https://wa.me/628222777000",
  officeHours: "Senin – Jumat, 09.00 – 16.00 WIT",

  socials: [
    { name: "Instagram", handle: "@gidifiladelfia", href: "https://instagram.com/gidifiladelfia" },
    { name: "Facebook", handle: "gidifiladelfia", href: "https://facebook.com/gidifiladelfia" },
  ],

  maps: {
    embed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7213.971472089449!2d140.518572!3d-2.555971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cf1000b3812c9%3A0x661a19ecec0b5259!2sGIDI%20Calon%20Jemaat%20Filadelfia%20Sereh!5e1!3m2!1sid!2sid!4v1743837804305!5m2!1sid!2sid",
    link: "https://www.google.com/maps/place/GIDI+Calon+Jemaat+Filadelfia+Sereh/@-2.555971,140.518572,17z",
  },

  credit: { name: "NR", href: "https://www.instagram.com/fffsilakk/" },
};

export const yearsOfService = () => new Date().getFullYear() - site.foundedYear;

export const navigation = [
  { label: "Beranda", to: "/" },
  {
    label: "Tentang",
    to: "/tentang",
    children: [
      { label: "Sejarah gereja", to: "/tentang#sejarah" },
      { label: "Visi & misi", to: "/tentang#visi-misi" },
      { label: "Hamba Tuhan", to: "/tentang#hamba-tuhan" },
      { label: "Pengakuan iman", to: "/tentang#doktrin" },
      { label: "Galeri", to: "/tentang#galeri" },
    ],
  },
  {
    label: "Kegiatan",
    to: "/kegiatan",
    children: [
      { label: "Jadwal ibadah", to: "/kegiatan#jadwal-ibadah" },
      { label: "Kegiatan rutin", to: "/kegiatan#kegiatan-rutin" },
      { label: "Event gereja", to: "/kegiatan#event-gereja" },
    ],
  },
  {
    label: "Renungan",
    to: "/renungan",
    children: [
      { label: "Renungan harian", to: "/renungan#renungan-harian" },
      { label: "Khotbah mingguan", to: "/renungan#khotbah-mingguan" },
      { label: "Artikel rohani", to: "/renungan#artikel-rohani" },
      { label: "Kata hamba Tuhan", to: "/renungan#kata-hamba" },
    ],
  },
  { label: "Kontak", to: "/kontak" },
];
