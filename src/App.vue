<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125">

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <div class="mt-4 flex gap-4">
        <Button class="po_button-primary">
          1255
        </Button>
        <Button class="po_button-second">
          1255
        </Button>
        <Button class="po_button-outline">
          1255
        </Button>
        <Button class="po_button-text">
          1255
        </Button>
        <Ripple />
      </div>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
