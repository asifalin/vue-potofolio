<template>
  <section class="py-16 bg-gray-900 text-white">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">⚡ Skills & Tech Stack</h2>

      <!-- Grid Layout -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <a
          v-for="(skill, index) in skills"
          :key="index"
          :href="skill.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Open ${skill.name} resource`"
          class="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <!-- Icon -->
          <Icon :icon="skill.icon" class="w-16 h-16 mb-4 text-blue-400 animate-bounce-slow" />

          <!-- Name -->
          <span class="text-lg font-medium">{{ skill.name }}</span>

          <!-- Optional subtitle (e.g. "Docs" or "Example") -->
          <span v-if="skill.badge" class="mt-2 text-sm text-gray-400">{{ skill.badge }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue"

// Replace these links with your actual project demos, docs, or example pages
const skills = [
  { name: "React", icon: "logos:react", link: "https://reactjs.org/", badge: "Docs" },
  { name: "Next.js", icon: "logos:nextjs-icon", link: "https://nextjs.org/", badge: "Docs" },
  { name: "Vue.js", icon: "logos:vue", link: "https://vuejs.org/", badge: "Docs" },
  { name: "TypeScript", icon: "logos:typescript-icon", link: "https://www.typescriptlang.org/", badge: "Docs" },
  { name: "JavaScript", icon: "logos:javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", badge: "MDN" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", link: "https://tailwindcss.com/", badge: "Docs" },
  { name: "HTML5", icon: "logos:html-5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", badge: "MDN" },
  { name: "CSS3", icon: "logos:css-3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", badge: "MDN" },
  { name: "Git", icon: "logos:git-icon", link: "https://git-scm.com/", badge: "Docs" },
  { name: "GitHub", icon: "logos:github-icon", link: "https://github.com/", badge: "Explore" },
]
</script>

<style scoped>
/* Custom slow bounce animation */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

/* Ensure anchor fills card and removes default underline */
a {
  text-decoration: none;
}
</style>
