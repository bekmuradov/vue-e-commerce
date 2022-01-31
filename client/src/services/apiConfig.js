import axios from 'axios'
import { apiBaseUrl } from '@/config/index'

const api = axios.create({ baseURL: apiBaseUrl })

const authInterceptor = config => {
  // add auth token
  return config
}

/** Adding the request interceptors */
api.interceptors.request.use(authInterceptor)

/** Adding the response interceptors */
api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // Do something with response error
    return Promise.reject(error)
  }
)

export { api }
