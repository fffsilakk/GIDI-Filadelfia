<script setup>
import { site } from "@/data/site";
</script>

<template>
  <section id="lokasi" class="pb-20 sm:pb-28">
    <div class="page-container">
      <div v-reveal class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-3xl font-semibold sm:text-4xl">Lokasi gereja</h2>
          <p class="text-muted mt-2">{{ site.address.short }}</p>
        </div>
        <a :href="site.maps.link" target="_blank" rel="noopener" class="btn btn-outline">Petunjuk arah</a>
      </div>
      <div v-reveal="'clip'" class="border-line aspect-[4/3] overflow-hidden rounded-[1.25rem] border sm:aspect-[21/9]">
        <iframe
          :src="site.maps.embed"
          title="Peta lokasi GIDI Filadelfia"
          class="size-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>
