import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import app, { Types as AppTypes } from './app'
import user, { Types as UserTypes } from './user'

Vue.use(Vuex)

export const Types = {
  ...AppTypes,
  ...UserTypes
}

const plugins = []
if (process.env.NODE_ENV !== 'production') {
  plugins.push(createPersistedState())
}

export default new Vuex.Store({
  modules: {
    app,
    user
  },
  state: {
  },
  plugins,
  strict: process.env.NODE_ENV !== 'production'
})
