<script setup>
import { Clock, Mail, MapPin, Phone } from "@lucide/vue";
import { site } from "@/data/site";
import SocialIcon from "@/components/ui/SocialIcon.vue";
</script>

<template>
  <div class="flex flex-col gap-10">
    <dl class="space-y-7">
      <div class="flex gap-4">
        <MapPin class="text-primary mt-1 size-5 shrink-0" />
        <div>
          <dt class="font-semibold">Alamat gereja</dt>
          <dd class="text-muted mt-1">
            <span v-for="line in site.address.lines" :key="line" class="block">{{ line }}</span>
          </dd>
        </div>
      </div>
      <div class="flex gap-4">
        <Mail class="text-primary mt-1 size-5 shrink-0" />
        <div>
          <dt class="font-semibold">Email</dt>
          <dd class="mt-1"><a :href="`mailto:${site.email}`" class="link-line">{{ site.email }}</a></dd>
        </div>
      </div>
      <div class="flex gap-4">
        <Phone class="text-primary mt-1 size-5 shrink-0" />
        <div>
          <dt class="font-semibold">Telepon & WhatsApp</dt>
          <dd class="mt-1"><a :href="site.phone.href" class="link-line">{{ site.phone.display }}</a></dd>
        </div>
      </div>
      <div class="flex gap-4">
        <Clock class="text-primary mt-1 size-5 shrink-0" />
        <div>
          <dt class="font-semibold">Jam sekretariat</dt>
          <dd class="text-muted mt-1">{{ site.officeHours }}</dd>
        </div>
      </div>
    </dl>

    <div>
      <p class="font-semibold">Media sosial</p>
      <ul class="mt-3 space-y-2">
        <li v-for="s in site.socials" :key="s.name">
          <a :href="s.href" target="_blank" rel="noopener" class="text-muted hover:text-ink inline-flex items-center gap-3 transition-colors">
            <SocialIcon :name="s.name" class="size-5" />
            {{ s.name }} <span class="opacity-70">{{ s.handle }}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="bg-tint rounded-2xl p-6">
      <p class="font-display text-xl font-semibold">Ingin ikut melayani?</p>
      <p class="text-muted mt-2">
        Kami membuka kesempatan pelayanan di bidang musik, multimedia, mengajar Sekolah Minggu, dan
        administrasi. Sampaikan minat Anda lewat formulir di samping.
      </p>
    </div>
  </div>
</template>
