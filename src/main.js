import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from  'bootstrap-vue'
import './plugins/axios'

// Importa arquivos CSS Bootstrap e BootstrapVue (a ordem é importante) 
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'

// Disponibiliza o BootstrapVue em todo o seu projeto
Vue.use(BootstrapVue)
// Opcionalmente, instale o plug-in de componentes de ícone BootstrapVue 
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
