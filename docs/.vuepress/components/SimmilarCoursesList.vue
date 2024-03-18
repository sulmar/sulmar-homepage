<template>
    <div>
        <div class="simmilar-courses-holder" v-if="courses && courses.length > 0">
            <h2>Podobne szkolenia</h2>

            <div class="theme-default-content course-list simmilar-courses">
                <div v-for="course in courses" :key="course.path" @click="
            $router.push(`${course.path}`).catch((err) => {
                if (
                    err.name !== 'NavigationDuplicated' &&
                    !err.message.includes(
                        'Avoided redundant navigation to current location'
                    )
                ) {
                    console.log(err);
                }
            })
            " class="course-card" :class=course.category>
                    <div class="image-box" :style="backgroundImage_withBase(course.image)">
                    </div>

                    <div class="course-box">
                        <div class="course-title-and-tagline">
                            <div class="title">{{ course.title }}</div>
                            <p class="tagline">{{ course.tagline }}</p>
                        </div>
                        <div class="extra-info">
                            <span class="extra-info-item">{{ course.duration }} dni</span>
                            <span class="extra-info-item">sth</span>
                            <span class="extra-info-item">c#</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

import { useSiteData, withBase } from '@vuepress/client';
import { onMounted, ref } from 'vue';

const props = defineProps({
    currentPage: Object,
});


const courses = ref([]);
const siteData = useSiteData();

async function loadCourses() {
    const folderPath = '/courses/';
    const pages = siteData.value.frontmatterData;
    const currentCategory = props.currentPage.frontmatter.category;
    const currentTitle = props.currentPage.title;
    console.log(currentTitle);

    courses.value = pages
        .filter(page =>
            page.path.startsWith('/courses/') &&
            page.path !== folderPath &&
            page.frontmatter.category.includes(currentCategory) &&
            page.frontmatter.title !== currentTitle)
        .map(page => ({
            path: page.path,
            title: page.frontmatter.title,
            tagline: page.frontmatter.tagline,
            category: page.frontmatter.category,
            image: page.frontmatter.image,
            duration: page.frontmatter.duration,
        }));
}

function backgroundImage_withBase(imagePath) {

    const backgroundImageUrl = withBase(imagePath);
    return { 'background-image': `url(${backgroundImageUrl})` };
}

onMounted(() => {
    loadCourses();
});
</script>

<style></style>