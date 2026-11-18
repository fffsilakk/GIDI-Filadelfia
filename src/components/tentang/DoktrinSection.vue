<script setup>
import { ref } from "vue";
import { Plus } from "@lucide/vue";
import { doktrin } from "@/data/gereja";
import SectionHeading from "@/components/ui/SectionHeading.vue";

const open = ref(0);
const toggle = (i) => (open.value = open.value === i ? null : i);
</script>

<template>
  <section id="doktrin" class="section bg-surface">
    <div class="page-container grid items-start gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
      <SectionHeading
        class="lg:sticky lg:top-28"
        title="Pengakuan iman"
        lead="Alkitab adalah Firman Allah yang diilhamkan dan satu-satunya dasar bagi iman dan kehidupan orang percaya."
      />
      <div v-reveal.stagger class="border-line border-t">
        <div v-for="(item, i) in doktrin" :key="item.judul" class="border-line border-b">
          <h3 class="font-sans">
            <button
              type="button"
              class="hover:text-primary flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold transition-colors"
              :aria-expanded="open === i"
              @click="toggle(i)"
            >
              {{ item.judul }}
              <Plus class="size-5 shrink-0 transition-transform duration-500" :class="{ 'rotate-45': open === i }" />
            </button>
          </h3>
          <div
            class="grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-soft)]"
            :class="open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <p class="text-muted overflow-hidden pr-10 leading-relaxed" :class="open === i ? 'pb-6' : ''">
              {{ item.teks }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
