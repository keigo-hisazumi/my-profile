import { createRouter, createWebHistory } from 'vue-router'
import ProfilePage from '../views/ProfilePage.vue'

const routes = [
  {
    path: '/',
    component: ProfilePage,
    props: { profileKey: 'soundEngineer' },
    meta: { profile: 'soundEngineer' }
  },
  {
    path: '/sound',
    component: ProfilePage,
    props: { profileKey: 'soundEngineer' },
    meta: { profile: 'soundEngineer' }
  },
  {
    path: '/dev',
    component: ProfilePage,
    props: { profileKey: 'webDeveloper' },
    meta: { profile: 'webDeveloper' }
  }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})
