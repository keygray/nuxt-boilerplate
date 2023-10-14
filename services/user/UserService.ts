import { UserTransform } from './UserTransform'
import { UserRepository } from './UserRepository'
import { ILoginQueryParams } from './UserType'

const useLogin = () => {
  const key = UserRepository.login.getUrl()

  const fetch = (queryParams: ILoginQueryParams) =>
    UserRepository.login(queryParams).then((response) => UserTransform.transformUser(response.data))

  const query = useMutation({
    mutationKey: [key],
    mutationFn: fetch
  })

  return query
}

export const UserService = {
  useLogin
}
