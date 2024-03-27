<template>
    <section class="testimonials" v-if="testimonials.length">

        <v-container class="container">
            <header>
                <p class="sm-title">Rekomendacje</p>
                <h2>Zobacz opinie uczestników</h2>
            </header>
        </v-container>
        <div style="width: 100%; display:block; margin:0 auto;" class="carousel-holder">


            <Carousel :itemsToShow="1" :breakpoints="breakpoints" :itemsToScroll="1" :autoplay="3000" :transition="700"
                :mouseDrag="true" :pauseAutoplayOnHover="true">

                <Slide v-for="testimonial in  testimonials " :key="testimonial.path" class="course-cell"
                    :class=testimonial.category>
                    <div class="cell-box">
                        <v-icon class="quote quote-top" icon="mdi-format-quote-open"></v-icon>
                        <div class="cell-header">
                            <!-- <img src="icons/stars.svg"> -->

                            <h4>{{ testimonial.slogan }}</h4>

                        </div>
                        <!--  <div class="cell-details">
                        <ul>
                            <li>
                                <img src="/icons/sm_level.svg">Początkujący
                            </li>
                            <li>
                                <img src="/icons/sm_clock.svg">3 dni
                            </li>
                            <li>
                                <img src="/icons/sm_graduate.svg"> 50 studentów
                            </li>
                        </ul>
                    </div> -->
                        <div class="cell-content">

                            <p>„{{ testimonial.content }}”</p>


                        </div>
                        <div class="person-box">
                            <img :src=$withBase(testimonial.image)
                                alt="https://www.flaticon.com/free-icons/user User icons created by Freepik - Flaticon">
                            <div class="person-holder">
                                <h3>{{ testimonial.author }}</h3>
                                <p>Uczestnik {{ testimonial.category }}</p>
                            </div>
                        </div>
                        <v-icon class="quote quote-bottom" icon="mdi-format-quote-close"></v-icon>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>

            </Carousel>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSiteData } from '@vuepress/client';

const props = defineProps({
    currentCourse: String,
});

// Reaktywna referencja do przechowywania opinii
const testimonials = ref([]);

const breakpoints = ref({
    800: {
        itemsToShow: 2,
        snapAlign: 'start',
    },
    1350: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
})

const loadTestimonials = async () => {
    const folderPath = '/testimonials/';
    const siteData = useSiteData();
    const pages = siteData.value.frontmatterData;

    testimonials.value = pages
        .filter(page =>
            page.path.startsWith(folderPath) &&
            page.path !== folderPath &&
            (!props.currentCourse || props.currentCourse.includes(page.frontmatter.category)))
        .map(page => ({
            path: page.path,
            slogan: page.frontmatter.slogan,
            author: page.frontmatter.author,
            category: page.frontmatter.category,
            content: page.frontmatter.content,
            image: page.frontmatter.image,
        }));
};

onMounted(() => {
    loadTestimonials();
});



</script>

<style></style>