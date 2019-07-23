import Vue from 'vue'
import Router from 'vue-router'
import UsersList from '@/components/UsersList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UsersList',
      component: UsersList
    }
  ]
})
