import axios from 'axios'
import { HttpConfig } from '~/config'
import { useUserStore } from '~/stores/user'

export default defineNuxtPlugin(async () => {
  const runtimeConfig = useRuntimeConfig().public
  const userStore = useUserStore()

  const axiosInstance = axios.create({
    baseURL: runtimeConfig.baseUrl || '/',
    withCredentials: false,
    timeout: 10000,
    headers: HttpConfig
  })

  axiosInstance.interceptors.request.use((config) => {
    if (userStore.accessToken) {
      config.headers.setAuthorization(`Bearer ${userStore.accessToken || ''}`)
    }

    return config
  })

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config
      if (HttpUtils.isExpiredJWT(error)) {
        originalRequest._retry = true

        try {
          const { data } = await HttpUtils.refreshToken(userStore.refreshToken)
          userStore.setToken(data)
          return await axiosInstance(originalRequest)
        } catch (_) {
          /* empty */
        }
      }
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: axiosInstance
    }
  }
})
