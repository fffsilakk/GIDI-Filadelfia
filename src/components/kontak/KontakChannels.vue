<script setup>
import { computed } from "vue";
import { Mail, Phone } from "@lucide/vue";
import { site } from "@/data/site";
import SocialIcon from "@/components/ui/SocialIcon.vue";

/** Saluran kontak langsung — situs statis, jadi tanpa formulir. */
const channels = computed(() => [
  {
    name: "Email",
    value: site.email,
    note: "Pertanyaan, masukan, dan surat resmi. Dibalas dalam 1–2 hari kerja.",
    href: `mailto:${site.email}`,
    action: "Kirim email",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    value: site.phone.display,
    note: "Cara tercepat untuk bertanya jadwal atau menyampaikan permintaan doa.",
    href: site.whatsapp,
    action: "Chat WhatsApp",
    social: true,
  },
  {
    name: "Telepon",
    value: site.phone.display,
    note: site.officeHours,
    href: site.phone.href,
    action: "Telepon sekarang",
    icon: Phone,
  },
  ...site.socials.map((s) => ({
    name: s.name,
    value: s.handle,
    note: s.name === "Instagram" ? "Foto dan pengumuman kegiatan terbaru." : "Kabar jemaat dan siaran ibadah.",
    href: s.href,
    action: `Buka ${s.name}`,
    social: true,
  })),
]);

const external = (href) => href.startsWith("http");
</script>

<template>
  <div v-reveal.stagger class="grid gap-4 sm:grid-cols-2">
    <a
      v-for="(c, i) in channels"
      :key="c.name"
      :href="c.href"
      :target="external(c.href) ? '_blank' : undefined"
      :rel="external(c.href) ? 'noopener' : undefined"
      class="card group flex flex-col p-6 transition duration-500 hover:-translate-y-1 hover:border-[var(--c-primary)] sm:p-7"
      :class="{ 'sm:col-span-2': i === 0 }"
    >
      <span class="bg-tint text-primary grid size-11 place-items-center rounded-full transition-colors duration-300 group-hover:bg-[var(--c-primary)] group-hover:text-[var(--c-on-primary)]">
        <SocialIcon v-if="c.social" :name="c.name" class="size-5" />
        <component :is="c.icon" v-else class="size-5" />
      </span>
      <p class="text-muted mt-5 text-sm">{{ c.name }}</p>
      <p class="font-display mt-1 text-xl font-semibold break-all sm:text-2xl">{{ c.value }}</p>
      <p class="text-muted mt-2 flex-1 text-sm leading-relaxed">{{ c.note }}</p>
      <span class="link-line mt-5 self-start text-sm">{{ c.action }}</span>
    </a>
  </div>
</template>
