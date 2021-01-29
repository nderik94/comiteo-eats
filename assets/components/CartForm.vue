<template>
    <form
        id="app"
        action=""
        method="post"
        class="mt-8 flex flex-col"
        @submit="checkForm"
    >
        <h3>
            Valider votre panier avec les informations ci-dessous
        </h3>
        <div v-if="errors.length">
            <b>Merci de corriger les erreurs suivantes:</b>
            <ul>
                <li
                    v-for="(error, index) in errors"
                    :key="index"
                >
                    {{ error }}
                </li>
            </ul>
        </div>

        <div class="mb-3">
            <label for="name">Nom</label>
            <input
                id="name"
                v-model="last_name"
                type="text"
                name="name"
                class="border-solid border-4 border-light-blue-500"
            />
        </div>
        <div class="mb-3">
            <label for="name">Prénom</label>
            <input
                id="firstname"
                v-model="first_name"
                type="text"
                name="firstname"
                class="border-solid border-4 border-light-blue-500"
            />
        </div>
        <div class="mb-3">
            <label for="streetAddress">Addresse</label>
            <input
                id="streetAddress"
                v-model="delivery_street_address"
                type="text"
                name="streetAddress"
                class="border-solid border-4 border-light-blue-500"
            />
        </div>
        <div class="mb-3">
            <label for="zipcode">Code postal</label>
            <input
                id="zipcode"
                v-model="delivery_zip_code"
                type="text"
                name="zipcode"
                class="border-solid border-4 border-light-blue-500"
            />
        </div>
        <div class="mb-3">
            <label for="city">Ville</label>
            <input
                id="city"
                v-model="delivery_city"
                type="text"
                name="city"
                class="border-solid border-4 border-light-blue-500"
            />
        </div>
        <div>
            <input
                type="submit"
                value="PAYER"
                class="rounded-lg bg-blue-600 p-2"
            />
        </div>
    </form>
</template>

<script>
export default {
    name: 'CartForm',
    data() {
        return {
            errors: [],
            last_name: null,
            first_name: null,
            delivery_street_address: null,
            delivery_zip_code: null,
            delivery_city: null,

        };
    },
    methods: {
        checkForm(e) {
            if (this.name && this.firstname) {
                return true;
            }
            this.errors = [];
            if (!this.name) {
                this.errors.push('Nom est requis.');
            }
            if (!this.firstname) {
                this.errors.push('Prénom est requis.');
            }
            if (!this.delivery_street_address) {
                this.errors.push('Le nom de rue est requis.');
            }
            if (!this.delivery_zip_code) {
                this.errors.push('Le code postal est requis.');
            }
            if (!this.delivery_city) {
                this.errors.push('La ville est requise.');
            }
            e.preventDefault();
            return false;
        },
    },
};
</script>
