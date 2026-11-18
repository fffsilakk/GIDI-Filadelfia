<script setup>
/**
 * Motif gelombang Danau Sentani dengan pusaran kecil di ujung,
 * terinspirasi lukisan kulit kayu Asei. Garis tergambar sendiri saat muncul.
 */
defineProps({
  delay: { type: Number, default: 0 },
});
</script>

<template>
  <svg
    class="wave"
    viewBox="0 0 320 40"
    fill="none"
    aria-hidden="true"
    :style="{ '--wave-delay': `${delay}ms` }"
  >
    <path
      d="M2 26c18 0 18-14 36-14s18 14 36 14 18-14 36-14 18 14 36 14 18-14 36-14 18 14 36 14 18-14 36-14c14 0 22 8 22 16 0 6-5 10-10 10-6 0-9-4-9-8 0-3 2-5 5-5"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      pathLength="1"
    />
  </svg>
</template>

<style scoped>
.wave path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw 2.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  animation-delay: var(--wave-delay);
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .wave path {
    stroke-dashoffset: 0;
    animation: none;
  }
}
</style>
