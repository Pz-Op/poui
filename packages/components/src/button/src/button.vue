<script setup lang="ts">
import { cva } from 'cva'

const { potype, disabled } = defineProps<
  {
    potype?: 'primary' | 'default' | 'text'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }
>()

const buttonCss = cva(
  'relative z-[2] m-0 cursor-pointer overflow-hidden border-0 rounded-2 before:(absolute left-0 top-0 z-[-1] h-full w-full transition-colors content-[\'\'] hover:bg-[rgba(0,0,0,0.1)]) disabled:cursor-not-allowed', {
    variants: {
      potype: {
        primary: 'bg-blue',
        default: 'bg-[#eee]',
        text: 'bg-transparent',
      },
    },
    defaultVariants: {
      potype: 'default',
    },
  })
</script>

<template>
  <button
    type="button"
    class=""
    :class="[buttonCss({ potype })]"
    :disabled="disabled"
  >
    <p class="px-6 py-4 font-bold">
      <slot />
    </p>
  </button>
</template>
