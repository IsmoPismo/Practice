import UserDetail from './components/user/UserDetail.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import Header from './components/Header.vue'
import User from './components/user/User.vue'
import Home from './components/Home.vue'

export const routes = [
  {path: '/', name: 'home', components: {
    default: Home,
    'header-top': Header
  }},
  {path: '/user', components: {
    default: User,
    'header-bottom': Header
  }, children: [
    {path: ':id/edit', component: UserEdit, name: 'editUser'},
    {path: ':id', component: UserDetail},
    {path: '', component: UserStart}
  ]}
]
