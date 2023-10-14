import useAxios from '~/composables/useAxios'
import type { IGetUserParams, ILoginQueryParams, IUser } from './UserType'

enum ApiUrl {
  getMe = '/login',
  getUser = '/users/:id'
}

const login = (params: ILoginQueryParams) => {
  const url = login.getUrl()
  const axios = useAxios()

  return axios.post<IUser>(url, params)
}
login.getUrl = () => ApiUrl.getMe

const getUser = ({ id }: IGetUserParams) => {
  const url = getUser.getUrl(id)
  const axios = useAxios()

  return axios.get(url)
}
getUser.getUrl = (id: IGetUserParams['id']) => ApiUrl.getUser.replace(':id', `${id}`)

export const UserRepository = {
  login,
  getUser,
  ApiUrl
}
