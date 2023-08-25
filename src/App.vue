<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header class="bg-[var(--md-sys-color-background)]">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125">

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <div class="mt-4 flex flex-wrap gap-4">
        <Button potype="primary">
          1255
        </Button>
        <Button disabled>
          1255
        </Button>
        <Button>1255</Button>
        <Button potype="text">
          1255
        </Button>
        <Button potype="outline">
          1255
        </Button>
      </div>
      <div class="mt-4 flex flex-wrap gap-4">
        <Button size="sm" potype="primary">
          1255
        </Button>
        <Button size="sm" disabled>
          1255
        </Button>
        <Button size="sm">
          1255
        </Button>
        <Button size="sm" potype="text">
          1255
        </Button>
        <Button size="sm" potype="outline">
          1255
        </Button>
      </div>
      <div class="mt-4 flex flex-wrap gap-4">
        <Button size="lg" potype="primary">
          1255
        </Button>
        <Button size="lg" disabled>
          1255
        </Button>
        <Button size="lg">
          1255
        </Button>
        <Button size="lg" potype="text">
          1255
        </Button>
        <Button size="lg" potype="outline">
          1255
        </Button>
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
