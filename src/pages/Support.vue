<template>
  <section class="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-gray-100">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
      
      <!-- Heading -->
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-300">
        Support
      </h2>

      <!-- Intro -->
      <p class="text-center text-lg mb-8 text-gray-300">
        Need help or have a question? We're here to support you. 
        You can check our FAQs, review our policies, or reach out directly using the form below.
      </p>

      <!-- Contact Options -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h3 class="text-xl font-semibold text-blue-400">Email</h3>
          <p class="text-gray-300 mt-2">support@example.com</p>
        </div>
        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h3 class="text-xl font-semibold text-blue-400">Phone</h3>
          <p class="text-gray-300 mt-2">+92 300 1234567</p>
        </div>
        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h3 class="text-xl font-semibold text-blue-400">FAQs</h3>
          <router-link to="/faqs" class="text-blue-300 hover:text-white">
            Visit FAQs
          </router-link>
        </div>
      </div>

      <!-- Form -->
      <form class="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
        <div>
          <label class="block mb-2">Name</label>
          <input type="text" class="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label class="block mb-2">Email</label>
          <input type="email" class="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label class="block mb-2">Subject</label>
          <input type="text" class="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label class="block mb-2">Message</label>
          <textarea rows="5" class="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400"></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg">
          Send Message
        </button>
      </form>

      <!-- Note -->
      <p class="text-center text-sm text-gray-400 mt-6">
        We usually respond within 24-48 hours.
      </p>
    </div>
  </section>
</template>
<script setup></script>