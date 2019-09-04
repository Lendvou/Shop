import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import storeauth from './store-auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [],
        addedItems: []
    },
    getters: {
        items(state) {
            return state.items;
        },
        addedItems(state) {
            return state.addedItems;
        }
    },
    mutations: {
        setItems(state, items) {
            state.items = items;
        },
        addItem(state, item) {
            state.addedItems.push(item)
        }
    },
    actions: {
        setItems({commit}) {
            axios.get('items.json')
                .then(response => {
                    let items = response.data;
                    commit('setItems', items)
                })
        },
        buyItem({commit}, item) {
            commit('addItem', item)
        }
    },
    modules: {
        storeauth
    }
})