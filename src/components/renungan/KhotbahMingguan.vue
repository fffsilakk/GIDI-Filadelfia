<script setup>
import { Play } from "@lucide/vue";
import { khotbah } from "@/data/renungan";
import SectionHeading from "@/components/ui/SectionHeading.vue";
</script>

<template>
  <section id="khotbah-mingguan" class="section bg-surface">
    <div class="page-container">
      <SectionHeading title="Khotbah mingguan" lead="Ringkasan khotbah ibadah Minggu untuk didengar ulang dan direnungkan." />

      <div v-reveal.stagger class="border-line border-t">
        <article
          v-for="k in khotbah"
          :key="k.judul"
          class="sermon border-line grid gap-6 border-b py-8 sm:grid-cols-[14rem_1fr] sm:items-center sm:gap-10"
        >
          <div class="zoom-media aspect-[4/3] rounded-2xl">
            <img :src="k.gambar" alt="" class="size-full object-cover" loading="lazy" />
          </div>
          <div>
            <p class="text-muted text-sm">{{ k.tanggal }} &ndash; {{ k.pengkhotbah }}, {{ k.durasi }}</p>
            <h3 class="mt-2 text-2xl font-semibold sm:text-3xl">{{ k.judul }}</h3>
            <p class="text-muted mt-3 max-w-2xl text-lg">{{ k.ringkasan }}</p>
            <a v-if="k.video" :href="k.video" target="_blank" rel="noopener" class="btn btn-primary mt-6">
              <Play class="size-4" /> Tonton khotbah
            </a>
            <p v-else class="text-muted mt-5 text-sm italic">Rekaman video segera tersedia.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
