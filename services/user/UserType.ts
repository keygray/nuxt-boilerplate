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

interface IRepresentative {
  name: string
  image: string
}

interface ICountry {
  name: string
  code: string
}

export interface IMember {
  id: number
  name: string
  country: ICountry
  company: string
  date: string
  status: string
  verified: boolean
  activity: number
  representative: IRepresentative
  balance: number
}
