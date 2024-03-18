<template>
    <Navbar />
    <div class="course-layout" :class="frontmatter.category">
        <h1>{{ frontmatter.title }}</h1>

        <section class="hero-course">
            <div class="hero-course-content">

                <!-- <v-container> -->
                <v-row no-gutters>

                    <v-col cols="12" sm="4" class="course-desc">
                        <h1>{{ frontmatter.title }}</h1>


                        <div class="hero-details">
                            <div class="detail-holder">

                                <div v-if="frontmatter.difficulty == 1" class="level-holder">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="9" y="7" width="2.5" height="10" fill="#8F8F99"></rect>
                                        <rect x="3.5" y="11" width="2.5" height="6" fill="#FAFAFA"></rect>
                                        <rect x="14.5" y="3" width="2.5" height="14" fill="#8F8F99"></rect>
                                    </svg>
                                    <p>Początkujący</p>
                                </div>

                                <div v-if="frontmatter.difficulty == 2" class="level-holder">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="9" y="7" width="2.5" height="10" fill="#FAFAFA"></rect>
                                        <rect x="3.5" y="11" width="2.5" height="6" fill="#FAFAFA"></rect>
                                        <rect x="14.5" y="3" width="2.5" height="14" fill="#8F8F99"></rect>
                                    </svg>
                                    <p>Średnio-zaawansowany</p>
                                </div>

                                <div v-if="frontmatter.difficulty == 3" class="level-holder">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="9" y="7" width="2.5" height="10" fill="#FAFAFA"></rect>
                                        <rect x="3.5" y="11" width="2.5" height="6" fill="#FAFAFA"></rect>
                                        <rect x="14.5" y="3" width="2.5" height="14" fill="#FAFAFA"></rect>
                                    </svg>
                                    <p>Zaawansowany</p>
                                </div>


                            </div>
                            <div class="detail-holder">
                                <v-icon icon="mdi-text-box-outline" size="x-small" color="white"></v-icon>
                                <p>10 Lekcji</p>
                            </div>
                            <div class="detail-holder">
                                <v-icon icon="mdi-clock-outline" size="x-small" color="white"></v-icon>
                                <p>20 godzin</p>
                            </div>
                            <div class="detail-holder">
                                <v-icon icon="mdi-medal-outline" size="x-small" color="white"></v-icon>
                                <p>Certyfiktat ukończenia</p>
                            </div>
                        </div>


                    </v-col>
                    <v-col cols="12" sm="8">
                        <div class="hero-img-holder">
                            <!-- <img src="/images/screen.png" alt=""> -->
                        </div>
                    </v-col>

                </v-row>
                <!-- </v-container> -->
            </div>
        </section>

        <section class="learning-outcomes">
            <v-container>
                <h2>Czego się nauczysz</h2>
                <v-row>

                    <v-col cols="12" sm="6">
                        <ul>
                            <li v-for="(outcome, index) in outcomes_firstHalf" :key="'outcome1-' + index">
                                <v-icon color="info" icon="mdi-check" size="small"></v-icon>
                                <div>{{ outcome }}</div>
                            </li>
                        </ul>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <ul>
                            <li v-for="(outcome, index) in outcomes_secondHalf" :key="'outcome2-' + index">
                                <v-icon color="info" icon="mdi-check" size="small"></v-icon>
                                <div>{{ outcome }}</div>
                            </li>
                        </ul>
                    </v-col>

                </v-row>
            </v-container>
        </section>

        <section class="overview">
            <v-container>
                <h2>Course overview</h2>
                <p>{{ frontmatter.description }}</p>
            </v-container>
        </section>

        <section class="curriculum">

            <v-container class="course-content">
                <h2>Program szkolenia</h2>
                <p>3 Dni</p>
                <Content id="program" />
            </v-container>

        </section>

        <section class="trainer">
            <v-container class="trainer-content">

                <v-row>
                    <v-col>
                        <div class="trainer-img-holder">
                            <div class="trainer-img">
                            </div>
                        </div>
                    </v-col>

                    <v-col>
                        <p class="short">Prowadzący</p>
                        <h2>Marcin Sulecki</h2>
                        <div class="trainer-description">
                            <p>Wykształcenie: mgr informatyki Absolwent Uniwersytet A. Mickiewicza w Poznaniu, Wydział
                                Matematyki i
                                Informatyki Doświadczenie: 20+ lat Rozwiązania m.in. dla logistyki, monitoringu pojazdów
                                z użyciem .NET i
                                Crystal Reports. Tworzę rozwiązania dla swoich klientów a zdobytym doświadczeniem dzielę
                                się na
                                szkoleniach.
                            </p>
                        </div>
                    </v-col>
                </v-row>

            </v-container>
            <v-container class="counters-container">
                <div class="counter">
                    <h2>25+</h2>
                    <p>Lat doświadczenia</p>
                </div>
                <div class="counter">
                    <h2>300</h2>
                    <p>Przeprowadzonych szkoleń</p>
                </div>
                <div class="counter">
                    <h2>1000+</h2>
                    <p>Uczestników</p>
                </div>
                <div class="counter">
                    <h2>100</h2>
                    <p>Godzin konsultacji</p>
                </div>
            </v-container>

        </section>

        <section class="cta-section">

            <v-container class="cta-content">
                <div class="cta-description">
                    <h2>Chcesz skorzystać z oferty?</h2>
                    <p>Napisz do nas, aby omówić szkolenie dla Twojej firmy. Daj nam znać, czego potrzebuje Twój zespół
                        i w jaki sposób możemy Ci pomóc w osiągnięciu celów.</p>
                </div>

                <v-container class="contact-items-container">
                    <!-- ICONS CREATED WITH https://www.svgrepo.com/svg/513450/location-pin?edit=true -->
                    <div class="contact-item">
                        <img :src="$withBase('/icons/skype.svg')" alt="Location Icon">
                        <p>Skype</p>
                    </div>
                    <div class="contact-item">
                        <img :src="$withBase('/icons/email.svg')" alt="Email Icon">
                        <p>info@twojastrona.com</p>
                    </div>
                    <div class="contact-item">
                        <img :src="$withBase('/icons/phone.svg')" alt="Phone Icon">
                        <p>+48 123 456 789</p>
                    </div>
                </v-container>

                <v-row no-gutters class="form-holder">
                    <v-col cols="12" sm="8">
                        <ContactForm />
                    </v-col>
                    <v-col cols="12" sm="4">
                        <div class="form-img">
                        </div>
                    </v-col>
                </v-row>

            </v-container>
        </section>

        <section class="suggested-courses">
            <SimmilarCoursesList :currentPage="$page" />
        </section>


        <Footer />

    </div>
