import 'semantic-ui-css/semantic.min.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './router'
import Sidebar from './components/Sidebar.vue'
import Page from './components/Page.vue'
import Example from './components/Example.vue'
import Semantic from 'semantic'

Vue.use(VueRouter)
Vue.use(Semantic)
Vue.component('docs-sidebar', Sidebar)
Vue.component('docs-page', Page)
Vue.component('docs-example', Example)

const router = new VueRouter({routes})

const app = new Vue({
  router,
  ...App
})
app.$mount('#app')
