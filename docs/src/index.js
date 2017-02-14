import 'semantic-ui-css/semantic.min.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './router'
import Sidebar from './components/Sidebar.vue'
import Page from './components/Page.vue'

Vue.use(VueRouter)
Vue.component('docs-sidebar', Sidebar)
Vue.component('docs-page', Page)

const router = new VueRouter({routes})

const app = new Vue({
  router,
  ...App
})
app.$mount('#app')
