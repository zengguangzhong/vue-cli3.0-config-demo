import T from './types'

export default {
  [T.CHANGE_LOGIN_STATE](state, payload) {
    state.isLogin = payload
  }
}
