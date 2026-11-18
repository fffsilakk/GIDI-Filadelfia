/**
 * v-reveal — memunculkan elemen dengan halus saat masuk layar.
 *
 *   <div v-reveal>                 → muncul dari bawah
 *   <div v-reveal="'fade'">        → hanya memudar
 *   <figure v-reveal="'clip'">     → gambar terbuka dari tengah
 *   <ul v-reveal.stagger>          → setiap anak muncul bergantian
 *   <div v-reveal="{ delay: 200 }">
 */
let observer;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  return observer;
}

function prepare(el, variant, delay) {
  el.dataset.reveal = variant || "";
  if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
  getObserver().observe(el);
}

function parse(value) {
  if (typeof value === "string") return { variant: value, delay: 0 };
  return { variant: value?.variant, delay: value?.delay ?? 0, step: value?.step };
}

export default {
  mounted(el, binding) {
    if (typeof IntersectionObserver === "undefined") return;
    const { variant, delay, step = 90 } = parse(binding.value);

    if (binding.modifiers.stagger) {
      [...el.children].forEach((child, i) =>
        prepare(child, variant, delay + Math.min(i, 8) * step),
      );
      return;
    }
    prepare(el, variant, delay);
  },
  unmounted(el, binding) {
    if (!observer) return;
    if (binding.modifiers.stagger) [...el.children].forEach((c) => observer.unobserve(c));
    else observer.unobserve(el);
  },
};
