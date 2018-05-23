// import UserDetail from './components/user/UserDetail.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import User from './components/user/User.vue'
import Home from './components/Home.vue'

const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  });
}

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  }, 'other' );
}

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  }, 'other')
}

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  })
}

export const routes = [
  {path: '', component: Home, name: 'home'},
  {path: '/user', component: User, children: [
    {path: '', component: UserStart},
    {path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
      next();
    }},
    {path: ':id/edit', component: UserEdit, name: "userEdit"}
  ]},
  {path: '*', redirect: '/'}
]
