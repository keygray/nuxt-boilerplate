export interface IGetUserParams {
  id: number
}

export interface IUserToken {
  access: string
  refresh: string
}

export enum Role {
  Writable = 'writable',
  Read = 'read'
}

export interface IUser {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  roles: Role[]
  token: IUserToken
}

export interface ILoginQueryParams {
  email: string
  password: string
}
