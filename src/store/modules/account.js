

import { Register } from "../../api/account";
import { setToken, setUsername, removeToken, removeUsername, getToken, getUsername } from "../../utils/cookies"

const state = {
    token: "" || getToken(),
    username: "" || getUsername(),
};
const mutations = {
    SET_TOKEN(state, value) {
        state.token = value
    }
};
const actions = {
    registerAction(context, ruquestData) {
        return new Promise((resolve, reject) => {
            Register(requestData).then((res) => {
                resolve(res)
            })
        })
    }
};
const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
