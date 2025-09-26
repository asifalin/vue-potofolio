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
      
        
        <router-link 
          to="/Contact"  
          class="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          📩 Contact Me
        </router-link>
        
        <a href="#contact" class="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
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
   <section id="about-preview" class="py-20 bg-gray-100 text-gray-900">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-10">
      
      <!-- Left Image -->
      <div class="md:w-1/3 flex justify-center">
        <img 
          :src="aboutImage" 
          alt="Asif Ali" 
          class="w-80  object-cover"
        />
      </div>
      
      <!-- Right Content -->
      <div class="md:w-2/3 space-y-6">
        <h2 class="text-3xl font-bold text-gray-800">
          About <span class="text-blue-600">Me</span>
        </h2>
        
        <!-- Paragraphs -->
        <p class="text-lg leading-relaxed text-gray-700">
          Hi, I’m <span class="font-semibold text-blue-600">Asif Ali</span>, a 
          <span class="font-semibold">Frontend Developer</span> from Gilgit, Pakistan. 
          I specialize in crafting modern, user-friendly, and visually appealing web 
          applications. My goal is to blend clean design with powerful functionality, 
          ensuring every website delivers an exceptional user experience.
        </p>

        <p class="text-lg leading-relaxed text-gray-700">
          With strong expertise in 
          <span class="text-blue-600 font-semibold">Vue.js</span>, 
          <span class="text-blue-600 font-semibold">React.js</span>, 
          <span class="text-blue-600 font-semibold">Next.js</span>, and 
          <span class="text-blue-600 font-semibold">Tailwind CSS</span>, 
          I enjoy transforming ideas into interactive digital solutions. 
          Over the years, I’ve worked on diverse projects including dashboards, 
          portfolios, and responsive landing pages that bring brands closer to people.
        </p>

        <p class="text-lg leading-relaxed text-gray-700">
          Beyond coding, I’m passionate about problem-solving and continuous learning. 
          Every project is an opportunity to push boundaries, refine my skills, 
          and create meaningful digital experiences. I believe in writing clean, 
          scalable code while staying up-to-date with the latest industry trends.
        </p>

        <!-- Experience -->
        <div class="flex items-center space-x-4 mt-4">
          <span class="text-5xl font-bold text-blue-600">4+</span>
          <p class="text-lg text-gray-700">
            Years of Experience in <span class="font-bold text-blue-600">Frontend Web Development</span>
          </p>
        </div>

        <!-- Button -->
        <div class="pt-4">
          <router-link 
            to="/About" 
            class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Read More →
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HeroSection from '../../assets/asif.JPG'
import aboutImage from '../../assets/asif.JPG'


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
