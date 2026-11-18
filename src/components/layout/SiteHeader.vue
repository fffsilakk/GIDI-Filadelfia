<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { ChevronDown, Menu, Moon, Sun, X } from "@lucide/vue";
import { navigation, site } from "@/data/site";
import { useTheme } from "@/composables/useTheme";
import { useScrollLock } from "@/composables/useScrollLock";

const route = useRoute();
const { isDark, toggleTheme } = useTheme();

const scrolled = ref(false);
const menuOpen = ref(false);
const openDropdown = ref(null);
const openAccordion = ref(null);

useScrollLock(menuOpen);

// Di beranda, header transparan di atas video sampai halaman digulir.
const overHero = computed(() => route.name === "home" && !scrolled.value && !menuOpen.value);

const isActive = (item) =>
  item.to === "/" ? route.path === "/" : route.path.startsWith(item.to);

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};

const closeAll = () => {
  menuOpen.value = false;
  openDropdown.value = null;
  openAccordion.value = null;
};

const onDocumentClick = (e) => {
  if (!e.target.closest("[data-dropdown]")) openDropdown.value = null;
};

watch(() => route.fullPath, closeAll);

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("click", onDocumentClick);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  document.removeEventListener("click", onDocumentClick);
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500"
    :class="
      overHero
        ? 'text-white'
        : 'bg-bg/85 text-ink shadow-[0_1px_0_var(--c-line)] backdrop-blur-xl'
    "
  >
    <nav class="page-container flex h-[var(--header-h)] items-center justify-between gap-6" aria-label="Navigasi utama">
      <RouterLink to="/" class="group flex items-center gap-3" @click="closeAll">
        <img
          src="/logo/gidi.png"
          alt=""
          class="size-10 rounded-full transition-transform duration-500 group-hover:rotate-[8deg]"
        />
        <span class="leading-tight">
          <span class="font-display block text-lg font-semibold tracking-tight">{{ site.name }}</span>
          <span class="block text-xs opacity-70">{{ site.place }}</span>
        </span>
      </RouterLink>

      <!-- Desktop -->
      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="item in navigation" :key="item.label" class="relative" data-dropdown>
          <RouterLink
            v-if="!item.children"
            :to="item.to"
            class="nav-link"
            :class="{ 'is-active': isActive(item) }"
          >
            {{ item.label }}
          </RouterLink>

          <template v-else>
            <button
              type="button"
              class="nav-link gap-1"
              :class="{ 'is-active': isActive(item) }"
              :aria-expanded="openDropdown === item.label"
              @click="openDropdown = openDropdown === item.label ? null : item.label"
            >
              {{ item.label }}
              <ChevronDown
                class="size-4 transition-transform duration-300"
                :class="{ 'rotate-180': openDropdown === item.label }"
              />
            </button>

            <Transition name="drop">
              <div
                v-if="openDropdown === item.label"
                class="bg-surface text-ink border-line absolute top-full left-1/2 mt-3 w-60 -translate-x-1/2 rounded-2xl border p-2 shadow-[0_24px_48px_-24px_rgba(20,48,90,0.35)]"
              >
                <RouterLink
                  :to="item.to"
                  class="hover:bg-tint block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors"
                >
                  Semua {{ item.label.toLowerCase() }}
                </RouterLink>
                <div class="bg-line mx-4 my-1 h-px" />
                <RouterLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to"
                  class="text-muted hover:bg-tint hover:text-ink block rounded-xl px-4 py-2.5 text-sm transition-colors"
                >
                  {{ child.label }}
                </RouterLink>
              </div>
            </Transition>
          </template>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="icon-btn"
          :aria-label="isDark ? 'Gunakan tema terang' : 'Gunakan tema gelap'"
          @click="toggleTheme"
        >
          <Transition name="spin" mode="out-in">
            <Sun v-if="isDark" key="sun" class="size-5" />
            <Moon v-else key="moon" class="size-5" />
          </Transition>
        </button>
        <RouterLink to="/kontak" class="btn btn-accent hidden !py-2.5 lg:inline-flex">Kunjungi kami</RouterLink>
        <button
          type="button"
          class="icon-btn lg:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Tutup menu' : 'Buka menu'"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" class="size-6" />
          <Menu v-else class="size-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile: di-teleport ke body karena backdrop-filter header membatasi elemen fixed -->
    <Teleport to="body">
    <Transition name="sheet">
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="bg-bg text-ink fixed inset-x-0 top-[var(--header-h)] bottom-0 z-[49] overflow-y-auto lg:hidden"
      >
        <ul class="page-container py-6">
          <li
            v-for="(item, i) in navigation"
            :key="item.label"
            class="mobile-item border-line border-b"
            :style="{ '--i': i }"
          >
            <div class="flex items-center justify-between">
              <RouterLink :to="item.to" class="font-display block py-4 text-3xl font-semibold" @click="closeAll">
                {{ item.label }}
              </RouterLink>
              <button
                v-if="item.children"
                type="button"
                class="icon-btn"
                :aria-expanded="openAccordion === item.label"
                :aria-label="`Submenu ${item.label}`"
                @click="openAccordion = openAccordion === item.label ? null : item.label"
              >
                <ChevronDown
                  class="size-5 transition-transform duration-300"
                  :class="{ 'rotate-180': openAccordion === item.label }"
                />
              </button>
            </div>
            <div
              v-if="item.children"
              class="grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-soft)]"
              :class="openAccordion === item.label ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden">
                <RouterLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to"
                  class="text-muted hover:text-ink block py-2 pl-1 last:pb-5"
                  @click="closeAll"
                >
                  {{ child.label }}
                </RouterLink>
              </div>
            </div>
          </li>
        </ul>
        <div class="page-container mobile-item pb-10" :style="{ '--i': navigation.length }">
          <p class="text-muted text-sm">{{ site.address.short }}</p>
          <a :href="`mailto:${site.email}`" class="link-line mt-1 inline-block text-sm">{{ site.email }}</a>
        </div>
      </div>
    </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
@layer components {
:where(.nav-link) {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.9rem;
  font-size: 0.925rem;
  font-weight: 500;
  opacity: 0.85;
  transition: opacity 0.2s ease;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.2rem;
  height: 2px;
  border-radius: 2px;
  background: var(--c-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--ease-out-soft);
}
.nav-link:hover,
.nav-link.is-active {
  opacity: 1;
}
.nav-link:hover::after,
.nav-link.is-active::after {
  transform: scaleX(1);
}

:where(.icon-btn) {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  transition: background-color 0.2s ease;
}
.icon-btn:hover {
  background: color-mix(in srgb, currentColor 10%, transparent);
}
}

.drop-enter-active,
.drop-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.3s var(--ease-out-soft);
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translate(-50%, -6px);
}

.spin-enter-active,
.spin-leave-active {
  transition:
    transform 0.35s var(--ease-out-soft),
    opacity 0.2s ease;
}
.spin-enter-from {
  transform: rotate(-90deg) scale(0.6);
  opacity: 0;
}
.spin-leave-to {
  transform: rotate(90deg) scale(0.6);
  opacity: 0;
}

.sheet-enter-active,
.sheet-leave-active {
  transition:
    clip-path 0.55s var(--ease-out-soft),
    opacity 0.3s ease;
}
.sheet-enter-from,
.sheet-leave-to {
  clip-path: inset(0 0 100% 0);
}
.sheet-enter-active .mobile-item {
  animation: item-in 0.6s var(--ease-out-soft) both;
  animation-delay: calc(0.12s + var(--i) * 0.05s);
}
@keyframes item-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}
</style>
