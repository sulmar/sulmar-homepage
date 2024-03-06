<template>
  <div>
    <ParentNavbar />
    <div class="theme-default-content index-course">
      <h1>Rozwijaj swoje umiejętności programowania</h1>
      <div class="course-list">
        <div v-for="course in $pagination.pages" :key="course.key" @click="
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
          " class="course-card" :class=course.frontmatter.category>
          <div class="image-box" :style="{ 'background-image': 'url(' + course.frontmatter.image + ')' }">
          </div>

          <div class="course-box">
            <div class="course-title-and-tagline">
              <div class="title">{{ course.title }}</div>
              <p class="tagline">{{ course.frontmatter.tagline }}</p>
            </div>
            <!-- <div class="extra-info">
              <img src="/images/head-circle.jpg" alt="Avatar of course leader">
              <div class="text-holder text-sm">
                <p class="author text-gray-900">{{ course.frontmatter.author }} </p>
                <p class="some-info">Aug 18</p>
              </div>
            </div> -->
            <div class="extra-info">
              <span class="extra-info-item">{{ course.frontmatter.duration }} dni</span>
              <span class="extra-info-item">sth</span>
              <span class="extra-info-item">c#</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import ParentNavbar from '@theme/components/Navbar.vue'

export default {
  components: {
    ParentNavbar
  },
  name: 'IndexCourse'
}
</script>

<style></style>

