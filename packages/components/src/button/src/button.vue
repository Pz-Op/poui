<script setup lang="ts">
// import Ripple from './../../animations'
</script>

<template>
  <button class="po_button">
    <Ripple />
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use 'button.scss';
.po_button {
  //基础样式
  @apply border-none px-6 py-2 rounded-8 text-base font-bold cursor-pointer
   bg-[var(--pri-color-o20)] text-black;

  //主色
  &.po_button-primary {
    @apply bg-[var(--pri-color-o100)] text-white;
  }

  //描边
  &.po_button-outline {
    box-shadow: inset 0 0 0 2px var(--pri-color-o100);
  }

  //纯文字
  &.po_button-text,
  &.po_button-outline {
    @apply bg-[rgba(0,0,0,0)] text-[var(--pri-color-o100)];
  }
}
</style>
