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

const useUsers = () => {
  const key = UserRepository.getUsers.getUrl()

  const fetch = () =>
    UserRepository.getUsers().then((response) => UserTransform.transformGetUsers(response.data))

  const query = useQuery({
    queryKey: [key],
    queryFn: fetch
  })

  return query
}

export const UserService = {
  useLogin,
  useUsers
}
