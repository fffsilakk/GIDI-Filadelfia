<script setup>
import { pengurus } from "@/data/gereja";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import PengurusCard from "./PengurusCard.vue";

const inti = pengurus.slice(0, 5);
</script>

<template>
  <section id="hamba-tuhan" class="section">
    <div class="page-container">
      <SectionHeading
        title="Hamba Tuhan"
        lead="Mereka yang dipercaya memimpin, membina, dan melayani jemaat dalam kegiatan rohani maupun administrasi gereja."
      >
        <RouterLink to="/tentang/pengurus" class="btn btn-outline">Seluruh pengurus</RouterLink>
      </SectionHeading>
      <div v-reveal.stagger class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PengurusCard v-for="(orang, i) in inti" :key="i" :orang="orang" />
      </div>
    </div>
  </section>
</template>
