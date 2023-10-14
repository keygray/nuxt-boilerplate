interface ErrResponse {
  response: {
    status: number
  }
  config: {
    _retry: boolean
  }
}

const isExpiredJWT = ({ response, config }: ErrResponse) =>
  response?.status === 401 && config && !config?._retry

/**
 * TODO Calling api refresh token
 * @returns
 */
const refreshToken = (token: string) => {
  console.log(token)

  return { access: 'accessNew', refresh: 'refreshNew' }
}

export const HttpUtils = {
  isExpiredJWT,
  refreshToken
}
