<script setup>
import PageHero from "@/components/layout/PageHero.vue";
import SejarahSection from "@/components/tentang/SejarahSection.vue";
import VisiMisiSection from "@/components/tentang/VisiMisiSection.vue";
import HambaTuhanSection from "@/components/tentang/HambaTuhanSection.vue";
import DoktrinSection from "@/components/tentang/DoktrinSection.vue";
import GaleriSection from "@/components/tentang/GaleriSection.vue";
import { site } from "@/data/site";
</script>

<template>
  <div>
    <PageHero
      title="Tentang GIDI Filadelfia"
      :lead="`Jemaat Gereja Injili di Indonesia yang bertumbuh di ${site.place} sejak ${site.foundedYear}: sejarah, visi, para pelayan, dan apa yang kami imani.`"
      image="/images/doa-jemaat.jpg"
      :crumbs="[{ label: 'Beranda', to: '/' }, { label: 'Tentang' }]"
    />
    <SejarahSection />
    <VisiMisiSection />
    <HambaTuhanSection />
    <DoktrinSection />
    <GaleriSection />
  </div>
</template>
