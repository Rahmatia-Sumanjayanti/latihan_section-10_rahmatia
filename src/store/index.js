import Vue from 'vue'
import Vuex from 'vuex'
import api from "./api"
import createPersistedState from  'vuex-persistedstate'

Vue.use(Vuex)

const persistedDataState = createPersistedState({
  path: ['api'],
});

export default new Vuex.Store({
  path: [persistedDataState],
  modules: {
    api: {
      namespaced: true,
      ...api,
    },
  }
});