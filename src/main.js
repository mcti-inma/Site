import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import config from './config'

// import leaflet from './leaflet'

import L from "leaflet";
import "leaflet/dist/leaflet.css"

import '@/assets/css/components.css'
import '@/assets/css/icons.css'
import '@/assets/css/responsee.css'
// import '@/assets/css/owl-carousel/owl.carousel.css'
// import '@/assets/css/owl-carousel/owl.theme.css'
import '@/assets/css/template-style.css'
import '@/assets/font/mfglabsiconset-webfont.eot'
//{/* <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800&subset=latin,latin-ext' rel='stylesheet'> */}
import vuetify from './plugins/vuetify';

// Vue.use(Buefy)

Vue.config.productionTip = false

//Adiciona a configuração no projeto
Vue.prototype.$config = config.data()
Vue.prototype.$config.methods = config.methods
Vue.prototype.$scrollToTop = () => window.scrollTo(0,0)
// Vue.prototype.$leaflet = leaflet
Vue.prototype.L = L

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


