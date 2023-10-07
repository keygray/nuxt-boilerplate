import type { IGetUserParams, IUser } from './UserType'
import useAxios from '../../composables/useAxios'

enum ApiUrl {
  getMe = '/me',
  getUser = '/users/:id'
}

const getMe = () => {
  const url = getMe.getUrl()
  const axios = useAxios()

  return axios.get<IUser>(url)
}
getMe.getUrl = () => ApiUrl.getMe

const getUser = ({ id }: IGetUserParams) => {
  const url = getUser.getUrl(id)
  const axios = useAxios()

  return axios.get(url)
}
getUser.getUrl = (id: IGetUserParams['id']) => ApiUrl.getUser.replace(':id', `${id}`)

export const UserRepository = {
  getMe,
  getUser,
  ApiUrl
}
