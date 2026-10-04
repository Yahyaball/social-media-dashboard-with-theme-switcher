<script setup lang="ts">
import { motion } from 'motion-v';
import { useBreakpoint } from '../composables/breakpoint';

interface Props {
  isDark: boolean
  totalFollowers: number
}

defineProps<Props>()
const { breakpoints } = useBreakpoint()
const isDesktop = breakpoints.desktop
const emit = defineEmits(['toggle'])
</script>

<template>
  <div class="navigation-bar">
    <div class="navigation-bar__text">
      <h1 class="navigation-bar__heading">
        Social Media Dashboard
      </h1>
      <p class="navigation-bar__total">
        Total Followers: {{ Intl.NumberFormat('en-us').format(totalFollowers) }}
      </p>
    </div>
    <div
      v-if="!isDesktop"
      class="navigation-bar__line"
    />
    <div class="navigation-bar__toggle">
      <span
        id="dark-mode-label"
        class="navigation-bar__label"
      >Dark Mode</span>
      <button
        type="button"
        role="switch"
        :aria-checked="isDark"
        aria-labelledby="dark-mode-label"
        :class="['navigation-bar__switch', isDark ? 'navigation-bar__switch--on' : 'navigation-bar__switch--off']"
        @click="emit('toggle')"
      >
        <motion.div
          :data-state="isDark"
          layout
          class="navigation-bar__handle"
          :transition="{ type: 'spring', visualDuration: 0.25, bounce: 0.25 }"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-bar {
  display: flex;
  flex-direction: column;
  gap: $spacing-300;
  margin-bottom: $spacing-400;

  @include desktop {
    flex-direction: row;
    justify-content: space-between;
  }

  &__heading {
    @include text-preset-4;
    color: $white;
  }

  &__total {
    @include text-preset-5;
  }

  &__line {
    height: 1px;
    width: 100%;
    background: $navy-900;
  }

  &__toggle {
    @include text-preset-5;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include desktop {
      justify-content: flex-start;
      gap: $spacing-200;
    }
  }

  &__handle {
    background: $navy-950;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 62.5rem;

  }

  &__switch {
    width: 3.125rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    border: none;
    @include gradient-2(244);
    cursor: pointer;
    display: flex;
    padding: 0.1875rem;

    &--on {
      justify-content: flex-start;

      &:hover {
        &>.navigation-bar__handle {
          background: $navy-900;
        }
      }
    }

    &--off {
      justify-content: flex-end;
      background: $gray-400;

      &>.navigation-bar__handle {
        background: $navy-50;
      }

      &:hover {
        @include gradient-2(116);
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: clamp(14.6875rem, 14.1508rem + 2.2901vw, 15.25rem);
    background: $gray-900;
    left: 0;
    top: 0;
    z-index: -1;
    border-radius: 0 0 1.25rem 1.25rem;
  }
}

html[data-theme="light"] {
  .navigation-bar {
    &__heading {
      color: $gray-950;
    }

    &__line {
      background: $gray-600;
    }

    &::before {
      background: $blue-50;
    }
  }
}
</style>