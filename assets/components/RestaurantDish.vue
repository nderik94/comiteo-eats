<template>
    <div class="shadow-md mb-4 p-2">
        <div class="mb-3 text-2xl">
            {{ dish.type }}
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
};
</script>
