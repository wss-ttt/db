import request from '@/utils/request.js'
export default {
    namespaced: false,
    state: {
        users: [],  // 保存用户数据
        events: [],
        eventItem:{},
        start: 0,   // 开始的位置
        skip: 0,    // requeset doubna api start at 0
    },
    getters: {

    },
    actions: {
        loadMore({ commit, state }) {
            request({
                url: '/api/v2/event/list?loc=108288&start=' +
                    state.skip + '&count=3',
                method: 'get'
            }).then((data) => {
                commit({
                    type: 'loadMore',
                    res: data  // 传递的数据
                })
            })
        },
        getUsers({ commit, state }) {
            request({
                url: 'http://localhost:3000/users/list',
                method: 'get',
                params: {
                    start: state.start,
                    end: state.start + 3
                }
            }).then((data) => {
                commit('changeStart')
                commit({
                    type: 'getUsers',
                    res: data
                })
            })
        },
        getDetails({ commit, state }, playload) {
            request({
                url: '/api/v2/event/' + playload.id,
                method:'get'
            }).then((data)=>{
                console.log('详细信息',data)
                commit({
                    type:'getDetails',
                    res:data
                })
            })
        }

    },
    mutations: {
        changeStart(state, playload) {
            state.start += 3
        },
        getUsers(state, playload) {
            state.users = state.users.concat(playload.res)
        },
        loadMore(state, playload) {
            state.skip += 3
            state.events = state.events.concat(playload.res.events)
        },
        getDetails(state,playload){
            state.eventItem = playload.res
        }
    }
}