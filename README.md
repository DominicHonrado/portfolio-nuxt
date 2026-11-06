# Dominic Honrado Portfolio

A Nuxt migration of the original static portfolio. It retains the original page content, Tailwind utility styling, fonts, imagery, responsive navigation, reveal animations, and certificate preview modal.

## Portfolio implementation

- Shared page layout, page heading, content section, navigation, and footer components live in `app/components/`.
- Tailwind CSS 3 and DaisyUI are configured in `tailwind.config.ts`; Lucide Vue icons are used for navigation and actions.
- Each portfolio route sets its title with Nuxt's `useHead` and its description and social metadata with `useSeoMeta`.
- Unknown routes use the branded `app/pages/[...slug].vue` page and return HTTP 404; `app/error.vue` handles other application errors.

## Development

```bash
npm ci
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

To generate a static site, run `npm run generate`. The portfolio pages are `/`, `/about`, `/skills`, `/certifications`, and `/contact`; unknown routes use the custom 404 page. The previous `.html` page URLs redirect to their Nuxt routes.