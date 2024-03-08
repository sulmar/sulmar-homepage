<template>
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
    </div>
</template>

<script setup>
import { usePageFrontmatter } from '@vuepress/client'

// Używając `usePageFrontmatter`, możemy uzyskać dostęp do danych frontmatter aktualnej strony
const frontmatter = usePageFrontmatter()
import { watchEffect } from 'vue';

watchEffect(() => {
    console.log(frontmatter.value.title); // Teraz to będzie reagować na zmiany
});
</script>