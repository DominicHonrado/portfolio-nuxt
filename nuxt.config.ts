// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  css: ['~/assets/css/styles.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap'
        }
      ]
    }
  },
  routeRules: {
    '/about.html': { redirect: { to: '/about', statusCode: 301 } },
    '/skills.html': { redirect: { to: '/skills', statusCode: 301 } },
    '/certifications.html': { redirect: { to: '/certifications', statusCode: 301 } },
    '/contact.html': { redirect: { to: '/contact', statusCode: 301 } }
  }
})
