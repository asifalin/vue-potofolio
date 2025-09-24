<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
    <div class="container mx-auto px-6">
      
      <!-- Heading -->
      <div class="text-center mb-12" data-aos="fade-up">
  <h2 class="text-4xl md:text-5xl font-extrabold text-transparent text-white bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
    📩 <span class="text-blue-600">Get In Touch</span>
  </h2>
  <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
    Let’s build something amazing together! Whether it’s a project, idea, or collaboration — I’d love to hear from you.
  </p>
  <p class="text-gray-400 mt-4 max-w-3xl mx-auto">
    I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
    Whether you need a modern website, a responsive web app, or just want to connect for a friendly chat, 
    feel free to drop a message. Your ideas matter, and I’ll make sure to get back to you as soon as possible. 🚀
  </p>
</div>


      <!-- Contact Form -->
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        
        <!-- Left Side: Info -->
        <div class="space-y-8" data-aos="fade-right">
          <div class="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 class="text-xl font-semibold text-blue-400">📍 Location</h3>
            <p class="text-gray-300">Gilgit, Pakistan</p>
          </div>
          <div class="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 class="text-xl font-semibold text-blue-400">📧 Email</h3>
            <p class="text-gray-300">asifali31733@gmail.com</p>
          </div>
          <div class="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 class="text-xl font-semibold text-blue-400">📞 Phone</h3>
            <p class="text-gray-300">+92 317 3378315</p>
          </div>
    <div class="w-full h-56 rounded-xl overflow-hidden shadow-lg">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26059.558330534847!2d74.2928!3d35.9208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e649e3642543b1%3A0x40fd0ca3ca17282b!2sGilgit!5e0!3m2!1sen!2s!4v1727168543274!5m2!1sen!2s" 
    class="w-full h-full border-0" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>

        </div>

        <!-- Right Side: Form -->
        <div class="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-10" data-aos="fade-left">
          <form @submit.prevent="sendEmail" class="space-y-6">
            
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Your Name</label>
              <input v-model="form.name" type="text" id="name" name="name" required
                class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                placeholder="John Doe">
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Your Email</label>
              <input v-model="form.email" type="email" id="email" name="email" required
                class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                placeholder="example@email.com">
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
              <input v-model="form.subject" type="text" id="subject" name="subject"
                class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                placeholder="Project discussion, Hiring, etc.">
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message</label>
              <textarea v-model="form.message" id="message" name="message" rows="5" required
                class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                placeholder="Write your message here..."></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
              <button type="submit"
                class="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium px-8 py-3 rounded-lg shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition">
                🚀 Send Message
              </button>
            </div>
          </form>

          <!-- Success/Error Messages -->
          <p v-if="successMessage" class="mt-4 text-green-400 text-center animate-pulse">{{ successMessage }}</p>
          <p v-if="errorMessage" class="mt-4 text-red-400 text-center">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import emailjs from "emailjs-com";
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const successMessage = ref("");
const errorMessage = ref("");

// ✅ Apne EmailJS IDs replace karo
const SERVICE_ID = "service_tma3ovq";
const TEMPLATE_ID = "template_e9we626";
const PUBLIC_KEY = "PEBmuP1xhDCNehRp2";

// ✅ Public key se init karna zaroori hai
emailjs.init(PUBLIC_KEY);

const sendEmail = () => {
  console.log("Payload:", form.value); // 👈 Check payload in console
  emailjs.send(SERVICE_ID, TEMPLATE_ID, form.value)
    .then(() => {
      successMessage.value = "✅ Your message has been sent successfully!";
      errorMessage.value = "";
      form.value = { name: "", email: "", subject: "", message: "" };

      // ✅ 4 second baad success message hatao
      setTimeout(() => {
        successMessage.value = "";
      }, 4000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      errorMessage.value = "❌ Failed to send message. Try again later.";
      successMessage.value = "";

      // ✅ 4 second baad error message hatao
      setTimeout(() => {
        errorMessage.value = "";
      }, 4000);
    });
};

// Initialize AOS animations
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>