</template>

<script setup>
import { usePageFrontmatter } from '@vuepress/client'
import Navbar from '@theme/Navbar.vue'
import { onMounted, computed } from 'vue';
import { watchEffect } from 'vue';

const frontmatter = usePageFrontmatter()

//Outcomes slicing into two lists
const outcomes_firstHalf = computed(() => frontmatter.value.outcomes.slice(0, 3));
const outcomes_secondHalf = computed(() => frontmatter.value.outcomes.slice(3, 6));


/* watchEffect(() => {
    console.log(frontmatter.value.outcomes);
}); */


onMounted(() => {
    const programElement = document.getElementById("program");
    const programList = programElement.children[0];
    const headers = programList.children;


    for (let i = 0; i < headers.length; i++) {

        const svgIcon = '<svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>'

        headers[i].insertAdjacentHTML('beforeend', svgIcon);

        headers[i].addEventListener("click", function () {
            let content = this.children[0];
            const icon = this.querySelector('.chevron-icon');

            content.classList.toggle("active");
            icon.style.transform = content.classList.contains("active") ? 'rotate(180deg)' : 'rotate(0deg)';

            content.addEventListener("click", function (event) {
                event.stopPropagation(); // Zatrzymuje propagację kliknięcia w rozwijanej liście
            });
        });

        //Adding custom icons to the list
        const topics = headers[i].children;
        //copy reference to children
        let children = Array.from(topics[0].children);

        for (let li of children) {

            let contentDiv = document.createElement('div');
            contentDiv.classList.add("topic");
            // Move li content to new div
            while (li.firstChild) {
                contentDiv.appendChild(li.firstChild);
            }

            let iconDiv = document.createElement('div');
            iconDiv.classList.add("list-icon");

            li.appendChild(iconDiv);
            li.appendChild(contentDiv);
        }
    }
})

</script>