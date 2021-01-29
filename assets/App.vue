<template>
    <div>
        <h1
            class="text-center"
        >
            Comiteo EATS
        </h1>
        <RestaurantList />
    </div>
</template>

<script>

import RestaurantList from './components/RestaurantList.vue';

export default {
    name: 'App',
    components: {
        RestaurantList,
    },
};
</script>
