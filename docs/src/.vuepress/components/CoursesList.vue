<template>
  <div>
    <div class="theme-default-content course-list home-list">

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
        <div class="image-box" :style="{ 'background-image': 'url(' + course.image + ')' }">
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
</template>

<script>
export default {
  name: 'CoursesList',
  data() {
    return {
      courses: []
    };
  },
  mounted() {
    this.loadCourses();
  },
  methods: {
    async loadCourses() {
      const folderPath = '/courses/';
      const { pages } = this.$site;
      this.courses = pages
        .filter(page => page.path.startsWith('/courses/') && page.path !== folderPath)
        //.slice(0, 6)
        .map(page => ({
          path: page.path,
          title: page.title,
          tagline: page.frontmatter.tagline,
          category: page.frontmatter.category,
          image: page.frontmatter.image,
          duration: page.frontmatter.duration,
        }));
    }
  }
};
</script>

<style>

</style>