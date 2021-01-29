<template>
    <div>
        <div
            class="flex w-screen flex-row flex-wrap "
        >
            <div
                v-for="restaurant in restaurants"
                :key="restaurant.id"
                class="w-2/4 text-center flex-column"
            >
                <restaurant-thumbnail :restaurant="restaurant" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import RestaurantThumbnail from './RestaurantThumbnail.vue';

export default {
    name: 'RestaurantList',
    components: { RestaurantThumbnail },
    data() {
        return {
            restaurants: [],
        };
    },
    beforeMount() {
        axios.get('https://comiteo-eats.victormx.com/api/restaurants')
            .then((response) => {
                this.restaurants = response.data.data;
            })
            .catch((e) => {
                console.error(`Error while loading restaurants : ${e}`);
            });
    },
};
</script>
