import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueMeta from 'vue-meta'

library.add(fas, faGithub, faInstagram, faTwitter, faYoutube)
createApp(App).component('fa', FontAwesomeIcon).use(router, VueMeta).mount('#app')
