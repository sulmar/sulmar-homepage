import { defineClientConfig } from 'vuepress/client';

import 'vuetify/styles'; // Importowanie stylów Vuetify
import { createVuetify } from 'vuetify'; // Importowanie funkcji tworzącej Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import Course from './layouts/Course.vue';
import Home from './layouts/Home.vue';

// Tworzenie instancji Vuetify
const vuetify = createVuetify({
    components,
    directives,
});

export default defineClientConfig({
    async enhance({ app }) {
        app.use(vuetify);
     /*    try {
            const response = await fetch('/globalData.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const globalData = await response.json();
            app.provide('globalData', globalData);
        } catch (e) {
            console.error("Problem z ładowaniem globalData.json:", e);
        } */
    },
    layouts: {
        Course,
        Home,
    },
    // Additional client-side configurations...
});