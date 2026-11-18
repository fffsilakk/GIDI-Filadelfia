<script setup>
import { reactive, ref } from "vue";
import { Send } from "@lucide/vue";
import { site } from "@/data/site";

/**
 * Situs ini belum punya server, jadi pesan dikirim lewat aplikasi email
 * pengunjung (mailto) dengan isi yang sudah terisi otomatis.
 */
const form = reactive({ nama: "", email: "", telepon: "", subjek: "", pesan: "" });
const terkirim = ref(false);

const kirim = () => {
  const isi = [
    form.pesan,
    "",
    `Nama: ${form.nama}`,
    `Email: ${form.email}`,
    form.telepon && `Telepon: ${form.telepon}`,
  ]
    .filter((baris) => baris !== false && baris !== "")
    .join("\n");

  const url = `mailto:${site.email}?subject=${encodeURIComponent(form.subjek)}&body=${encodeURIComponent(isi)}`;
  window.location.href = url;
  terkirim.value = true;
};
</script>

<template>
  <form class="card p-6 sm:p-10" @submit.prevent="kirim">
    <h2 class="text-2xl font-semibold sm:text-3xl">Kirim pesan</h2>
    <p class="text-muted mt-2">Pertanyaan, masukan, atau permintaan doa. Kami membalas dalam 1–2 hari kerja.</p>

    <div class="mt-8 grid gap-5 sm:grid-cols-2">
      <label class="block">
        <span class="mb-2 block text-sm font-semibold">Nama lengkap</span>
        <input v-model.trim="form.nama" type="text" class="field" autocomplete="name" required />
      </label>
      <label class="block">
        <span class="mb-2 block text-sm font-semibold">Email</span>
        <input v-model.trim="form.email" type="email" class="field" autocomplete="email" required />
      </label>
      <label class="block">
        <span class="mb-2 block text-sm font-semibold">
          Nomor telepon <span class="text-muted font-normal">(opsional)</span>
        </span>
        <input v-model.trim="form.telepon" type="tel" class="field" autocomplete="tel" />
      </label>
      <label class="block">
        <span class="mb-2 block text-sm font-semibold">Subjek</span>
        <input v-model.trim="form.subjek" type="text" class="field" placeholder="Misalnya: permintaan doa" required />
      </label>
      <label class="block sm:col-span-2">
        <span class="mb-2 block text-sm font-semibold">Pesan</span>
        <textarea v-model.trim="form.pesan" rows="5" class="field resize-y" required />
      </label>
    </div>

    <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Transition name="fade">
        <p v-if="terkirim" class="text-primary text-sm font-semibold" role="status">
          Aplikasi email Anda sudah dibuka. Tekan kirim di sana untuk menyelesaikan.
        </p>
      </Transition>
      <button type="submit" class="btn btn-primary sm:ml-auto">
        <Send class="size-4" /> Kirim pesan
      </button>
    </div>
  </form>
</template>
