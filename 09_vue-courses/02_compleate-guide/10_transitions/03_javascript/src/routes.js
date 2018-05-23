import Home from './components/Home.vue'
import List from './components/List.vue'
import Dynamic from './components/Dynamic.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/dynamic', component: Dynamic},
  {path: '/list', component: List},
]
