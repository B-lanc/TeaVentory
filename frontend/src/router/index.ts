import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import Inventory from '@/views/InventoryView.vue'
import Management from '@/views/ManagementView.vue'
import Dashboard from '@/views/DashboardView.vue'
import Employees from '@/views/EmployeesView.vue'
import Report from '@/views/ReportView.vue'
import Settings from '@/views/SettingsView.vue'
import Help from '@/views/HelpView.vue'
import pb from '@/pocketbaseConnection'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'inventory',
          name: 'inventory',
          component: Inventory
        },
        {
          path: 'management',
          name: 'management',
          component: Management
        },
        {
          path: 'employees',
          name: 'employees',
          component: Employees
        },
        {
          path: 'report',
          name: 'report',
          component: Report
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings
        },
        {
          path: 'help',
          name: 'help',
          component: Help
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    }
  ]
})

router.beforeEach((to) => {
  if (to.name !== 'login' && !pb.authStore.isValid) {
    return { name: 'login' }
  }
})

export default router
