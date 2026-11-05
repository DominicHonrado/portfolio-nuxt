<script setup lang="ts">
useHead({ title: 'Certifications | Dominic Austin Honrado' })
useReveal()

const certificates = [
  {
    title: 'Information Technology Specialist (Java)',
    description: 'Java language fundamentals and software development concepts.',
    image: '/images/Certificates/Cert-Java.png',
    alt: 'Information Technology Specialist (Java) Certificate',
    url: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=472&cvid=3kv2PLH9H3p/mixLwfAxQg==',
  },
  {
    title: 'Microsoft Office Specialist (Word)',
    description: 'Document creation, formatting, and professional workflow skills.',
    image: '/images/Certificates/Cert-Word.png',
    alt: 'Microsoft Office Specialist (Word) Certificate',
    url: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=498&cvid=X/m/khmBfw34TdTD54qMdA==',
  },
  {
    title: 'Microsoft Office Specialist (PowerPoint)',
    description: 'Presentation design, slide structure, and visual communication.',
    image: '/images/Certificates/Cert-PPT.png',
    alt: 'Microsoft Office Specialist (PowerPoint) Certificate',
    url: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=500&cvid=qCivG9l3gfF6cPT9hQV2Kg==',
  },
]

const selectedCertificate = ref<(typeof certificates)[number] | null>(null)

function closeModal() {
  selectedCertificate.value = null
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

watch(selectedCertificate, (certificate) => {
  document.body.style.overflow = certificate ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <SiteNavigation />
    <main class="mx-auto max-w-4xl px-6 pt-24 pb-8">
      <div class="mb-8 text-center">
        <h1 class="mb-4 text-4xl font-bold sm:text-5xl">Certifications</h1>
        <p class="text-lg text-slate-300 sm:text-xl">Here are the certifications I have obtained.</p>
      </div>

      <div class="space-y-6">
        <section class="reveal translate-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 opacity-0 shadow-2xl transition-all duration-700 ease-out">
          <h2 class="mb-4 text-2xl font-semibold text-sky-400">Verified Skills</h2>
          <p class="mb-6 text-slate-300">
            These certificates demonstrate the training and knowledge I've earned across programming, productivity, and presentation tools.
          </p>
          <div class="grid items-stretch gap-4 sm:grid-cols-3">
            <div
              v-for="certificate in certificates"
              :key="certificate.title"
              class="reveal flex h-full translate-y-6 flex-col rounded-2xl border border-white/10 bg-slate-900/75 p-4 text-center opacity-0 shadow-xl transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-slate-900/90 hover:shadow-2xl"
            >
              <img
                :src="certificate.image"
                :alt="certificate.alt"
                class="mx-auto mb-3 h-auto w-auto cursor-pointer rounded-lg"
                role="button"
                tabindex="0"
                @click="selectedCertificate = certificate"
                @keydown.enter="selectedCertificate = certificate"
                @keydown.space.prevent="selectedCertificate = certificate"
              >
              <h3 class="mb-4 text-lg font-semibold">{{ certificate.title }}</h3>
              <a
                :href="certificate.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-auto inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
              >
                View Official Certificate
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>

    <div
      v-if="selectedCertificate"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      :aria-label="selectedCertificate.title"
      @click.self="closeModal"
    >
      <div class="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
        <div class="flex items-center justify-between border-b border-white/10 p-6">
          <h2 class="text-2xl font-semibold text-white">{{ selectedCertificate.title }}</h2>
          <button
            type="button"
            class="text-2xl text-slate-400 transition hover:text-white"
            aria-label="Close certificate"
            @click="closeModal"
          >
            &times;
          </button>
        </div>
        <div class="p-6">
          <img
            :src="selectedCertificate.image"
            :alt="selectedCertificate.alt"
            class="mb-4 h-auto max-h-[60vh] w-full rounded-lg object-contain"
          >
          <p class="mb-4 text-slate-300">{{ selectedCertificate.description }}</p>
          <div class="flex gap-3">
            <a
              :href="selectedCertificate.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white transition hover:bg-emerald-700"
            >
              View Official Certificate
            </a>
            <button type="button" class="rounded-lg bg-slate-700 px-6 py-2 font-medium text-white transition hover:bg-slate-600" @click="closeModal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
