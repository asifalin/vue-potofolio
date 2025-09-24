<template>
  <div>
    <!-- Hero Section -->
    <div data-aos="fade-up">
      <Herosection />
    </div>

    <!-- Skills Section -->
    <div data-aos="fade-down">
      <Skills />
    </div>

    <!-- Projects Section -->
    <div data-aos="zoom-in-up">
      <Project />
    </div>
  </div>
</template>

<script setup>
import Herosection from "../components/Homesection/Herosection.vue";
import Project from "../components/Homesection/Project.vue";
import Skills from "../components/Homesection/Skills.vue";
</script>
