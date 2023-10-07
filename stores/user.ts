import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    accessToken: 'accessToken',
    refreshToken: ''
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.accessToken = token
    }
  },
  persist: true
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
