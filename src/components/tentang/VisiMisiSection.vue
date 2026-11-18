<script setup>
import { ref } from "vue";
import { misi, visi, visiPenjelasan } from "@/data/gereja";

const tabs = ["Visi", "Misi"];
const active = ref("Visi");
</script>

<template>
  <section id="visi-misi" class="section bg-lake text-white">
    <div class="page-container">
      <div v-reveal class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 class="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Visi dan misi</h2>
        <div class="relative inline-flex rounded-full bg-white/10 p-1" role="tablist" aria-label="Visi dan misi">
          <span
            class="bg-accent absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-transform duration-500 ease-[var(--ease-out-soft)]"
            :style="{ transform: active === 'Misi' ? 'translateX(100%)' : 'translateX(0)' }"
            aria-hidden="true"
          />
          <button
            v-for="tab in tabs"
            :key="tab"
            type="button"
            role="tab"
            :aria-selected="active === tab"
            class="relative w-28 rounded-full py-2.5 text-sm font-semibold transition-colors"
            :class="active === tab ? 'text-lake' : 'text-white/80 hover:text-white'"
            @click="active = tab"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <div class="mt-14 min-h-[22rem]">
        <Transition name="swap" mode="out-in">
          <div v-if="active === 'Visi'" key="visi" role="tabpanel">
            <p class="font-display max-w-4xl text-3xl leading-tight font-medium sm:text-4xl lg:text-[2.75rem]">
              {{ visi }}
            </p>
            <p class="mt-8 max-w-2xl text-lg text-white/75">{{ visiPenjelasan }}</p>
          </div>

          <ul v-else key="misi" role="tabpanel" class="grid gap-x-12 md:grid-cols-2">
            <li
              v-for="(item, i) in misi"
              :key="item.judul"
              class="misi-item border-t border-white/15 py-6"
              :style="{ '--i': i }"
            >
              <h3 class="text-xl font-semibold text-white">{{ item.judul }}</h3>
              <p class="mt-2 text-white/75">{{ item.teks }}</p>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.3s ease, transform 0.45s var(--ease-out-soft);
}
.swap-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.swap-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.swap-enter-active .misi-item {
  animation: in 0.6s var(--ease-out-soft) both;
  animation-delay: calc(var(--i) * 70ms);
}
@keyframes in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
}
</style>
