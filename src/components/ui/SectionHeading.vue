<script setup>
defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: "" },
  as: { type: String, default: "h2" },
});
</script>

<template>
  <div v-reveal class="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
    <div>
      <component :is="as" class="text-3xl font-semibold sm:text-4xl lg:text-5xl">{{ title }}</component>
      <p v-if="lead" class="lead mt-4">{{ lead }}</p>
    </div>
    <div v-if="$slots.default" class="shrink-0">
      <slot />
    </div>
  </div>
</template>
