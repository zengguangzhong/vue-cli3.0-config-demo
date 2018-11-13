import { post, get } from './config'

const apiUrl = {
  registerUser: '/registerUser'
}

const registerUser = params => post(apiUrl.registerUser, params)

export default {
  registerUser
}
