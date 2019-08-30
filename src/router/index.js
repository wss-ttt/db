import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/test',
      name:'test',
      component: resolve => require(['@/views/test.vue'], resolve),
    },
    {
      path: '/main',
      name: 'main',
      component: resolve => require(['@/views/main.vue'], resolve),
      children: [
        {
          path: 'home',
          name: 'home',
          component: resolve => require(['@/views/home.vue'], resolve)
        },
        {
          path: 'movie',
          name: 'movie',
          component: resolve => require(['@/views/movie.vue'], resolve)
        },
        {
          path: 'book',
          name: 'book',
          component: resolve => require(['@/views/book.vue'], resolve)
        },
        {
          path: 'broadcast',
          name: 'broadcast',
          component: resolve => require(['@/views/broadcast.vue'], resolve)
        },
        {
          path: 'group',
          name: 'group',
          component: resolve => require(['@/views/group.vue'], resolve)
        },
        {
          path:'details/:id',
          name:'details',
          component: resolve => require(['@/views/homeDetails.vue'], resolve)
        }
      ]
    }
  ]
})
