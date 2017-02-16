import Introduction from './pages/Introduction.vue'

function lazyLoad(component) {
  return (resolve) => require([`./pages/${component}.vue`], resolve)
}

const Button = lazyLoad('elements/Button')
const Item = lazyLoad('views/Item')

export const routes = [
  { path: '/', component: Introduction },
  { path: '/elements/button.html', component: Button },
  { path: '/views/item.html', component: Item }
]
