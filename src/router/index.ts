import { createRouter, createWebHistory } from 'vue-router'

// Pages import
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Contact from '../pages/Contact.vue'
import Faq from '../pages/Faq.vue'
import PrivacyPolicy from '../pages/Privacy-Policy.vue'



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/faqs', name: 'Faqs', component: Faq },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
