import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import T from './types'

export const Types = {
  ...T
}
export default {
  state: {
    isLogin: 111
  },
  mutations,
  getters,
  actions
}
