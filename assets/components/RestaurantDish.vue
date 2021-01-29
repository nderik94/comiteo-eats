<template>
    <div class="shadow-md mb-4 p-2">
        <div class="mb-3 text-2xl flex justify-between">
            <div>{{ dish.type }}</div>
            <div>
                <button
                    class="p-2 rounded-lg bg-blue-600"
                    @click="addToCart(dish)"
                >
                    Ajouter au panier
                </button>
            </div>
        </div>
        <div class="mb-3 flex justify-between">
            <div>{{ dish.name }}</div>
            <div>{{ dish.price / 100 }} €</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RestaurantDish',
    props: {
        dish: {
            default: null,
            type: Object,
        },
    },
    methods: {
        addToCart(product) {
            this.$store.commit('addToCart', product);
        },
    },
};
</script>
