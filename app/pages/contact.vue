<script setup lang="ts">
useHead({ title: 'Contact Me | Dominic Austin Honrado' })
useReveal()
</script>

<template>
  <div>
    <SiteNavigation />
    <main class="mx-auto max-w-4xl px-6 pt-24 pb-8">
      <div class="mb-8 text-center">
        <h1 class="mb-4 text-4xl font-bold sm:text-5xl">Contact Me</h1>
        <p class="text-lg text-slate-300 sm:text-xl">Feel free to reach out if you have any questions or would like to collaborate!</p>
      </div>

      <div class="space-y-6">
        <section class="reveal translate-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 opacity-0 shadow-2xl transition-all duration-700 ease-out">
          <h2 class="mb-4 text-2xl font-semibold text-emerald-400">Get In Touch</h2>
          <p class="mb-6 text-slate-300">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
          <div class="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.linkedin.com/in/dominic-honrado"
              target="_blank"
              rel="noopener noreferrer"
              class="reveal translate-y-6 rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-5 text-left opacity-0 shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-slate-900/95 hover:shadow-2xl"
            >
              <img src="/images/Icons/LinkedIn-Icon.svg" alt="LinkedIn Icon" class="mb-3 h-12 w-12 object-contain">
              <p class="text-sm uppercase tracking-[0.35em] text-sky-400">LinkedIn</p>
              <p class="mt-3 text-xl font-semibold">Connect professionally</p>
              <p class="mt-2 text-slate-400">Share your profile and let's discuss opportunities.</p>
            </a>

            <a
              href="https://github.com/DominicHonrado"
              target="_blank"
              rel="noopener noreferrer"
              class="reveal translate-y-6 rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-5 text-left opacity-0 shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-slate-900/95 hover:shadow-2xl"
            >
              <img src="/images/Icons/Github-Icon.svg" alt="GitHub Icon" class="mb-3 h-12 w-12 object-contain">
              <p class="text-sm uppercase tracking-[0.35em] text-sky-400">GitHub</p>
              <p class="mt-3 text-xl font-semibold">View my projects</p>
              <p class="mt-2 text-slate-400">Browse code samples, apps, and repositories I've built.</p>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
