<template>
  <footer class="footer footer-center border-t border-white/10 bg-slate-950 px-6 py-6 text-slate-400 sm:footer-horizontal sm:justify-between sm:text-left">
    <p>&copy; {{ new Date().getFullYear() }} Dominic Austin Honrado</p>
    <nav aria-label="Social links" class="flex items-center gap-5">
      <a
        href="https://github.com/DominicHonrado"
        target="_blank"
        rel="noopener noreferrer"
        class="link link-hover inline-flex items-center gap-2"
      >
        <img src="/images/Icons/Github-Icon.svg" alt="" class="h-[18px] w-[18px] object-contain">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/dominic-honrado"
        target="_blank"
        rel="noopener noreferrer"
        class="link link-hover inline-flex items-center gap-2"
      >
        <img src="/images/Icons/LinkedIn-Icon.svg" alt="" class="h-[18px] w-[18px] object-contain">
        LinkedIn
      </a>
    </nav>
  </footer>
</template>
