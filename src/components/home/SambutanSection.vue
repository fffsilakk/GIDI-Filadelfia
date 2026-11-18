<script setup>
import { site } from "@/data/site";
</script>

<template>
  <section id="sambutan" class="section">
    <div class="page-container grid items-center gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
      <figure v-reveal="'clip'" class="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
        <img
          src="/images/gembala.jpg"
          :alt="`${site.pastor}, Gembala Jemaat`"
          class="size-full object-cover object-top"
          loading="lazy"
        />
        <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16 text-white">
          <p class="font-display text-xl font-semibold">{{ site.pastor }}</p>
          <p class="text-sm text-white/75">Gembala Jemaat sejak {{ site.foundedYear }}</p>
        </figcaption>
      </figure>

      <div>
        <h2 v-reveal class="text-3xl font-semibold sm:text-4xl lg:text-5xl">Sambutan gembala</h2>
        <div v-reveal.stagger class="text-muted mt-8 space-y-5 text-lg leading-relaxed">
          <p class="text-ink font-display text-2xl leading-snug">Shalom, selamat datang.</p>
          <p>
            Dengan sukacita kami menyambut Anda di tengah persekutuan GIDI Filadelfia. Kami percaya
            setiap jiwa berharga di mata Tuhan, dan setiap langkah Anda adalah bagian dari rencana-Nya
            yang indah.
          </p>
          <p>
            Kiranya kasih Kristus senantiasa menyertai, membimbing, dan menguatkan kita dalam menjalani
            kehidupan sehari-hari.
          </p>
          <p class="text-ink border-line border-t pt-6">
            Tuhan memberkati,<br />
            <span class="font-semibold">{{ site.pastor }}</span>
          </p>
        </div>
        <RouterLink v-reveal to="/tentang#visi-misi" class="link-line mt-8 inline-block">
          Baca visi dan misi gereja
        </RouterLink>
      </div>
    </div>
  </section>
</template>
