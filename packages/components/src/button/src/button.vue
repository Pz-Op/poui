<script setup>

</script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button{
    margin: 0.5rem;
    padding: 0.5rem 1rem ;
    background: #eee;
    border: none;
    cursor: pointer;
}
</style>
