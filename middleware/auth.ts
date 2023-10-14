import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()

  if (userStore.isAuth && to.path === '/login') {
    return navigateTo('/admin')
  }

  if (!userStore.isAuth && to.path === '/admin') {
    return navigateTo('/login')
  }

  return true
})
