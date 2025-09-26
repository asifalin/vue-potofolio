<template>
  <footer class="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
      <!-- Logo & About -->
      <div>
        <img src="../../../assets/logo1.png" alt="Logo" class="h-28"/>
        <p class="text-sm leading-relaxed">
          A modern Vue.js application styled beautifully with Tailwind CSS.  
          Fully responsive and mobile-friendly design.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white transition">Home</a></li>
          <li><a href="#" class="hover:text-white transition">About</a></li>
          <li><a href="#" class="hover:text-white transition">Services</a></li>
          <li><a href="#" class="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Resources</h3>
        <ul class="space-y-2">
          <li><router-link to="/faqs" class="hover:text-white transition">FAQs</router-link></li>
      <li><router-link to="/privacy-policy" class="hover:text-white">Privacy Policy</router-link></li>
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Follow Us</h3>
        <div class="flex space-x-6 text-2xl">
    <!-- Facebook -->
    <a href="https://www.facebook.com/share/17GzpVRZBB/" target="_blank" class="hover:text-blue-600">
      <Icon icon="mdi:facebook" />
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com/asif_alee005/?igsh=MWs4MjgzZGl4MHBvbw%3D%3D#" target="_blank" class="hover:text-pink-500">
      <Icon icon="mdi:instagram" />
    </a>

    <!-- WhatsApp -->
    <a href="https://wa.me/+923173378315" target="_blank" class="hover:text-green-500">
      <Icon icon="mdi:whatsapp" />
    </a>

    <!-- GitHub -->
    <a href="http://github.com/asifalin" target="_blank" class="hover:text-gray-400">
      <Icon icon="mdi:github" />
    </a>
  </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
     <p>
      © 2025 MyVueApp. All rights reserved. | Built by 
      <span class="text-blue-500 font-semibold">Asif Ali</span>
    </p>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';

</script>

<style scoped>
</style>
