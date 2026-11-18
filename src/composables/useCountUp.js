import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Menghitung angka dari 0 ke `target` ketika elemen `elRef` terlihat.
 */
export function useCountUp(elRef, target, { duration = 1600, delay = 0 } = {}) {
  const value = ref(0);
  let io;

  function run() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      value.value = target;
      return;
    }
    const start = performance.now() + delay;
    const tick = (now) => {
      const t = Math.min(Math.max((now - start) / duration, 0), 1);
      value.value = Math.round((1 - Math.pow(1 - t, 4)) * target);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  onMounted(() => {
    io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        run();
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    if (elRef.value) io.observe(elRef.value);
  });

  onBeforeUnmount(() => io?.disconnect());

  return value;
}
