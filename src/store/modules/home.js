import request from '@/utils/request.js'
export default {
    namespaced: false,
    state: {
        users: [],  // 保存用户数据
        events: [],
        start: 0,   // 开始的位置
    },
    getters: {

    },
    actions: {
        loadMore({ commit, state }) {
            request({
                url: 'http://localhost:3000/users/list',
                method: 'get',
                params: {
                    start: state.start,
                    end: state.start +3
                }
            }).then((data) => {
                commit('changeStart')
                // commit('loadMore', data)
                // 第二种写法
                commit({
                    type: 'loadMore',
                    res: data
                })
            })
            /* request({
                url:'/api/v2/event/list?loc=108288&start=0&count=3',
                method:'get'
            }).then((data)=>{
                commit({
                    type:'loadMore',
                    res:data  // 传递的数据
                })
            }) */
        },

    },
    mutations: {
        changeStart(state, playload) {
            state.start += 3
        },
        /* loadMore(state, data) {
            console.log(data)
        } */

        // 对应着第二种写法啊
        loadMore(state, playload) {
            console.log(playload)
            state.users = state.users.concat(playload.res)
        }
        /* loadMore(state,playload){
            // 保存请求返回的数据
            console.log('playload',playload)
            state.events = state.events.concat(playload.res.events)
        } */
    }
}