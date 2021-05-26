import Vue from "vue";
import Vuex from "vuex";
import data from "../data/heroes.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    headers: [
      { text: "Hero Name", value: "name" },
      { text: "Powers", value: "powers" },
      { text: "Rate", value: "rate", filterable: false },
    ],
    heroes: JSON.parse(localStorage.getItem("heroes")),
    selectedHero: { name: "", powers: "", rating: 1 },
    userRating: 1,
  },
  mutations: {
    rateHero(state) {
      state.heroes
        .filter((hero) => {
          return (
            hero.name
              .toLowerCase()
              .indexOf(state.selectedHero.name.toLowerCase()) !== -1
          );
        })
        .forEach((hero) => {
          hero.rate = state.userRating;
        });

      localStorage.setItem("heroes", JSON.stringify(state.heroes));

      console.log(data.heroes);
    },
  },
  actions: {},
  modules: {},
});
