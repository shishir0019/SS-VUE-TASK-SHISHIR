import { GET_STUFF, CREATE_STUFF, DELETE_STUFF, UPDATE_STUFF } from '@/api'

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
            GET_STUFF().then(res => {
                context.commit('SET_LIST', res)
            }).finally(() => {
                context.commit('SET_LOADING', false)
            })
        },
        create: (context, payloads) => {
            return CREATE_STUFF(payloads).finally(()=> {
                context.dispatch('get')
            })
        },
        update: (context, payloads) => {
            return UPDATE_STUFF(payloads).finally(()=> {
                context.dispatch('get')
            })
        },
        delete: (context, id) => {
            context.commit('SET_LOADING', true)
            return DELETE_STUFF(id).finally(() => {
                context.dispatch('get')
                context.commit('SET_LOADING', false)
            })
         }
    },
    getters: {
        list: state => state.list,
        get_item: state => (id) => state.list.find(item => item.id === id),
        loading: state => state.loading
    }
}