import { ref } from "vue";

/** Layar pembuka hanya tampil sekali per sesi browser. */
const KEY = "gf-intro-seen";

let seen = false;
try {
  seen = sessionStorage.getItem(KEY) === "1";
} catch {
  seen = false;
}

const showIntro = ref(!seen);
const introDone = ref(seen);

export function useIntro() {
  function finishIntro() {
    showIntro.value = false;
    introDone.value = true;
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* abaikan */
    }
  }
  return { showIntro, introDone, finishIntro };
}
