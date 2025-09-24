<template>
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
import aboutImage from '../../assets/asif.JPG'
</script>
