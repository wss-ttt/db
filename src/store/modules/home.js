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
                url: '/api/v2/event/list?loc=108288&start=0&count=3',
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
            state.events = state.events.concat(playload.res.events)
        }
    }
}