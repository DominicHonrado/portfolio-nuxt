<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  accent?: 'sky' | 'emerald' | 'purple' | 'rose'
}>(), {
  accent: 'sky',
})

const accentClasses = {
  sky: 'text-sky-400',
  emerald: 'text-emerald-400',
  purple: 'text-purple-400',
  rose: 'text-rose-400',
}
</script>

<template>
  <section class="card reveal translate-y-6 rounded-3xl border border-white/10 bg-slate-900/70 opacity-0 shadow-2xl transition-all duration-700 ease-out">
    <div class="card-body p-6 sm:p-8">
      <h2 class="mb-4 text-2xl font-semibold sm:text-3xl" :class="accentClasses[accent]">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>
