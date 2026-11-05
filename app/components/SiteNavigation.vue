<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
]

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="fixed top-0 z-10 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-sm">
    <nav class="mx-auto max-w-6xl px-6 py-4">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex w-full items-center justify-between sm:w-auto">
          <NuxtLink to="/" class="text-xl font-bold">Dominic Honrado</NuxtLink>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 p-2 text-slate-300 transition hover:text-white sm:hidden"
            :aria-expanded="isMenuOpen"
            aria-controls="nav-links"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="sr-only">Toggle navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
        <div
          id="nav-links"
          class="flex-col gap-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-end"
          :class="{ hidden: !isMenuOpen }"
        >
          <NuxtLink
            v-for="(link, index) in links"
            :key="link.to"
            :to="link.to"
            class="block text-slate-300 transition"
            :class="[
              index < links.length - 1 ? 'pb-2' : '',
              route.path === link.to ? 'font-semibold text-white' : 'hover:text-white',
            ]"
            :aria-current="route.path === link.to ? 'page' : undefined"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
