<script setup>
import { nilaiUtama } from "@/data/gereja";
import SectionHeading from "@/components/ui/SectionHeading.vue";
</script>

<template>
  <section class="section bg-surface">
    <div class="page-container">
      <SectionHeading
        title="Yang kami pegang"
        lead="Empat nilai ini bukan sekadar pedoman di atas kertas. Kami berusaha menghidupinya dalam ibadah, keluarga, dan pelayanan."
      />
      <div v-reveal.stagger class="grid gap-px overflow-hidden rounded-[1.25rem] bg-[var(--c-line)] sm:grid-cols-2">
        <article v-for="nilai in nilaiUtama" :key="nilai.nama" class="value bg-surface p-8 sm:p-10">
          <h3 class="text-3xl font-semibold">{{ nilai.nama }}</h3>
          <p class="text-muted mt-4 max-w-sm text-lg">{{ nilai.teks }}</p>
          <p class="text-primary mt-6 text-sm font-semibold">{{ nilai.ayat }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.value {
  transition: background-color 0.4s ease;
}
.value:hover {
  background: var(--c-tint);
}
</style>
