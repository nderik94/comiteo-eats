import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        cartCount: 0,
    },
    mutations: {
        addToCart(state, dish) {
            state.cart.push(dish);
            Vue.set(dish, 'quantity', 1);
            Vue.set(dish, 'totalPrice', dish.price);
            state.cartCount += 1;
        },
    },
    actions: {
    },
    modules: {
    },
});
