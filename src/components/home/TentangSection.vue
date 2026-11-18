<script setup>
import { site } from "@/data/site";
</script>

<template>
  <section class="section overflow-hidden">
    <div class="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div class="lg:order-2">
        <figure v-reveal="'clip'" class="aspect-[4/5] overflow-hidden rounded-[1.25rem] sm:aspect-[5/4] lg:aspect-[4/5]">
          <img
            src="/images/gedung-filadelfia.jpg"
            alt="Gedung GIDI Filadelfia di Sereh, dikelilingi bukit hijau"
            class="size-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>

      <div class="lg:order-1">
        <h2 v-reveal class="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          Komunitas iman di kaki bukit Sereh
        </h2>
        <div v-reveal.stagger class="text-muted mt-8 space-y-5 text-lg leading-relaxed">
          <p>
            Kami adalah komunitas iman yang hidup dalam kasih dan pelayanan, berdiri untuk memuliakan
            Tuhan dan melayani sesama. Berdasar kebenaran Alkitab, kami rindu membawa terang Kristus,
            membangun kesatuan jemaat, dan menjadi berkat bagi masyarakat.
          </p>
          <p>
            Gereja ini berdiri pada {{ site.foundedYear }}, berawal dari persekutuan kecil yang berkumpul
            untuk beribadah dan belajar Firman Tuhan. Kini ia menjadi rumah bagi jemaat dari berbagai
            latar belakang.
          </p>
        </div>
        <div v-reveal class="mt-9 flex flex-wrap gap-x-8 gap-y-3">
          <RouterLink to="/tentang/sejarah" class="link-line">Baca sejarah lengkap</RouterLink>
          <RouterLink to="/tentang#hamba-tuhan" class="link-line">Kenal hamba Tuhan</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
