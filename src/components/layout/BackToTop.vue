<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { ArrowUp } from "@lucide/vue";

const progress = ref(0);
const visible = ref(false);

const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = max > 0 ? window.scrollY / max : 0;
  visible.value = window.scrollY > 600;
};

const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <Transition name="pop">
    <button
      v-if="visible"
      type="button"
      class="bg-surface text-ink fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full shadow-[0_10px_30px_-12px_rgba(20,48,90,0.5)] transition-transform hover:-translate-y-0.5"
      aria-label="Kembali ke atas"
      @click="toTop"
    >
      <!-- Lingkaran yang terisi sesuai posisi gulir -->
      <svg class="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="none" stroke="var(--c-line)" stroke-width="2" />
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="var(--c-accent)"
          stroke-width="2"
          stroke-linecap="round"
          pathLength="1"
          stroke-dasharray="1"
          :stroke-dashoffset="1 - progress"
        />
      </svg>
      <ArrowUp class="relative size-5" />
    </button>
  </Transition>
</template>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s var(--ease-out-soft), opacity 0.25s ease;
}
.pop-enter-from,
.pop-leave-to {
  transform: translateY(16px) scale(0.8);
  opacity: 0;
}
</style>
