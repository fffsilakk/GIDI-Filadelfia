<script setup>
import { computed, ref } from "vue";
import { HARI, jadwal } from "@/data/kegiatan";
import { todayIndexWIT } from "@/composables/useNextService";
import SectionHeading from "@/components/ui/SectionHeading.vue";

const hariIni = todayIndexWIT();
const dipilih = ref("semua");

// Senin–Minggu lebih lazim dibaca, jadi Minggu diletakkan terakhir.
const urutanHari = [1, 2, 3, 4, 5, 6, 0];

const kelompok = computed(() =>
  urutanHari
    .filter((h) => dipilih.value === "semua" || dipilih.value === h)
    .map((h) => ({ hari: h, items: jadwal.filter((j) => j.hariIndex === h) })),
);
</script>

<template>
  <section id="jadwal-ibadah" class="section">
    <div class="page-container">
      <SectionHeading
        title="Jadwal ibadah"
        lead="Semua waktu dalam WIT. Pilih hari untuk melihat kegiatan pada hari itu."
      />

      <div v-reveal class="mb-10 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Pilih hari">
        <button
          type="button"
          class="day-chip"
          :class="{ 'is-on': dipilih === 'semua' }"
          :aria-pressed="dipilih === 'semua'"
          @click="dipilih = 'semua'"
        >
          Sepekan
        </button>
        <button
          v-for="h in urutanHari"
          :key="h"
          type="button"
          class="day-chip"
          :class="{ 'is-on': dipilih === h }"
          :aria-pressed="dipilih === h"
          @click="dipilih = h"
        >
          {{ HARI[h] }}
          <span v-if="h === hariIni" class="bg-accent ml-1.5 inline-block size-1.5 rounded-full align-middle" title="Hari ini" />
        </button>
      </div>

      <Transition name="fade" mode="out-in">
        <div :key="String(dipilih)" class="border-line border-t">
          <div
            v-for="grup in kelompok"
            :key="grup.hari"
            class="border-line grid gap-4 border-b py-6 md:grid-cols-[12rem_1fr]"
          >
            <p class="font-display text-2xl font-semibold">
              {{ HARI[grup.hari] }}
              <span v-if="grup.hari === hariIni" class="tag ml-2 align-middle">Hari ini</span>
            </p>
            <ul v-if="grup.items.length" class="divide-line divide-y">
              <li
                v-for="item in grup.items"
                :key="item.nama"
                class="grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span class="text-primary font-semibold tabular-nums">{{ item.jam }}</span>
                <span class="text-lg font-semibold">{{ item.nama }}</span>
                <span class="text-muted text-sm">{{ item.tempat }}</span>
              </li>
            </ul>
            <p v-else class="text-muted self-center">Tidak ada ibadah terjadwal. Gedung gereja tetap terbuka untuk doa pribadi.</p>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.day-chip {
  flex-shrink: 0;
  border: 1px solid var(--c-line);
  border-radius: 999px;
  padding: 0.55rem 1.1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--c-muted);
  transition: all 0.25s ease;
}
.day-chip:hover {
  color: var(--c-ink);
  border-color: var(--c-ink);
}
.day-chip.is-on {
  background: var(--c-primary);
  border-color: transparent;
  color: var(--c-on-primary);
}
</style>
