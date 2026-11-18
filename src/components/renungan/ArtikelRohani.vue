<script setup>
import { artikel } from "@/data/renungan";
import SectionHeading from "@/components/ui/SectionHeading.vue";

const [utama, ...lainnya] = artikel;
</script>

<template>
  <section id="artikel-rohani" class="section">
    <div class="page-container">
      <SectionHeading title="Artikel rohani" lead="Tulisan singkat untuk membangun iman dan karakter dalam keseharian." />

      <div class="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        <article v-reveal class="group">
          <div v-reveal="'clip'" class="zoom-media aspect-[4/3] rounded-[1.25rem]">
            <img :src="utama.gambar" alt="" class="size-full object-cover" loading="lazy" />
          </div>
          <p class="text-muted mt-6 text-sm"><span class="tag mr-2">{{ utama.kategori }}</span>{{ utama.tanggal }}</p>
          <h3 class="mt-3 text-3xl font-semibold sm:text-4xl">{{ utama.judul }}</h3>
          <p class="text-muted mt-4 max-w-xl text-lg">{{ utama.ringkasan }}</p>
        </article>

        <div v-reveal.stagger class="border-line divide-line divide-y border-t lg:border-t-0">
          <article v-for="a in lainnya" :key="a.judul" class="group grid grid-cols-[1fr_7rem] gap-5 py-6 lg:first:pt-0">
            <div>
              <p class="text-muted text-sm"><span class="text-primary font-semibold">{{ a.kategori }}</span>, {{ a.tanggal }}</p>
              <h3 class="mt-2 font-sans text-lg leading-snug font-semibold">{{ a.judul }}</h3>
              <p class="text-muted mt-2 line-clamp-2 text-sm">{{ a.ringkasan }}</p>
            </div>
            <div class="zoom-media aspect-square rounded-xl">
              <img :src="a.gambar" alt="" class="size-full object-cover" loading="lazy" />
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
