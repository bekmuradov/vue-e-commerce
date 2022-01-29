import { api } from './apiConfig'

export default {
  getAll (success, fail) {
    api
      .get('api/robots')
      .then(response => success(response))
      .catch(response => fail(response))
  }
}
