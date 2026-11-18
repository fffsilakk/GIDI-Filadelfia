<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch, toRef } from "vue";
import { X } from "@lucide/vue";
import { useScrollLock } from "@/composables/useScrollLock";

const props = defineProps({
  open: { type: Boolean, default: false },
  label: { type: String, default: "Detail" },
  wide: { type: Boolean, default: false },
});
const emit = defineEmits(["close"]);

const panel = ref(null);
useScrollLock(toRef(props, "open"));

const onKey = (e) => {
  if (props.open && e.key === "Escape") emit("close");
};

watch(
  () => props.open,
  async (isOpen) => {
    if (!isOpen) return;
    await nextTick();
    panel.value?.focus();
  },
);

onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open"
        class="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="label"
      >
        <div class="modal-backdrop absolute inset-0 bg-night/70 backdrop-blur-sm" @click="emit('close')" />
        <div
          ref="panel"
          tabindex="-1"
          class="modal-panel bg-surface relative max-h-[90vh] w-full overflow-y-auto rounded-t-3xl outline-none sm:rounded-3xl"
          :class="wide ? 'max-w-3xl' : 'max-w-lg'"
        >
          <button
            type="button"
            class="bg-surface/90 text-ink hover:bg-tint absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full transition"
            aria-label="Tutup"
            @click="emit('close')"
          >
            <X class="size-5" />
          </button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.45s var(--ease-out-soft), opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: translateY(32px) scale(0.98);
  opacity: 0;
}
</style>
