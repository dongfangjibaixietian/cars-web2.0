import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import location from "./modules/location.js";
import app from "./modules/app.js"
import account from "./modules/account.js"

export default new Vuex.Store({
  modules: {
    location,
    app,
    account
  },
});
