export const state = () => ({
  count: 0
})

export const mutations = {
  increment: (state) => {
    state.count++
  },
  reset: (state) => {
    state.count = 0
  }
}
