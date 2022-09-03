import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import './assets/css/navbar.css';
import './assets/css/home.css';
import './assets/css/about.css';
import './assets/css/contact.css';
import './assets/css/service.css';
import './assets/css/client.css';
import './assets/css/portfolio.css';
import './assets/css/footer.css';

Vue.config.productionTip = false
// AIzaSyDqFzoYLjBuFd9LLz4Colr8vOBU8kQNW48

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places',
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
