import AddBlog from '../components/addBlog.vue'
import ShowBlog from '../components/showBlogs.vue'
import SingleBlog from '../components/singleBlog.vue'

export default [
  {path: '/', component: ShowBlog},
  {path: '/add', component: AddBlog},
  {path: '/blog/:id', component: SingleBlog}
]
