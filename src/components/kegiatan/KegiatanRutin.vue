<script setup>
import { ref } from "vue";
import { HARI, kegiatanRutin } from "@/data/kegiatan";
import { site } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import BaseModal from "@/components/ui/BaseModal.vue";

const terpilih = ref(null);
</script>

<template>
  <section id="kegiatan-rutin" class="section bg-surface">
    <div class="page-container">
      <SectionHeading
        title="Kegiatan rutin"
        lead="Persekutuan yang berjalan setiap pekan untuk membangun iman dan kebersamaan jemaat."
      />

      <div v-reveal.stagger class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="item in kegiatanRutin"
          :key="item.nama"
          type="button"
          class="card group flex flex-col p-7 text-left transition duration-500 hover:-translate-y-1 hover:border-[var(--c-primary)]"
          @click="terpilih = item"
        >
          <p class="text-muted text-sm">
            <span class="text-ink font-semibold">{{ HARI[item.hariIndex] }}</span>, {{ item.jam }} WIT
          </p>
          <h3 class="mt-3 text-2xl font-semibold">{{ item.nama }}</h3>
          <p class="text-muted mt-3 line-clamp-3 flex-1">{{ item.deskripsi }}</p>
          <span class="link-line mt-6 self-start text-sm">Lihat detail</span>
        </button>
      </div>
    </div>

    <BaseModal :open="!!terpilih" :label="terpilih?.nama" @close="terpilih = null">
      <div v-if="terpilih" class="p-8 sm:p-10">
        <p class="text-primary text-sm font-semibold">Kegiatan rutin</p>
        <h3 class="mt-2 pr-10 text-3xl font-semibold">{{ terpilih.nama }}</h3>
        <dl class="border-line mt-6 grid grid-cols-3 gap-4 border-y py-5 text-sm">
          <div>
            <dt class="text-muted">Hari</dt>
            <dd class="mt-1 font-semibold">{{ HARI[terpilih.hariIndex] }}</dd>
          </div>
          <div>
            <dt class="text-muted">Waktu</dt>
            <dd class="mt-1 font-semibold">{{ terpilih.jam }} WIT</dd>
          </div>
          <div>
            <dt class="text-muted">Tempat</dt>
            <dd class="mt-1 font-semibold">{{ terpilih.tempat }}</dd>
          </div>
        </dl>
        <p class="text-muted mt-6 text-lg leading-relaxed">{{ terpilih.deskripsi }}</p>
        <a :href="site.whatsapp" target="_blank" rel="noopener" class="btn btn-primary mt-8">Tanya lewat WhatsApp</a>
      </div>
    </BaseModal>
  </section>
</template>
