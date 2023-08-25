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
  'po_button relative z-[2] cursor-pointer m-0 overflow-hidden border-0 '
  + 'text-[#666] font-bold '
  + 'before:(absolute left-0 top-0 z-[-1] h-full w-full transition-colors duration-500 content-[\'\'] hover:bg-[var(--pri-color-o20)]) '
  + 'disabled:cursor-not-allowed disabled:text-opacity-40'
  , {
    variants: {
      potype: {
        primary: 'bg-blue text-white '
        + 'transition-shadow duration-500 hover:shadow-lg active:shadow-none',
        default: 'bg-[#eee]',
        text: 'bg-transparent',
      },
      size: {
        sm: 'text-sm px-3 py-2',
        md: 'text-base px-6 py-3',
        lg: 'text-lg px-8 py-4 ',
      },
    },
    defaultVariants: {
      potype: 'default',
      size: 'md',
    },
  })
</script>

<template>
  <button
    type="button"
    class=""
    :class="[buttonCss({ potype, size })]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@use './button.scss'
</style>
