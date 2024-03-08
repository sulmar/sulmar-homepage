<template>
    <div class="course-layout">
        <h1>{{frontmatter.title}}</h1>
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