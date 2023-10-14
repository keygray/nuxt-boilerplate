import isEmpty from 'lodash/isEmpty'
import { Role } from '~/services/user'
import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()
  const { roles = [] } = to.meta
  const accessedRoles = (roles as Role[]).filter((item) => userStore.roles.includes(item))

  if (isEmpty(accessedRoles)) {
    return navigateTo('/home')
  }

  return true
})
