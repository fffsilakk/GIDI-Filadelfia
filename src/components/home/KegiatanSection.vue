<script setup>
import { HARI, kegiatanRutin } from "@/data/kegiatan";
import SectionHeading from "@/components/ui/SectionHeading.vue";
</script>

<template>
  <section class="section bg-surface">
    <div class="page-container">
      <SectionHeading
        title="Kegiatan setiap pekan"
        lead="Dari ibadah Minggu sampai persekutuan pemuda, ada tempat untuk setiap usia. Datang saja, kami senang menyambut Anda."
      >
        <RouterLink to="/kegiatan" class="btn btn-outline">Semua kegiatan</RouterLink>
      </SectionHeading>

      <ul v-reveal.stagger class="border-line border-t">
        <li v-for="item in kegiatanRutin" :key="item.nama" class="row border-line border-b">
          <RouterLink
            to="/kegiatan#kegiatan-rutin"
            class="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8 md:grid-cols-[10rem_16rem_1fr] md:items-baseline"
          >
            <p class="text-muted text-sm">
              <span class="text-ink font-semibold">{{ HARI[item.hariIndex] }}</span>
              <span class="block">{{ item.jam }} WIT</span>
            </p>
            <h3 class="row-title text-2xl font-semibold">{{ item.nama }}</h3>
            <p class="text-muted sm:col-start-2 md:col-start-auto">{{ item.deskripsi }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.row-title {
  transition: transform 0.45s var(--ease-out-soft), color 0.3s ease;
}
.row:hover .row-title {
  transform: translateX(8px);
  color: var(--c-primary);
}
</style>
