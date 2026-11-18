<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import SiteHeader from "@/components/layout/SiteHeader.vue";
import SiteFooter from "@/components/layout/SiteFooter.vue";
import BackToTop from "@/components/layout/BackToTop.vue";
import { site } from "@/data/site";
import { useIntro } from "@/composables/useIntro";

const route = useRoute();
const { showIntro, finishIntro } = useIntro();

// Setelah halaman baru selesai tampil, gulir ke #bagian bila ada di alamat.
const scrollToHash = () => {
  if (!route.hash) return;
  requestAnimationFrame(() =>
    document.querySelector(decodeURIComponent(route.hash))?.scrollIntoView({ behavior: "smooth" }),
  );
};

onMounted(() => {
  if (showIntro.value) setTimeout(finishIntro, 1300);
});
</script>

<template>
  <Transition name="curtain">
    <div v-if="showIntro" class="bg-lake fixed inset-0 z-[100] grid place-items-center text-white" aria-hidden="true">
      <div class="flex flex-col items-center gap-5">
        <img src="/logo/gidi.png" alt="" class="intro-logo size-20 rounded-full" />
        <p class="intro-name font-display text-2xl font-semibold tracking-tight">{{ site.name }}</p>
      </div>
    </div>
  </Transition>

  <a href="#main" class="bg-accent text-lake sr-only z-[70] rounded-full px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
    Lewati ke konten
  </a>

  <SiteHeader />

  <main id="main">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in" appear @after-enter="scrollToHash">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>

  <SiteFooter />
  <BackToTop />
</template>

<style scoped>
.intro-logo {
  animation: logo-in 0.8s var(--ease-out-soft) both;
}
.intro-name {
  animation: name-in 0.8s var(--ease-out-soft) 0.2s both;
}
@keyframes logo-in {
  from {
    opacity: 0;
    transform: scale(0.7) rotate(-20deg);
  }
}
@keyframes name-in {
  from {
    opacity: 0;
    transform: translateY(12px);
    letter-spacing: 0.08em;
  }
}

.curtain-leave-active {
  transition: clip-path 0.9s cubic-bezier(0.76, 0, 0.24, 1);
}
.curtain-leave-to {
  clip-path: inset(0 0 100% 0);
}
</style>
