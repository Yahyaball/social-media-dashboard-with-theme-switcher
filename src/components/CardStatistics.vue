<script setup lang="ts">
import Up from '@/assets/icon-up.svg'
import Down from '@/assets/icon-down.svg'
import { useImageUrl } from '../composables/imageUrl';
import { useFormatNumber } from '../composables/formatNumber';

interface Props {
    platform: string
    count: number
    name: string
    percentage: number
}

const props = defineProps<Props>()
const { getImageUrl } = useImageUrl()
</script>

<template>
  <section class="card-statistics">
    <p class="sr-only">
      {{ name }} {{ count >= 10000 ? Math.floor(count / 1000) * 1000 : count }}
    </p>
    <p
      class="card-statistics__left"
      aria-hidden="true"
    >
      {{ name }}<span class="card-statistics__left--number">{{
        useFormatNumber(Math.abs(count))
      }}</span>
    </p>
    <p class="card-statistics__right">
      <img
        :src="getImageUrl(platform)"
        :alt="platform"
      >
      <span class="sr-only">{{ percentage >= 0 ? 'increased' : 'decreased' }} {{ Math.abs(percentage) }}%</span>
      <span
        aria-hidden="true"
        :class="['card-statistics__percentage', percentage >= 0 ? 'card-statistics__percentage--increase' : 'card-statistics__percentage--decrease']"
      ><img
        :src="percentage >= 0 ? Up : Down"
        :alt="percentage >= 0 ? 'increase' : 'decrease'"
      >{{
        Math.abs(percentage) }}%</span>
    </p>
  </section>
</template>

<style lang="scss" scoped>
.card-statistics {
    width: 100%;
    background: $navy-950;
    display: flex;
    justify-content: space-between;
    padding: $spacing-300;
    border-radius: 0.3125rem;
    transition: background 300ms ease;

    &__left {
        @include text-preset-5;
        display: flex;
        flex-direction: column;
        gap: $spacing-300;

        &--number {
            @include text-preset-2;
            color: $white;
        }
    }

    &__right {
        @include text-preset-5;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: $spacing-500;

    }

    &__percentage {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &--increase {
            color: $green-500;
        }

        &--decrease {
            color: $red-500;
        }
    }

    &:hover {
        background: $navy-900;
    }
}

html[data-theme="light"] {
    .card-statistics {
        background: $navy-50;

        &__left {
            &--number {
                color: $gray-950;
            }
        }

        &:hover {
            background: $gray-200;
        }
    }
}
</style>