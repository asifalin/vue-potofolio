<template>
  <nav class="bg-gray-200 text-gray-800 p-4">
    <div class="container flex justify-between items-center">
      <!-- Logo -->
     <img src="../../../assets/logo1.png" alt="Logo" class="h-16 w-[10%]"/>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li><router-link to="/" class="hover:text-gray-600 font-bold">Home</router-link></li>
        <li><router-link to="/About" class="hover:text-gray-600 font-bold">About</router-link></li>
        <li><router-link to="/Services" class="hover:text-gray-600 font-bold">Services</router-link></li>
        <li><router-link to="/Contact" class="hover:text-gray-600 font-bold">Contact</router-link></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden focus:outline-none" 
        @click="toggleMenu"
      >
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
    <div v-if="isOpen" class="md:hidden mt-4 space-y-2">
      <router-link to="/" class="block px-4 py-2 hover:bg-blue-700">Home</router-link>
      <router-link to="/about" class="block px-4 py-2 hover:bg-blue-700">About</router-link>
      <router-link to="/services" class="block px-4 py-2 hover:bg-blue-700">Services</router-link>
      <router-link to="/contact" class="block px-4 py-2 hover:bg-blue-700">Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
import logo from '../../../assets/logo1.png'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
