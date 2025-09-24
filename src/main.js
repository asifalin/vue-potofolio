import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';  


createApp(App).use(router).mount('#app')
AOS.init();


// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import './style.css' // Tailwind import

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

