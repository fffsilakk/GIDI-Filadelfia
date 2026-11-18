<script setup>
import { ayatPilihan } from "@/data/renungan";
import SectionHeading from "@/components/ui/SectionHeading.vue";
</script>

<template>
  <section class="section">
    <div class="page-container">
      <SectionHeading
        title="Firman untuk dibawa pulang"
        lead="Ayat pilihan pekan ini untuk direnungkan di rumah, di kantor, atau di perjalanan."
      >
        <RouterLink to="/renungan" class="btn btn-outline">Baca renungan</RouterLink>
      </SectionHeading>

      <div v-reveal.stagger="{ step: 120 }" class="grid gap-5 md:grid-cols-3">
        <RouterLink
          v-for="item in ayatPilihan"
          :key="item.ayat"
          to="/renungan#renungan-harian"
          class="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[1.25rem] p-7 text-white"
        >
          <div class="zoom-media absolute inset-0 -z-10">
            <img :src="item.gambar" alt="" class="size-full object-cover" loading="lazy" />
          </div>
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-night/95 via-night/55 to-night/10" />
          <p class="text-sm text-white/70">{{ item.ayat }}</p>
          <h3 class="mt-2 text-2xl font-semibold text-white">{{ item.judul }}</h3>
          <blockquote class="mt-4 text-white/85">“{{ item.kutipan }}”</blockquote>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
