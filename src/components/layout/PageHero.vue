<script setup>
/** Kepala halaman untuk halaman selain beranda. */
defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: "" },
  image: { type: String, default: "" },
  crumbs: { type: Array, default: () => [] },
});
</script>

<template>
  <section class="relative overflow-hidden pt-[var(--header-h)]">
    <div class="page-container grid items-end gap-10 pt-14 pb-14 sm:pt-20 lg:grid-cols-[1.2fr_1fr] lg:pb-20">
      <div>
        <nav v-if="crumbs.length" aria-label="Lokasi halaman" class="hero-in text-muted mb-6 text-sm">
          <template v-for="(c, i) in crumbs" :key="c.label">
            <RouterLink v-if="c.to" :to="c.to" class="hover:text-ink transition-colors">{{ c.label }}</RouterLink>
            <span v-else class="text-ink">{{ c.label }}</span>
            <span v-if="i < crumbs.length - 1" class="mx-2 opacity-50">/</span>
          </template>
        </nav>
        <h1 class="hero-in text-4xl font-semibold sm:text-5xl lg:text-6xl" style="--d: 80ms">{{ title }}</h1>
        <p v-if="lead" class="hero-in lead mt-6" style="--d: 180ms">{{ lead }}</p>
        <slot />
      </div>
      <figure v-if="image" class="hero-img relative aspect-[4/3] overflow-hidden rounded-[1.25rem] lg:aspect-[5/4]">
        <img :src="image" alt="" class="size-full object-cover" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.hero-in {
  animation: rise 0.9s var(--ease-out-soft) both;
  animation-delay: var(--d, 0ms);
}
.hero-img {
  animation: open 1.3s var(--ease-out-soft) 0.15s both;
}
.hero-img img {
  animation: settle 1.8s var(--ease-out-soft) 0.15s both;
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
}
@keyframes open {
  from {
    clip-path: inset(0 0 100% 0 round 1.25rem);
  }
  to {
    clip-path: inset(0 0 0 0 round 1.25rem);
  }
}
@keyframes settle {
  from {
    transform: scale(1.15);
  }
}
</style>
