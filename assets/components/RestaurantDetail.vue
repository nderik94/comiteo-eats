<template>
    <div class="flex flex-col p-8 ">
        <img
            :src="restaurant.cover_picture"
            class="rounded-lg w-full"
        />
        <h2 class="text-3xl font-bold">
            {{ restaurant.name }}
        </h2>
        <div class="mb-3 flex flex-col">
            <div>
                {{ restaurant.street_address }}
            </div>
            <div>
                {{ restaurant.zip_code }} {{ restaurant.city }}
            </div>
        </div>
        <div class="rating mb-8">
            <span class="rounded-full bg-gray-300 p-2">{{ restaurant.ratings_average }}</span>
        </div>
        <div>
            <h3 class="mb-4">
                Menu
            </h3>
            <div
                v-for="(dish, index) in restaurant.dishes.data"
                :key="index"
            >
                <restaurant-dish :dish="dish" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import RestaurantDish from './RestaurantDish.vue';

export default {
    name: 'RestaurantList',
    components: { RestaurantDish },
    data() {
        return {
            restaurant: null,
        };
    },
    beforeMount() {
        axios.get(`https://comiteo-eats.victormx.com/api/restaurants/${this.$route.params.restaurantId}`)
            .then((response) => {
                this.restaurant = response.data.data;
            })
            .catch((e) => {
                console.error(`Error while loading a restaurant : ${e}`);
            });
    },
};
</script>
