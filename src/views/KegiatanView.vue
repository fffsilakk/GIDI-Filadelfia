<script setup>
import PageHero from "@/components/layout/PageHero.vue";
import JadwalIbadah from "@/components/kegiatan/JadwalIbadah.vue";
import KegiatanRutin from "@/components/kegiatan/KegiatanRutin.vue";
import EventGereja from "@/components/kegiatan/EventGereja.vue";
</script>

<template>
  <div>
    <PageHero
      title="Kegiatan gereja"
      lead="Jadwal ibadah sepekan, persekutuan rutin, dan event sepanjang tahun. Semua terbuka untuk jemaat dan tamu."
      image="/images/ibadah-umum.jpg"
      :crumbs="[{ label: 'Beranda', to: '/' }, { label: 'Kegiatan' }]"
    />
    <JadwalIbadah />
    <KegiatanRutin />
    <EventGereja />
  </div>
</template>
