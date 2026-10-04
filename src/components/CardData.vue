<script setup lang="ts">
import Up from '@/assets/icon-up.svg'
import Down from '@/assets/icon-down.svg'
import { useImageUrl } from '../composables/imageUrl'
import { useFormatNumber } from '../composables/formatNumber'

interface Props {
    platform: string
    handle: string
    statNumber: number
    statName: string
    change: number
}

const props = defineProps<Props>()

const { getImageUrl } = useImageUrl()
</script>

<template>
  <section :class="['card-data', `card-data--${platform}`]">
    <p class="sr-only">
      {{ platform }} {{ handle }}
    </p>
    <p
      class="card-data__user-info"
      aria-hidden="true"
    >
      <img
        :src="getImageUrl(platform)"
        :alt="platform"
      >
      {{ handle }}
    </p>
    <p class="sr-only">
      {{ statNumber >= 10000 ? Math.floor(statNumber / 1000) * 1000 : statNumber }} {{ statName }}
    </p>
    <p
      class="card-data__stat-numbers"
      aria-hidden="true"
    >
      <span class="card-data__stat-numbers--number">{{ useFormatNumber(statNumber)
      }}</span>{{
        statName.toUpperCase() }}
    </p>
    <p class="sr-only">
      {{ change >= 0 ? 'increased' : 'decreased' }} {{ Math.abs(change) }} today
    </p>
    <p
      aria-hidden="true"
      :class="['card-data__stat-change', change >= 0 ? 'card-data__stat-change--up' : 'card-data__stat-change--down']"
    >
      <img
        :src="change >= 0 ? Up : Down"
        :alt="change >= 0 ? 'increase' : 'decrease'"
      >
      {{ useFormatNumber(Math.abs(change)) }} Today
    </p>
  </section>
</template>

<style lang="scss" scoped>
.card-data {
    position: relative;
    width: 100%;
    background: $navy-950;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.3125rem;
    padding: $spacing-400 $spacing-800;
    gap: $spacing-300;
    transition: background 300ms ease;

    &:hover {
        background: $navy-900;
    }

    &::before {
        content: '';
        position: absolute;
        height: 4px;
        width: 100%;
        top: 0;
        border-radius: 0.3125rem 0.3125rem 0 0;
    }

    &__user-info {
        @include text-preset-6-bold;
        display: flex;
        align-items: center;
        gap: $spacing-100;
    }

    &__stat-numbers {
        @include text-preset-6-regular;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: $spacing-100;

        &--number {
            @include text-preset-1;
            color: $white;
        }
    }

    &__stat-change {
        @include text-preset-6-bold;
        display: flex;
        align-items: center;
        gap: $spacing-100;

        &--up {
            color: $green-500
        }

        &--down {
            color: $red-500
        }
    }

    &--facebook::before {
        background: $blue-600;
    }

    &--twitter::before {
        background: $blue-500;
    }

    &--instagram::before {
        @include gradient-1(89);
    }

    &--youtube::before {
        background: $red-700;
    }
}

html[data-theme="light"] {
    .card-data {
        background: $navy-50;

        &:hover {
            background: $gray-200;
        }

        &__stat-numbers {
            &--number {
                color: $gray-950;
            }
        }
    }
}
</style>