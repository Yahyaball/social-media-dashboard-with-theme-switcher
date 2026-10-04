import { defineStore } from "pinia";
import { ref } from "vue";

export interface Overview {
  id: number;
  name: string;
  count: number;
  platform: string;
  percentage: number;
}
export const useOverviewStore = defineStore("overview", () => {
  const overview = ref<Overview[]>([
    {
      id: 1,
      name: "Page Views",
      count: 87,
      platform: "facebook",
      percentage: 3,
    },
    {
      id: 2,
      name: "Likes",
      count: 52,
      platform: "facebook",
      percentage: -2,
    },
    {
      id: 3,
      name: "Likes",
      count: 5462,
      platform: "instagram",
      percentage: 2257,
    },
    {
      id: 4,
      name: "Profile Views",
      count: 52000,
      platform: "instagram",
      percentage: 1375,
    },
    {
      id: 5,
      name: "Retweets",
      count: 117,
      platform: "twitter",
      percentage: 303,
    },
    {
      id: 6,
      name: "Likes",
      count: 507,
      platform: "twitter",
      percentage: 553,
    },
    {
      id: 7,
      name: "Likes",
      count: 107,
      platform: "youtube",
      percentage: -19,
    },
    {
      id: 8,
      name: "Total Views",
      count: 1407,
      platform: "youtube",
      percentage: -12,
    },
  ]);
  return { overview };
});
