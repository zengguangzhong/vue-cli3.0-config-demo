import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import T from './types'

export const Types = {
  ...T
}
export default {
  namespaced: true,
  state: {
    isLogin: 222
  },
  mutations,
  getters,
  actions
}
