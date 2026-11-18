import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const SITE = "GIDI Filadelfia";

const routes = [
  { path: "/", name: "home", component: HomeView, meta: { title: SITE } },
  {
    path: "/tentang",
    name: "tentang",
    component: () => import("@/views/TentangView.vue"),
    meta: { title: "Tentang" },
  },
  {
    path: "/tentang/sejarah",
    name: "sejarah",
    component: () => import("@/views/SejarahView.vue"),
    meta: { title: "Sejarah Gereja" },
  },
  {
    path: "/tentang/pengurus",
    name: "pengurus",
    component: () => import("@/views/PengurusView.vue"),
    meta: { title: "Badan Pengurus Jemaat" },
  },
  // Alamat lama tetap bisa dibuka
  { path: "/tentang/HambaTuhan", redirect: { name: "pengurus" } },
  {
    path: "/kegiatan",
    name: "kegiatan",
    component: () => import("@/views/KegiatanView.vue"),
    meta: { title: "Kegiatan" },
  },
  {
    path: "/renungan",
    name: "renungan",
    component: () => import("@/views/RenunganView.vue"),
    meta: { title: "Renungan" },
  },
  {
    path: "/kontak",
    name: "kontak",
    component: () => import("@/views/KontakView.vue"),
    meta: { title: "Kontak" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFoundView.vue"),
    meta: { title: "Halaman tidak ditemukan" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    // Pindah bagian di halaman yang sama: gulir langsung.
    if (to.hash && to.path === from.path) return { el: to.hash, behavior: "smooth" };
    // Pindah halaman: mulai dari atas; App.vue menggulir ke #bagian setelah transisi selesai.
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const title = to.meta?.title;
  document.title = title && title !== SITE ? `${title} | ${SITE}` : `${SITE} Sere Sentani`;
});

export default router;
