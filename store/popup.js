export const state = () => {
  return {
    open: false,
  }
}
export const mutations = {
  OPEN_POPUP(state, options) {
    state.open = true
  },
  CLOSE_POPUP(state) {
    state.open = false
  },
}

export const actions = {
  open({ commit }, payload) {
    commit('OPEN_POPUP', payload)
  },
  close({ commit }) {
    commit('CLOSE_POPUP')
  },
}
