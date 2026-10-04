<script setup lang="ts">
import CardData from './components/CardData.vue';
import NavigationBar from './components/NavigationBar.vue';
import { useDark, useToggle } from "@vueuse/core";
import { useStatsStore } from './stores/stats';
import { storeToRefs } from 'pinia';
import CardStatistics from './components/CardStatistics.vue';
import { useOverviewStore } from './stores/overview.ts';
import { MotionConfig } from 'motion-v';

const storeStatistics = useStatsStore()
const storeOverview = useOverviewStore()
const { stats, totalFollowers } = storeToRefs(storeStatistics)
const { overview } = storeToRefs(storeOverview)
const isDark = useDark({
  selector: "html",
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <MotionConfig reduced-motion="user">
    <header>
      <NavigationBar
        :is-dark="isDark"
        :total-followers="totalFollowers"
        @toggle="() => toggleDark()"
      />
    </header>
    <main>
      <div class="stats-container">
        <CardData
          v-for="s in stats"
          :key="s.id"
          :platform="s.platform"
          :handle="s.handle"
          :stat-number="s.statNumber"
          :stat-name="s.statName"
          :change="s.change"
        />
      </div>
      <div class="overview-container">
        <h2 class="overview-container__heading">
          Overview - Today
        </h2>
        <div class="overview-container__card">
          <CardStatistics
            v-for="o in overview"
            :key="o.id"
            :platform="o.platform"
            :count="o.count"
            :name="o.name"
            :percentage="o.percentage"
          />
        </div>
      </div>
    </main>
  </MotionConfig>
</template>

<style lang="scss">
@use '@/styles/main.scss';

html {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: $spacing-300;
  padding-block: 2.25rem 2.9375rem;
}

body {
  width: min(100%, 33.875rem);
  background: $gray-950;
  color: $gray-400;

  @include desktop {
    padding-inline: $spacing-400;
    width: min(100%, 73.75rem);
  }
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.9375rem, 1fr));
  gap: $spacing-300;
  margin-bottom: $spacing-600;
}

.overview-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-300;

  &__heading {
    @include text-preset-4;
    color: $white;
  }

  &__card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.9375rem, 1fr));
    gap: $spacing-200;

    @include tablet {
      gap: $spacing-300;
    }
  }
}

html[data-theme="light"] {
  body {
    background: $white;
    color: $gray-650;
  }

  .overview-container {
    &__heading {
      color: $gray-650;
    }
  }
}
</style>