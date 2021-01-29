<template>
    <div class="flex flex-col p-4 w-2/4 mx-auto">
        <h2>
            STATUT DE VOTRE PANIER
        </h2>
        <div
            v-if="$store.state.cart.length > 0"
            class="flex flex-col"
        >
            <h3 class="mb-8">
                Plats dans votre panier : {{ $store.state.cartCount }}
            </h3>
            <div
                v-for="dish in $store.state.cart"
                :key="dish.id"
                class="flex justify-between shadow-sm"
            >
                <div>
                    {{ dish.name }}
                </div>
                <div>
                    {{ dish.totalPrice / 100 }} €
                </div>
            </div>

            <div>
                Total: {{ totalPrice / 100 }} €
            </div>
            <cart-form />
        </div>
        <div
            v-else
            class="mt-3"
        >
            Votre panier est vide
        </div>
    </div>
</template>

<script>
import CartForm from './CartForm.vue';

export default {
    name: 'Cart',
    components: { CartForm },
    computed: {
        totalPrice() {
            let total = 0;
            for (const product of this.$store.state.cart) {
                total += product.totalPrice;
            }
            return total.toFixed(2);
        },
    },
    methods: {
        addToCart(product) {
            this.$store.commit('addToCart', product);
        },
    },
};
</script>
