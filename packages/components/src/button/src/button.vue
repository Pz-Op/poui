<script setup>
import { computed, useAttrs } from 'vue'

import Ripple from './../../animations/src/ripple/ripple.vue'

const attrs = useAttrs()
const type_map = {
  primary: {
    class: 'po_button-primary',
  },
  outline: {
    class: 'po_button-outline',
  },
  text: {
    class: 'po_button-text',
  },
}

// 计算
const type = computed(() => {
  if (attrs.type === undefined)
    return ''
  else
    return type_map[attrs.type].class
})
</script>

<template>
  <button class="po_button" :class="type">
    <Ripple />
    <div class="text">
      <slot />
    </div>
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
