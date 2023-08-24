<script setup>

</script>

<template>
  <div class="ripple" />
</template>

<style scoped lang="scss">
@use './ripple.scss';
.ripple{
  inset: 0;

    &::before{
        @apply absolute top-0 left-0 bg-black;
    }
}
</style>
