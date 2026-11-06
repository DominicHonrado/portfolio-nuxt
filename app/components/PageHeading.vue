<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <header class="mb-8 text-center">
    <h1 class="mb-4 text-4xl font-bold sm:text-5xl">{{ title }}</h1>
    <p class="text-lg text-slate-300 sm:text-xl">{{ description }}</p>
  </header>
</template>
