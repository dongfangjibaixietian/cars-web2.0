import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import location from "./modules/location.js";

export default new Vuex.Store({
  modules: {
    location,
  },
});
