import TransitionAnimation   from './components/TransitionAnimation.vue'
import CustomClasses from './components/CustomClasses.vue'
import Transition from './components/Transition.vue'
import Animation from './components/Animation.vue'
import Home from './components/Home.vue'

export const routes = [
  { path: '/', component: Home},
  { path: '/transition', component: Transition},
  { path: '/animation', component: Animation},
  { path: '/transitionanimation', component: TransitionAnimation},
  { path: '/customclasses', component: CustomClasses}
]
