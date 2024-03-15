import { defineClientConfig } from 'vuepress/client';

import 'vuetify/styles'; // Importowanie stylów Vuetify
import { createVuetify } from 'vuetify'; // Importowanie funkcji tworzącej Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation} from 'vue3-carousel'

import Home from './layouts/Home.vue';
import Course from './layouts/Course.vue';


// Tworzenie instancji Vuetify
const vuetify = createVuetify({
    components,
    directives,
});

export default defineClientConfig({
    async enhance({ app }) {
        app.use(vuetify);
        app.component('Carousel', Carousel);
        app.component('Slide', Slide);
        app.component('Navigation', Navigation);
    },
    layouts: {
        Home,
        Course,
    },
    // Additional client-side configurations...
});