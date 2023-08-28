<script setup lang="ts">
import { cva } from 'cva'

const { potype, disabled } = defineProps<
  {
    potype?: 'primary' | 'default' | 'text' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }
>()

const buttonCss = cva(
  'relative z-[2] cursor-pointer m-0 overflow-hidden border-0 '
  + 'text-[--poui-button-color-on-defualt] font-bold '
  + 'disabled:(cursor-not-allowed opacity-50)'
  , {
    variants: {
      potype: {
        primary: 'bg-[var(--poui-button-color-primary)] text-[var(--poui-button-color-on-primary)] '
        + 'transition-shadow duration-500 hover:shadow-lg active:shadow-none',
        default: 'bg-[var(--poui-button-color-defualt)]',
        text: 'bg-transparent text-[var(--poui-button-color-primary)]',
        outline: 'bg-transparent text-[var(--poui-button-color-primary)] shadow-[inset_0_0_0_2px_var(--poui-button-color-primary)]',
      },
      size: {
        sm: 'text-sm px-3 py-2',
        md: 'text-base px-4 py-3',
        lg: 'text-lg px-6 py-4 ',
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
    class="group/btn po_button"
    :class="[buttonCss({ potype, size })]"
    :disabled="disabled"
  >
    <div class="po_button-mask absolute left-0 top-0 z-[-1] h-full w-full opacity-08 transition-colors duration-120 group-hover/btn:bg-[var(--poui-button-color-hovered)]" />
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.po_button {
  --poui-button-color-primary:var(--md-sys-color-primary);
  --poui-button-color-on-primary:var(--md-sys-color-on-primary);
  --poui-button-color-on-defualt:var(--poui-button-color-on-defualt);
  --poui-button-color-defualt:var(--md-sys-color-surface-variant);
  --poui-button-color-hovered:var(--md-sys-color-shadow);

}
</style>
