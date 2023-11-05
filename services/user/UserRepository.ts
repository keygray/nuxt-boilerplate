import useAxios from '~/composables/useAxios'
import type { IGetUserParams, ILoginQueryParams, IMember, IUser } from './UserType'

enum ApiUrl {
  getMe = '/login',
  getUser = '/users/:id',
  getUsers = '/users'
}

/** @Login */
const login = (params: ILoginQueryParams) => {
  const url = login.getUrl()
  const axios = useAxios()

  return axios.post<IUser>(url, params)
}
login.getUrl = () => ApiUrl.getMe

/** @GetUser */
const getUser = ({ id }: IGetUserParams) => {
  const url = getUser.getUrl(id)
  const axios = useAxios()

  return axios.get(url)
}
getUser.getUrl = (id: IGetUserParams['id']) => ApiUrl.getUser.replace(':id', `${id}`)

/** @GetAllUser */
const getUsers = () => {
  const url = getUsers.getUrl()
  const axios = useAxios()

  return axios.get<IMember[]>(url)
}
getUsers.getUrl = () => ApiUrl.getUsers

export const UserRepository = {
  login,
  getUser,
  getUsers,
  ApiUrl
}
