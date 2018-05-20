import Transition from './components/Transition.vue'
import Animation   from './components/Animation.vue'
import TransitionAnimation   from './components/TransitionAnimation.vue'

export const routes = [
  { path: '/transition', component: Transition},
  { path: '/animation', component: Animation},
  { path: '/transitionanimation', component: TransitionAnimation},
]
