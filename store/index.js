import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    // stateはfunctionで定義しなければならない
    state: () => {
      return {
        message: 'Hello Vuex!'
      }
    }
  })
}

export default createStore
