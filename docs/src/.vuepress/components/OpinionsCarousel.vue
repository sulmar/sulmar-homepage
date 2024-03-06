<template>
    <div style="width: 100%; display:block; margin:0 auto;" class="carousel-holder">

        <carousel :paginationEnabled="false" :perPageCustom="[[100, 1], [770, 2], [990, 3]]" :scrollPerPage="false"
            :center-mode="true" :autoplay="true" :speed="700" :autoplayTimeout="5000" :loop="true"
            :navigationEnabled="true">

            <slide v-for="testimonial in testimonials" :key="testimonial.path" class="course-cell"
                :class=testimonial.category>
                <div class="cell-box">
                    <div class="cell-header">
                        <img src="/icons/stars.svg">
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
                        <p>“{{ testimonial.content }}”</p>
                    </div>
                    <div class="person-box">
                        <img src="/images/head-circle.jpg">
                        <div class="person-holder">
                            <h3>{{ testimonial.author }}</h3>
                            <p>Uczestnik {{ testimonial.category }}</p>
                        </div>
                    </div>
                </div>
            </slide>

        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'OpinionsCarousel',
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            testimonials: []
        };
    },
    mounted() {
        this.loadTestimonials();
    },
    methods: {
        async loadTestimonials() {
            const folderPath = '/testimonials/';
            const { pages } = this.$site;
            this.testimonials = pages
                .filter(page => page.path.startsWith(folderPath) && page.path !== folderPath)
                /* .slice(0, 5) */
                .map(page => ({
                    path: page.path,
                    slogan: page.frontmatter.slogan,
                    author: page.frontmatter.author,
                    category: page.frontmatter.category,
                    content: page.frontmatter.content,
                }));
        }
    }
}
</script>

<style>

</style>