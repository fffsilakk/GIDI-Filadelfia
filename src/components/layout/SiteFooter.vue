<script setup>
import { navigation, site } from "@/data/site";
import SocialIcon from "@/components/ui/SocialIcon.vue";
import WaveLine from "@/components/ui/WaveLine.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-lake text-white">
    <div class="page-container pt-20 pb-10">
      <div class="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p class="font-display max-w-md text-3xl leading-tight font-semibold sm:text-4xl">
            Mari beribadah bersama kami setiap Minggu pukul 08.00 WIT.
          </p>
          <WaveLine class="text-accent mt-6 w-48" />
          <div class="mt-8 flex items-center gap-3">
            <img src="/logo/gidi.png" alt="" class="size-11 rounded-full" />
            <div class="text-sm leading-snug">
              <p class="font-semibold">{{ site.fullName }}</p>
              <p class="text-white/60">{{ site.address.short }}</p>
            </div>
          </div>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 class="font-sans text-sm font-semibold text-white/50">Halaman</h2>
          <ul class="mt-4 space-y-2.5">
            <li v-for="item in navigation" :key="item.to">
              <RouterLink :to="item.to" class="footer-link">{{ item.label }}</RouterLink>
            </li>
          </ul>
        </nav>

        <div>
          <h2 class="font-sans text-sm font-semibold text-white/50">Hubungi</h2>
          <address class="mt-4 space-y-2.5 not-italic">
            <p class="text-white/85">
              <span v-for="line in site.address.lines" :key="line" class="block">{{ line }}</span>
            </p>
            <a :href="`mailto:${site.email}`" class="footer-link block">{{ site.email }}</a>
            <a :href="site.phone.href" class="footer-link block">{{ site.phone.display }}</a>
          </address>
          <div class="mt-6 flex gap-2">
            <a
              v-for="s in site.socials"
              :key="s.name"
              :href="s.href"
              target="_blank"
              rel="noopener"
              class="grid size-10 place-items-center rounded-full border border-white/25 transition hover:border-white hover:bg-white hover:text-lake"
              :aria-label="s.name"
            >
              <SocialIcon :name="s.name" class="size-[18px]" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-16 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/55 sm:flex-row sm:justify-between">
        <p>&copy; {{ year }} {{ site.name }}. Hak cipta dilindungi.</p>
        <p>
          Dibuat oleh
          <a :href="site.credit.href" target="_blank" rel="noopener" class="text-white/85 hover:text-white">
            {{ site.credit.name }}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  color: rgb(255 255 255 / 0.85);
  transition: color 0.2s ease, padding 0.3s var(--ease-out-soft);
}
.footer-link:hover {
  color: var(--c-accent);
  padding-left: 4px;
}
</style>
