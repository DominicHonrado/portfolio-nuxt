<script setup lang="ts">
useHead({ title: 'Technical Skills | Dominic Austin Honrado' })
useReveal()

const languages = [
  { name: 'C', icon: 'C-Icon.png', alt: 'C Icon', description: 'Systems programming, performance, and low-level problem solving.' },
  { name: 'Java', icon: 'Java-Icon.svg', alt: 'Java Icon', description: 'Object-oriented design, backend development, and desktop applications.' },
  { name: 'MySQL', icon: 'MySQL-Icon.svg', alt: 'MySQL Icon', description: 'Database querying, data modeling, and reliable information retrieval.' },
  { name: 'HTML', icon: 'HTML-Icon.svg', alt: 'HTML Icon', description: 'The standard markup language used to create and structure web pages.' },
  { name: 'CSS', icon: 'CSS-Icon.svg', alt: 'CSS Icon', description: 'The language used to describe the presentation of a document written in HTML.' },
  { name: 'JavaScript', icon: 'Javascript-Icon.svg', alt: 'JavaScript Icon', description: 'The programming language used to create interactive web pages.' },
]

const tools = [
  { name: 'VS Code', icon: 'VSCode-Icon.svg', alt: 'VS Code Icon', description: 'Lightweight code editor with powerful extensions and debugging capabilities.' },
  { name: 'Git', icon: 'Git-Icon.svg', alt: 'Git Icon', description: 'Version control system for tracking changes in source code during software development.' },
  { name: 'GitHub', icon: 'Github-Icon.svg', alt: 'GitHub Icon', description: 'Cloud-based hosting service for version control and collaboration.' },
  { name: 'Android Studio', icon: 'AndroidStudio-Icon.svg', alt: 'Android Studio Icon', description: 'Official IDE for Android development.' },
]
</script>

<template>
  <div>
    <SiteNavigation />
    <main class="mx-auto max-w-4xl px-6 pt-24 pb-8">
      <div class="mb-8 text-center">
        <h1 class="mb-4 text-4xl font-bold sm:text-5xl">Technical Skills</h1>
        <p class="text-lg text-slate-300 sm:text-xl">Here are the languages and tools I'm proficient in.</p>
      </div>

      <div class="space-y-6">
        <section class="reveal translate-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 opacity-0 shadow-2xl transition-all duration-700 ease-out">
          <h2 class="mb-4 text-2xl font-semibold text-sky-400">Programming Languages</h2>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div
              v-for="skill in languages"
              :key="skill.name"
              class="reveal translate-y-6 rounded-2xl border border-white/10 bg-slate-900/75 p-4 text-center opacity-0 shadow-xl transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-slate-900/90 hover:shadow-2xl"
            >
              <img :src="`/images/Icons/${skill.icon}`" :alt="skill.alt" class="mx-auto mb-3 h-16 w-20 object-contain">
              <h3 class="text-lg font-semibold">{{ skill.name }}</h3>
              <p class="text-sm text-slate-400">{{ skill.description }}</p>
            </div>
          </div>
        </section>

        <section class="reveal translate-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 opacity-0 shadow-2xl transition-all duration-700 ease-out">
          <h2 class="mb-4 text-2xl font-semibold text-emerald-400">Programming Tools</h2>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <div
              v-for="tool in tools"
              :key="tool.name"
              class="reveal translate-y-6 rounded-2xl border border-white/10 bg-slate-900/75 p-4 text-center opacity-0 shadow-xl transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-slate-900/90 hover:shadow-2xl"
            >
              <img :src="`/images/Icons/${tool.icon}`" :alt="tool.alt" class="mx-auto mb-3 h-16 w-20 object-contain">
              <h3 class="text-lg font-semibold">{{ tool.name }}</h3>
              <p class="text-sm text-slate-400">{{ tool.description }}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
