<script setup>
import { site } from "@/data/site";
import { useIntro } from "@/composables/useIntro";
import { useNextService } from "@/composables/useNextService";
import WaveLine from "@/components/ui/WaveLine.vue";

const { introDone } = useIntro();
const next = useNextService();

const scrollDown = () =>
  document.getElementById("sambutan")?.scrollIntoView({ behavior: "smooth" });
</script>

<template>
  <section class="hero relative isolate flex min-h-[100svh] items-end overflow-hidden text-white" :class="{ ready: introDone }">
    <video
      class="hero-video absolute inset-0 -z-20 size-full object-cover"
      src="/video/hero.mp4"
      poster="/images/hero-poster.jpg"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    />
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(120%_95%_at_15%_100%,rgba(11,24,48,0.97)_25%,rgba(20,48,90,0.86)_65%,rgba(20,48,90,0.72))]" />

    <div class="page-container grid gap-12 pt-32 pb-16 sm:pb-20 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <p class="line text-base text-white/75 sm:text-lg"><span>{{ site.fullName.split(" (")[0] }}</span></p>
        <h1 class="font-display mt-3 text-[clamp(3.2rem,11vw,8.5rem)] leading-[0.92] font-semibold tracking-[-0.035em] text-white">
          <span class="line"><span style="--d: 0.1s">Jemaat</span></span>
          <span class="line"><span style="--d: 0.22s">Filadelfia</span></span>
        </h1>
        <WaveLine v-if="introDone" class="text-accent mt-6 w-56 sm:w-72" :delay="500" />
        <div v-else class="mt-6 h-[1.75rem] sm:h-[2.25rem]" />
        <p class="fade-up mt-6 max-w-md text-lg text-white/85" style="--d: 0.55s">
          {{ site.tagline }} Kami beribadah di {{ site.place }}, Kabupaten Jayapura.
        </p>
        <div class="fade-up mt-9 flex flex-wrap gap-3" style="--d: 0.7s">
          <RouterLink to="/kegiatan#jadwal-ibadah" class="btn btn-accent">Lihat jadwal ibadah</RouterLink>
          <RouterLink to="/tentang" class="btn btn-on-dark">Tentang gereja</RouterLink>
        </div>
      </div>

      <RouterLink
        to="/kegiatan#jadwal-ibadah"
        class="fade-up group block max-w-xs rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition hover:bg-white/15"
        style="--d: 0.9s"
      >
        <p class="text-sm text-white/70">Ibadah berikutnya</p>
        <p class="font-display mt-1 text-2xl font-semibold">{{ next.nama }}</p>
        <p class="mt-2 text-sm text-white/85">
          {{ next.when }}, {{ next.jam.split("–")[0].trim() }} WIT
          <span class="text-white/60">di {{ next.tempat.toLowerCase() }}</span>
        </p>
      </RouterLink>
    </div>

    <button
      type="button"
      class="scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      aria-label="Gulir ke bagian berikutnya"
      @click="scrollDown"
    >
      <span class="block h-12 w-px overflow-hidden bg-white/25"><span class="cue-dot block h-4 w-px bg-white" /></span>
    </button>
  </section>
</template>

<style scoped>
.hero-video {
  animation: drift 24s ease-in-out infinite alternate;
}
@keyframes drift {
  from {
    transform: scale(1.06);
  }
  to {
    transform: scale(1.14) translate3d(-1%, -1%, 0);
  }
}

/* Teks muncul dari balik garis (mask) — hanya setelah layar pembuka selesai */
.line {
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
}
.line > span {
  display: inline-block;
  transform: translateY(105%);
}
.fade-up {
  opacity: 0;
  transform: translateY(18px);
}
.ready .line > span {
  animation: line-up 1.1s var(--ease-out-soft) both;
  animation-delay: var(--d, 0s);
}
.ready .fade-up {
  animation: fade-up 1s var(--ease-out-soft) both;
  animation-delay: var(--d, 0s);
}
@keyframes line-up {
  to {
    transform: translateY(0);
  }
}
@keyframes fade-up {
  to {
    opacity: 1;
    transform: none;
  }
}

.cue-dot {
  animation: cue 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
@keyframes cue {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(300%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .line > span,
  .fade-up {
    transform: none;
    opacity: 1;
  }
  .hero-video {
    animation: none;
  }
}
</style>
