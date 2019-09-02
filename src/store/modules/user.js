import request from '@/utils/request.js'
export default {
    namespaced: false,
    state: {
        email:'',   // 保用邮箱
        pass:'',   // 保存密码
        name:'',   // 保存用户名
        token:'',    // 保存token
        // 另一个登录接口的用户名和密码
        userName:'',
        pwd:'',
    },
    getters: {

    },
    actions: {
        register({ commit, state }, payload) {
            return new Promise((resolve,reject)=>{
                request({
                    url: 'https://douban.herokuapp.com/user/',
                    method: 'post',
                    data: {
                        email: payload.email,
                        pass: payload.pass,
                        name: payload.name
                    }
                }).then((res) => {
                    commit({
                        type:'setUser',
                        email:res.email,
                        token:res.token,
                        name:res.name
                    })
                    resolve(res)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    },
    mutations: {
        setUser(state,payload){
            state.email = payload.email
            state.name = payload.name
            state.token = payload.token
        },
        saveUser(state,payload){
           state.userName = payload.userName 
           state.pwd = payload.pwd
        }
    }
}