<script setup>
import { ref } from "vue";
import { statistik } from "@/data/gereja";
import { yearsOfService } from "@/data/site";
import { useCountUp } from "@/composables/useCountUp";

const items = [
  { label: "Tahun melayani", nilai: yearsOfService(), ket: "Sejak berdiri di Sereh" },
  ...statistik.items,
];

const root = ref(null);
const values = items.map((item, i) => useCountUp(root, item.nilai, { delay: i * 120 }));
</script>

<template>
  <section ref="root" class="bg-tint py-16 sm:py-20">
    <div class="page-container">
      <dl class="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        <div
          v-for="(item, i) in items"
          :key="item.label"
          v-reveal="{ delay: i * 90 }"
          class="border-line px-4 sm:px-8 [&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 lg:first:pl-0"
        >
          <dt class="text-muted text-sm">{{ item.label }}</dt>
          <dd class="font-display text-primary mt-2 text-5xl font-semibold tabular-nums sm:text-6xl">
            {{ values[i].value }}
          </dd>
          <dd class="text-muted mt-1 text-sm">{{ item.ket }}</dd>
        </div>
      </dl>
      <p class="text-muted mt-10 text-xs">Data jemaat tahun {{ statistik.tahunData }}.</p>
    </div>
  </section>
</template>
