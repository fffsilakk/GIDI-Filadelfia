<script setup>
defineProps({
  name: { type: String, required: true },
});
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
    <template v-if="name === 'Instagram'">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'WhatsApp'">
      <path d="M3.5 20.5l1.2-4.3A8.5 8.5 0 1 1 8 19.4l-4.5 1.1z" stroke-linejoin="round" />
      <path
        d="M9 8.5c0 3 2.5 6.5 6.5 6.5l1-1.4-2-1-1 .9c-1-.5-2-1.5-2.5-2.5l.9-1-1-2L9.5 8z"
        fill="currentColor"
        stroke="none"
      />
    </template>
    <path
      v-else-if="name === 'Facebook'"
      d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8z"
      stroke-linejoin="round"
    />
  </svg>
</template>
