import { GOOGLE_AUTH_TOKEN } from '../data/tokens'
import axios from 'axios'

interface UserCredentials {
  email: string
  password: string
}

export const getAuthBearerToken = (credentials: UserCredentials) => {
  // eslint-disable-next-line max-len
  const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${GOOGLE_AUTH_TOKEN}`

  return axios.post(
    url!,
    {
      ...credentials,
      returnSecureToken: true,
    },
  )
    .then((response) => response.data)
    .then((data) => data.idToken)
}