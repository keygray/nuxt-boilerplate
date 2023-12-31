import { isNil, map } from 'lodash'
import type { TypeStorage } from '../type'

const SessionStorage: TypeStorage = {
  has: (key: string) => !isNil(window.sessionStorage.getItem(key)),

  json: <T>() => window.sessionStorage as unknown as T,

  deleteAll: () => {
    map(window.sessionStorage, SessionStorage.delete)
  },

  get: <T>(key: string) => {
    const str = window.sessionStorage.getItem(key)

    try {
      return JSON.parse(str as never) as T
    } catch (error) {
      return null
    }
  },

  delete: (key) => {
    window.sessionStorage.removeItem(key)
  },

  set: (key, object) => {
    window.sessionStorage.setItem(key, JSON.stringify(object))
  }
}

export default SessionStorage
