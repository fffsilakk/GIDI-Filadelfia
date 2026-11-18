import { computed } from "vue";
import { HARI, jadwal } from "@/data/kegiatan";

/** Waktu sekarang di zona WIT (Asia/Jayapura), apa pun zona perangkat pengunjung. */
function nowInWIT() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jayapura",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

const startMinutes = (jam) => {
  const [h, m] = jam.split("–")[0].trim().split(".").map(Number);
  return h * 60 + m;
};

export function todayIndexWIT() {
  return nowInWIT().day;
}

/** Ibadah/kegiatan terdekat berikutnya berdasarkan jadwal mingguan. */
export function useNextService() {
  return computed(() => {
    const now = nowInWIT();
    const nowWeek = now.day * 1440 + now.minutes;
    const ranked = jadwal
      .map((item) => {
        let diff = item.hariIndex * 1440 + startMinutes(item.jam) - nowWeek;
        if (diff < 0) diff += 7 * 1440;
        return { item, diff };
      })
      .sort((a, b) => a.diff - b.diff);

    const { item, diff } = ranked[0];
    let when = HARI[item.hariIndex];
    if (diff < 1440 && item.hariIndex === now.day) when = "Hari ini";
    else if (diff < 2 * 1440 && item.hariIndex === (now.day + 1) % 7) when = "Besok";

    return { ...item, when, hari: HARI[item.hariIndex] };
  });
}
