<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  description: 'Explore the portfolio of Dominic Austin Honrado, an aspiring full stack developer and technology enthusiast.',
  ogSiteName: 'Dominic Austin Honrado Portfolio',
  twitterCard: 'summary',
})
</script>
