import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path, fs } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/sulmar-homepage/',
  lang: 'en-US',

  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: '/icons/sulmar_logo_vector.svg',
    logoDark: '/icons/sulmar_logo_vector_dark_mode.svg',
    navbar: [
      {
        text: 'Szkolenia',
        link: '/#courses',
      },
      {
        text: 'O mnie',
        link: '/#trainer',
      },
      {
        text: 'Kontakt',
        link: '/#contact',
      },
      {
        text: '',
        link: 'https://github.com/sulmar',
      }
    ],
    sidebar: [],
  }),

  head: [
    ['link', { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ['link', { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" }],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" }],
    ['link', { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" }]
  ],

  plugins: [
    searchPlugin({
      // Plugin options https://ecosystem.vuejs.press/plugins/search.html
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
    registerComponentsPlugin({
      components: {
        Footer: path.resolve(__dirname, './components/Footer.vue'),
        ContactForm: path.resolve(__dirname, './components/ContactForm.vue'),
        CoursesList: path.resolve(__dirname, './components/CoursesList.vue'),
        OpinionsCarousel: path.resolve(__dirname, './components/OpinionsCarousel.vue'),
        SimmilarCoursesList: path.resolve(__dirname, './components/SimmilarCoursesList.vue'),
      }
    }),
    {
      //Using "pages" --> https://v2.vuepress.vuejs.org/reference/node-api.html#pages
      name: 'frontmatter-global-state',
      onInitialized: async (app) => {
        // Dostęp do właściwości pages
        const pages = app.pages;

        const pagesArray = pages.map(page => {

          if (page.frontmatter) { return { path: page.path, frontmatter: page.frontmatter } }
          else { return null }

        }).filter(page => page !== null);

        app.siteData.frontmatterData = pagesArray;
      }
    },
  ],
  bundler: webpackBundler(),
})
