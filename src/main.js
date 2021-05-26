import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import data from "./data/heroes.json";

if (localStorage.getItem("heroes") === null) {
  localStorage.setItem("heroes", JSON.stringify(data.heroes));
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
