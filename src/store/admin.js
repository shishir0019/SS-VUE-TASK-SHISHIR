import { GET_ADMIN } from '@/api'

export default {
    namespaced: true,
    state: () => ({
        list: [],
        loading: false
    }),
    mutations: {
        SET_LIST: (state, payloads) => state.list = payloads,
        SET_LOADING: (state, payloads) => state.loading = payloads
    },
    actions: {
        get: (context, payloads) => {
            context.commit('SET_LOADING', true)
            GET_ADMIN().then(res => {
                context.commit('SET_LIST', res)
            }).finally(() => {
                context.commit('SET_LOADING', false)
            })
        },
        create: (context, payloads) => { },
        edit: (context, payloads) => { },
        delete: (context, payloads) => { }
    },
    getters: {
        list: state => state.list,
        loading: state => state.loading
    }
}