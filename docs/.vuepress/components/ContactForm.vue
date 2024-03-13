<template>
  <form @submit.prevent="submit">
    <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value" label="Imię i nazwisko"
      required></v-text-field>

    <v-text-field v-model="email.value.value" :counter="7" :error-messages="email.errorMessage.value" label="E-mail"
      required></v-text-field>

    <v-textarea v-model="content.value.value" :error-messages="content.errorMessage.value" label="Treść"
      required></v-textarea>

    <v-btn class="me-4" type="submit">
      Wyślij
    </v-btn>

    <div v-if="submittedSuccessfully" class="success-message">
      Dziękujemy! Twój formularz został wysłany.
    </div>
    <div v-if="submissionError" class="error-message">
      Ups! Wystąpił problem podczas wysyłania formularza.
    </div>

  </form>
</template>


<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 1) return true

      return 'To pole nie może być puste'
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Wpisz poprawny adres e-mail'
    },
    content(value) {
      if (value?.length >= 1) return true

      return 'To pole nie może być puste'
    }
  },
})

const name = useField('name')
const email = useField('email')
const content = useField('content')

const submittedSuccessfully = ref(false);
const submissionError = ref(false);


const submitForm = (values, {resetForm}) => {
  fetch('https://formspree.io/f/mpzvrblj', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Accept': 'application/json'
    }
  })
    .then((response) => {
      if (response.ok) {
        submittedSuccessfully.value = true;
        submissionError.value = false;
        resetForm();
        
      } else {
        throw new Error('Submission failed');
      }
    })
    .catch((error) => {
      submittedSuccessfully.value = false;
      submissionError.value = true;
      console.log(error);
    });
};

const submit = handleSubmit(submitForm)
</script>


