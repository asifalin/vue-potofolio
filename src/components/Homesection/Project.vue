<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-8">
        Our <span class="text-blue-500">Portfolio</span>
      </h2>

      <!-- Tabs -->
      <div class="flex justify-center gap-4 mb-10">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition',
            activeTab === tab 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Project Cards -->
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
        >
          <img :src="project.image" alt="project" class="w-full h-48 object-cover" />
          <div class="p-4 text-left">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex justify-between">
              <a :href="project.demo" target="_blank" class="text-blue-500 hover:underline">Live Demo</a>
              <a :href="project.github" target="_blank" class="text-gray-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"
import bloodImg from "../../assets/blood.png"
import vape from "../../assets/vape-dashboard.png"
import productive from "../../assets/productive-dashboard.png"
import quran from "../../assets/quran-dashboard.png"
import quranlanding from '../../assets/quran-landing.png'


const tabs = ["All", "Dashboard", "Pages", ]
const activeTab = ref("All")

const projects = [
 
  {
    title: " Vape me Admin Dashboard",
    category: "Dashboard",
    description: "Analytics dashboard with charts & reports.",
    image: vape,
    demo: "https://vape-dashboard.vercel.app/",
    github: "https://github.com/asifalin"
  },
  {
    title: "Productivity Admin Dashboard",
    category: "Dashboard",
    description: "Task management and productivity tracking app.",
    image: productive,
    demo: "",
    github: "https://github.com/asifalin"
  },
  {
    title: "Blood Donation Landing Page",
    category: "Pages",
    description: "Modern responsive landing page design.",
    image: bloodImg,
    demo: "https://rkbd-gb.vercel.app/",
    github: "https://github.com/asifalin"
  },
  {
    title: "taleemat-e-ahilbayt online Quran Academy Admin Dashboard",
    category: "Forms",
    description: "Drag-and-drop form builder web app.",
    image: quran,
    demo: "https://taleemat-e-ahilbayt.vercel.app/admin/dashboard",
    github: "https://github.com/asifalin"
  },
   {
    title: "taleemat-e-ahilbayt online Quran Academy Landing Page",
    category: "Pages",
    description: "Modern responsive landing page design.",
    image: quranlanding,
    demo: "https://rkbd-gb.vercel.app",
    github: "https://github.com/asifalin"
  },

]

const filteredProjects = computed(() => {
  if (activeTab.value === "All") return projects
  return projects.filter(p => p.category === activeTab.value)
})
</script>
