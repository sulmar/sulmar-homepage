<template>
    <Navbar />
    <div class="course-layout">
        <h1>{{ frontmatter.title }}</h1>

        <section class="hero-course">
            <div class="hero-course-content">

                <!-- <v-container> -->
                <v-row no-gutters>

                    <v-col cols="12" sm="4" class="course-desc">
                        <h1>{{ frontmatter.title }}</h1>
                        <p>REDIS jest strukturą danych typu open-source trzymaną w pamięci, używana jako baza danych
                            NoSQL, pamięć podręczna lub broker wiadomości. Stosowana jest w rozwiązaniach gdzie wymagana
                            jest analiza w czasie rzeczywistym, gdyż zapewnia bardzo wysoką wydajność i niezawodność.
                        </p>
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
                <v-row no-gutters>

                    <v-col cols="12" sm="6">
                        <h2>Czego się nauczysz</h2>
                        <v-list>
                            <v-list-item v-for="outcome in outcomes" :key="outcome.title">
                                <v-list-item-icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                                        viewBox="0 0 50 50" fill="#257a1d">
                                        <path
                                            d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z">
                                        </path>
                                    </svg>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title v-text="outcome.title"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <div class="outcomes-img-holder">
                            <div class="outcomes-img"></div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>

            <v-container class="course-content">
                <h2>Program szkolenia</h2>
                <p>3 Dni . 15 Sekcji . 45 Tematów </p>
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
import { onMounted } from 'vue';
import { ref } from 'vue';
import { watchEffect } from 'vue';

const frontmatter = usePageFrontmatter()
watchEffect(() => {
    console.log(frontmatter.value.title); // Teraz to będzie reagować na zmiany
});




const outcomes = ref([
    { title: 'Confidently build front-end apps with React and TypeScript' },
    { title: 'Build reusable function components' },
    { title: 'Style your components using vanilla CSS, CSS modules, and CSS-in-JS' },
    { title: 'Use VSCode shortcuts to increase your productivity' },
    { title: 'Deploy your React apps' },
    { title: 'Write clean code like a pro' },
]);



onMounted(() => {
    const programElement = document.getElementById("program");
    const programList = programElement.children[0];
    const headers = programList.children;


    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener("click", function () {
            let content = this.children[0];

            content.classList.toggle("active");
            content.addEventListener("click", function (event) {
                event.stopPropagation(); // Zatrzymuje propagację kliknięcia w rozwijanej liście
            });

        });
    }
})

</script>