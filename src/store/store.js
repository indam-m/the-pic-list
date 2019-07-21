import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const getters = {}

const state = {
  data: [],
  total: 0,
  pageSize: 5
}

const mutations = {
  append (state, data) {
    state.data = state.data.concat(data)
    state.total += data.length
  }
}

const actions = {
  getNewPage ({ state, commit }, payload) {
    axios.get('https://randomuser.me/api')
      .params({
        page: payload.page || 1,
        results: state.pageSize
      })
      .then((data) => {
        commit('append', data.results)
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
