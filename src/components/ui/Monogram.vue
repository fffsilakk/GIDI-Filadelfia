<script setup>
import { computed } from "vue";

const props = defineProps({
  name: { type: String, default: "" },
  size: { type: String, default: "md" },
});

const initials = computed(() => {
  const words = props.name
    .replace(/^(Pdt|Ev|Ibu|Bpk|Bapak)\.?\s+/i, "")
    .split(/[\s,]+/)
    .filter((w) => w && !/^(M\.Th|S\.Th|S\.Pd)$/i.test(w));
  if (!words.length) return "";
  return (words[0][0] + (words[1]?.[0] ?? "")).toUpperCase();
});
</script>

<template>
  <span
    class="text-primary font-display inline-flex shrink-0 items-center justify-center rounded-full font-semibold"
    :class="[
      size === 'lg' ? 'size-16 text-xl' : 'size-11 text-sm',
      initials ? 'bg-tint' : 'border-line border-2 border-dashed',
    ]"
    aria-hidden="true"
  >
    {{ initials }}
  </span>
</template>
