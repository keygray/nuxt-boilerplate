import { defineStore, acceptHMRUpdate } from 'pinia'
import { IUser, IUserToken } from '~/services/user'

export const useUserStore = defineStore('user', {
  state: (): IUser => ({
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    roles: [],
    token: {
      access: '',
      refresh: ''
    }
  }),
  getters: {
    isAuth: (state) => !!state.id
  },
  actions: {
    setToken(token: IUserToken) {
      this.token = token
    }
  },
  persist: true
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
