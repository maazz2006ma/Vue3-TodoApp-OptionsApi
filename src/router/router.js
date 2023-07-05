import  { createRouter, createWebHistory } from 'vue-router'
import AddTask from '../components/AddTask.vue'
import ViewTask from '../components/ViewTask.vue'
const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      redirect: '/UserLogin',
    },
    {
      name:'UserLogin',
      path:'/UserLogin',
    },
    {
      name: 'AddTask',
      path: '/AddATask',
      components: { default: AddTask}
    },
    {
      name: 'ViewTask',
      path: '/ViewTheTask',
      components: { default: ViewTask}
    }
  ]
})

export default router
