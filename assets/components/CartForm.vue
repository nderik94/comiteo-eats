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
                v-model="form.last_name"
                type="text"
                name="name"
                class="border-solid border-4 border-light-blue-500"
            />
        </div>
        <div class="mb-3">
            <label for="name">Prénom</label>
            <input
                id="firstname"
                v-model="form.first_name"
                type="text"
                name="firstname"
                class="border-solid border-4 border-light-blue-500"
            />
        </div>
        <div class="mb-3">
            <label for="streetAddress">Addresse</label>
            <input
                id="streetAddress"
                v-model="form.delivery_street_address"
                type="text"
                name="streetAddress"
                class="border-solid border-4 border-light-blue-500"
            />
        </div>
        <div class="mb-3">
            <label for="zipcode">Code postal</label>
            <input
                id="zipcode"
                v-model="form.delivery_zip_code"
                type="text"
                name="zipcode"
                class="border-solid border-4 border-light-blue-500"
            />
        </div>
        <div class="mb-3">
            <label for="city">Ville</label>
            <input
                id="city"
                v-model="form.delivery_city"
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
import axios from 'axios';

export default {
    name: 'CartForm',
    data() {
        return {
            errors: [],
            form: {
                last_name: null,
                first_name: null,
                delivery_street_address: null,
                delivery_zip_code: null,
                delivery_city: null,
                items: null
            },
        };
    },
    methods: {
        checkForm(e) {
            if (this.form.last_name && this.form.first_name && this.delivery_street_address) {
                return true;
            }
            this.errors = [];
            if (!this.form.name) {
                this.errors.push('Nom est requis.');
            }
            if (!this.form.firstname) {
                this.errors.push('Prénom est requis.');
            }
            if (!this.form.delivery_street_address) {
                this.errors.push('Le nom de rue est requis.');
            }
            if (!this.form.delivery_zip_code) {
                this.errors.push('Le code postal est requis.');
            }
            if (!this.form.delivery_city) {
                this.errors.push('La ville est requise.');
            }
            e.preventDefault();
            return false;
        },
        submitForm() {
            axios.post('https://comiteo-eats.victormx.com/api/orders', this.form)
                .then(() => {
                    console.log('success');
                })
                .catch((error) => {
                    console.error(`error posting data ${error}`);
                });
        },
    },
};
</script>
