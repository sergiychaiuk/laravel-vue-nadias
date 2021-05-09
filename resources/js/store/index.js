import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [],
        items: []
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        ADD_CATEGORY(state, categories) {
            state.categories.push(categories);
        },
        REMOVE_CATEGORIES(state, index) {
            state.categories.splice(index, 1);
        }
    }
});
