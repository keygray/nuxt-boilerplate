import type { IUser } from './UserType'

const transformUserMe = (user: IUser) => user

const transformGetUser = (user: any | null) => user

export const UserTransform = {
  transformUserMe,
  transformGetUser
}
