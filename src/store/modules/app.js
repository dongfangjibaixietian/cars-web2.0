const state = {
    // 是否点击了车辆列表
    isClickCarsList: true,
    isRequestCarsList: false
  };
  const mutations = {
    //   mutation的用法
    //   vuex中改变state里面的方法，先传入state，后传入value
    SET_CARS_LIST_STATUS(state,value) {
        
        state.isClickCarsList = value
    },
    SET_CARS_LIST_REQUEST(state,value) {
        
        state.isRequestCarsList = value
    }
  };
  const actions = {};
  const getters = {};
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  