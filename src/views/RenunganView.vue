<script setup>
import PageHero from "@/components/layout/PageHero.vue";
import RenunganHarian from "@/components/renungan/RenunganHarian.vue";
import KhotbahMingguan from "@/components/renungan/KhotbahMingguan.vue";
import ArtikelRohani from "@/components/renungan/ArtikelRohani.vue";
import KataHamba from "@/components/renungan/KataHamba.vue";
</script>

<template>
  <div>
    <PageHero
      title="Renungan"
      lead="Santapan rohani untuk setiap hari: renungan singkat, khotbah Minggu, dan artikel yang menguatkan iman."
      image="/images/alkitab-doa.jpg"
      :crumbs="[{ label: 'Beranda', to: '/' }, { label: 'Renungan' }]"
    />
    <RenunganHarian />
    <KhotbahMingguan />
    <ArtikelRohani />
    <KataHamba />
  </div>
</template>
