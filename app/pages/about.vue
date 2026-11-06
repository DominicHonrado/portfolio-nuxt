<script setup lang="ts">
useHead({
  title: 'About Me | Dominic Austin Honrado',
})
useSeoMeta({
  description: 'Learn about Dominic Austin Honrado’s journey, interests, and goals as an aspiring full stack developer.',
  ogTitle: 'About Me | Dominic Austin Honrado',
  ogDescription: 'Get to know Dominic Austin Honrado and his journey in technology and software development.',
})
useReveal()
</script>

<template>
  <PageLayout>
    <main class="mx-auto max-w-4xl px-6 pt-24 pb-16">
      <PageHeading
        title="About Me"
        description="Get to know more about my journey and passion for technology."
      />

      <div class="space-y-8">
        <ContentSection title="Who I Am" accent="emerald">
          <p class="mb-4 leading-relaxed text-slate-300">
            Hi, I'm Dominic Austin Honrado, an aspiring full stack developer with a strong curiosity for computer science and technology. I enjoy learning new concepts, building practical solutions, and using code to turn ideas into working projects.
          </p>
          <p class="leading-relaxed text-slate-300">
            Professionally, I aim to grow into a confident software engineer who creates impactful applications and contributes to innovative teams. I am driven by opportunities to improve my skills, solve meaningful problems, and build a career around technology that makes a difference.
          </p>
        </ContentSection>

        <ContentSection title="My Journey" accent="sky">
          <p class="mb-4 leading-relaxed text-slate-300">
            Starting with basic programming concepts, I've expanded my skills across multiple languages and frameworks. Each project and challenge has taught me valuable lessons about problem-solving, collaboration, and the importance of clean, maintainable code.
          </p>
          <p class="leading-relaxed text-slate-300">
            My goal is to develop applications that not only function well but also provide meaningful user experiences. I'm particularly interested in web development, software engineering, and emerging technologies.
          </p>
        </ContentSection>

        <ContentSection title="Interests &amp; Goals" accent="purple">
          <p class="mb-4 leading-relaxed text-slate-300">
            Beyond coding, I'm fascinated by artificial intelligence, machine learning, and how technology can shape our future. I enjoy working on projects that challenge me and allow me to learn something new.
          </p>
          <p class="leading-relaxed text-slate-300">
            Looking ahead, I aim to contribute to impactful projects, collaborate with talented teams, and continue growing as a developer. I'm excited about the possibilities that lie ahead in this ever-evolving field.
          </p>
        </ContentSection>
      </div>
    </main>
  </PageLayout>
</template>
