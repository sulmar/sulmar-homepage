<template>
  <div id="global-layout">
    <component :is="layout"/>
    <Footer />
  </div>
</template>

<script>
import Footer from "../global-components/Footer.vue"

export default {
  components:{
    Footer
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>