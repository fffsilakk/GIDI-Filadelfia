<script setup>
import PageHero from "@/components/layout/PageHero.vue";
import PengurusCard from "@/components/tentang/PengurusCard.vue";
import { pengurus } from "@/data/gereja";

// Kelompokkan berdasarkan jabatan agar mudah dibaca.
const inti = pengurus.slice(0, 5);
const majelis = pengurus.filter((p) => p.jabatan === "Majelis Jemaat");
const bidang = pengurus.slice(5).filter((p) => p.jabatan !== "Majelis Jemaat");

const kelompok = [
  { judul: "Pimpinan jemaat", items: inti },
  { judul: "Majelis jemaat", items: majelis },
  { judul: "Ketua bidang pelayanan", items: bidang },
];
</script>

<template>
  <div>
    <PageHero
      title="Badan Pengurus Jemaat"
      lead="Tim pelayan yang dipilih dan dipercaya untuk memimpin, membina, dan melayani seluruh kegiatan rohani serta administrasi jemaat GIDI Filadelfia."
      :crumbs="[{ label: 'Beranda', to: '/' }, { label: 'Tentang', to: '/tentang' }, { label: 'Pengurus' }]"
    />
    <section class="pb-20 sm:pb-28">
      <div class="page-container space-y-16">
        <div v-for="grup in kelompok" :key="grup.judul">
          <h2 v-reveal class="border-line mb-6 border-b pb-4 text-2xl font-semibold">{{ grup.judul }}</h2>
          <div v-reveal.stagger class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PengurusCard v-for="(orang, i) in grup.items" :key="i" :orang="orang" />
          </div>
        </div>
        <RouterLink to="/tentang#hamba-tuhan" class="link-line inline-block">Kembali ke halaman Tentang</RouterLink>
      </div>
    </section>
  </div>
</template>
