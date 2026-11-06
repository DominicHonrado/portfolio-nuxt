<script setup lang="ts">
import { ArrowLeft, CircleAlert } from '@lucide/vue'

useHead({
  title: 'Page Not Found | Dominic Austin Honrado',
})
useSeoMeta({
  description: 'The page you are looking for could not be found.',
  robots: 'noindex, nofollow',
})

if (import.meta.server) {
  setResponseStatus(404, 'Page Not Found')
}
</script>

<template>
  <PageLayout>
    <main class="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
      <CircleAlert class="mb-6 text-cyan-400" :size="56" aria-hidden="true" />
      <p class="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Error 404</p>
      <h1 class="mb-4 text-4xl font-bold sm:text-5xl">Page not found</h1>
      <p class="mb-8 max-w-xl text-lg text-slate-300">
        The page may have moved or the address may be incorrect.
      </p>
      <NuxtLink to="/" class="btn btn-primary">
        <ArrowLeft :size="18" aria-hidden="true" />
        Back to Home
      </NuxtLink>
    </main>
  </PageLayout>
</template>
