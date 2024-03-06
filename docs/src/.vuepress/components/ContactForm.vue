<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <validation-provider v-slot="{ errors }" name="name" rules="required">
        <v-text-field v-model="name" :error-messages="errors" label="Imię i nazwisko" required></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="email" rules="required|email">
        <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="text" rules="required">
        <v-textarea v-model="content" :error-messages="errors" label="Treść" required></v-textarea>
      </validation-provider>
      <v-btn class="mr-4" type="submit" :disabled="invalid">
        Wyślij
      </v-btn>
      <div v-if="submittedSuccessfully" class="success-message">
        Dziękujemy! Twój formularz został wysłany.
      </div>
      <div v-if="submissionError" class="error-message">
        Ups! Wystąpił problem podczas wysyłania formularza.
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: 'To pole nie może być puste',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: 'Nieprawidłowy adres email',
})

export default {
  name: 'ContactForm',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: '',
    email: '',
    content: '',
    submittedSuccessfully: false,
    submissionError: false
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();

      const formData = {
        name: this.name,
        email: this.email,
        content: this.content
      };

      fetch('https://formspree.io/f/mpzvrblj', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          this.submittedSuccessfully = true;
          this.submissionError = false;
          this.clear();
          console.log('form submitted')
        } else {
          this.submittedSuccessfully = false;
          this.submissionError = true;
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              console.log(data["errors"].map(error => error["message"]).join(", "))
            }
          })
        }
      }).catch(error => {
        this.submittedSuccessfully = false;
        this.submissionError = true;
      });

    }
    ,
    clear() {
      this.name = ''
      this.email = ''
      this.content = ''
      this.$refs.observer.reset()
    },
  },
}
</script>

<style>

</style>