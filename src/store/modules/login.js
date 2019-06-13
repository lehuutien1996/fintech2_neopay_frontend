import { make } from 'vuex-pathify'

const state = {
  isRequesting: false,
  form: {
    email: '',
    password: '',
  }
}

const getters = {
  ...make.getters(state),
}

const actions = {
  authenticate({ commit }, credentials = {}) {
    commit('SET_IS_REQUESTING', true);

    setTimeout(() => {
      credentials

      commit('SET_IS_REQUESTING', false)
    }, 2000);
  }
}

const mutations = {
  ...make.mutations(state),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
