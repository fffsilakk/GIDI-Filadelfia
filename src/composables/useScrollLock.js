import { watch, onBeforeUnmount } from "vue";

/** Mengunci scroll halaman selama `isOpen` bernilai true (untuk modal & menu). */
export function useScrollLock(isOpen) {
  const apply = (lock) => {
    document.documentElement.style.overflow = lock ? "hidden" : "";
  };
  watch(isOpen, apply);
  onBeforeUnmount(() => apply(false));
}
