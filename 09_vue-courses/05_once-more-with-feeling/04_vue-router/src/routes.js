import Home from './Home.vue';
import User from './user/User.vue';
import UserEdit from './user/UserEdit.vue';
import UserStart from './user/UserStart.vue';
import UserDetail from './user/UserDetail.vue';

export const routes = [
  {path: '', component: Home, name: 'home'},
  {path: '/user', component: User, children: [
    {path: '', component: UserStart},
    {path: ':id', component: UserDetail, name: 'userDetail'},
    {path: ':id/edit', component: UserEdit, name: 'userEdit'}
  ]},
  {path: '*', redirect: '/'}
]
