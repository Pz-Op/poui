<script setup lang="ts">
import { useAttrs } from 'vue'

const bgs = {
  primary: 'bg-[var(--pri-color-o100)]',
  default: 'bg-[#eee]',
  text: 'bg-transparent',
}
const attrs = useAttrs()
function getBg() {
  // 使用三元运算符判断attrs是否存在potype属性，如果存在则返回bgs[attrs.potype as keyof typeof bgs]，否则返回'default'
  return attrs.potype ? bgs[attrs.potype as keyof typeof bgs] : bgs.default
}
</script>

<template>
  <div class="po_button overflow-hidden rounded-2" :class="[getBg()]">
    <button
      type="button"
      v-bind="$attrs"
      class="relative z-[2] m-0 cursor-pointer border-0 bg-transparent before:(absolute left-0 top-0 z-[-1] h-full w-full bg-transparent transition-colors content-[''] hover:bg-[rgba(0,0,0,0.1)]) disabled:cursor-not-allowed"
    >
      <p class="px-6 py-4 font-bold">
        <slot />
      </p>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use './button.scss'
</style>
