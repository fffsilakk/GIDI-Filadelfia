<script setup>
import PageHero from "@/components/layout/PageHero.vue";
import { ayatDasar, pelayananUnggulan, pendiri } from "@/data/gereja";
import { site } from "@/data/site";
</script>

<template>
  <article>
    <PageHero
      title="Sejarah GIDI Filadelfia"
      :lead="`Dari persekutuan kecil di Sereh Gunung pada ${site.foundedYear} hingga menjadi rumah rohani bagi ratusan jemaat.`"
      :crumbs="[{ label: 'Beranda', to: '/' }, { label: 'Tentang', to: '/tentang' }, { label: 'Sejarah' }]"
    >
      <div class="mt-8 flex items-center gap-3">
        <img src="/images/penulis-fidel.jpg" alt="" class="size-11 rounded-full object-cover" />
        <p class="text-sm leading-snug">
          <span class="block font-semibold">Ditulis oleh Fidel Silak</span>
          <span class="text-muted block">18 Januari 2025</span>
        </p>
      </div>
    </PageHero>

    <div class="page-container pb-20 sm:pb-28">
      <figure v-reveal="'clip'" class="aspect-[16/10] overflow-hidden rounded-[1.25rem] sm:aspect-[21/9]">
        <img src="/images/gedung-filadelfia.jpg" alt="Gedung GIDI Filadelfia di Sereh, Sentani" class="size-full object-cover" />
      </figure>

      <div class="article mx-auto mt-16 max-w-2xl">
        <blockquote v-reveal class="border-accent border-l-4 pl-6">
          <p class="font-display text-2xl leading-snug sm:text-3xl">“{{ ayatDasar.teks }}”</p>
          <footer class="text-muted mt-3 text-sm">{{ ayatDasar.ayat }}</footer>
        </blockquote>

        <p v-reveal>
          Gereja GIDI Filadelfia didirikan pada tahun {{ site.foundedYear }} atas panggilan dan kasih karunia
          Tuhan Yesus Kristus. Dimulai dari <strong>Sereh Gunung</strong>, sebuah tempat sederhana namun
          dipenuhi kerinduan akan hadirat Tuhan, pelayanan ini digerakkan oleh hamba-hamba Tuhan yang setia:
          {{ pendiri.slice(0, -1).join(", ") }}, dan {{ pendiri.at(-1) }}.
        </p>
        <p v-reveal>
          Dengan iman yang teguh dan kasih yang tulus, mereka memulai ibadah pertama dengan jemaat yang kecil
          namun penuh semangat. Tidak ada yang mudah di awal, tetapi setiap langkah dilandasi doa,
          pengorbanan, dan penyerahan penuh kepada Tuhan. Di tengah segala keterbatasan, Tuhan menunjukkan
          kesetiaan-Nya: satu demi satu jiwa datang, dan ibadah bertumbuh semakin hidup.
        </p>
        <p v-reveal>
          Gereja ini bukan hanya tempat berkumpul. Ia telah menjadi <strong>rumah rohani</strong>, tempat
          banyak orang mengalami perjumpaan pribadi dengan Tuhan, menerima penghiburan, dan menemukan arah
          hidup yang baru. Kehangatan kasih persaudaraan dan kuasa Firman menjadikan GIDI Filadelfia tempat
          pembentukan iman yang kokoh.
        </p>
        <p v-reveal>
          Kini, di bawah kepemimpinan {{ site.pastor }} sebagai Gembala Jemaat, GIDI Filadelfia terus
          bertumbuh, tidak hanya dalam jumlah, tetapi juga dalam kedewasaan rohani dan pengaruhnya di tengah
          masyarakat. Setiap pelayanan dilakukan bukan untuk kemuliaan pribadi, melainkan untuk menyatakan
          kasih dan kebenaran Kristus bagi semua orang.
        </p>

        <h2 v-reveal>Pelayanan yang terus berjalan</h2>
        <dl v-reveal.stagger class="not-prose border-line mt-6 border-t">
          <div v-for="p in pelayananUnggulan" :key="p.nama" class="border-line grid gap-1 border-b py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <dt class="font-semibold">{{ p.nama }}</dt>
            <dd class="text-muted">{{ p.teks }}</dd>
          </div>
        </dl>

        <p v-reveal>
          Ke depan, GIDI Filadelfia rindu menjadi terang dan garam di tengah dunia, menjadi gereja yang hidup,
          berdampak, dan relevan di setiap generasi. Tetap berakar pada Firman Tuhan dan dipimpin Roh Kudus,
          kami percaya Tuhan akan terus memakai gereja ini untuk membawa pemulihan dan pengharapan di mana pun
          Ia mengutus.
        </p>
        <p v-reveal class="closing">Soli Deo Gloria. Segala kemuliaan hanya bagi Tuhan.</p>

        <RouterLink v-reveal to="/tentang" class="btn btn-outline mt-12">Kembali ke halaman Tentang</RouterLink>
      </div>
    </div>
  </article>
</template>

<style scoped>
.article > p {
  margin-top: 1.75rem;
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--c-muted);
}
.article > p.closing {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--c-ink);
}
.article strong {
  color: var(--c-ink);
  font-weight: 600;
}
.article > blockquote {
  margin-bottom: 2.5rem;
}
.article > h2 {
  margin-top: 3.5rem;
  font-size: 1.875rem;
  font-weight: 600;
}
</style>
