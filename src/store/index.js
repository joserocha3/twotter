import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
  state: {},

  // functions that effect the state
  mutations: {},

  // functions called throughout application that call mutations
  actions: {},

  modules: {
    User: UserModule,
  }
})
