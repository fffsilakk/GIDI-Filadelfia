<script setup>
import { ayatDasar, sejarahRingkas } from "@/data/gereja";
</script>

<template>
  <section id="sejarah" class="section">
    <div class="page-container grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div class="lg:sticky lg:top-28 lg:self-start">
        <h2 v-reveal class="text-3xl font-semibold sm:text-4xl lg:text-5xl">Sejarah singkat</h2>
        <blockquote v-reveal class="border-accent mt-8 border-l-4 pl-6">
          <p class="font-display text-2xl leading-snug">“{{ ayatDasar.teks }}”</p>
          <footer class="text-muted mt-3 text-sm">{{ ayatDasar.ayat }}</footer>
        </blockquote>
        <RouterLink v-reveal to="/tentang/sejarah" class="btn btn-primary mt-10">Baca sejarah lengkap</RouterLink>
      </div>

      <ol class="timeline relative">
        <li v-for="(item, i) in sejarahRingkas" :key="item.judul" v-reveal="{ delay: i * 80 }" class="relative pb-12 pl-12 last:pb-0">
          <span class="bg-bg border-primary absolute top-1 left-0 grid size-7 place-items-center rounded-full border-2 text-xs font-semibold">
            {{ i + 1 }}
          </span>
          <p v-if="item.tahun" class="text-primary text-sm font-semibold">{{ item.tahun }}</p>
          <h3 class="mt-1 text-2xl font-semibold">{{ item.judul }}</h3>
          <p class="text-muted mt-3 text-lg leading-relaxed">{{ item.teks }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline::before {
  content: "";
  position: absolute;
  left: 13px;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: var(--c-line);
}
</style>
