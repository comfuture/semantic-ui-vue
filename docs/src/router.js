import Introduction from './pages/Introduction.vue'

function lazyLoad(component) {
  return (resolve)=> require([`./pages/${component}.vue`], resolve)
}

const Button = lazyLoad('elements/Button')

export const routes = [
  { path: '/', component: Introduction },
  { path: '/elements/button', component: Button }
]
