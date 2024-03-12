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
    /*  alias: {
       '@theme/HomeFooter.vue': path.resolve(
         __dirname,
         './components/Footer.vue',
       ),
     }, */
  }),

  head: [
    ['link', { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ['link', { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" }],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" }],
  ],

  plugins: [
    searchPlugin({
      // Plugin options https://ecosystem.vuejs.press/plugins/search.html
    }),
    registerComponentsPlugin({
      components: {
        Footer: path.resolve(__dirname, './components/Footer.vue'),
        //Navbar: path.resolve(__dirname, './components/Navbar.vue'),
        ContactForm: path.resolve(__dirname, './components/ContactForm.vue'),
        CoursesList: path.resolve(__dirname, './components/CoursesList.vue'),
        /* Experiment: path.resolve(__dirname, './components/Experiment.vue'), */
      }
    }),
    /* {
      name: 'load-global-data',
      async onGenerated(app) {
        
        const globalData = app.pages.map(page => ({
          path: page.path,
          frontmatter: page.frontmatter,
        }));
        console.log(globalData)

        const dataPath = path.resolve(app.dir.public(), 'globalData.json');
        fs.writeFileSync(dataPath, JSON.stringify(globalData));
      },
    }, */

    { 
      //CODE HERE - użyć właściwości pages --> https://v2.vuepress.vuejs.org/reference/node-api.html#pages
      name: 'pages-modifier-plugin',
      onInitialized: async (app) => {
        // Dostęp do właściwości pages
        const pages = app.pages;

        // Przykład iteracji po wszystkich stronach
        pages.forEach(page => {
          console.log(page.path); // Wyświetlanie ścieżki każdej strony

          // Możesz modyfikować strony tutaj, na przykład dodając własne metadane
          page.frontmatter.customData = "This is custom data added by my plugin";
        });

        // Możesz również dodawać, modyfikować lub usuwać strony
        // Pamiętaj jednak, że bezpośrednia modyfikacja `app.pages` może być zaawansowana i wymagać dodatkowej ostrożności
      }
    },
  ],
  bundler: webpackBundler(),
})
