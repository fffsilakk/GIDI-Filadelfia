<script setup>
import { site } from "@/data/site";
</script>

<template>
  <section class="section">
    <div class="page-container grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
      <div>
        <h2 v-reveal class="text-3xl font-semibold sm:text-4xl lg:text-5xl">Kunjungi kami di Sere</h2>
        <p v-reveal class="lead mt-5">
          Punya pertanyaan, butuh dukungan doa, atau ingin bergabung dalam pelayanan? Datang langsung
          atau kirim pesan, kami akan membalas secepatnya.
        </p>
        <dl v-reveal.stagger class="mt-10 space-y-6">
          <div>
            <dt class="text-muted text-sm">Alamat</dt>
            <dd class="mt-1 text-lg">{{ site.address.lines.join(", ") }}</dd>
          </div>
          <div>
            <dt class="text-muted text-sm">Email</dt>
            <dd class="mt-1 text-lg"><a :href="`mailto:${site.email}`" class="link-line">{{ site.email }}</a></dd>
          </div>
          <div>
            <dt class="text-muted text-sm">Telepon</dt>
            <dd class="mt-1 text-lg"><a :href="site.phone.href" class="link-line">{{ site.phone.display }}</a></dd>
          </div>
        </dl>
        <div v-reveal class="mt-10 flex flex-wrap gap-3">
          <RouterLink to="/kontak" class="btn btn-primary">Kirim pesan</RouterLink>
          <a :href="site.maps.link" target="_blank" rel="noopener" class="btn btn-outline">Buka di Google Maps</a>
        </div>
      </div>

      <div v-reveal="'clip'" class="border-line aspect-[4/3] overflow-hidden rounded-[1.25rem] border">
        <iframe
          :src="site.maps.embed"
          title="Peta lokasi GIDI Filadelfia"
          class="size-full grayscale-[35%]"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>
