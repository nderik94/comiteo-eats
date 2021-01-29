<template>
    <div class="thumbnail p-8">
        <img
            :src="restaurant.cover_picture"
            class="rounded-lg"
        />
        <div class="infos-resto w-3/4 mx-auto -mt-10 text-left bg-white relative p-4 rounded-lg shadow-md">
            <div class="text-3xl font-bold">
                {{ restaurant.name }}
            </div>
            <div class="mb-3 uppercase">
                {{ restaurant.city }}
            </div>
            <div>
                <span class="rounded-lg bg-blue-600 p-2">{{ restaurant.category }}</span>
            </div>
            <div class="rating absolute">
                <span class="rounded-full bg-gray-300 p-2">{{ restaurant.ratings_average }}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'RestaurantThumbnail',
    props: {
        restaurant: {
            default: null,
            type: Object,
        },
    },
};
</script>

<style scoped lang="css">
    .rating {
        right: 1rem;
        top: 1rem;
    }
</style>
