<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { ChevronLeft, ChevronRight } from "@lucide/vue";
import { galeri } from "@/data/gereja";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import BaseModal from "@/components/ui/BaseModal.vue";

const kategori = ["Semua", ...new Set(galeri.map((g) => g.kategori))];
const aktif = ref("Semua");
const terpilih = ref(null);

const daftar = computed(() =>
  aktif.value === "Semua" ? galeri : galeri.filter((g) => g.kategori === aktif.value),
);

const geser = (arah) => {
  const n = daftar.value.length;
  terpilih.value = (terpilih.value + arah + n) % n;
};

const onKey = (e) => {
  if (terpilih.value === null) return;
  if (e.key === "ArrowRight") geser(1);
  if (e.key === "ArrowLeft") geser(-1);
};

onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
</script>

<template>
  <section id="galeri" class="section">
    <div class="page-container">
      <SectionHeading title="Galeri" lead="Momen ibadah dan pelayanan yang kami syukuri bersama." />

      <div v-reveal class="mb-8 flex flex-wrap gap-2" role="group" aria-label="Saring galeri">
        <button
          v-for="k in kategori"
          :key="k"
          type="button"
          class="rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
          :class="aktif === k ? 'bg-primary text-on-primary border-transparent' : 'border-line text-muted hover:text-ink'"
          :aria-pressed="aktif === k"
          @click="aktif = k"
        >
          {{ k }}
        </button>
      </div>

      <TransitionGroup tag="div" name="grid" class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        <button
          v-for="(foto, i) in daftar"
          :key="foto.src"
          type="button"
          class="group zoom-media relative aspect-[4/3] overflow-hidden rounded-2xl text-left"
          :class="{ 'sm:row-span-2 sm:aspect-auto': i === 0 && aktif === 'Semua' }"
          @click="terpilih = i"
        >
          <img :src="foto.src" :alt="foto.judul" class="size-full object-cover" loading="lazy" />
          <span
            class="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-sm font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {{ foto.judul }}
          </span>
        </button>
      </TransitionGroup>
    </div>

    <BaseModal :open="terpilih !== null" label="Foto galeri" wide @close="terpilih = null">
      <figure v-if="terpilih !== null">
        <Transition name="fade" mode="out-in">
          <img
            :key="daftar[terpilih].src"
            :src="daftar[terpilih].src"
            :alt="daftar[terpilih].judul"
            class="max-h-[70vh] w-full object-contain bg-black"
          />
        </Transition>
        <figcaption class="flex items-center justify-between gap-4 p-5">
          <div>
            <p class="font-semibold">{{ daftar[terpilih].judul }}</p>
            <p class="text-muted text-sm">{{ terpilih + 1 }} dari {{ daftar.length }}</p>
          </div>
          <div class="flex gap-2">
            <button type="button" class="btn btn-outline !p-3" aria-label="Foto sebelumnya" @click="geser(-1)">
              <ChevronLeft class="size-5" />
            </button>
            <button type="button" class="btn btn-outline !p-3" aria-label="Foto berikutnya" @click="geser(1)">
              <ChevronRight class="size-5" />
            </button>
          </div>
        </figcaption>
      </figure>
    </BaseModal>
  </section>
</template>

<style scoped>
.grid-move,
.grid-enter-active,
.grid-leave-active {
  transition: transform 0.6s var(--ease-out-soft), opacity 0.4s ease;
}
.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: scale(0.94);
}
.grid-leave-active {
  position: absolute;
  visibility: hidden;
}
</style>
