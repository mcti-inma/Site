import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import "@/config/styles/tiger-main.css";
import config from '@/config'

Vue.use(Buefy)

Vue.config.productionTip = false

//Adiciona a configuração no projeto
Vue.prototype.$config = config.data()

//Acessando variáveis global nos componentes:
//this.$globalConfig.store.name

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


