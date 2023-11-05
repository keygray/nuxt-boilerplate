import type { IUser } from './UserType'

const transformUser = (user: IUser) => user

const transformGetUsers = (user: any | null) => user

export const UserTransform = {
  transformUser,
  transformGetUsers
}
