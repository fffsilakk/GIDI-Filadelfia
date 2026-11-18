<script setup>
import PageHero from "@/components/layout/PageHero.vue";
import KontakChannels from "@/components/kontak/KontakChannels.vue";
import KontakInfo from "@/components/kontak/KontakInfo.vue";
import LokasiSection from "@/components/kontak/LokasiSection.vue";
</script>

<template>
  <div>
    <PageHero
      title="Mari terhubung"
      lead="Kami senang menerima pertanyaan, masukan, maupun permintaan doa. Hubungi kami lewat email, WhatsApp, media sosial, atau datang langsung ke gereja."
      :crumbs="[{ label: 'Beranda', to: '/' }, { label: 'Kontak' }]"
    />
    <section class="pb-20 sm:pb-28">
      <div class="page-container grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <KontakChannels />
        <div v-reveal="{ delay: 120 }"><KontakInfo /></div>
      </div>
    </section>
    <LokasiSection />
  </div>
</template>
