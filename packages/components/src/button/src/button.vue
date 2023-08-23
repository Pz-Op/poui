<template>
  <button class="po_button">
    <slot></slot>
  </button>
</template>
<script setup></script>
<style scoped lang="scss">
.po_button {
  --pri-color: 96, 165, 250;
  --pri-color-o100: rgba(var(--pri-color), 1);
  --pri-color-o20: rgba(var(--pri-color), 0.2);
  @apply border-none px-6 py-2 rounded-8 text-base font-bold cursor-pointer
   bg-[var(--pri-color-o20)] text-black;

  &.po_button-primary {
    @apply bg-[var(--pri-color-o100)] text-white;
  }
  &.po_button-outline {
    box-shadow: inset 0 0 0 2px var(--pri-color-o100);
  }
  &.po_button-text,
  &.po_button-outline {
    @apply bg-[rgba(0,0,0,0)] text-[var(--pri-color-o100)];
  }
}
</style>
