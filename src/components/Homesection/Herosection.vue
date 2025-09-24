<template>
  <section class="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
    <!-- Profile Image -->
    <div>
      <img 
        :src="HeroSection" 
        alt="Profile" 
        class="w-60 h-60 mx-auto mb-6 border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>

    <!-- Text Content -->
    <div class="text-center px-6 space-y-6">
      <!-- Animated Intro -->
      <h2 class="text-4xl md:text-6xl font-bold text-gray-300">
        <span>Hi, I'm </span> 
        <span class="inline-block typing-wrapper">
          <span class="typing text-blue-400" aria-hidden="true">{{ displayText }}</span> 👋
          <span class="cursor" aria-hidden="true">|</span>
        </span>
      </h2>

      <!-- Sub Heading -->
      <h2 class="text-xl md:text-2xl font-semibold text-gray-300">
        Frontend Developer | React • Next.js • Vue
      </h2>

      <!-- Small Intro -->
      <p class="text-gray-400 max-w-2xl mx-auto">
        I build modern, fast and responsive web applications using 
        <span class="text-blue-400">React</span>, 
        <span class="text-blue-400">Next.js</span>, and 
        <span class="text-blue-400">Tailwind CSS</span>.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mt-6">
        <a href="#projects" class="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          🚀 View Projects
        </a>
        
        <router-link 
          to="/Contact"  
          class="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          📩 Contact Me
        </router-link>
        
        <a href="#contact" class="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700 transition">
          💼 Hire Me
        </a>
        
        <!-- Resume button (PDF link in public folder) -->
        <a 
          href="/src/assets/resume.pdf" 
          download 
          class="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HeroSection from '../../assets/asif.JPG'

// rotating words
const words = ['Asif Ali', 'a Developer', 'a Designer']

// typing effect settings
const typeSpeed = 80
const deleteSpeed = 40
const holdDelay = 1200

const displayText = ref('')
let wordIndex = 0
let charIndex = 0
let typing = true
let timer = null

function startTypingLoop() {
  const loop = () => {
    const current = words[wordIndex]

    if (typing) {
      if (charIndex < current.length) {
        displayText.value = current.slice(0, ++charIndex)
        timer = setTimeout(loop, typeSpeed)
      } else {
        typing = false
        timer = setTimeout(loop, holdDelay)
      }
    } else {
      if (charIndex > 0) {
        displayText.value = current.slice(0, --charIndex)
        timer = setTimeout(loop, deleteSpeed)
      } else {
        typing = true
        wordIndex = (wordIndex + 1) % words.length
        timer = setTimeout(loop, 250)
      }
    }
  }
  loop()
}

onMounted(() => startTypingLoop())
onBeforeUnmount(() => { if (timer) clearTimeout(timer) })
</script>

<style scoped>
.typing-wrapper { display: inline-flex; align-items: center; min-width: 12ch; }
.typing { display: inline-block; font-variant-numeric: tabular-nums; }
.cursor { margin-left: 6px; animation: blink 1s steps(2, start) infinite; color: #60a5fa; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
</style>
