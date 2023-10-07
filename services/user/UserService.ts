import { UserTransform } from './UserTransform'
import { UserRepository } from './UserRepository'

const useGetMe = () => {
  const key = UserRepository.getMe.getUrl()

  const fetch = () =>
    UserRepository.getMe().then((response) => UserTransform.transformUserMe(response.data))

  const query = useQuery({
    queryKey: [key],
    queryFn: fetch,
    enabled: false
  })

  return query
}

export const UserService = {
  useGetMe
}
