import Vue from 'vue'
import Vuex from 'vuex'
import data from "../data/heroes.json"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    headers: [
     
      { text: 'Hero Name', value: "name", },
      { text: 'Powers', value: "powers"  },
      { text: 'Rate', value: "rate", filterable: false },
      
    ],
    heroes: data.heroes,
    
    
  },
  mutations: {
    rateHero(state){
      state.heroes.find(hero => hero.name == "MR. ROBOT").rate = 5
console.log("good");
    }
  },
  actions: {
  },
  modules: {
  }
})
