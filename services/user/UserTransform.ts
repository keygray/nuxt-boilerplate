import type { IUser } from './UserType'

const transformUser = (user: IUser) => user

const transformGetUser = (user: any | null) => user

export const UserTransform = {
  transformUser,
  transformGetUser
}
