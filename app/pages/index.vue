<script setup lang="ts">
import { Award, Mail, UserRound, Wrench } from '@lucide/vue'

useHead({
  title: 'Web Portfolio | Dominic Austin Honrado',
})
useSeoMeta({
  description: 'Meet Dominic Austin Honrado, explore his web developer portfolio, technical skills, certifications, and contact information.',
  ogTitle: 'Web Portfolio | Dominic Austin Honrado',
  ogDescription: 'Explore the portfolio, technical skills, and certifications of Dominic Austin Honrado.',
})
useReveal()

const sections = [
  { label: 'About Me', to: '/about', icon: UserRound, style: 'hover:bg-cyan-600' },
  { label: 'Technical Skills', to: '/skills', icon: Wrench, style: 'hover:bg-violet-600' },
  { label: 'Certifications', to: '/certifications', icon: Award, style: 'hover:bg-emerald-600' },
  { label: 'Contact Me', to: '/contact', icon: Mail, style: 'hover:bg-rose-600' },
]
</script>

<template>
  <PageLayout>
    <main class="hero-bg reveal relative mx-auto flex min-h-screen translate-y-6 flex-col items-center justify-center gap-8 px-6 pt-28 pb-10 text-center opacity-0 transition-all duration-700 ease-out">
      <img
        src="/images/Id-Picture.png"
        alt="ID Picture"
        class="floating h-40 w-40 rounded-full border-4 border-white/20 object-cover shadow-2xl transition-shadow duration-300 hover:shadow-cyan-500/50"
      >

      <div class="max-w-2xl">
        <h1 class="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          Dominic Austin Honrado
        </h1>
        <p class="mt-2 text-lg font-medium text-cyan-300 sm:text-xl">Full Stack Developer &amp; Tech Enthusiast</p>
        <p class="mt-4 text-lg leading-relaxed text-slate-300 sm:text-xl">
          Aspiring full stack developer inspired to expand my knowledge and producing real results through innovative solutions.
        </p>
      </div>

      <div class="w-full max-w-4xl">
        <nav aria-label="Portfolio sections" class="grid w-full grid-cols-1 justify-items-center gap-2 rounded-3xl border border-white/10 bg-slate-900/50 p-4 shadow-inner sm:grid-cols-2 md:grid-cols-4">
          <NuxtLink
            v-for="section in sections"
            :key="section.to"
            :to="section.to"
            class="btn btn-ghost h-auto w-full rounded-full px-6 py-3 text-base font-semibold text-slate-300 transition hover:scale-105 hover:text-white hover:shadow-lg"
            :class="section.style"
          >
            <component :is="section.icon" :size="18" aria-hidden="true" />
            {{ section.label }}
          </NuxtLink>
        </nav>
      </div>
    </main>
  </PageLayout>
</template>
