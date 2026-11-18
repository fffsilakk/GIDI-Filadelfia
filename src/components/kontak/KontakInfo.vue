<script setup>
import { Clock, MapPin } from "@lucide/vue";
import { site } from "@/data/site";
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
          <dd class="mt-2">
            <a :href="site.maps.link" target="_blank" rel="noopener" class="link-line text-sm">Petunjuk arah</a>
          </dd>
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

    <div class="bg-tint rounded-2xl p-6">
      <p class="font-display text-xl font-semibold">Ingin ikut melayani?</p>
      <p class="text-muted mt-2">
        Kami membuka kesempatan pelayanan di bidang musik, multimedia, mengajar Sekolah Minggu, dan
        administrasi. Sampaikan minat Anda lewat WhatsApp atau email.
      </p>
      <a :href="site.whatsapp" target="_blank" rel="noopener" class="btn btn-primary mt-5">Hubungi lewat WhatsApp</a>
    </div>
  </div>
</template>
