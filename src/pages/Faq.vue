<script setup>
import { ref } from "vue"

const faqs = ref([
  {
    question: "What does a Front-End Developer do?",
    answer:
      "A front-end developer builds the user-facing part of websites and applications using HTML, CSS, and JavaScript, ensuring everything looks good and works smoothly.",
  },
  {
    question: "What is the difference between HTML, CSS, and JavaScript?",
    answer:
      "HTML defines the structure of a webpage, CSS handles styling and layout, while JavaScript adds interactivity and dynamic features.",
  },
  {
    question: "Why use React or Next.js instead of plain JavaScript?",
    answer:
      "React makes building UI components easier and more maintainable, while Next.js adds server-side rendering, SEO optimization, and faster performance.",
  },
  {
    question: "What is the role of Vue.js compared to React?",
    answer:
      "Vue.js and React are both JavaScript frameworks for building UIs. Vue is more beginner-friendly and simple to integrate, while React has a larger ecosystem and community.",
  },
  {
    question: "How does Tailwind CSS help in development?",
    answer:
      "Tailwind provides utility-first classes, allowing developers to build responsive and modern designs faster without writing too much custom CSS.",
  },
  {
    question: "What is the difference between a Landing Page and a Dashboard?",
    answer:
      "A landing page is a single web page focused on marketing or lead generation, while a dashboard is an internal tool that shows analytics and data insights.",
  },
  {
    question: "What is Supabase and how is it used?",
    answer:
      "Supabase is an open-source Firebase alternative. It provides authentication, real-time databases, and APIs for building full-stack apps quickly.",
  },
  {
    question: "When should I use MongoDB instead of SQL databases?",
    answer:
      "MongoDB is a NoSQL database, best for apps needing flexible schemas and handling unstructured data. Use SQL databases when you need strict relationships and structured data.",
  },
  {
    question: "Why is UI/UX design important for web development?",
    answer:
      "Good UI/UX ensures that websites are user-friendly, visually appealing, and easy to navigate, improving user satisfaction and conversions.",
  },
  {
    question: "How do you make websites fully responsive?",
    answer:
      "By using responsive CSS frameworks like Tailwind, media queries, and flexible layouts (Flexbox, Grid), ensuring websites look good on all devices.",
  },
])
const activeIndex = ref(null)

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-16 bg-gray-50 text-gray-900">
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <h2 class="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div class="space-y-4 max-w-3xl mx-auto">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-200 rounded-xl shadow-sm bg-gray-900 text-white"
        >
          <!-- Question -->
          <button
            class="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-lg hover:bg-gray-800 transition rounded-xl"
            @click="toggleFAQ(index)"
          >
            <span>{{ faq.question }}</span>
            <svg
              :class="[
                'w-5 h-5 transition-transform',
                activeIndex === index ? 'rotate-180' : '',
              ]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Answer -->
          <div
            v-show="activeIndex === index"
            class="px-6 pb-4 text-gray-300 text-base"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
