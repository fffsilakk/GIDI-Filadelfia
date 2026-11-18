<template>
  <section class="page-container flex min-h-[80vh] flex-col items-start justify-center pt-[var(--header-h)]">
    <p class="font-display text-primary text-[clamp(6rem,20vw,12rem)] leading-none font-semibold">404</p>
    <h1 class="mt-4 text-3xl font-semibold sm:text-4xl">Halaman ini tidak ditemukan</h1>
    <p class="lead mt-4">Alamatnya mungkin salah ketik atau halamannya sudah dipindahkan.</p>
    <div class="mt-8 flex flex-wrap gap-3">
      <RouterLink to="/" class="btn btn-primary">Ke beranda</RouterLink>
      <RouterLink to="/kegiatan#jadwal-ibadah" class="btn btn-outline">Lihat jadwal ibadah</RouterLink>
    </div>
  </section>
</template>
