<script setup lang="ts">
import Navbar from './components/Theam/Navbar/Navbar.vue';
import Footer from './components/Theam/Footer/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    
    <!-- Navbar -->
   <div class="">
     <Navbar />
   </div>

     <main class="flex-grow mt-24">
      <router-view />   <!-- 👈 yahan pe router ka content show hoga -->

    </main>
   
    <!-- Footer -->
    <Footer />
    
  </div>
</template>

<style scoped>
</style>
