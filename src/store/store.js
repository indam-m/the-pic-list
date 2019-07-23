import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const getters = {
  total: ({ users }) => users.length
}

const state = {
  users: [],
  pageSize: 5
}

const mutations = {
  append (state, data) {
    state.users = state.users.concat(data)
  }
}

const actions = {
  getNewPage ({ state, commit }, payload) {
    axios.get('https://randomuser.me/api', {
      params: {
        page: payload.page || 1,
        results: state.pageSize,
        seed: 'abc'
      }})
      .then((data) => {
        commit('append', data.data.results)
        if (payload.onSuccess) {
          payload.onSuccess(data)
        }
      })
      .catch((err) => {
        if (payload.onError) {
          payload.onError(err)
        }
      })
      .finally(() => {
        if (payload.onFinish) {
          payload.onFinish()
        }
      })
  }
}

export default new Vuex.Store({
  getters,
  state,
  mutations,
  actions
})
