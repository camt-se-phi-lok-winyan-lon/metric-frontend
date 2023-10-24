<script setup lang="ts">

</script>

<template>

  <h1 class="text-amber-500">Hello Student</h1>
  <RouterLink :to="{name: 'input-page'}"> Home</RouterLink>

  <RouterLink :to="{name: 'input-page'}"> Result</RouterLink>

  <RouterView/>
</template>

<style scoped>

</style>