import { defineStore } from "pinia";
import { computed, ref } from "vue";

export interface Statistics {
  id: number;
  platform: string;
  handle: string;
  statNumber: number;
  statName: string;
  change: number;
}

export const useStatsStore = defineStore("stats", () => {
  const stats = ref<Statistics[]>([
    {
      id: 1,
      platform: "facebook",
      handle: "@nathanf",
      statNumber: 1987,
      statName: "followers",
      change: 12,
    },
    {
      id: 2,
      platform: "twitter",
      handle: "@nathanf",
      statNumber: 1044,
      statName: "followers",
      change: 99,
    },
    {
      id: 3,
      platform: "instagram",
      handle: "@realnathanf",
      statNumber: 11734,
      statName: "followers",
      change: 1099,
    },
    {
      id: 4,
      platform: "youtube",
      handle: "Nathan F.",
      statNumber: 8239,
      statName: "subscribers",
      change: -144,
    },
  ]);

  const totalFollowers = computed<number>(() => {
    return stats.value.reduce((sum, s) => sum + s.statNumber, 0);
  });

  return { stats, totalFollowers };
});
