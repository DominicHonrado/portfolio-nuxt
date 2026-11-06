<script setup lang="ts">
import { ArrowLeft, CircleAlert } from '@lucide/vue'

const props = defineProps<{
  error: {
    statusCode: number
    statusMessage?: string
    message?: string
  }
}>()

const isNotFound = computed(() => props.error.statusCode === 404)

useHead({
  title: 'Page Not Found | Dominic Austin Honrado',
})
useSeoMeta({
  description: 'The page you are looking for could not be found.',
  robots: 'noindex, nofollow',
})

function returnHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <PageLayout>
    <main class="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
      <CircleAlert class="mb-6 text-cyan-400" :size="56" aria-hidden="true" />
      <p class="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        Error {{ error.statusCode }}
      </p>
      <h1 class="mb-4 text-4xl font-bold sm:text-5xl">
        {{ isNotFound ? 'Page not found' : 'Something went wrong' }}
      </h1>
      <p class="mb-8 max-w-xl text-lg text-slate-300">
        {{ isNotFound ? 'The page may have moved or the address may be incorrect.' : (error.statusMessage || error.message || 'Please try again or return to the home page.') }}
      </p>
      <button type="button" class="btn btn-primary" @click="returnHome">
        <ArrowLeft :size="18" aria-hidden="true" />
        Back to Home
      </button>
    </main>
  </PageLayout>
</template>
