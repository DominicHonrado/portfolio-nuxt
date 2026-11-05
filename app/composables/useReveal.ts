export function useReveal() {
  const route = useRoute()
  let observer: IntersectionObserver | undefined

  const observeReveals = async () => {
    observer?.disconnect()
    await nextTick()

    const revealElements = document.querySelectorAll('.reveal')
    if (!revealElements.length) {
      return
    }

    observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-6')
          entry.target.classList.add('opacity-100', 'translate-y-0')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    revealElements.forEach((element) => observer?.observe(element))
  }

  onMounted(observeReveals)
  watch(() => route.fullPath, observeReveals)
  onBeforeUnmount(() => observer?.disconnect())
}
