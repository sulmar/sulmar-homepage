<template>
  <div class="home">

    <section class="hero">
      <div class="hero-content">
        <v-row no-gutters>
          <v-col cols="12" sm="8">
          </v-col>
          <v-col cols="12" sm="4">
            <h1>Szkolenia dla programistów</h1>
            <p>Trudne rzeczy w łatwy sposób</p>

          </v-col>
        </v-row>
      </div>
      <v-btn rounded x-large outlined @click="scrollToSection" class="hero-btn">Zamów szkolenie</v-btn>
    </section>

    <section id="courses" class="courses">

      <v-container class="container">

        <header>
          <p class="sm-title">Najczęście wybierane szkolenia</p>
          <h2>Szlifuj swoje umiejętności programistyczne</h2>
          <p> Dzięki naszym kursom Twój zespół będzie wymiatał. Do tego szkolenie będzie bez powerpointa. Cenna
            wiedza i doświadczenie w miłej postaci. Lorem ipsum... </p>
        </header>

        <CoursesList />
        <v-btn rounded x-large outlined class="link-btn" @click="toggleExpansion">
          {{ isExpanded ? 'Mniej kursów' : 'Wszystkie kursy' }}
        </v-btn>
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
              <p>Wykształcenie: mgr informatyki Absolwent Uniwersytet A. Mickiewicza w Poznaniu, Wydział Matematyki i
                Informatyki Doświadczenie: 20+ lat Rozwiązania m.in. dla logistyki, monitoringu pojazdów z użyciem .NET i
                Crystal Reports. Tworzę rozwiązania dla swoich klientów a zdobytym doświadczeniem dzielę się na
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

    <section class="testimonials">

      <v-container class="container">
        <header>
          <p class="sm-title">Rekomendacje</p>
          <h2>Zobacz opinie uczestników</h2>
        </header>
      </v-container>

      <OpinionsCarousel />
    </section>

    <section class="cta-section">

      <v-container class="cta-content">
        <div class="cta-description">
          <h2>Chcesz skorzystać z oferty?</h2>
          <p>Napisz do nas, aby omówić szkolenie dla Twojej firmy. Daj nam znać, czego potrzebuje Twój zespół i w jaki
            sposób możemy Ci pomóc w osiągnięciu celów.</p>
        </div>

        <v-container class="contact-items-container">
          <div class="contact-item">
            <img src="/icons/skype.svg" alt="Location Icon">
            <p>Skype</p>
          </div>
          <div class="contact-item">
            <img src="/icons/email.svg" alt="Email Icon">
            <p>info@twojastrona.com</p>
          </div>
          <div class="contact-item">
            <img src="/icons/phone.svg" alt="Phone Icon">
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

    <section class="address">
      <v-container>
        <div class="map-holder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.5440269361784!2d20.945383390646306!3d52.24178425774494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb0cd91e5319%3A0xed8d6f9f4ad39be9!2sErazma%20Cio%C5%82ka%2010%2C%2001-402%20Warszawa!5e0!3m2!1spl!2spl!4v1683125894187!5m2!1spl!2spl"
            width="100%" height="100%" style="border: 0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </v-container>

    </section>


  </div>
</template>

<script>
import CoursesList from "../../components/CoursesList.vue";
import OpinionsCarousel from "../../components/OpinionsCarousel.vue"
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

export default {
  components: {
    CoursesList,
    OpinionsCarousel
  },
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    scrollToSection() {
      this.$scrollTo('#courses', 700, { easing: 'easeInOutQuad' });
    },
    toggleExpansion() {
      this.isExpanded = !this.isExpanded;
      let content = this.$el.querySelector(".home-list");
      if (content) {
        content.classList.toggle("expanded");
      }   
    }
  },
}

</script>