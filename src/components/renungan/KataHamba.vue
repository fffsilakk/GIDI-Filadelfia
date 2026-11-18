<script setup>
import { ref } from "vue";
import { ChevronLeft, ChevronRight } from "@lucide/vue";
import { kataHamba } from "@/data/renungan";
import Monogram from "@/components/ui/Monogram.vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";

const track = ref(null);

const geser = (arah) => {
  const el = track.value;
  if (!el) return;
  const kartu = el.firstElementChild?.getBoundingClientRect().width ?? 320;
  el.scrollBy({ left: arah * (kartu + 20), behavior: "smooth" });
};
</script>

<template>
  <section id="kata-hamba" class="section bg-surface overflow-hidden">
    <div class="page-container">
      <SectionHeading title="Kata hamba Tuhan" lead="Pesan singkat dari mereka yang setia melayani.">
        <div class="hidden gap-2 sm:flex">
          <button type="button" class="btn btn-outline !p-3" aria-label="Sebelumnya" @click="geser(-1)">
            <ChevronLeft class="size-5" />
          </button>
          <button type="button" class="btn btn-outline !p-3" aria-label="Berikutnya" @click="geser(1)">
            <ChevronRight class="size-5" />
          </button>
        </div>
      </SectionHeading>

      <div
        ref="track"
        v-reveal.stagger
        class="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:px-8"
      >
        <figure
          v-for="k in kataHamba"
          :key="k.judul"
          class="bg-tint flex w-[85%] shrink-0 snap-start flex-col rounded-[1.25rem] p-8 sm:w-[24rem]"
        >
          <p class="text-primary text-sm font-semibold">{{ k.judul }}</p>
          <blockquote class="font-display mt-4 flex-1 text-2xl leading-snug">“{{ k.isi }}”</blockquote>
          <figcaption class="mt-8 flex items-center gap-3">
            <Monogram :name="k.penulis" class="!bg-surface" />
            <span>
              <span class="block font-semibold">{{ k.penulis }}</span>
              <span class="text-muted block text-sm">{{ k.tanggal }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
