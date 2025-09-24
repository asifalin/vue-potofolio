<template>
  <section class="text-gray-900">
    <!-- 1. Intro Section -->
    <div
      class="bg-gray-900 text-gray-300 mx-auto py-16 px-6 text-center space-y-6"
      data-aos="fade-up"
    >
      <h1 class="text-4xl md:text-5xl font-bold text-blue-600">
        About Me
      </h1>
      <p class="max-w-3xl mx-auto text-lg leading-relaxed">
        Hi, I’m <span class="font-semibold text-blue-600">Asif Ali</span>, a passionate
        <span class="font-semibold">Frontend Developer</span> from Gilgit, Pakistan.  
        My journey in technology started in <span class="font-semibold">2020</span> when I completed
        an MS Office course at <span class="font-semibold">PITAC GB</span>.  
        In <span class="font-semibold">2021</span>, I began my coding journey and since then,
        I’ve been building modern, responsive, and user-friendly applications using 
        <span class="text-blue-600">React.js</span>, <span class="text-blue-600">Next.js</span>, 
        <span class="text-blue-600">Vue.js</span>, and <span class="text-blue-600">Tailwind CSS</span>.
      </p>
    </div>

    <!-- 2. Timeline Section -->
    <div class="container mx-auto px-6 py-16">
      <h2
        class="text-3xl font-bold text-center mb-12 text-gray-800"
        data-aos="fade-up"
      >
        My Journey & Education
      </h2>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Left Side: Education -->
        <div data-aos="fade-right">
          <h3 class="text-2xl font-bold text-blue-600 mb-6">🎓 Education</h3>
          <div class="space-y-8 border-l-4 border-blue-500 pl-6">
            <div>
              <h4 class="text-xl font-semibold">Matric</h4>
              <p class="text-gray-600">Completed from <span class="font-semibold">Sir Syed High School No.1 Gilgit</span>.</p>
            </div>
            <div>
              <h4 class="text-xl font-semibold">FSc</h4>
              <p class="text-gray-600">Studied at <span class="font-semibold">Degree College Sakwar</span>.</p>
            </div>
            <div>
              <h4 class="text-xl font-semibold">Graduation</h4>
              <p class="text-gray-600">Pursuing degree at <span class="font-semibold">KIU (Karakoram International University)</span>.</p>
            </div>
            <div>
              <h4 class="text-xl font-semibold">2020</h4>
              <p class="text-gray-600">
                Completed <span class="font-semibold">MS Office Course</span> at PITAC GB.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side: Journey -->
        <div data-aos="fade-left">
          <h3 class="text-2xl font-bold text-blue-600 mb-6">💼 Professional Journey</h3>
          <div class="space-y-8 border-l-4 border-blue-500 pl-6">
            <div>
              <h4 class="text-xl font-semibold">2021</h4>
              <p class="text-gray-600">
                Started coding journey with HTML, CSS & JavaScript.
              </p>
            </div>
            <div>
              <h4 class="text-xl font-semibold">2022 - 2023</h4>
              <p class="text-gray-600">
                Built multiple <span class="font-semibold">React.js & Next.js</span> apps and freelance projects.
              </p>
            </div>
            <div>
              <h4 class="text-xl font-semibold">2024 - 2025</h4>
              <p class="text-gray-600">
                4+ years of frontend experience, exploring Vue.js & advanced UI/UX design.
              </p>
            </div>
          </div>
        </div>
      </div>

    

    

    
    </div>
      <!-- 4. Skills Section -->
      <div class="mt-14 bg-gray-900 p-10" data-aos="fade-up">
        <h3 class="text-2xl font-bold text-center text-blue-600 mb-8">💡 Skills & Tools</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="p-4 bg-white shadow rounded-lg hover:scale-105 transition">HTML</div>
          <div class="p-4 bg-white shadow rounded-lg hover:scale-105 transition">CSS / Tailwind</div>
          <div class="p-4 bg-white shadow rounded-lg hover:scale-105 transition">JavaScript</div>
          <div class="p-4 bg-white shadow rounded-lg hover:scale-105 transition">React.js</div>
          <div class="p-4 bg-white shadow rounded-lg hover:scale-105 transition">Next.js</div>
          <div class="p-4 bg-white shadow rounded-lg hover:scale-105 transition">Vue.js</div>
          <div class="p-4 bg-white shadow rounded-lg hover:scale-105 transition">TypeScript</div>
          <div class="p-4 bg-white shadow rounded-lg hover:scale-105 transition">Git & GitHub</div>
        </div>
      </div>
         <!-- 3. Achievements Section -->
      <div class="my-16" data-aos="fade-up">
        <h3 class="text-2xl font-bold text-center text-blue-600 mb-8">
          🏆 Achievements & Highlights
        </h3>
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div class="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition" data-aos="zoom-in">
            <h4 class="text-xl font-bold text-gray-800 mb-2">10+ Projects</h4>
            <p class="text-gray-600">Delivered modern projects using React, Vue & Next.js.</p>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition" data-aos="zoom-in">
            <h4 class="text-xl font-bold text-gray-800 mb-2">Freelance Work</h4>
            <p class="text-gray-600">Worked with international clients on real-world apps.</p>
          </div>
          <div class="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition" data-aos="zoom-in">
            <h4 class="text-xl font-bold text-gray-800 mb-2">4+ Years Experience</h4>
            <p class="text-gray-600">Solid foundation in frontend & UI/UX design.</p>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>
