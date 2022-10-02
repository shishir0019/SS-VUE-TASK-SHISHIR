import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import Dashboard from '../views/Dashboard'
import StuffList from '../views/StuffList'
import AdminList from '../views/AdminList'

// Layouts
import Client from '../layouts/Client'
import Application from '../layouts/Application'

const routes = [
  {
    path: '/',
    component: Client,
    children: [
      {
        path: '',
        component: HomeView
      }
    ]
  },
  {
    path: '/application',
    component: Application,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'stuffs',
        component: StuffList
      },
      {
        path: 'admins',
        component: AdminList
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
