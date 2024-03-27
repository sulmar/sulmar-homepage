<template>
    <div style="width: 100%; display:block; margin:0 auto;" class="carousel-holder">


        <Carousel :itemsToShow="1" :breakpoints="breakpoints" :itemsToScroll="1" :autoplay="300000" :transition="700" :wrapAround="true"

            :mouseDrag="true" :pauseAutoplayOnHover="true">

            <Slide v-for="testimonial in testimonials" :key="testimonial.path" class="course-cell"
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
                        <img src="images/user.png" alt="https://www.flaticon.com/free-icons/user User icons created by Freepik - Flaticon">
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
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSiteData } from '@vuepress/client';

// Reaktywna referencja do przechowywania opinii
const testimonials = ref([]);

const breakpoints = ref({
  // 700px and up
  800: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  // 1024 and up
  1350: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
})


// Użyj Composition API do załadowania opinii
const loadTestimonials = async () => {
    const folderPath = '/testimonials/';
    const siteData = useSiteData();
    const pages = siteData.value.frontmatterData;

    testimonials.value = pages
        .filter(page => page.path.startsWith(folderPath) && page.path !== folderPath)
        /* .slice(0, 5) */
        .map(page => ({
            path: page.path,
            slogan: page.frontmatter.slogan,
            author: page.frontmatter.author,
            category: page.frontmatter.category,
            content: page.frontmatter.content,
        }));
};

onMounted(() => {
    loadTestimonials();
});



</script>

<style></style>