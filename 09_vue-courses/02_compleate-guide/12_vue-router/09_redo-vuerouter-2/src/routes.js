import UserDetail from './components/user/UserDetail.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import User from './components/user/User.vue'
import Home from './components/Home.vue'

export const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/user', component: User, children: [
    {path: ':id/edit', component: UserEdit, name: 'editUser'},
    {path: ':id', component: UserDetail},
    {path: '', component: UserStart}
  ]}
]
