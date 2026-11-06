<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

useHead({
  title: 'Contact Me | Dominic Austin Honrado',
})
useSeoMeta({
  description: 'Contact Dominic Austin Honrado on LinkedIn or explore his code and projects on GitHub.',
  ogTitle: 'Contact Me | Dominic Austin Honrado',
  ogDescription: 'Connect with Dominic Austin Honrado about opportunities, projects, and technology.',
})
useReveal()
</script>

<template>
  <PageLayout>
    <main class="mx-auto max-w-4xl px-6 pt-24 pb-8">
      <PageHeading
        title="Contact Me"
        description="Feel free to reach out if you have any questions or would like to collaborate!"
      />

      <div class="space-y-6">
        <ContentSection title="Get In Touch" accent="emerald">
          <p class="mb-6 text-slate-300">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
          <div class="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.linkedin.com/in/dominic-honrado"
              target="_blank"
              rel="noopener noreferrer"
              class="card reveal translate-y-6 rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-5 text-left opacity-0 shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-slate-900/95 hover:shadow-2xl"
            >
              <img src="/images/Icons/LinkedIn-Icon.svg" alt="LinkedIn Icon" class="mb-3 h-12 w-12 object-contain">
              <p class="flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-sky-400">
                LinkedIn <ArrowUpRight :size="16" aria-hidden="true" />
              </p>
              <p class="mt-3 text-xl font-semibold">Connect professionally</p>
              <p class="mt-2 text-slate-400">Share your profile and let's discuss opportunities.</p>
            </a>

            <a
              href="https://github.com/DominicHonrado"
              target="_blank"
              rel="noopener noreferrer"
              class="card reveal translate-y-6 rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-5 text-left opacity-0 shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-slate-900/95 hover:shadow-2xl"
            >
              <img src="/images/Icons/Github-Icon.svg" alt="GitHub Icon" class="mb-3 h-12 w-12 object-contain">
              <p class="flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-sky-400">
                GitHub <ArrowUpRight :size="16" aria-hidden="true" />
              </p>
              <p class="mt-3 text-xl font-semibold">View my projects</p>
              <p class="mt-2 text-slate-400">Browse code samples, apps, and repositories I've built.</p>
            </a>
          </div>
        </ContentSection>
      </div>
    </main>
  </PageLayout>
</template>
