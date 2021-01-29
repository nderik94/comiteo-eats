<template>
    <div>
        <div class="mb-3 flex justify-between p-4">
            <div>
                <router-link to="/">
                    <h1
                        class="text-center"
                    >
                        Comiteo EATS
                    </h1>
                </router-link>
            </div>
            <div>
                <router-link to="/cart">
                    <span>
                        Panier
                    </span>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
};
</script>
