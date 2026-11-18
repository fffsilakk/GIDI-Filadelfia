<script setup>
import Monogram from "@/components/ui/Monogram.vue";

defineProps({
  orang: { type: Object, required: true },
});
</script>

<template>
  <article class="card flex h-full gap-4 p-5 transition-colors duration-300 hover:border-[var(--c-primary)]">
    <img
      v-if="orang.foto"
      :src="orang.foto"
      :alt="orang.nama"
      class="size-16 shrink-0 rounded-full object-cover object-top"
      loading="lazy"
    />
    <Monogram v-else :name="orang.nama" size="lg" />
    <div>
      <p class="text-primary text-sm font-semibold">{{ orang.jabatan }}</p>
      <h3 class="mt-0.5 font-sans text-lg font-semibold" :class="{ 'text-muted italic': !orang.nama }">
        {{ orang.nama || "Nama menyusul" }}
      </h3>
      <p class="text-muted mt-2 text-sm leading-relaxed">{{ orang.tugas }}</p>
    </div>
  </article>
</template>
