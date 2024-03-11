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
    enhance({ app }) {
        app.use(vuetify);
    },
    layouts: {
        Course,
        Home,
    },
    // Additional client-side configurations...
});