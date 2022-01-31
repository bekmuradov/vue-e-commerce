import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:3000/' })

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
