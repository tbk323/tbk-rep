import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numadd:''

  },
  getters: {
    
  },
  mutations: {
    addnum(state,obj){
      state.numadd=obj
    }
  },
  actions: {
  },
  modules: {
  }
})
