import daisyui from 'daisyui'

export default {
  content: ['./app/**/*.{vue,js,ts}'],
  plugins: [daisyui],
  daisyui: {
    themes: ['dark'],
    logs: false,
  },
}
