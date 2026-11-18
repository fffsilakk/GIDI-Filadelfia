<script setup>
import { computed, ref } from "vue";
import { events } from "@/data/kegiatan";
import { site } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import BaseModal from "@/components/ui/BaseModal.vue";

const BATAS = 6;
const semua = ref(false);
const terpilih = ref(null);

const urut = [...events].sort((a, b) => a.tanggalISO.localeCompare(b.tanggalISO));
const tampil = computed(() => (semua.value ? urut : urut.slice(0, BATAS)));

const bulanSingkat = new Intl.DateTimeFormat("id-ID", { month: "short" });
const label = (iso) => {
  const d = new Date(`${iso}T00:00:00`);
  return { tgl: d.getDate(), bln: bulanSingkat.format(d).replace(".", "") };
};
</script>

<template>
  <section id="event-gereja" class="section">
    <div class="page-container">
      <SectionHeading
        title="Event gereja"
        lead="Perayaan, retreat, seminar, dan pelayanan sosial sepanjang tahun. Ikut terlibat dan bertumbuh bersama."
      />

      <TransitionGroup tag="div" name="list" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="ev in tampil"
          :key="ev.nama"
          type="button"
          class="group text-left"
          @click="terpilih = ev"
        >
          <div class="zoom-media relative aspect-[4/3] rounded-2xl">
            <img :src="ev.gambar" :alt="ev.nama" class="size-full object-cover" loading="lazy" />
            <span class="bg-surface text-ink absolute top-4 left-4 grid min-w-14 place-items-center rounded-xl px-2 py-1.5 text-center leading-none">
              <span class="font-display text-2xl font-semibold">{{ label(ev.tanggalISO).tgl }}</span>
              <span class="text-muted mt-1 text-xs">{{ label(ev.tanggalISO).bln }}</span>
            </span>
          </div>
          <p class="text-primary mt-4 text-sm font-semibold">{{ ev.kategori }}</p>
          <h3 class="group-hover:text-primary mt-1 text-xl font-semibold transition-colors">{{ ev.nama }}</h3>
          <p class="text-muted mt-2 line-clamp-2">{{ ev.deskripsi }}</p>
        </button>
      </TransitionGroup>

      <div v-if="urut.length > BATAS" class="mt-12 text-center">
        <button type="button" class="btn btn-outline" @click="semua = !semua">
          {{ semua ? "Tampilkan lebih sedikit" : `Tampilkan semua (${urut.length})` }}
        </button>
      </div>
    </div>

    <BaseModal :open="!!terpilih" :label="terpilih?.nama" wide @close="terpilih = null">
      <div v-if="terpilih">
        <img :src="terpilih.gambar" :alt="terpilih.nama" class="aspect-[16/9] w-full object-cover" />
        <div class="p-8 sm:p-10">
          <p class="text-primary text-sm font-semibold">{{ terpilih.kategori }}</p>
          <h3 class="mt-2 text-3xl font-semibold">{{ terpilih.nama }}</h3>
          <p class="text-muted mt-2">{{ terpilih.tanggal }}</p>
          <p class="mt-6 text-lg leading-relaxed">{{ terpilih.deskripsi }}</p>
          <a :href="site.whatsapp" target="_blank" rel="noopener" class="btn btn-primary mt-8">Daftar lewat WhatsApp</a>
        </div>
      </div>
    </BaseModal>
  </section>
</template>

<style scoped>
.list-enter-active {
  transition: opacity 0.5s ease, transform 0.6s var(--ease-out-soft);
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.list-leave-active {
  display: none;
}
</style>
