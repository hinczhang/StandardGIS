import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/MainPage'
import ContactPage from '@/views/ContactPage'
import CVPage from '@/views/CVPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path:'/contact',
      name:'ContactPage',
      component:ContactPage
    },
    {
      path:'/jiongyanzhang',
      name:'CV of Mr. Zhang',
      component:CVPage
    }
  ]
})
