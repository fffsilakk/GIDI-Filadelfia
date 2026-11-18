<script setup>
import { computed, ref } from "vue";
import { BULAN, renunganHarian } from "@/data/renungan";
import SectionHeading from "@/components/ui/SectionHeading.vue";

const tahun = new Date().getFullYear();
const bulan = ref(new Date().getMonth());
const daftar = computed(() => renunganHarian[bulan.value] ?? []);

// Bulan yang sudah ada isinya diberi penanda.
const adaIsi = (i) => (renunganHarian[i]?.length ?? 0) > 0;
</script>

<template>
  <section id="renungan-harian" class="section">
    <div class="page-container">
      <SectionHeading
        title="Renungan harian"
        lead="Firman Tuhan menjadi pelita bagi kaki dan terang bagi jalan kita. Pilih bulan untuk membaca renungannya."
      />

      <div v-reveal class="mb-10 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Pilih bulan">
        <button
          v-for="(nama, i) in BULAN"
          :key="nama"
          type="button"
          class="month shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
          :class="bulan === i ? 'bg-primary text-on-primary border-transparent' : 'border-line text-muted hover:text-ink'"
          :aria-pressed="bulan === i"
          @click="bulan = i"
        >
          {{ nama.slice(0, 3) }}
          <span v-if="adaIsi(i)" class="ml-1 inline-block size-1.5 rounded-full bg-current align-middle opacity-60" />
        </button>
      </div>

      <Transition name="fade" mode="out-in">
        <div v-if="daftar.length" :key="bulan" class="grid gap-4 md:grid-cols-2">
          <article
            v-for="(r, i) in daftar"
            :key="r.judul"
            class="card daily flex gap-6 p-6 sm:p-8"
            :style="{ '--i': i }"
          >
            <div class="text-center">
              <p class="font-display text-primary text-4xl leading-none font-semibold">{{ r.tanggal }}</p>
              <p class="text-muted mt-1 text-xs">{{ BULAN[bulan].slice(0, 3) }}</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold">{{ r.judul }}</h3>
              <p class="mt-3 text-lg leading-relaxed">“{{ r.isi }}”</p>
              <p class="text-muted mt-3 text-sm font-semibold">{{ r.ayat }}</p>
            </div>
          </article>
        </div>
        <div v-else :key="`kosong-${bulan}`" class="card bg-tint border-transparent p-10 text-center">
          <p class="font-display text-2xl font-semibold">Renungan {{ BULAN[bulan] }} {{ tahun }} sedang disiapkan</p>
          <p class="text-muted mx-auto mt-3 max-w-md">
            Sambil menunggu, baca renungan bulan lain atau artikel rohani di bawah.
          </p>
          <a href="#artikel-rohani" class="link-line mt-6 inline-block">Ke artikel rohani</a>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.daily {
  animation: rise 0.6s var(--ease-out-soft) both;
  animation-delay: calc(var(--i) * 70ms);
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
}
</style>
