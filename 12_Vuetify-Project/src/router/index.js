import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MeetUps from '@/components/MeetUp/MeetUps'
import CreateMeetup from '@/components/MeetUp/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/meetups', component: MeetUps},
    {path: '/meetup/new', component: CreateMeetup},
    {path: '/profile', component: Profile},
    {path: '/signin', component: Signin},
    {path: '/signup', component: Signup}
  ],
  mode: 'history'
})
