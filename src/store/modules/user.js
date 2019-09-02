import request from '@/utils/request.js'
export default {
    namespaced: false,
    state: {
        userName:'',
        pwd:'',
    },
    getters: {

    },
    actions: {
    },
    mutations: {
        saveUser(state,payload){
           state.userName = payload.userName 
           state.pwd = payload.pwd
        }
    }
}