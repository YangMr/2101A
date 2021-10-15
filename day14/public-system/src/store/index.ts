import { createStore } from 'vuex';
import storage from "@/utils/storage"
export default createStore({
  state: {
    token : storage.get("token") ? storage.get("token") : null,
    userInfo : storage.get("userInfo") ? storage.get("userInfo") : null,
  },
  getters : {

  },
  mutations: {
    changeToken(state,token){
      state.token = token;
      storage.set("token",token)
    },
    changeUserInfo(state,userInfo){
      state.userInfo = userInfo;
      storage.set("userInfo",userInfo)
    }
  },
  actions: {
    setChangeToken({commit},payload){
      console.log(payload)
      commit("changeToken",payload)
    },
    setChangeUserInfo({commit},payload){
      console.log(payload)
      commit("changeUserInfo",payload)
    }
  },
  modules: {
  },
});
