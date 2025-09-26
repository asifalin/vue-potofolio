<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :class="isScrolled ? 'bg-gray-200/70 backdrop-blur-md shadow-md' : 'bg-gray-200'"
  >
    <div class="container flex justify-between items-center p-4">
      <!-- Logo -->
       <a href="/" class=" w-full">

         <img src="../../../assets/logo1.png" alt="Logo" class="h-16 w-[15%]" />
        </a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li><router-link to="/" class="hover:text-gray-600 font-bold">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-gray-600 font-bold">About</router-link></li>
        <li><router-link to="/services" class="hover:text-gray-600 font-bold">Services</router-link></li>
        <li><router-link to="/contact" class="hover:text-gray-600 font-bold">Contact</router-link></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button class="md:hidden focus:outline-none" @click="toggleMenu">
        <!-- Hamburger Icon -->
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>

        <!-- Close Icon -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden mt-4 space-y-2 bg-gray-200/90">
      <router-link to="/" class="block px-4 py-2 hover:bg-blue-700">Home</router-link>
      <router-link to="/about" class="block px-4 py-2 hover:bg-blue-700">About</router-link>
      <router-link to="/services" class="block px-4 py-2 hover:bg-blue-700">Services</router-link>
      <router-link to="/contact" class="block px-4 py-2 hover:bg-blue-700">Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const isOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50 // scroll 50px ke baad opacity low ho
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
